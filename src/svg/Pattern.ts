import {SVGItem} from "./SVGItem";
import {TNSCanvas} from "../TNSCanvas";
import {AddChildFromBuilder, PercentLength, View} from "@nativescript/core/ui/core/view";
import {SVG} from "./SVG";

export class Pattern extends SVGItem implements AddChildFromBuilder {
    _pattern: TNSCanvas;
    _views: any[];

    constructor() {
        super();
        this._pattern = new TNSCanvas();
        this._views = [];
    }

    set width(value) {
        (this._pattern as any).width = value;
        this.style.width = value;
    }

    get width() {
        return this.style.width;
    }

    get height() {
        return this.style.height;
    }

    set height(value) {
        (this._pattern as any).height = value;
        this.style.height = value;
    }

    _addChildFromBuilder(name: string, value: any): void {
        value.parent = this;
        value._canvas = this._canvas;
        this._views.push(value);
        this._appendChild(value.id || value._domId, value);
    }

    _getFillOrStrokeStyle() {
        const canvas = new TNSCanvas();
        canvas._isCustom = true;
        let svg = this.parent;
        while (!(svg instanceof SVG)) {
            svg = svg.parent;
        }
        const height = svg.getMeasuredHeight() || 0;
        const width = svg.getMeasuredWidth() || 0;
        let w;
        let h;
        if (this.width && (this as any).width.unit === '%') {
            w = PercentLength.convertToString(this.width);
        }
        if (this.height && (this as any).height.unit === '%') {
            h = PercentLength.convertToString(this.height);
        }
        if (typeof this.width === 'string') {
            w = this.width;
        }

        if (typeof this.height === 'string') {
            h = this.height;
        }

        if (typeof this.width === 'number') {
            w = this.width;
        }


        if (typeof this.height === 'number') {
            h = this.height;
        }

        if (typeof w === 'string' && (w.indexOf('%') > -1)) {
            canvas.width = (width * (parseInt(w.replace('%', '')) / 100));
        } else if (typeof w === 'number') {
            canvas.width = w;
        }
        if (typeof h === 'string' && (h.indexOf('%') > -1)) {
            canvas.height = (height * (parseInt(h.replace('%', '')) / 100));
        } else if (typeof this.height === 'number') {
            canvas.height = this.height;
        }
        this._views.forEach((view) => {
            view.handleValues(canvas);
        });

        return canvas;
    }
}