import {TNSDOMMatrix} from './TNSDOMMatrix';
import {TNSCanvasBase} from './canvas-plugin.common';
import {TNSCanvasRenderingContext2D} from './TNSCanvasRenderingContext2D';
import {TNSWebGLRenderingContext} from './TNSWebGLRenderingContext';
import {TNSWebGL2RenderingContext} from './TNSWebGL2RenderingContext';
import * as app from '@nativescript/core/application';

declare var com;

export function createSVGMatrix(): TNSDOMMatrix {
    return new TNSDOMMatrix(
        com.github.triniwiz.canvas.CanvasView.createSVGMatrix()
    );
}

export * from './canvas-plugin.common';

export class TNSCanvas extends TNSCanvasBase {
    _ready = false;
    private _2dContext: TNSCanvasRenderingContext2D;
    private _webglContext: TNSWebGLRenderingContext;
    private _webgl2Context: TNSWebGL2RenderingContext;
    private _canvas;
    private _didPause: boolean = false;

    constructor() {
        super();
        const activity =
            app.android.foregroundActivity || app.android.startActivity;
        this._canvas = new com.github.triniwiz.canvas.CanvasView(activity, false);
    }

    get android() {
        return this._canvas;
    }

    get clientWidth() {
        return this.width;
    }

    get clientHeight() {
        return this.height;
    }

    get width() {
        if (this.getMeasuredWidth() > 0) {
            return this.getMeasuredWidth();
        }
        const width = this._canvas.getWidth();
        if (width === 0) {
            let rootParams = this._canvas.getLayoutParams();
            if (rootParams) {
                return rootParams.width;
            }
        }
        return width;
    }

    set width(value) {
        this.style.width = value;
        if (this._isCustom) {
            this._layoutNative();
        }
    }

    get height() {
        if (this.getMeasuredHeight() > 0) {
            return this.getMeasuredHeight();
        }
        const height = this._canvas.getHeight();
        if (height === 0) {
            let rootParams = this._canvas.getLayoutParams();
            if (rootParams) {
                return rootParams.height;
            }
        }
        return height;
    }

    set height(value) {
        this.style.height = value;
        if (this._isCustom) {
            this._layoutNative();
        }
    }

    static createCustomView() {
        const canvas = new TNSCanvas();
        canvas._isCustom = true;
        canvas.width = 300;
        canvas.height = 150;
        return canvas;
    }

    createNativeView() {
        return this._canvas;
    }

    initNativeView(): void {
        super.initNativeView();
        const ref = new WeakRef(this);
        this._canvas.setListener(
            new com.github.triniwiz.canvas.CanvasView.Listener({
                contextReady() {
                    const owner = ref.get() as any;
                    if (owner && !owner._ready) {
                        owner._ready = true;
                        owner._readyEvent();
                    }
                },
            })
        );
    }

    onUnloaded() {
        this._didPause = true;
        if (this._canvas) {
            this._canvas.onPause();
        }
        super.onUnloaded();
    }

    onLoaded() {
        super.onLoaded();
        if (this._didPause) {
            this._didPause = false;
            if (this._canvas) {
                this._canvas.onResume();
            }
        }
    }

    flush() {
        if (this._didPause) {
            return;
        }
        this._canvas.flush();
    }

    disposeNativeView(): void {
        this.off('touch, pan', this._touchEvents);
        super.disposeNativeView();
    }

    toDataURL(type = 'png', encoderOptions = 0.92) {
        return this.android.toDataURL(type, encoderOptions);
    }

