import {AddChildFromBuilder, Property, View} from "@nativescript/core/ui/core/view";
import {TNSCanvas} from "../TNSCanvas";
import {TNSCanvasRenderingContext2D} from "../TNSCanvasRenderingContext2D";
import {SVGItem} from "./SVGItem";
import {SVG} from "./SVG";
import {Symbol} from './Symbol';

export class G extends SVGItem implements AddChildFromBuilder {
    _canvas: TNSCanvas;
    _views: any[];
    transform: string;
    x: any;
    y: any;

    constructor() {
        super();
        this._views = [];
    }

    _addChildFromBuilder(name: string, value: any): void {
        value._canvas = this._canvas;
        value.parent = this;
        this._views.push(value);
        this._appendChild(value.id || value._domId, value);
    }

    handleValues() {
        const ctx = this._canvas.getContext('2d') as TNSCanvasRenderingContext2D;
        ctx.save();
        if (typeof this.transform === 'string') {
            // TODO use regex
            const matrix = this.transform.replace('matrix(', '')
                .replace('(', '')
                .split(',')
                .map(value => {
                    const val = parseFloat(value);
                    if (isNaN(val)) {
                        return 0;
                    }
                    return val;
                });
            ctx.transform(matrix[0], matrix[1], matrix[2], matrix[3], matrix[4], matrix[5]);
        }

        const updateColors = () => {
            if (this._doStroke()) {
                ctx.strokeStyle = this.stroke;
            }
            if (this._doFill()) {
                if (this.fill === undefined) {
                    ctx.fillStyle = 'black';
                } else {
                    ctx.fillStyle = this.fill;
                }
            }
        };
        this._views.forEach(view => {
            if (typeof view.handleValues === 'function') {
                updateColors();
                ctx.globalAlpha = this.opacity;
                view.handleValues();
            } else if (view instanceof G) {
                view._views.forEach((view) => {
                    updateColors();
                    view.handleValues();
                });
            }
        });
        ctx.restore();
    }
}