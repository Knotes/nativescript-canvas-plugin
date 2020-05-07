import { TNSPath2DBase } from './canvas-plugin.common';
import { TNSDOMMatrix } from './TNSDOMMatrix';

export class TNSPath2D extends TNSPath2DBase {
    constructor(instance: any) {
        super(instance);
    }

    addPath(path: TNSPath2D, transform?: TNSDOMMatrix): void {
        if (transform) {
            this.nativeInstance.addPath(path.nativeInstance, transform.native);
        } else {
            this.nativeInstance.addPath(path.nativeInstance, null);
        }
    }

    arc(x: number, y: number, radius: number, startAngle: number, endAngle: number, anticlockwise: boolean = false): void {
        this.nativeInstance.arc(x, y, radius, startAngle, endAngle, anticlockwise);
    }

    arcTo(x1: number, y1: number, x2: number, y2: number, radius: number): void {
        this.nativeInstance.arcTo(x1, y1, x2, y2, radius);
    }

    bezierCurveTo(cp1x: number, cp1y: number, cp2x: number, cp2y: number, x: number, y: number): void {
        this.nativeInstance.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y);
    }

    closePath(): void {
        this.nativeInstance.closePath();
    }

    ellipse(x: number, y: number, radiusX: number, radiusY: number, rotation: number, startAngle: number, endAngle: number, anticlockwise: boolean = false): void {
        this.nativeInstance.ellipse(x, y, radiusX, radiusY, rotation, startAngle, endAngle, anticlockwise);
    }

    lineTo(x: number, y: number): void {
        this.nativeInstance.lineTo(x, y);
    }

    moveTo(x: number, y: number): void {
        this.nativeInstance.moveTo(x, y);
    }

    quadraticCurveTo(cpx: number, cpy: number, x: number, y: number): void {
        this.nativeInstance.quadraticCurveTo(cpx, cpy, x, y);
    }

    rect(x: number, y: number, width: number, height: number): void {
        this.nativeInstance.rect(x, y, width, height);
    }
}
