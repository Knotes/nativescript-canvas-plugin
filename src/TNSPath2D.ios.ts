import {TNSPath2DBase} from './canvas-plugin.common';
import {TNSDOMMatrix} from './TNSDOMMatrix';

declare let CanvasPath2D;

export class TNSPath2D extends TNSPath2DBase {
    constructor(instance?: any) {
        let nativeInstance;
        if (typeof instance === 'string') {
            nativeInstance = CanvasPath2D.alloc().initWithData(instance);
        } else if (instance instanceof TNSPath2D) {
            nativeInstance = CanvasPath2D.alloc().initWithPath(instance.native);
        } else if (instance instanceof CanvasPath2D) {
            nativeInstance = CanvasPath2D.alloc().initWithPath(instance);
        } else {
            nativeInstance = CanvasPath2D.new();
        }
        super(nativeInstance);
    }

    addPath(path: TNSPath2D, transform?: TNSDOMMatrix): void {
        if (transform) {
            this.nativeInstance.addPathWithPathTransform(
                path.nativeInstance,
                transform.native
            );
        } else {
            this.nativeInstance.addPathWithPath(path.nativeInstance);
        }
    }

    arc(
        x: number,
        y: number,
        radius: number,
        startAngle: number,
        endAngle: number,
        anticlockwise: boolean = false
    ): void {
        this.nativeInstance.arcWithXYRadiusStartAngleEndAngleAnticlockwise(
            x,
            y,
            radius,
            startAngle,
            endAngle,
            anticlockwise
        );
    }

    arcTo(x1: number, y1: number, x2: number, y2: number, radius: number): void {
        this.nativeInstance.arcToX1Y1X2Y2Radius(x1, y1, x2, y2, radius);
    }

    bezierCurveTo(
        cp1x: number,
        cp1y: number,
        cp2x: number,
        cp2y: number,
        x: number,
        y: number
    ): void {
        this.nativeInstance.bezierCurveToCp1xCp1yCp2xCp2yXY(
            cp1x,
            cp1y,
            cp2x,
            cp2y,
            x,
            y
        );
    }

    closePath(): void {
        this.nativeInstance.closePath();
    }

    ellipse(
        x: number,
        y: number,
        radiusX: number,
        radiusY: number,
        rotation: number,
        startAngle: number,
        endAngle: number,
        anticlockwise: boolean = false
    ): void {
        this.nativeInstance.ellipseWithXYRadiusXRadiusYRotationStartAngleEndAngleAnticlockwise(
            x,
            y,
            radiusX,
            radiusY,
            rotation,
            startAngle,
            endAngle,
            anticlockwise
        );
    }

    lineTo(x: number, y: number): void {
        this.nativeInstance.lineToXY(x, y);
    }

    moveTo(x: number, y: number): void {
        this.nativeInstance.moveToXY(x, y);
    }

    quadraticCurveTo(cpx: number, cpy: number, x: number, y: number): void {
        this.nativeInstance.quadraticCurveToCpxCpyXY(cpx, cpy, x, y);
    }

    rect(x: number, y: number, width: number, height: number): void {
        this.nativeInstance.rectWithXYWidthHeight(x, y, width, height);
    }
}