    _layoutNative() {
        if (!this.parent) {
            if (
                (typeof this.width === 'string' && this.width.indexOf('%')) ||
                (typeof this.height === 'string' && this.height.indexOf('%'))
            ) {
                return;
            }
            if (!this._isCustom) {
                return;
            }

            const size = this._realSize;
            let rootParams = this._canvas.getLayoutParams();

            if (
                rootParams &&
                (size.width || 0) === rootParams.width &&
                (size.height || 0) === rootParams.height
            ) {
                return;
            }

            if ((size.width || 0) !== 0 && (size.height || 0) !== 0) {
                if (!rootParams) {
                    rootParams = new android.widget.FrameLayout.LayoutParams(0, 0);
                }
                rootParams.width = size.width;
                rootParams.height = size.height;
                let surfaceParams = this._canvas.getSurface().getLayoutParams();
                if (!surfaceParams) {
                    surfaceParams = new android.widget.FrameLayout.LayoutParams(0, 0);
                }
                surfaceParams.width = size.width;
                surfaceParams.height = size.height;

                this._canvas.setLayoutParams(rootParams);
                this._canvas.getSurface().setLayoutParams(surfaceParams);

                const w = android.view.View.MeasureSpec.makeMeasureSpec(
                    size.width,
                    android.view.View.MeasureSpec.EXACTLY
                );
                const h = android.view.View.MeasureSpec.makeMeasureSpec(
                    size.height,
                    android.view.View.MeasureSpec.EXACTLY
                );
                this._canvas.measure(w, h);
                this._canvas.layout(0, 0, size.width || 0, size.height || 0);
            }
        }
    }

    getContext(
        type: string,
        options?: any
    ):
        | TNSCanvasRenderingContext2D
        | TNSWebGLRenderingContext
        | TNSWebGL2RenderingContext
        | null {
        const glOpts = Object.assign({}, {
            alpha: true,
            antialias: true,
            depth: true,
            failIfMajorPerformanceCaveat: false,
            powerPreference: "default",
            premultipliedAlpha: true,
            preserveDrawingBuffer: false,
            stencil: false,
            desynchronized: false
        }, options || {});
        const canvasOpts = Object.assign({}, {
            alpha: true
        }, options || {});
        const getNativeOptions = (options) => {
            const opts = new java.util.HashMap();
            Object.keys(options).forEach((key) => {
                const val = options[key];
                if (typeof val === "boolean") {
                    opts.put(key, java.lang.Boolean.valueOf(String(val)));
                } else {
                    opts.put(key, val);
                }
            });
            return opts;
        };
        if (typeof type === 'string') {
            if (type === '2d') {
                if (this._webglContext || this._webgl2Context) {
                    return null;
                }
                if (!this._2dContext) {
                    this._2dContext = new TNSCanvasRenderingContext2D(
                        this._canvas.getContext(type, getNativeOptions(canvasOpts))
                    );
                    this._2dContext._canvas = this;
                } else {
                    this._canvas.getContext(type, getNativeOptions(canvasOpts));
                }
                this._2dContext._type = '2d';
                return this._2dContext;
            } else if (type === 'webgl' || type === 'experimental-webgl') {
                if (this._2dContext || this._webgl2Context) {
                    return null;
                }
                if (!this._webglContext) {
                    this._webglContext = new TNSWebGLRenderingContext(
                        this._canvas.getContext('webgl', getNativeOptions(glOpts))
                    );
                    this._webglContext._canvas = this;
                } else {
                    this._canvas.getContext('webgl', getNativeOptions(glOpts));
                }
                this._webglContext._type = 'webgl';
                return this._webglContext;
            } else if (
                type &&
                (type === 'webgl2' || type === 'experimental-webgl2')
            ) {
                if (this._2dContext || this._webglContext) {
                    return null;
                }
                if (!this._webgl2Context) {
                    this._webgl2Context = new TNSWebGL2RenderingContext(
                        this.android.getContext('webgl2', getNativeOptions(glOpts))
                    );
                    this._webgl2Context._canvas = this;
                } else {
                    this.android.getContext('webgl2', getNativeOptions(glOpts));
                }
                this._webgl2Context._type = 'webgl2';
                return this._webgl2Context;
            }
        }
        return null;
    }

    getBoundingClientRect(): {
        x: number;
        y: number;
        width: number;
        height: number;
        top: number;
        right: number;
        bottom: number;
        left: number;
    } {
        const view = this;
        const nativeView = view.android;
        const width = this.width;
        const height = this.height;
        return {
            bottom: nativeView.getBottom(),
            height: height,
            left: nativeView.getLeft(),
            right: nativeView.getRight(),
            top: nativeView.getTop(),
            width: width,
            x: nativeView.getX(),
            y: nativeView.getY(),
        };
    }
}
