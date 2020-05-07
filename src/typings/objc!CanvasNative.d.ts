
declare class AnimationFrame extends NSObject {

	static alloc(): AnimationFrame; // inherited from NSObject

	static cancelAnimationFrameWithId(id: string): void;

	static new(): AnimationFrame; // inherited from NSObject

	static requestAnimationFrameToLoop(toLoop: (p1: number) => void): void;
}

declare class Canvas extends UIView {

	static alloc(): Canvas; // inherited from NSObject

	static appearance(): Canvas; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): Canvas; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): Canvas; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): Canvas; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): Canvas; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): Canvas; // inherited from UIAppearance

	static createSVGMatrix(): CanvasDOMMatrix;

	static new(): Canvas; // inherited from NSObject

	canvas: number;

	canvasState: NSArray<number>;

	readonly fps: number;

	handleInvalidationManually: boolean;

	readonly height: number;

	readonly isGL: boolean;

	readonly width: number;

	constructor(o: { frame: CGRect; useGL: boolean; });

	didDraw(): void;

	doDraw(): void;

	flush(): void;

	getContextWithType(type: string): CanvasRenderingContext;

	getId(): number;

	getViewPtr(): interop.Pointer | interop.Reference<any>;

	initWithFrameUseGL(frame: CGRect, useGL: boolean): this;

	pause(): void;

	resume(): void;

	toDataURL(): string;

	toDataURLAsyncWithCallback(callback: (p1: string) => void): void;

	toDataURLAsyncWithTypeCallback(type: string, callback: (p1: string) => void): void;

	toDataURLAsyncWithTypeFormatCallback(type: string, format: number, callback: (p1: string) => void): void;

	toDataURLWithType(type: string): string;

	toDataURLWithTypeFormat(type: string, format: number): string;
}

interface CanvasArray {
	array: interop.Pointer | interop.Reference<any>;
	length: number;
}
declare var CanvasArray: interop.StructType<CanvasArray>;

declare class CanvasColorStyle extends NSObject {

	static alloc(): CanvasColorStyle; // inherited from NSObject

	static new(): CanvasColorStyle; // inherited from NSObject
}

declare const enum CanvasColorStyleType {

	Color = 0,

	Gradient = 1,

	Pattern = 2
}

declare const enum CanvasCompositeOperationType {

	SourceOver = 0,

	SourceIn = 1,

	SourceOut = 2,

	SourceAtop = 3,

	DestinationOver = 4,

	DestinationIn = 5,

	DestinationOut = 6,

	DestinationAtop = 7,

	Lighter = 8,

	Copy = 9,

	Xor = 10,

	Multiply = 11,

	Screen = 12,

	Overlay = 13,

	Darken = 14,

	Lighten = 15,

	ColorDodge = 16,

	ColorBurn = 17,

	HardLight = 18,

	SoftLight = 19,

	Difference = 20,

	Exclusion = 21,

	Hue = 22,

	Saturation = 23,

	Color = 24,

	Luminosity = 25
}

declare class CanvasDOMMatrix extends NSObject {

	static alloc(): CanvasDOMMatrix; // inherited from NSObject

	static new(): CanvasDOMMatrix; // inherited from NSObject

	a: number;

	b: number;

	c: number;

	d: number;

	e: number;

	f: number;
}

interface CanvasDevice {
	device: interop.Pointer | interop.Reference<any>;
	queue: interop.Pointer | interop.Reference<any>;
	drawable: interop.Pointer | interop.Reference<any>;
}
declare var CanvasDevice: interop.StructType<CanvasDevice>;

declare var CanvasNativeVersionNumber: number;

declare var CanvasNativeVersionString: interop.Reference<number>;

declare class CanvasPath2D extends NSObject {

	static alloc(): CanvasPath2D; // inherited from NSObject

	static new(): CanvasPath2D; // inherited from NSObject

	constructor(o: { data: string; });

	constructor(o: { path: CanvasPath2D; });

	addPathWithPath(path: CanvasPath2D): void;

	addPathWithPathTransform(path: CanvasPath2D, transform: CanvasDOMMatrix): void;

	arcToX1Y1X2Y2Radius(x1: number, y1: number, x2: number, y2: number, radius: number): void;

	arcWithXYRadiusStartAngleEndAngle(x: number, y: number, radius: number, startAngle: number, endAngle: number): void;

	arcWithXYRadiusStartAngleEndAngleAnticlockwise(x: number, y: number, radius: number, startAngle: number, endAngle: number, anticlockwise: boolean): void;

	bezierCurveToCp1xCp1yCp2xCp2yXY(cp1x: number, cp1y: number, cp2x: number, cp2y: number, x: number, y: number): void;

	closePath(): void;

	ellipseWithXYRadiusXRadiusYRotationStartAngleEndAngle(x: number, y: number, radiusX: number, radiusY: number, rotation: number, startAngle: number, endAngle: number): void;

	ellipseWithXYRadiusXRadiusYRotationStartAngleEndAngleAnticlockwise(x: number, y: number, radiusX: number, radiusY: number, rotation: number, startAngle: number, endAngle: number, anticlockwise: boolean): void;

	initWithData(data: string): this;

	initWithPath(path: CanvasPath2D): this;

	lineToXY(x: number, y: number): void;

	moveToXY(x: number, y: number): void;

	quadraticCurveToCpxCpyXY(cpx: number, cpy: number, x: number, y: number): void;

	rectWithXYWidthHeight(x: number, y: number, width: number, height: number): void;
}

declare class CanvasRenderingContext extends NSObject {

	static alloc(): CanvasRenderingContext; // inherited from NSObject

	static new(): CanvasRenderingContext; // inherited from NSObject
}

declare class CanvasRenderingContext2D extends CanvasRenderingContext {

	static alloc(): CanvasRenderingContext2D; // inherited from NSObject

	static new(): CanvasRenderingContext2D; // inherited from NSObject

	fillStyle: ICanvasColorStyle;

	font: string;

	globalAlpha: number;

	globalCompositeOperation: CanvasCompositeOperationType;

	imageSmoothingEnabled: boolean;

	imageSmoothingQuality: ImageSmoothingQuality;

	lineCap: LineCap;

	lineDashOffset: number;

	lineJoin: LineJoin;

	lineWidth: number;

	miterLimit: number;

	shadowBlur: number;

	shadowColor: UIColor;

	shadowOffsetX: number;

	shadowOffsetY: number;

	strokeStyle: ICanvasColorStyle;

	textAlign: TextAlignment;

	constructor(o: { canvas: Canvas; });

	arcToX1Y1X2Y2Radius(x1: number, y1: number, x2: number, y2: number, radius: number): void;

	arcWithXYRadiusStartAngleEndAngle(x: number, y: number, radius: number, startAngle: number, endAngle: number): void;

	arcWithXYRadiusStartAngleEndAngleAnticlockwise(x: number, y: number, radius: number, startAngle: number, endAngle: number, anticlockwise: boolean): void;

	beginPath(): void;

	bezierCurveToCp1xCp1yCp2xCp2yXY(cp1x: number, cp1y: number, cp2x: number, cp2y: number, x: number, y: number): void;

	clearRectWithXYWidthHeight(x: number, y: number, width: number, height: number): void;

	clip(): void;

	clipWithPath(path: CanvasPath2D): void;

	clipWithPathRule(path: CanvasPath2D, rule: string): void;

	clipWithRule(rule: string): void;

	closePath(): void;

	createImageDataWithImageData(imageData: ImageData): ImageData;

	createImageDataWithWidthHeight(width: number, height: number): ImageData;

	createLinearGradientWithX0Y0X1Y1(x0: number, y0: number, x1: number, y1: number): LinearGradient;

	createPatternWithSrcRepetition(src: any, repetition: PatternRepetition): Pattern;

	createRadialGradientWithX0Y0R0X1Y1R1(x0: number, y0: number, r0: number, x1: number, y1: number, r1: number): RadialGradient;

	drawImageWithAssetDxDy(image: ImageAsset, dx: number, dy: number): void;

	drawImageWithAssetDxDyDWidthDHeight(image: ImageAsset, dx: number, dy: number, dWidth: number, dHeight: number): void;

	drawImageWithAssetSxSySWidthSHeightDxDyDWidthDHeight(image: ImageAsset, sx: number, sy: number, sWidth: number, sHeight: number, dx: number, dy: number, dWidth: number, dHeight: number): void;

	drawImageWithImageDxDy(image: UIImage, dx: number, dy: number): void;

	drawImageWithImageDxDyDWidthDHeight(image: UIImage, dx: number, dy: number, dWidth: number, dHeight: number): void;

	drawImageWithImageSxSySWidthSHeightDxDyDWidthDHeight(image: UIImage, sx: number, sy: number, sWidth: number, sHeight: number, dx: number, dy: number, dWidth: number, dHeight: number): void;

	ellipseWithXYRadiusXRadiusYRotationStartAngleEndAngle(x: number, y: number, radiusX: number, radiusY: number, rotation: number, startAngle: number, endAngle: number): void;

	ellipseWithXYRadiusXRadiusYRotationStartAngleEndAngleAnticlockwise(x: number, y: number, radiusX: number, radiusY: number, rotation: number, startAngle: number, endAngle: number, anticlockwise: boolean): void;

	fill(): void;

	fillRectWithXYWidthHeight(x: number, y: number, width: number, height: number): void;

	fillTextWithTextXY(text: string, x: number, y: number): void;

	fillTextWithTextXYWidth(text: string, x: number, y: number, width: number): void;

	fillWithPath(path: CanvasPath2D): void;

	fillWithPathRule(path: CanvasPath2D, rule: string): void;

	fillWithRule(rule: string): void;

	getCanvas(): Canvas;

	getImageDataWithSxSySwSh(sx: number, sy: number, sw: number, sh: number): ImageData;

	getLineDash(): NSArray<number>;

	initWithCanvas(canvas: Canvas): this;

	lineToXY(x: number, y: number): void;

	measureTextWithText(text: string): TextMetrics;

	moveToXY(x: number, y: number): void;

	putImageDataWithImageDataDxDy(imageData: ImageData, dx: number, dy: number): void;

	putImageDataWithImageDataDxDyDirtyXDirtyYDirtyWidthDirtyHeight(imageData: ImageData, dx: number, dy: number, dirtyX: number, dirtyY: number, dirtyWidth: number, dirtyHeight: number): void;

	quadraticCurveToCpxCpyXY(cpx: number, cpy: number, x: number, y: number): void;

	rectWithXYWidthHeight(x: number, y: number, width: number, height: number): void;

	resetTransform(): void;

	restore(): void;

	rotateWithAngle(angle: number): void;

	save(): void;

	scaleWithXY(x: number, y: number): void;

	setLineDashWithSegments(segments: NSArray<number> | number[]): void;

	setTransformWithABCDEF(a: number, b: number, c: number, d: number, e: number, f: number): void;

	stroke(): void;

	strokeRectWithXYWidthHeight(x: number, y: number, width: number, height: number): void;

	strokeTextWithTextXY(text: string, x: number, y: number): void;

	strokeTextWithTextXYWidth(text: string, x: number, y: number, width: number): void;

	strokeWithPath(path: CanvasPath2D): void;

	transformWithABCDEF(a: number, b: number, c: number, d: number, e: number, f: number): void;

	translateWithXY(x: number, y: number): void;
}

interface CanvasTextMetrics {
	width: number;
}
declare var CanvasTextMetrics: interop.StructType<CanvasTextMetrics>;

declare class Canvas_EXT_blend_minmax extends NSObject {

	static alloc(): Canvas_EXT_blend_minmax; // inherited from NSObject

	static new(): Canvas_EXT_blend_minmax; // inherited from NSObject

	readonly MAX_EXT: number;

	readonly MIN_EXT: number;
}

declare class Canvas_EXT_color_buffer_float extends NSObject {

	static alloc(): Canvas_EXT_color_buffer_float; // inherited from NSObject

	static new(): Canvas_EXT_color_buffer_float; // inherited from NSObject

	readonly R11F_G11F_B10F: number;

	readonly R16F: number;

	readonly R32F: number;

	readonly RG16F: number;

	readonly RG32F: number;

	readonly RGB16F: number;

	readonly RGBA32F: number;
}

declare class Canvas_EXT_color_buffer_half_float extends NSObject {

	static alloc(): Canvas_EXT_color_buffer_half_float; // inherited from NSObject

	static new(): Canvas_EXT_color_buffer_half_float; // inherited from NSObject

	readonly FRAMEBUFFER_ATTACHMENT_COMPONENT_TYPE_EXT: number;

	readonly RGB16F_EXT: number;

	readonly RGBA16F_EXT: number;

	readonly UNSIGNED_NORMALIZED_EXT: number;
}

declare class Canvas_EXT_sRGB extends NSObject {

	static alloc(): Canvas_EXT_sRGB; // inherited from NSObject

	static new(): Canvas_EXT_sRGB; // inherited from NSObject

	readonly FRAMEBUFFER_ATTACHMENT_COLOR_ENCODING_EXT: number;

	readonly SRGB8_ALPHA8_EXT: number;

	readonly SRGB_ALPHA_EXT: number;

	readonly SRGB_EXT: number;
}

declare class Canvas_EXT_shader_texture_lod extends NSObject {

	static alloc(): Canvas_EXT_shader_texture_lod; // inherited from NSObject

	static new(): Canvas_EXT_shader_texture_lod; // inherited from NSObject
}

declare class Canvas_EXT_texture_filter_anisotropic extends NSObject {

	static alloc(): Canvas_EXT_texture_filter_anisotropic; // inherited from NSObject

	static new(): Canvas_EXT_texture_filter_anisotropic; // inherited from NSObject

	readonly MAX_TEXTURE_MAX_ANISOTROPY_EXT: number;

	readonly TEXTURE_MAX_ANISOTROPY_EXT: number;
}

declare class Canvas_OES_element_index_uint extends NSObject {

	static alloc(): Canvas_OES_element_index_uint; // inherited from NSObject

	static new(): Canvas_OES_element_index_uint; // inherited from NSObject

	readonly UNSIGNED_INT: number;
}

declare class Canvas_OES_fbo_render_mipmap extends NSObject {

	static alloc(): Canvas_OES_fbo_render_mipmap; // inherited from NSObject

	static new(): Canvas_OES_fbo_render_mipmap; // inherited from NSObject
}

declare class Canvas_OES_standard_derivatives extends NSObject {

	static alloc(): Canvas_OES_standard_derivatives; // inherited from NSObject

	static new(): Canvas_OES_standard_derivatives; // inherited from NSObject
}

declare class Canvas_OES_texture_float extends NSObject {

	static alloc(): Canvas_OES_texture_float; // inherited from NSObject

	static new(): Canvas_OES_texture_float; // inherited from NSObject
}

declare class Canvas_OES_texture_float_linear extends NSObject {

	static alloc(): Canvas_OES_texture_float_linear; // inherited from NSObject

	static new(): Canvas_OES_texture_float_linear; // inherited from NSObject
}

declare class Canvas_OES_texture_half_float extends NSObject {

	static alloc(): Canvas_OES_texture_half_float; // inherited from NSObject

	static new(): Canvas_OES_texture_half_float; // inherited from NSObject

	readonly HALF_FLOAT_OES: number;
}

declare class Canvas_OES_texture_half_float_linear extends NSObject {

	static alloc(): Canvas_OES_texture_half_float_linear; // inherited from NSObject

	static new(): Canvas_OES_texture_half_float_linear; // inherited from NSObject
}

declare class Canvas_OES_vertex_array_object extends NSObject {

	static alloc(): Canvas_OES_vertex_array_object; // inherited from NSObject

	static new(): Canvas_OES_vertex_array_object; // inherited from NSObject

	readonly VERTEX_ARRAY_BINDING_OES: number;
}

declare class Canvas_WEBGL_color_buffer_float extends NSObject {

	static alloc(): Canvas_WEBGL_color_buffer_float; // inherited from NSObject

	static new(): Canvas_WEBGL_color_buffer_float; // inherited from NSObject

	readonly FRAMEBUFFER_ATTACHMENT_COMPONENT_TYPE_EXT: number;

	readonly RGB32F_EXT: number;

	readonly RGBA32F_EXT: number;

	readonly UNSIGNED_NORMALIZED_EXT: number;
}

declare class Canvas_WEBGL_compressed_texture_etc extends NSObject {

	static alloc(): Canvas_WEBGL_compressed_texture_etc; // inherited from NSObject

	static new(): Canvas_WEBGL_compressed_texture_etc; // inherited from NSObject

	readonly COMPRESSED_R11_EAC: number;

	readonly COMPRESSED_RG11_EAC: number;

	readonly COMPRESSED_RGB8_ETC2: number;

	readonly COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2: number;

	readonly COMPRESSED_RGBA8_ETC2_EAC: number;

	readonly COMPRESSED_SIGNED_R11_EAC: number;

	readonly COMPRESSED_SIGNED_RG11_EAC: number;

	readonly COMPRESSED_SRGB8_ALPHA8_ETC2_EAC: number;

	readonly COMPRESSED_SRGB8_ETC2: number;

	readonly COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2: number;
}

declare class Canvas_WEBGL_compressed_texture_etc1 extends NSObject {

	static alloc(): Canvas_WEBGL_compressed_texture_etc1; // inherited from NSObject

	static new(): Canvas_WEBGL_compressed_texture_etc1; // inherited from NSObject

	readonly COMPRESSED_RGB_ETC1_WEBGL: number;
}

declare class Canvas_WEBGL_compressed_texture_pvrtc extends NSObject {

	static alloc(): Canvas_WEBGL_compressed_texture_pvrtc; // inherited from NSObject

	static new(): Canvas_WEBGL_compressed_texture_pvrtc; // inherited from NSObject

	readonly COMPRESSED_RGBA_PVRTC_2BPPV1_IMG: number;

	readonly COMPRESSED_RGBA_PVRTC_4BPPV1_IMG: number;

	readonly COMPRESSED_RGB_PVRTC_2BPPV1_IMG: number;

	readonly COMPRESSED_RGB_PVRTC_4BPPV1_IMG: number;
}

declare class Canvas_WEBGL_depth_texture extends NSObject {

	static alloc(): Canvas_WEBGL_depth_texture; // inherited from NSObject

	static new(): Canvas_WEBGL_depth_texture; // inherited from NSObject

	readonly UNSIGNED_INT_24_8_WEBGL: number;
}

declare class Canvas_WEBGL_lose_context extends NSObject {

	static alloc(): Canvas_WEBGL_lose_context; // inherited from NSObject

	static new(): Canvas_WEBGL_lose_context; // inherited from NSObject

	constructor(o: { canvas: Canvas; });

	initWithCanvas(canvas: Canvas): this;

	loseContext(): void;

	restoreContext(): void;
}

declare class Color extends NSObject implements ICanvasColorStyle {

	static alloc(): Color; // inherited from NSObject

	static new(): Color; // inherited from NSObject

	constructor(o: { color: UIColor; });

	getStyleType(): CanvasColorStyleType;

	initWithColor(color: UIColor): this;
}

declare class FramebufferAttachmentParameter extends NSObject {

	static alloc(): FramebufferAttachmentParameter; // inherited from NSObject

	static new(): FramebufferAttachmentParameter; // inherited from NSObject

	readonly isRenderbuffer: boolean;

	readonly isTexture: boolean;

	readonly value: number;

	constructor(o: { isTexture: boolean; isRenderbuffer: boolean; value: number; });

	initWithIsTextureIsRenderbufferValue(isTexture: boolean, isRenderbuffer: boolean, value: number): this;
}

declare class GLRenderer extends NSObject implements GLKViewDelegate {

	static alloc(): GLRenderer; // inherited from NSObject

	static new(): GLRenderer; // inherited from NSObject

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	glkViewDrawInRect(view: GLKView, rect: CGRect): void;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

declare class Gradient extends NSObject implements ICanvasColorStyle {

	static alloc(): Gradient; // inherited from NSObject

	static new(): Gradient; // inherited from NSObject

	addColorStopWithOffsetColor(offset: number, color: UIColor): void;

	getStyleType(): CanvasColorStyleType;
}

interface ICanvasColorStyle {

	getStyleType(): CanvasColorStyleType;
}
declare var ICanvasColorStyle: {

	prototype: ICanvasColorStyle;
};

declare class ImageAsset extends NSObject {

	static alloc(): ImageAsset; // inherited from NSObject

	static new(): ImageAsset; // inherited from NSObject

	static set_queue(value: NSObject): void;

	readonly error: string;

	readonly height: number;

	readonly width: number;

	static _queue: NSObject;

	flipX(): void;

	flipY(): void;

	getRawBytes(): string;

	loadImageFromBytesAsyncWithArrayCallback(array: NSArray<number> | number[], callback: (p1: string) => void): void;

	loadImageFromBytesWithArray(array: NSArray<number> | number[]): boolean;

	loadImageFromImageAsyncWithImageCallback(image: UIImage, callback: (p1: string) => void): void;

	loadImageFromImageWithImage(image: UIImage): boolean;

	loadImageFromPathAsyncWithPathCallback(path: string, callback: (p1: string) => void): void;

	loadImageFromPathWithPath(path: string): boolean;

	saveAsyncWithPathFormatCallback(path: string, format: ImageAssetFormat, callback: (p1: boolean) => void): void;

	saveWithPathFormat(path: string, format: ImageAssetFormat): boolean;

	scaleWithXY(x: number, y: number): void;
}

declare const enum ImageAssetFormat {

	JPG = 0,

	PNG = 1,

	ICO = 2,

	BMP = 3,

	TIFF = 4
}

declare class ImageData extends NSObject {

	static alloc(): ImageData; // inherited from NSObject

	static new(): ImageData; // inherited from NSObject

	readonly data: NSData;

	readonly height: number;

	readonly width: number;

	constructor(o: { width: number; height: number; });

	initWithWidthHeight(width: number, height: number): this;
}

declare const enum ImageSmoothingQuality {

	Low = 0,

	Medium = 1,

	High = 2
}

declare class IndexedParameter extends NSObject {

	static alloc(): IndexedParameter; // inherited from NSObject

	static new(): IndexedParameter; // inherited from NSObject
}

declare const enum LineCap {

	Butt = 0,

	Round = 1,

	Square = 2
}

declare const enum LineJoin {

	Bevel = 0,

	Round = 1,

	Miter = 2
}

declare class LinearGradient extends Gradient {

	static alloc(): LinearGradient; // inherited from NSObject

	static new(): LinearGradient; // inherited from NSObject

	constructor(o: { x0: number; y0: number; x1: number; y1: number; });

	initWithX0Y0X1Y1(x0: number, y0: number, x1: number, y1: number): this;
}

declare class MetalRenderer extends NSObject implements MTKViewDelegate {

	static alloc(): MetalRenderer; // inherited from NSObject

	static new(): MetalRenderer; // inherited from NSObject

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	drawInMTKView(view: MTKView): void;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	mtkViewDrawableSizeWillChange(view: MTKView, size: CGSize): void;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

declare class Pattern extends NSObject implements ICanvasColorStyle {

	static alloc(): Pattern; // inherited from NSObject

	static new(): Pattern; // inherited from NSObject

	constructor(o: { src: any; pattern: PatternRepetition; });

	getStyleType(): CanvasColorStyleType;

	initWithSrcPattern(src: any, pattern: PatternRepetition): this;
}

declare const enum PatternRepetition {

	Repeat = 0,

	RepeatX = 1,

	RepeatY = 2,

	NoRepeat = 3
}

declare class RadialGradient extends Gradient {

	static alloc(): RadialGradient; // inherited from NSObject

	static new(): RadialGradient; // inherited from NSObject

	constructor(o: { x0: number; y0: number; r0: number; x1: number; y1: number; r1: number; });

	initWithX0Y0R0X1Y1R1(x0: number, y0: number, r0: number, x1: number, y1: number, r1: number): this;
}

declare const enum TextAlignment {

	Left = 0,

	Start = 1,

	Center = 2,

	End = 3,

	Right = 4
}

declare class TextMetrics extends NSObject {

	static alloc(): TextMetrics; // inherited from NSObject

	static new(): TextMetrics; // inherited from NSObject

	readonly width: number;
}

declare class WebGL2RenderingContext extends WebGLRenderingContext {

	static alloc(): WebGL2RenderingContext; // inherited from NSObject

	static new(): WebGL2RenderingContext; // inherited from NSObject

	readonly ALREADY_SIGNALED: number;

	readonly ANY_SAMPLES_PASSED: number;

	readonly ANY_SAMPLES_PASSED_CONSERVATIVE: number;

	readonly BYTE: number;

	readonly COLOR: number;

	readonly COLOR_ATTACHMENT1: number;

	readonly COLOR_ATTACHMENT10: number;

	readonly COLOR_ATTACHMENT11: number;

	readonly COLOR_ATTACHMENT12: number;

	readonly COLOR_ATTACHMENT13: number;

	readonly COLOR_ATTACHMENT14: number;

	readonly COLOR_ATTACHMENT15: number;

	readonly COLOR_ATTACHMENT2: number;

	readonly COLOR_ATTACHMENT3: number;

	readonly COLOR_ATTACHMENT4: number;

	readonly COLOR_ATTACHMENT5: number;

	readonly COLOR_ATTACHMENT6: number;

	readonly COLOR_ATTACHMENT7: number;

	readonly COLOR_ATTACHMENT8: number;

	readonly COLOR_ATTACHMENT9: number;

	readonly CONDITION_SATISFIED: number;

	readonly COPY_READ_BUFFER: number;

	readonly COPY_WRITE_BUFFER: number;

	readonly CURRENT_QUERY: number;

	readonly DEPTH: number;

	readonly DEPTH24_STENCIL8: number;

	readonly DEPTH32F_STENCIL8: number;

	readonly DEPTH_COMPONENT24: number;

	readonly DEPTH_COMPONENT32F: number;

	readonly DRAW_FRAMEBUFFER: number;

	readonly FLOAT_32_UNSIGNED_INT_24_8_REV: number;

	readonly GL_QUERY_COUNTER_BITS: number;

	readonly GL_QUERY_COUNTER_BITS_EXT: number;

	readonly INTERLEAVED_ATTRIBS: number;

	readonly MAX_CLIENT_WAIT_TIMEOUT_WEBGL: number;

	readonly OBJECT_TYPE: number;

	readonly PIXEL_PACK_BUFFER: number;

	readonly PIXEL_UNPACK_BUFFER: number;

	readonly QUERY_RESULT: number;

	readonly QUERY_RESULT_AVAILABLE: number;

	readonly R11F_G11F_B10F: number;

	readonly R16F: number;

	readonly R16I: number;

	readonly R16UI: number;

	readonly R32F: number;

	readonly R32I: number;

	readonly R32UI: number;

	readonly R8: number;

	readonly R8G: number;

	readonly R8I: number;

	readonly R8UI: number;

	readonly READ_FRAMEBUFFER: number;

	readonly RG16F: number;

	readonly RG16I: number;

	readonly RG16UI: number;

	readonly RG32F: number;

	readonly RG32I: number;

	readonly RG32UI: number;

	readonly RG8I: number;

	readonly RG8UI: number;

	readonly RGB10_A2: number;

	readonly RGB10_A2UI: number;

	readonly RGB16F: number;

	readonly RGB32F: number;

	readonly RGB8: number;

	readonly RGB8UI: number;

	readonly RGB9_E5: number;

	readonly RGBA16F: number;

	readonly RGBA16I: number;

	readonly RGBA16UI: number;

	readonly RGBA32F: number;

	readonly RGBA32I: number;

	readonly RGBA32UI: number;

	readonly RGBA4444: number;

	readonly RGBA8: number;

	readonly RGBA8I: number;

	readonly RGBA8UI: number;

	readonly SEPARATE_ATTRIBS: number;

	readonly SHORT: number;

	readonly SIGNALED: number;

	readonly SRGB8: number;

	readonly SRGB8_ALPHA8: number;

	readonly SRGB_APLHA8: number;

	readonly STENCIL: number;

	readonly SYNC_CONDITION: number;

	readonly SYNC_FENCE: number;

	readonly SYNC_FLAGS: number;

	readonly SYNC_FLUSH_COMMANDS_BIT: number;

	readonly SYNC_GPU_COMMANDS_COMPLETE: number;

	readonly SYNC_STATUS: number;

	readonly TEXTURE_2D_ARRAY: number;

	readonly TEXTURE_3D: number;

	readonly TEXTURE_COMPARE_FUNC: number;

	readonly TEXTURE_COMPARE_MODE: number;

	readonly TEXTURE_MAX_LOD: number;

	readonly TEXTURE_MIN_LOD: number;

	readonly TEXTURE_WRAP_R: number;

	readonly TIMEOUT_EXPIRED: number;

	readonly TRANSFORM_FEEDBACK_BUFFER: number;

	readonly TRANSFORM_FEEDBACK_BUFFER_BINDING: number;

	readonly TRANSFORM_FEEDBACK_BUFFER_SIZE: number;

	readonly TRANSFORM_FEEDBACK_BUFFER_START: number;

	readonly TRANSFORM_FEEDBACK_PRIMITIVES_WRITTEN: number;

	readonly UNIFORM_ARRAY_STRIDE: number;

	readonly UNIFORM_BLOCK_ACTIVE_UNIFORMS: number;

	readonly UNIFORM_BLOCK_ACTIVE_UNIFORM_INDICES: number;

	readonly UNIFORM_BLOCK_BINDING: number;

	readonly UNIFORM_BLOCK_DATA_SIZE: number;

	readonly UNIFORM_BLOCK_INDEX: number;

	readonly UNIFORM_BLOCK_REFERENCED_BY_FRAGMENT_SHADER: number;

	readonly UNIFORM_BLOCK_REFERENCED_BY_VERTEX_SHADER: number;

	readonly UNIFORM_BUFFER: number;

	readonly UNIFORM_BUFFER_BINDING: number;

	readonly UNIFORM_BUFFER_SIZE: number;

	readonly UNIFORM_BUFFER_START: number;

	readonly UNIFORM_IS_ROW_MAJOR: number;

	readonly UNIFORM_MATRIX_STRIDE: number;

	readonly UNIFORM_OFFSET: number;

	readonly UNIFORM_SIZE: number;

	readonly UNIFORM_TYPE: number;

	readonly UNSIGNALED: number;

	readonly UNSIGNED_INT_10F_11F_11F_REV: number;

	readonly UNSIGNED_INT_24_8: number;

	readonly UNSIGNED_INT_2_10_10_10_REV: number;

	readonly UNSIGNED_INT_5_9_9_9_REV: number;

	readonly WAIT_FAILED: number;

	beginQueryWithTargetQuery(target: number, query: number): void;

	beginTransformFeedbackWithPrimitiveMode(primitiveMode: number): void;

	bindBufferBaseWithTargetIndexBuffer(target: number, index: number, buffer: number): void;

	bindBufferRangeWithTargetIndexBufferOffsetSize(target: number, index: number, buffer: number, offset: number, size: number): void;

	bindSamplerWithUnitSampler(unit: number, sampler: number): void;

	bindTransformFeedbackWithTargetTransformFeedback(target: number, transformFeedback: number): void;

	bindVertexArrayWithVertexArray(vertexArray: number): void;

	blitFramebufferWithSrcX0SrcY0SrcX1SrcY1DstX0DstY0DstX1DstY1MaskFilter(srcX0: number, srcY0: number, srcX1: number, srcY1: number, dstX0: number, dstY0: number, dstX1: number, dstY1: number, mask: number, filter: number): void;

	clearBufferfiWithBufferDrawbufferDepthStencil(buffer: number, drawbuffer: number, depth: number, stencil: number): void;

	clearBufferfvWithBufferDrawbufferValues(buffer: number, drawbuffer: number, values: NSArray<number> | number[]): void;

	clearBufferivWithBufferDrawbufferValues(buffer: number, drawbuffer: number, values: NSArray<number> | number[]): void;

	clearBufferuivWithBufferDrawbufferValues(buffer: number, drawbuffer: number, values: NSArray<number> | number[]): void;

	clientWaitSyncWithSyncFlagsTimeout(sync: interop.Pointer | interop.Reference<any>, flags: number, timeout: number): number;

	compressedTexSubImage3DWithTargetLevelXoffsetYoffsetZoffsetWidthHeightDepthFormatImageSizeOffset(target: number, level: number, xoffset: number, yoffset: number, zoffset: number, width: number, height: number, depth: number, format: number, imageSize: number, offset: number): void;

	compressedTexSubImage3DWithTargetLevelXoffsetYoffsetZoffsetWidthHeightDepthFormatSrcDataSrcOffsetSrcLengthOverride(target: number, level: number, xoffset: number, yoffset: number, zoffset: number, width: number, height: number, depth: number, format: number, srcData: NSArray<number> | number[], srcOffset: number, srcLengthOverride: number): void;

	copyBufferSubDataWithReadTargetWriteTargetReadOffsetWriteOffsetSize(readTarget: number, writeTarget: number, readOffset: number, writeOffset: number, size: number): void;

	copyTexSubImage3DWithTargetLevelXoffsetYoffsetZoffsetXYWidthHeight(target: number, level: number, xoffset: number, yoffset: number, zoffset: number, x: number, y: number, width: number, height: number): void;

	createQuery(): number;

	createSampler(): number;

	createTransformFeedback(): number;

	createVertexArray(): number;

	deleteQueryWithQuery(query: number): void;

	deleteSamplerWithSampler(sampler: number): void;

	deleteSyncWithSync(sync: interop.Pointer | interop.Reference<any>): void;

	deleteTransformFeedbackWithTransformFeedback(transformFeedback: number): void;

	deleteVertexArrayWithVertexArray(vertexArray: number): void;

	drawArraysInstancedWithModeFirstCountInstanceCount(mode: number, first: number, count: number, instanceCount: number): void;

	drawBuffersWithBuffers(buffers: NSArray<number> | number[]): void;

	drawElementsInstancedWithModeCountTypeOffsetInstanceCount(mode: number, count: number, type: number, offset: number, instanceCount: number): void;

	drawRangeElementsWithModeStartEndCountTypeOffset(mode: number, start: number, end: number, count: number, type: number, offset: number): void;

	endQueryWithTarget(target: number): void;

	endTransformFeedback(): void;

	fenceSyncWithConditionFlags(condition: number, flags: number): void;

	framebufferTextureLayerWithTargetAttachmentTextureLevelLayer(target: number, attachment: number, texture: number, level: number, layer: number): void;

	getActiveUniformBlockNameWithProgramUniformBlockIndex(program: number, uniformBlockIndex: number): string;

	getActiveUniformBlockParameterWithProgramUniformBlockIndexPname(program: number, uniformBlockIndex: number, pname: number): any;

	getActiveUniformsWithProgramUniformIndicesPname(program: number, uniformIndices: NSArray<number> | number[], pname: number): any;

	getBufferSubDataWithTargetSrcByteOffsetDstDataDstOffsetLength(target: number, srcByteOffset: number, dstData: NSArray<number> | number[], dstOffset: number, length: number): void;

	getFragDataLocationWithProgramName(program: number, name: string): number;

	getIndexedParameterWithTargetIndex(target: number, index: number): any;

	getInternalformatParameterWithTargetInternalformatPname(target: number, internalformat: number, pname: number): any;

	getQueryParameterWithQueryPname(query: number, pname: number): any;

	getQueryWithTargetPname(target: number, pname: number): any;

	getSamplerParameterWithSamplerPname(sampler: number, pname: number): any;

	getSyncParameterWithSyncPname(sync: interop.Pointer | interop.Reference<any>, pname: number): any;

	getTransformFeedbackVaryingWithProgramIndex(program: number, index: number): any;

	getUniformBlockIndexWithProgramUniformBlockName(program: number, uniformBlockName: string): number;

	getUniformIndicesWithProgramUniformNames(program: number, uniformNames: NSArray<string> | string[]): NSArray<number>;

	invalidateFramebufferWithTargetAttachments(target: number, attachments: NSArray<number> | number[]): void;

	invalidateSubFramebufferWithTargetAttachmentsXYWidthHeight(target: number, attachments: NSArray<number> | number[], x: number, y: number, width: number, height: number): void;

	isQueryWithQuery(query: number): boolean;

	isSamplerWithSampler(sampler: number): boolean;

	isSyncWithSync(sync: interop.Pointer | interop.Reference<any>): boolean;

	isTransformFeedbackWithTransformFeedback(transformFeedback: number): boolean;

	isVertexArrayWithVertexArray(vertexArray: number): boolean;

	pauseTransformFeedback(): void;

	readBufferWithSrc(src: number): void;

	renderbufferStorageMultisampleWithTargetSamplesInternalFormatWidthHeight(target: number, samples: number, internalFormat: number, width: number, height: number): void;

	resumeTransformFeedback(): void;

	samplerParameterfWithSamplerPnameParam(sampler: number, pname: number, param: number): void;

	samplerParameteriWithSamplerPnameParam(sampler: number, pname: number, param: number): void;

	texImage3DWithTargetLevelInternalformatWidthHeightDepthBorderFormatTypeAsset(target: number, level: number, internalformat: number, width: number, height: number, depth: number, border: number, format: number, type: number, asset: ImageAsset): void;

	texImage3DWithTargetLevelInternalformatWidthHeightDepthBorderFormatTypeImage(target: number, level: number, internalformat: number, width: number, height: number, depth: number, border: number, format: number, type: number, source: UIImage): void;

	texImage3DWithTargetLevelInternalformatWidthHeightDepthBorderFormatTypeOffset(target: number, level: number, internalformat: number, width: number, height: number, depth: number, border: number, format: number, type: number, offset: number): void;

	texImage3DWithTargetLevelInternalformatWidthHeightDepthBorderFormatTypeSource(target: number, level: number, internalformat: number, width: number, height: number, depth: number, border: number, format: number, type: number, source: NSArray<number> | number[]): void;

	texStorage2DWithTargetLevelsInternalformatWidthHeight(target: number, levels: number, internalformat: number, width: number, height: number): void;

	texStorage3DWithTargetLevelsInternalformatWidthHeightDepth(target: number, levels: number, internalformat: number, width: number, height: number, depth: number): void;

	texSubImage3DWithTargetLevelXoffsetYoffsetZoffsetWidthHeightDepthFormatTypeAsset(target: number, level: number, xoffset: number, yoffset: number, zoffset: number, width: number, height: number, depth: number, format: number, type: number, asset: ImageAsset): void;

	texSubImage3DWithTargetLevelXoffsetYoffsetZoffsetWidthHeightDepthFormatTypeImage(target: number, level: number, xoffset: number, yoffset: number, zoffset: number, width: number, height: number, depth: number, format: number, type: number, srcData: UIImage): void;

	texSubImage3DWithTargetLevelXoffsetYoffsetZoffsetWidthHeightDepthFormatTypeOffset(target: number, level: number, xoffset: number, yoffset: number, zoffset: number, width: number, height: number, depth: number, format: number, type: number, offset: number): void;

	texSubImage3DWithTargetLevelXoffsetYoffsetZoffsetWidthHeightDepthFormatTypeSrcData(target: number, level: number, xoffset: number, yoffset: number, zoffset: number, width: number, height: number, depth: number, format: number, type: number, srcData: NSArray<number> | number[]): void;

	texSubImage3DWithTargetLevelXoffsetYoffsetZoffsetWidthHeightDepthFormatTypeSrcDataSrcOffset(target: number, level: number, xoffset: number, yoffset: number, zoffset: number, width: number, height: number, depth: number, format: number, type: number, srcData: NSArray<number> | number[], srcOffset: number): void;

	transformFeedbackVaryingsWithProgramVaryingsBufferMode(program: number, varyings: NSArray<string> | string[], bufferMode: number): void;

	uniform1uiWithLocationV0(location: number, v0: number): void;

	uniform1uivWithLocationData(location: number, data: NSArray<number> | number[]): void;

	uniform2uiWithLocationV0V1(location: number, v0: number, v1: number): void;

	uniform2uivWithLocationData(location: number, data: NSArray<number> | number[]): void;

	uniform3uiWithLocationV0V1V2(location: number, v0: number, v1: number, v2: number): void;

	uniform3uivWithLocationData(location: number, data: NSArray<number> | number[]): void;

	uniform4uiWithLocationV0V1V2V3(location: number, v0: number, v1: number, v2: number, v3: number): void;

	uniform4uivWithLocationData(location: number, data: NSArray<number> | number[]): void;

	uniformBlockBindingWithProgramUniformBlockIndexUniformBlockBinding(program: number, uniformBlockIndex: number, uniformBlockBinding: number): void;

	uniformMatrix2x3fvWithLocationTransposeData(location: number, transpose: boolean, data: NSArray<number> | number[]): void;

	uniformMatrix2x4fvWithLocationTransposeData(location: number, transpose: boolean, data: NSArray<number> | number[]): void;

	uniformMatrix3x2fvWithLocationTransposeData(location: number, transpose: boolean, data: NSArray<number> | number[]): void;

	uniformMatrix3x4fvWithLocationTransposeData(location: number, transpose: boolean, data: NSArray<number> | number[]): void;

	uniformMatrix4x2fvWithLocationTransposeData(location: number, transpose: boolean, data: NSArray<number> | number[]): void;

	uniformMatrix4x3fvWithLocationTransposeData(location: number, transpose: boolean, data: NSArray<number> | number[]): void;

	vertexAttribDivisorWithIndexDivisor(index: number, divisor: number): void;

	vertexAttribI4iWithIndexV0V1V2V3(index: number, v0: number, v1: number, v2: number, v3: number): void;

	vertexAttribI4ivWithIndexValue(index: number, value: NSArray<number> | number[]): void;

	vertexAttribI4uiWithIndexV0V1V2V3(index: number, v0: number, v1: number, v2: number, v3: number): void;

	vertexAttribI4uivWithIndexValue(index: number, value: NSArray<number> | number[]): void;
}

declare class WebGLActiveInfo extends NSObject {

	static alloc(): WebGLActiveInfo; // inherited from NSObject

	static new(): WebGLActiveInfo; // inherited from NSObject

	readonly name: string;

	readonly size: number;

	readonly type: number;

	constructor(o: { name: string; size: number; type: number; });

	initWithNameSizeType(name: string, size: number, type: number): this;
}

declare class WebGLRenderingContext extends CanvasRenderingContext {

	static alloc(): WebGLRenderingContext; // inherited from NSObject

	static new(): WebGLRenderingContext; // inherited from NSObject

	readonly ACTIVE_ATTRIBUTES: number;

	readonly ACTIVE_TEXTURE: number;

	readonly ACTIVE_UNIFORMS: number;

	readonly ALIASED_LINE_WIDTH_RANGE: number;

	readonly ALIASED_POINT_SIZE_RANGE: number;

	readonly ALPHA: number;

	readonly ALPHA_BITS: number;

	readonly ALWAYS: number;

	readonly ARRAY_BUFFER: number;

	readonly ARRAY_BUFFER_BINDING: number;

	readonly ATTACHED_SHADERS: number;

	readonly BACK: number;

	readonly BLEND: number;

	readonly BLEND_COLOR: number;

	readonly BLEND_DST_ALPHA: number;

	readonly BLEND_DST_RGB: number;

	readonly BLEND_EQUATION: number;

	readonly BLEND_EQUATION_ALPHA: number;

	readonly BLEND_EQUATION_RGB: number;

	readonly BLEND_SRC_ALPHA: number;

	readonly BLEND_SRC_RGB: number;

	readonly BLUE_BITS: number;

	readonly BOOL: number;

	readonly BOOL_VEC2: number;

	readonly BOOL_VEC3: number;

	readonly BOOL_VEC4: number;

	readonly BROWSER_DEFAULT_WEBGL: number;

	readonly CCW: number;

	readonly CLAMP_TO_EDGE: number;

	readonly COLOR_ATTACHMENT0: number;

	readonly COLOR_ATTACHMENT0_WEBGL: number;

	readonly COLOR_ATTACHMENT10_WEBGL: number;

	readonly COLOR_ATTACHMENT11_WEBGL: number;

	readonly COLOR_ATTACHMENT12_WEBGL: number;

	readonly COLOR_ATTACHMENT13_WEBGL: number;

	readonly COLOR_ATTACHMENT14_WEBGL: number;

	readonly COLOR_ATTACHMENT15_WEBGL: number;

	readonly COLOR_ATTACHMENT1_WEBGL: number;

	readonly COLOR_ATTACHMENT2_WEBGL: number;

	readonly COLOR_ATTACHMENT3_WEBGL: number;

	readonly COLOR_ATTACHMENT4_WEBGL: number;

	readonly COLOR_ATTACHMENT5_WEBGL: number;

	readonly COLOR_ATTACHMENT6_WEBGL: number;

	readonly COLOR_ATTACHMENT7_WEBGL: number;

	readonly COLOR_ATTACHMENT8_WEBGL: number;

	readonly COLOR_ATTACHMENT9_WEBGL: number;

	readonly COLOR_BUFFER_BIT: number;

	readonly COLOR_CLEAR_VALUE: number;

	readonly COLOR_WRITEMASK: number;

	readonly COMPILE_STATUS: number;

	readonly COMPRESSED_R11_EAC: number;

	readonly COMPRESSED_RED_GREEN_RGTC2_EXT: number;

	readonly COMPRESSED_RED_RGTC1_EXT: number;

	readonly COMPRESSED_RG11_EAC: number;

	readonly COMPRESSED_RGB8_ETC2: number;

	readonly COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2: number;

	readonly COMPRESSED_RGBA8_ETC2_EAC: number;

	readonly COMPRESSED_RGBA_ASTC_10x10_KHR: number;

	readonly COMPRESSED_RGBA_ASTC_10x5_KHR: number;

	readonly COMPRESSED_RGBA_ASTC_10x6_KHR: number;

	readonly COMPRESSED_RGBA_ASTC_12x10_KHR: number;

	readonly COMPRESSED_RGBA_ASTC_12x12_KHR: number;

	readonly COMPRESSED_RGBA_ASTC_4x4_KHR: number;

	readonly COMPRESSED_RGBA_ASTC_5x4_KHR: number;

	readonly COMPRESSED_RGBA_ASTC_5x5_KHR: number;

	readonly COMPRESSED_RGBA_ASTC_6x5_KHR: number;

	readonly COMPRESSED_RGBA_ASTC_6x6_KHR: number;

	readonly COMPRESSED_RGBA_ASTC_8x5_KHR: number;

	readonly COMPRESSED_RGBA_ASTC_8x6_KHR: number;

	readonly COMPRESSED_RGBA_ASTC_8x8_KHR: number;

	readonly COMPRESSED_RGBA_ATC_EXPLICIT_ALPHA_WEBGL: number;

	readonly COMPRESSED_RGBA_ATC_INTERPOLATED_ALPHA_WEBGL: number;

	readonly COMPRESSED_RGBA_BPTC_UNORM_EXT: number;

	readonly COMPRESSED_RGBA_PVRTC_2BPPV1_IMG: number;

	readonly COMPRESSED_RGBA_PVRTC_4BPPV1_IMG: number;

	readonly COMPRESSED_RGBA_S3TC_DXT1_EXT: number;

	readonly COMPRESSED_RGBA_S3TC_DXT3_EXT: number;

	readonly COMPRESSED_RGBA_S3TC_DXT5_EXT: number;

	readonly COMPRESSED_RGB_ATC_WEBGL: number;

	readonly COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT: number;

	readonly COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT: number;

	readonly COMPRESSED_RGB_ETC1_WEBGL: number;

	readonly COMPRESSED_RGB_PVRTC_2BPPV1_IMG: number;

	readonly COMPRESSED_RGB_PVRTC_4BPPV1_IMG: number;

	readonly COMPRESSED_RGB_S3TC_DXT1_EXT: number;

	readonly COMPRESSED_SIGNED_R11_EAC: number;

	readonly COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT: number;

	readonly COMPRESSED_SIGNED_RED_RGTC1_EXT: number;

	readonly COMPRESSED_SIGNED_RG11_EAC: number;

	readonly COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR: number;

	readonly COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR: number;

	readonly COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR: number;

	readonly COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR: number;

	readonly COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR: number;

	readonly COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR: number;

	readonly COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR: number;

	readonly COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR: number;

	readonly COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR: number;

	readonly COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR: number;

	readonly COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR: number;

	readonly COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR: number;

	readonly COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR: number;

	readonly COMPRESSED_SRGB8_ALPHA8_ETC2_EAC: number;

	readonly COMPRESSED_SRGB8_ETC2: number;

	readonly COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2: number;

	readonly COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT: number;

	readonly COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT: number;

	readonly COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT: number;

	readonly COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT: number;

	readonly COMPRESSED_SRGB_S3TC_DXT1_EXT: number;

	readonly COMPRESSED_TEXTURE_FORMATS: number;

	readonly CONSTANT_ALPHA: number;

	readonly CONSTANT_COLOR: number;

	readonly CONTEXT_LOST_WEBGL: number;

	readonly CULL_FACE: number;

	readonly CULL_FACE_MODE: number;

	readonly CURRENT_PROGRAM: number;

	readonly CURRENT_VERTEX_ATTRIB: number;

	readonly CW: number;

	readonly DECR: number;

	readonly DECR_WRAP: number;

	readonly DELETE_STATUS: number;

	readonly DEPTH_ATTACHMENT: number;

	readonly DEPTH_BITS: number;

	readonly DEPTH_BUFFER_BIT: number;

	readonly DEPTH_CLEAR_VALUE: number;

	readonly DEPTH_COMPONENT16: number;

	readonly DEPTH_FUNC: number;

	readonly DEPTH_RANGE: number;

	readonly DEPTH_STENCIL: number;

	readonly DEPTH_STENCIL_ATTACHMENT: number;

	readonly DEPTH_TEST: number;

	readonly DEPTH_WRITEMASK: number;

	readonly DITHER: number;

	readonly DONT_CARE: number;

	readonly DST_ALPHA: number;

	readonly DST_COLOR: number;

	readonly DYNAMIC_DRAW: number;

	readonly ELEMENT_ARRAY_BUFFER: number;

	readonly ELEMENT_ARRAY_BUFFER_BINDING: number;

	readonly EQUAL: number;

	readonly FASTEST: number;

	readonly FLOAT: number;

	readonly FLOAT_MAT2: number;

	readonly FLOAT_MAT3: number;

	readonly FLOAT_MAT4: number;

	readonly FLOAT_VEC2: number;

	readonly FLOAT_VEC3: number;

	readonly FLOAT_VEC4: number;

	readonly FRAGMENT_SHADER: number;

	readonly FRAGMENT_SHADER_DERIVATIVE_HINT_OES: number;

	readonly FRAMEBUFFER: number;

	readonly FRAMEBUFFER_ATTACHMENT_COLOR_ENCODING_EXT: number;

	readonly FRAMEBUFFER_ATTACHMENT_OBJECT_NAME: number;

	readonly FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE: number;

	readonly FRAMEBUFFER_ATTACHMENT_TEXTURE_CUBE_MAP_FACE: number;

	readonly FRAMEBUFFER_ATTACHMENT_TEXTURE_LEVEL: number;

	readonly FRAMEBUFFER_BINDING: number;

	readonly FRAMEBUFFER_COMPLETE: number;

	readonly FRAMEBUFFER_INCOMPLETE_ATTACHMENT: number;

	readonly FRAMEBUFFER_INCOMPLETE_DIMENSIONS: number;

	readonly FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT: number;

	readonly FRAMEBUFFER_UNSUPPORTED: number;

	readonly FRONT: number;

	readonly FRONT_AND_BACK: number;

	readonly FRONT_FACE: number;

	readonly FUNC_ADD: number;

	readonly FUNC_REVERSE_SUBTRACT: number;

	readonly FUNC_SUBTRACT: number;

	readonly GENERATE_MIPMAP_HINT: number;

	readonly GEQUAL: number;

	readonly GREATER: number;

	readonly GREEN_BITS: number;

	readonly HALF_FLOAT: number;

	readonly IMPLEMENTATION_COLOR_READ_FORMAT: number;

	readonly IMPLEMENTATION_COLOR_READ_TYPE: number;

	readonly INCR: number;

	readonly INCR_WRAP: number;

	readonly INT: number;

	readonly INT_VEC2: number;

	readonly INT_VEC3: number;

	readonly INT_VEC4: number;

	readonly INVALID_ENUM: number;

	readonly INVALID_FRAMEBUFFER_OPERATION: number;

	readonly INVALID_OPERATION: number;

	readonly INVALID_VALUE: number;

	readonly INVERT: number;

	readonly KEEP: number;

	readonly LEQUAL: number;

	readonly LESS: number;

	readonly LINEAR: number;

	readonly LINEAR_MIPMAP_LINEAR: number;

	readonly LINEAR_MIPMAP_NEAREST: number;

	readonly LINES: number;

	readonly LINE_LOOP: number;

	readonly LINE_STRIP: number;

	readonly LINE_WIDTH: number;

	readonly LINK_STATUS: number;

	readonly LUMINANCE: number;

	readonly LUMINANCE_ALPHA: number;

	readonly MAX_COMBINED_TEXTURE_IMAGE_UNITS: number;

	readonly MAX_CUBE_MAP_TEXTURE_SIZE: number;

	readonly MAX_EXT: number;

	readonly MAX_FRAGMENT_UNIFORM_VECTORS: number;

	readonly MAX_RENDERBUFFER_SIZE: number;

	readonly MAX_TEXTURE_IMAGE_UNITS: number;

	readonly MAX_TEXTURE_SIZE: number;

	readonly MAX_VARYING_VECTORS: number;

	readonly MAX_VERTEX_ATTRIBS: number;

	readonly MAX_VERTEX_TEXTURE_IMAGE_UNITS: number;

	readonly MAX_VERTEX_UNIFORM_VECTORS: number;

	readonly MAX_VIEWPORT_DIMS: number;

	readonly MIN_EXT: number;

	readonly MIRRORED_REPEAT: number;

	readonly NEAREST: number;

	readonly NEAREST_MIPMAP_LINEAR: number;

	readonly NEAREST_MIPMAP_NEAREST: number;

	readonly NEVER: number;

	readonly NICEST: number;

	readonly NONE: number;

	readonly NOTEQUAL: number;

	readonly NO_ERROR: number;

	readonly ONE: number;

	readonly ONE_MINUS_CONSTANT_ALPHA: number;

	readonly ONE_MINUS_CONSTANT_COLOR: number;

	readonly ONE_MINUS_DST_ALPHA: number;

	readonly ONE_MINUS_DST_COLOR: number;

	readonly ONE_MINUS_SRC_ALPHA: number;

	readonly ONE_MINUS_SRC_COLOR: number;

	readonly OUT_OF_MEMORY: number;

	readonly PACK_ALIGNMENT: number;

	readonly POINTS: number;

	readonly POLYGON_OFFSET_FACTOR: number;

	readonly POLYGON_OFFSET_FILL: number;

	readonly POLYGON_OFFSET_UNITS: number;

	readonly RED_BITS: number;

	readonly RENDERBUFFER: number;

	readonly RENDERBUFFER_ALPHA_SIZE: number;

	readonly RENDERBUFFER_BINDING: number;

	readonly RENDERBUFFER_BLUE_SIZE: number;

	readonly RENDERBUFFER_DEPTH_SIZE: number;

	readonly RENDERBUFFER_GREEN_SIZE: number;

	readonly RENDERBUFFER_HEIGHT: number;

	readonly RENDERBUFFER_INTERNAL_FORMAT: number;

	readonly RENDERBUFFER_RED_SIZE: number;

	readonly RENDERBUFFER_STENCIL_SIZE: number;

	readonly RENDERBUFFER_WIDTH: number;

	readonly RENDERER: number;

	readonly REPEAT: number;

	readonly REPLACE: number;

	readonly RGB: number;

	readonly RGB32F_EXT: number;

	readonly RGB565: number;

	readonly RGB5_A1: number;

	readonly RGBA: number;

	readonly RGBA32F_EXT: number;

	readonly RGBA4: number;

	readonly SAMPLER_2D: number;

	readonly SAMPLER_CUBE: number;

	readonly SAMPLES: number;

	readonly SAMPLE_ALPHA_TO_COVERAGE: number;

	readonly SAMPLE_BUFFERS: number;

	readonly SAMPLE_COVERAGE: number;

	readonly SAMPLE_COVERAGE_INVERT: number;

	readonly SAMPLE_COVERAGE_VALUE: number;

	readonly SCISSOR_BOX: number;

	readonly SCISSOR_TEST: number;

	readonly SHADER_TYPE: number;

	readonly SHADING_LANGUAGE_VERSION: number;

	readonly SRC_ALPHA: number;

	readonly SRC_ALPHA_SATURATE: number;

	readonly SRC_COLOR: number;

	readonly SRGB8_ALPHA8_EXT: number;

	readonly STATIC_DRAW: number;

	readonly STENCIL_ATTACHMENT: number;

	readonly STENCIL_BACK_FAIL: number;

	readonly STENCIL_BACK_FUNC: number;

	readonly STENCIL_BACK_PASS_DEPTH_FAIL: number;

	readonly STENCIL_BACK_PASS_DEPTH_PASS: number;

	readonly STENCIL_BACK_REF: number;

	readonly STENCIL_BACK_VALUE_MASK: number;

	readonly STENCIL_BACK_WRITEMASK: number;

	readonly STENCIL_BITS: number;

	readonly STENCIL_BUFFER_BIT: number;

	readonly STENCIL_CLEAR_VALUE: number;

	readonly STENCIL_FAIL: number;

	readonly STENCIL_FUNC: number;

	readonly STENCIL_INDEX8: number;

	readonly STENCIL_PASS_DEPTH_FAIL: number;

	readonly STENCIL_PASS_DEPTH_PASS: number;

	readonly STENCIL_REF: number;

	readonly STENCIL_TEST: number;

	readonly STENCIL_VALUE_MASK: number;

	readonly STENCIL_WRITEMASK: number;

	readonly STREAM_DRAW: number;

	readonly SUBPIXEL_BITS: number;

	readonly TEXTURE0: number;

	readonly TEXTURE1: number;

	readonly TEXTURE10: number;

	readonly TEXTURE11: number;

	readonly TEXTURE12: number;

	readonly TEXTURE13: number;

	readonly TEXTURE14: number;

	readonly TEXTURE15: number;

	readonly TEXTURE16: number;

	readonly TEXTURE17: number;

	readonly TEXTURE18: number;

	readonly TEXTURE19: number;

	readonly TEXTURE2: number;

	readonly TEXTURE20: number;

	readonly TEXTURE21: number;

	readonly TEXTURE22: number;

	readonly TEXTURE23: number;

	readonly TEXTURE24: number;

	readonly TEXTURE25: number;

	readonly TEXTURE26: number;

	readonly TEXTURE27: number;

	readonly TEXTURE28: number;

	readonly TEXTURE29: number;

	readonly TEXTURE3: number;

	readonly TEXTURE30: number;

	readonly TEXTURE31: number;

	readonly TEXTURE4: number;

	readonly TEXTURE5: number;

	readonly TEXTURE6: number;

	readonly TEXTURE7: number;

	readonly TEXTURE8: number;

	readonly TEXTURE9: number;

	readonly TEXTURE_2D: number;

	readonly TEXTURE_BINDING_2D: number;

	readonly TEXTURE_BINDING_CUBE_MAP: number;

	readonly TEXTURE_CUBE_MAP: number;

	readonly TEXTURE_CUBE_MAP_NEGATIVE_X: number;

	readonly TEXTURE_CUBE_MAP_NEGATIVE_Y: number;

	readonly TEXTURE_CUBE_MAP_NEGATIVE_Z: number;

	readonly TEXTURE_CUBE_MAP_POSITIVE_X: number;

	readonly TEXTURE_CUBE_MAP_POSITIVE_Y: number;

	readonly TEXTURE_CUBE_MAP_POSITIVE_Z: number;

	readonly TEXTURE_MAG_FILTER: number;

	readonly TEXTURE_MAX_ANISOTROPY_EXT: number;

	readonly TEXTURE_MIN_FILTER: number;

	readonly TEXTURE_WRAP_S: number;

	readonly TEXTURE_WRAP_T: number;

	readonly TRIANGLES: number;

	readonly TRIANGLE_FAN: number;

	readonly TRIANGLE_STRIP: number;

	readonly UNPACK_ALIGNMENT: number;

	readonly UNPACK_COLORSPACE_CONVERSION_WEBGL: number;

	readonly UNPACK_FLIP_Y_WEBGL: number;

	readonly UNPACK_PREMULTIPLY_ALPHA_WEBGL: number;

	readonly UNSIGNED_BYTE: number;

	readonly UNSIGNED_INT: number;

	readonly UNSIGNED_SHORT: number;

	readonly UNSIGNED_SHORT_4_4_4_4: number;

	readonly UNSIGNED_SHORT_5_5_5_1: number;

	readonly UNSIGNED_SHORT_5_6_5: number;

	readonly VALIDATE_STATUS: number;

	readonly VENDOR: number;

	readonly VERSION: number;

	readonly VERTEX_ATTRIB_ARRAY_BUFFER_BINDING: number;

	readonly VERTEX_ATTRIB_ARRAY_ENABLED: number;

	readonly VERTEX_ATTRIB_ARRAY_NORMALIZED: number;

	readonly VERTEX_ATTRIB_ARRAY_POINTER: number;

	readonly VERTEX_ATTRIB_ARRAY_SIZE: number;

	readonly VERTEX_ATTRIB_ARRAY_STRIDE: number;

	readonly VERTEX_ATTRIB_ARRAY_TYPE: number;

	readonly VERTEX_SHADER: number;

	readonly VIEWPORT: number;

	readonly ZERO: number;

	readonly drawingBufferHeight: number;

	readonly drawingBufferWidth: number;

	constructor(o: { canvas: Canvas; });

	constructor(o: { canvas: Canvas; attrs: NSDictionary<string, any>; });

	activeTextureWithTexture(texture: number): void;

	attachShaderWithProgramShader(program: number, shader: number): void;

	bindAttribLocationWithProgramIndexName(program: number, index: number, name: string): void;

	bindBufferWithTargetBuffer(target: number, buffer: number): void;

	bindFramebufferWithTargetFramebuffer(target: number, framebuffer: number): void;

	bindRenderbufferWithTargetRenderbuffer(target: number, renderbuffer: number): void;

	bindTextureWithTargetTexture(target: number, texture: number): void;

	blendColorWithRedGreenBlueAlpha(red: number, green: number, blue: number, alpha: number): void;

	blendEquationSeparateWithModeRGBModeAlpha(modeRGB: number, modeAlpha: number): void;

	blendEquationWithMode(mode: number): void;

	blendFuncSeparateWithSrcRGBDstRGBSrcAlphaDstAlpha(srcRGB: number, dstRGB: number, srcAlpha: number, dstAlpha: number): void;

	blendFuncWithSfactorDfactor(sfactor: number, dfactor: number): void;

	bufferDataWithTargetByteArrayUsage(target: number, srcData: NSArray<number> | number[], usage: number): void;

	bufferDataWithTargetFloatArrayUsage(target: number, srcData: NSArray<number> | number[], usage: number): void;

	bufferDataWithTargetIntArrayUsage(target: number, srcData: NSArray<number> | number[], usage: number): void;

	bufferDataWithTargetShortArrayUsage(target: number, srcData: NSArray<number> | number[], usage: number): void;

	bufferDataWithTargetSizeUsage(target: number, size: number, usage: number): void;

	bufferDataWithTargetSrcDataUsage(target: number, srcData: NSNull, usage: number): void;

	bufferSubDataWithTargetOffsetByteArray(target: number, offset: number, srcData: NSArray<number> | number[]): void;

	bufferSubDataWithTargetOffsetFloatArray(target: number, offset: number, srcData: NSArray<number> | number[]): void;

	bufferSubDataWithTargetOffsetIntArray(target: number, offset: number, srcData: NSArray<number> | number[]): void;

	bufferSubDataWithTargetOffsetShortArray(target: number, offset: number, srcData: NSArray<number> | number[]): void;

	checkFramebufferStatusWithTarget(target: number): number;

	clearColorWithRedGreenBlueAlpha(red: number, green: number, blue: number, alpha: number): void;

	clearDepthWithDepth(depth: number): void;

	clearStencilWithStencil(stencil: number): void;

	clearWithMask(mask: number): void;

	colorMaskWithRedGreenBlueAlpha(red: boolean, green: boolean, blue: boolean, alpha: boolean): void;

	commit(): void;

	compileShaderWithShader(shader: number): void;

	compressedTexImage2DWithTargetLevelInternalformatWidthHeightBorderByteArray(target: number, level: number, internalformat: number, width: number, height: number, border: number, pixels: NSArray<number> | number[]): void;

	compressedTexImage2DWithTargetLevelInternalformatWidthHeightBorderFloatArray(target: number, level: number, internalformat: number, width: number, height: number, border: number, pixels: NSArray<number> | number[]): void;

	compressedTexImage2DWithTargetLevelInternalformatWidthHeightBorderIntArray(target: number, level: number, internalformat: number, width: number, height: number, border: number, pixels: NSArray<number> | number[]): void;

	compressedTexImage2DWithTargetLevelInternalformatWidthHeightBorderPixels(target: number, level: number, internalformat: number, width: number, height: number, border: number, pixels: NSNull): void;

	compressedTexImage2DWithTargetLevelInternalformatWidthHeightBorderShortArray(target: number, level: number, internalformat: number, width: number, height: number, border: number, pixels: NSArray<number> | number[]): void;

	compressedTexSubImage2DWithTargetLevelXoffsetYoffsetWidthHeightFormatByteArray(target: number, level: number, xoffset: number, yoffset: number, width: number, height: number, format: number, pixels: NSArray<number> | number[]): void;

	compressedTexSubImage2DWithTargetLevelXoffsetYoffsetWidthHeightFormatFloatArray(target: number, level: number, xoffset: number, yoffset: number, width: number, height: number, format: number, pixels: NSArray<number> | number[]): void;

	compressedTexSubImage2DWithTargetLevelXoffsetYoffsetWidthHeightFormatIntArray(target: number, level: number, xoffset: number, yoffset: number, width: number, height: number, format: number, pixels: NSArray<number> | number[]): void;

	compressedTexSubImage2DWithTargetLevelXoffsetYoffsetWidthHeightFormatPixels(target: number, level: number, xoffset: number, yoffset: number, width: number, height: number, format: number, pixels: NSNull): void;

	compressedTexSubImage2DWithTargetLevelXoffsetYoffsetWidthHeightFormatShortArray(target: number, level: number, xoffset: number, yoffset: number, width: number, height: number, format: number, pixels: NSArray<number> | number[]): void;

	copyTexImage2DWithTargetLevelInternalformatXYWidthHeightBorder(target: number, level: number, internalformat: number, x: number, y: number, width: number, height: number, border: number): void;

	copyTexSubImage2DWithTargetLevelXoffsetYoffsetXYWidthHeight(target: number, level: number, xoffset: number, yoffset: number, x: number, y: number, width: number, height: number): void;

	createBuffer(): number;

	createFramebuffer(): number;

	createProgram(): number;

	createRenderbuffer(): number;

	createShaderWithType(type: number): number;

	createTexture(): number;

	cullFaceWithMode(mode: number): void;

	deleteBufferWithBuffer(buffer: number): void;

	deleteFramebufferWithFrameBuffer(frameBuffer: number): void;

	deleteProgramWithProgram(program: number): void;

	deleteRenderbufferWithRenderbuffer(renderbuffer: number): void;

	deleteShaderWithShader(shader: number): void;

	deleteTextureWithTexture(texture: number): void;

	depthFuncWithFn(fn: number): void;

	depthMaskWithFlag(flag: boolean): void;

	depthRangeWithZNearZFar(zNear: number, zFar: number): void;

	detachShaderWithProgramShader(program: number, shader: number): void;

	disableVertexAttribArrayWithIndex(index: number): void;

	disableWithCap(cap: number): void;

	drawArraysWithModeFirstCount(mode: number, first: number, count: number): void;

	drawElementsWithModeCountTypeOffset(mode: number, count: number, type: number, offset: number): void;

	enableVertexAttribArrayWithIndex(index: number): void;

	enableWithCap(cap: number): void;

	finish(): void;

	flush(): void;

	framebufferRenderbufferWithTargetAttachmentRenderbuffertargetRenderbuffer(target: number, attachment: number, renderbuffertarget: number, renderbuffer: number): void;

	framebufferTexture2DWithTargetAttachmentTextargetTextureLevel(target: number, attachment: number, textarget: number, texture: number, level: number): void;

	frontFaceWithMode(mode: number): void;

	generateMipmapWithTarget(target: number): void;

	getActiveAttribWithProgramIndex(program: number, index: number): WebGLActiveInfo;

	getActiveUniformWithProgramIndex(program: number, index: number): WebGLActiveInfo;

	getAttachedShadersWithProgram(program: number): NSArray<number>;

	getAttribLocationWithProgramName(program: number, name: string): number;

	getBufferParameterWithTargetPname(target: number, pname: number): number;

	getCanvas(): Canvas;

	getContextAttributes(): any;

	getError(): number;

	getExtensionWithName(name: string): any;

	getFramebufferAttachmentParameterWithTargetAttachmentPname(target: number, attachment: number, pname: number): FramebufferAttachmentParameter;

	getParameterWithPname(pname: number): any;

	getProgramInfoLogWithProgram(program: number): string;

	getProgramParameterWithProgramPname(program: number, pname: number): any;

	getRenderbufferParameterWithTargetPname(target: number, pname: number): number;

	getShaderInfoLogWithShader(shader: number): string;

	getShaderParameterWithShaderPname(shader: number, pname: number): any;

	getShaderPrecisionFormatWithShaderTypePrecisionType(shaderType: number, precisionType: number): WebGLShaderPrecisionFormat;

	getShaderSourceWithShader(shader: number): string;

	getSupportedExtensions(): NSArray<string>;

	getTexParameterWithTargetPname(target: number, pname: number): number;

	getUniformLocationWithProgramName(program: number, name: string): number;

	getUniformWithProgramLocation(program: number, location: number): any;

	getVertexAttribOffsetWithIndexPname(index: number, pname: number): number;

	getVertexAttribWithIndexPname(index: number, pname: number): any;

	hintWithTargetMode(target: number, mode: number): void;

	initWithCanvas(canvas: Canvas): this;

	initWithCanvasAttrs(canvas: Canvas, attrs: NSDictionary<string, any>): this;

	isBufferWithBuffer(buffer: number): boolean;

	isContextLost(): boolean;

	isEnabledWithCap(cap: number): boolean;

	isFramebufferWithFramebuffer(framebuffer: number): boolean;

	isProgramWithProgram(program: number): boolean;

	isRenderbufferWithRenderbuffer(renderbuffer: number): boolean;

	isShaderWithShader(shader: number): boolean;

	isTextureWithTexture(texture: number): boolean;

	lineWidthWithWidth(width: number): void;

	linkProgramWithProgram(program: number): void;

	pixelStoreiWithPnameParam(pname: number, param: number): void;

	polygonOffsetWithFactorUnits(factor: number, units: number): void;

	readPixelsWithXYWidthHeightFormatTypeByteArray(x: number, y: number, width: number, height: number, format: number, type: number, pixels: NSArray<number> | number[]): void;

	readPixelsWithXYWidthHeightFormatTypeFloatArray(x: number, y: number, width: number, height: number, format: number, type: number, pixels: NSArray<number> | number[]): void;

	readPixelsWithXYWidthHeightFormatTypeShortArray(x: number, y: number, width: number, height: number, format: number, type: number, pixels: NSArray<number> | number[]): void;

	renderbufferStorageWithTargetInternalFormatWidthHeight(target: number, internalFormat: number, width: number, height: number): void;

	sampleCoverageWithValueInvert(value: number, invert: boolean): void;

	scissorWithXYWidthHeight(x: number, y: number, width: number, height: number): void;

	shaderSourceWithShaderSource(shader: number, source: string): void;

	stencilFuncSeparateWithFaceFnRefMask(face: number, fn: number, ref: number, mask: number): void;

	stencilFuncWithFnRefMask(fn: number, ref: number, mask: number): void;

	stencilMaskSeparateWithFaceMask(face: number, mask: number): void;

	stencilMaskWithMask(mask: number): void;

	stencilOpSeparateWithFaceFailZfailZpass(face: number, fail: number, zfail: number, zpass: number): void;

	stencilOpWithFailZfailZpass(fail: number, zfail: number, zpass: number): void;

	texImage2DWithTargetLevelInternalformatFormatTypeAsset(target: number, level: number, internalformat: number, format: number, type: number, asset: ImageAsset): void;

	texImage2DWithTargetLevelInternalformatFormatTypeNone(target: number, level: number, internalformat: number, format: number, type: number, pixels: NSNull): void;

	texImage2DWithTargetLevelInternalformatFormatTypePixels(target: number, level: number, internalformat: number, format: number, type: number, pixels: UIImage): void;

	texImage2DWithTargetLevelInternalformatWidthHeightBorderFormatTypeByteArray(target: number, level: number, internalformat: number, width: number, height: number, border: number, format: number, type: number, pixels: NSArray<number> | number[]): void;

	texImage2DWithTargetLevelInternalformatWidthHeightBorderFormatTypeFloatArray(target: number, level: number, internalformat: number, width: number, height: number, border: number, format: number, type: number, pixels: NSArray<number> | number[]): void;

	texImage2DWithTargetLevelInternalformatWidthHeightBorderFormatTypeIntArray(target: number, level: number, internalformat: number, width: number, height: number, border: number, format: number, type: number, pixels: NSArray<number> | number[]): void;

	texImage2DWithTargetLevelInternalformatWidthHeightBorderFormatTypePixels(target: number, level: number, internalformat: number, width: number, height: number, border: number, format: number, type: number, pixels: NSNull): void;

	texImage2DWithTargetLevelInternalformatWidthHeightBorderFormatTypeShortArray(target: number, level: number, internalformat: number, width: number, height: number, border: number, format: number, type: number, pixels: NSArray<number> | number[]): void;

	texParameterfWithTargetPnameParam(target: number, pname: number, param: number): void;

	texParameteriWithTargetPnameParam(target: number, pname: number, param: number): void;

	texSubImage2DWithTargetLevelXoffsetYoffsetFormatTypeAsset(target: number, level: number, xoffset: number, yoffset: number, format: number, type: number, asset: ImageAsset): void;

	texSubImage2DWithTargetLevelXoffsetYoffsetFormatTypeNone(target: number, level: number, xoffset: number, yoffset: number, format: number, type: number, pixels: NSNull): void;

	texSubImage2DWithTargetLevelXoffsetYoffsetFormatTypePixels(target: number, level: number, xoffset: number, yoffset: number, format: number, type: number, pixels: UIImage): void;

	texSubImage2DWithTargetLevelXoffsetYoffsetWidthHeightFormatTypeByteArray(target: number, level: number, xoffset: number, yoffset: number, width: number, height: number, format: number, type: number, pixels: NSArray<number> | number[]): void;

	texSubImage2DWithTargetLevelXoffsetYoffsetWidthHeightFormatTypeFloatArray(target: number, level: number, xoffset: number, yoffset: number, width: number, height: number, format: number, type: number, pixels: NSArray<number> | number[]): void;

	texSubImage2DWithTargetLevelXoffsetYoffsetWidthHeightFormatTypePixels(target: number, level: number, xoffset: number, yoffset: number, width: number, height: number, format: number, type: number, pixels: NSNull): void;

	texSubImage2DWithTargetLevelXoffsetYoffsetWidthHeightFormatTypeShortArray(target: number, level: number, xoffset: number, yoffset: number, width: number, height: number, format: number, type: number, pixels: NSArray<number> | number[]): void;

	uniform1fWithLocationV0(location: number, v0: number): void;

	uniform1fvWithLocationValue(location: number, value: NSArray<number> | number[]): void;

	uniform1iWithLocationV0(location: number, v0: number): void;

	uniform1ivWithLocationValue(location: number, value: NSArray<number> | number[]): void;

	uniform2fWithLocationV0V1(location: number, v0: number, v1: number): void;

	uniform2fvWithLocationValue(location: number, value: NSArray<number> | number[]): void;

	uniform2iWithLocationV0V1(location: number, v0: number, v1: number): void;

	uniform2ivWithLocationValue(location: number, value: NSArray<number> | number[]): void;

	uniform3fWithLocationV0V1V2(location: number, v0: number, v1: number, v2: number): void;

	uniform3fvWithLocationValue(location: number, value: NSArray<number> | number[]): void;

	uniform3iWithLocationV0V1V2(location: number, v0: number, v1: number, v2: number): void;

	uniform3ivWithLocationValue(location: number, value: NSArray<number> | number[]): void;

	uniform4fWithLocationV0V1V2V3(location: number, v0: number, v1: number, v2: number, v3: number): void;

	uniform4fvWithLocationValue(location: number, value: NSArray<number> | number[]): void;

	uniform4iWithLocationV0V1V2V3(location: number, v0: number, v1: number, v2: number, v3: number): void;

	uniform4ivWithLocationValue(location: number, value: NSArray<number> | number[]): void;

	uniformMatrix2fvWithLocationTransposeValue(location: number, transpose: boolean, value: NSArray<number> | number[]): void;

	uniformMatrix3fvWithLocationTransposeValue(location: number, transpose: boolean, value: NSArray<number> | number[]): void;

	uniformMatrix4fvWithLocationTransposeValue(location: number, transpose: boolean, value: NSArray<number> | number[]): void;

	useProgramWithProgram(program: number): void;

	validateProgramWithProgram(program: number): void;

	vertexAttrib1fWithIndexV0(index: number, v0: number): void;

	vertexAttrib1fvWithIndexValue(index: number, value: NSArray<number> | number[]): void;

	vertexAttrib2fWithIndexV0V1(index: number, v0: number, v1: number): void;

	vertexAttrib2fvWithIndexValue(index: number, value: NSArray<number> | number[]): void;

	vertexAttrib3fWithIndexV0V1V2(index: number, v0: number, v1: number, v2: number): void;

	vertexAttrib3fvWithIndexValue(index: number, value: NSArray<number> | number[]): void;

	vertexAttrib4fWithIndexV0V1V2V3(index: number, v0: number, v1: number, v2: number, v3: number): void;

	vertexAttrib4fvWithIndexValue(index: number, value: NSArray<number> | number[]): void;

	vertexAttribPointerWithIndexSizeTypeNormalizedStrideOffset(index: number, size: number, type: number, normalized: boolean, stride: number, offset: number): void;

	viewportWithXYWidthHeight(x: number, y: number, width: number, height: number): void;
}

declare class WebGLShaderPrecisionFormat extends NSObject {

	static alloc(): WebGLShaderPrecisionFormat; // inherited from NSObject

	static new(): WebGLShaderPrecisionFormat; // inherited from NSObject

	readonly precision: number;

	readonly rangeMax: number;

	readonly rangeMin: number;

	constructor(o: { rangeMin: number; rangeMax: number; precision: number; });

	initWithRangeMinRangeMaxPrecision(rangeMin: number, rangeMax: number, precision: number): this;
}

declare function flipInPlace(data: string | interop.Pointer | interop.Reference<any>, width: number, height: number): void;

declare function flipInPlace3D(data: string | interop.Pointer | interop.Reference<any>, width: number, height: number, depth: number): void;

declare function free_image(image: string | interop.Pointer | interop.Reference<any>): void;

declare function image_load_error(): string;

declare function loadImageBytes(buffer: string | interop.Pointer | interop.Reference<any>, length: number, width: interop.Pointer | interop.Reference<number>, height: interop.Pointer | interop.Reference<number>, channels: interop.Pointer | interop.Reference<number>): string;

declare function loadImagePath(path: string | interop.Pointer | interop.Reference<any>, width: interop.Pointer | interop.Reference<number>, height: interop.Pointer | interop.Reference<number>, channels: interop.Pointer | interop.Reference<number>): string;

declare function native_arc(canvas_native_ptr: number, x: number, y: number, radius: number, start_angle: number, end_angle: number, anticlockwise: boolean): number;

declare function native_arc_to(canvas_native_ptr: number, x1: number, y1: number, x2: number, y2: number, radius: number): number;

declare function native_begin_path(canvas_native_ptr: number): number;

declare function native_bezier_curve_to(canvas_native_ptr: number, cp1x: number, cp1y: number, cp2x: number, cp2y: number, x: number, y: number): number;

declare function native_clear_canvas(canvas_native_ptr: number, view: interop.Pointer | interop.Reference<any>): number;

declare function native_clear_rect(canvas_native_ptr: number, x: number, y: number, width: number, height: number, view: interop.Pointer | interop.Reference<any>): number;

declare function native_clip(canvas_native_ptr: number, view: interop.Pointer | interop.Reference<any>): number;

declare function native_clip_path_rule(canvas_native_ptr: number, path: number, fill_rule: string | interop.Pointer | interop.Reference<any>, view: interop.Pointer | interop.Reference<any>): number;

declare function native_clip_rule(canvas_native_ptr: number, fill_rule: string | interop.Pointer | interop.Reference<any>, view: interop.Pointer | interop.Reference<any>): number;

declare function native_close_path(canvas_native_ptr: number): number;

declare function native_create_image_asset(): number;

declare function native_create_image_data(width: number, height: number): CanvasArray;

declare function native_create_matrix(): number;

declare function native_create_path_2d(): number;

declare function native_create_path_2d_from_path_data(data: string | interop.Pointer | interop.Reference<any>): number;

declare function native_create_path_from_path(path: number): number;

declare function native_destroy(canvas_ptr: number): void;

declare function native_draw_image(canvas_native_ptr: number, image_array: string | interop.Pointer | interop.Reference<any>, image_size: number, original_width: number, original_height: number, dx: number, dy: number, view: interop.Pointer | interop.Reference<any>): number;

declare function native_draw_image_dw(canvas_native_ptr: number, image_array: string | interop.Pointer | interop.Reference<any>, image_size: number, original_width: number, original_height: number, dx: number, dy: number, d_width: number, d_height: number, view: interop.Pointer | interop.Reference<any>): number;

declare function native_draw_image_dw_raw(canvas_native_ptr: number, image_array: string | interop.Pointer | interop.Reference<any>, image_size: number, original_width: number, original_height: number, dx: number, dy: number, d_width: number, d_height: number, view: interop.Pointer | interop.Reference<any>): number;

declare function native_draw_image_raw(canvas_native_ptr: number, image_array: string | interop.Pointer | interop.Reference<any>, image_size: number, original_width: number, original_height: number, dx: number, dy: number, view: interop.Pointer | interop.Reference<any>): number;

declare function native_draw_image_sw(canvas_native_ptr: number, image_array: string | interop.Pointer | interop.Reference<any>, image_size: number, original_width: number, original_height: number, sx: number, sy: number, s_width: number, s_height: number, dx: number, dy: number, d_width: number, d_height: number, view: interop.Pointer | interop.Reference<any>): number;

declare function native_draw_image_sw_raw(canvas_native_ptr: number, image_array: string | interop.Pointer | interop.Reference<any>, image_size: number, original_width: number, original_height: number, sx: number, sy: number, s_width: number, s_height: number, dx: number, dy: number, d_width: number, d_height: number, view: interop.Pointer | interop.Reference<any>): number;

declare function native_drop_image_data(data: CanvasArray): void;

declare function native_drop_text_metrics(data: CanvasTextMetrics): void;

declare function native_ellipse(canvas_native_ptr: number, x: number, y: number, radius_x: number, radius_y: number, rotation: number, start_angle: number, end_angle: number, anticlockwise: boolean): number;

declare function native_fill(canvas_native_ptr: number, view: interop.Pointer | interop.Reference<any>): number;

declare function native_fill_path_rule(canvas_native_ptr: number, path_ptr: number, rule: string | interop.Pointer | interop.Reference<any>, view: interop.Pointer | interop.Reference<any>): number;

declare function native_fill_rect(canvas_native_ptr: number, x: number, y: number, width: number, height: number, view: interop.Pointer | interop.Reference<any>): number;

declare function native_fill_rule(canvas_native_ptr: number, rule: string | interop.Pointer | interop.Reference<any>, view: interop.Pointer | interop.Reference<any>): number;

declare function native_fill_text(canvas_native_ptr: number, text: string | interop.Pointer | interop.Reference<any>, x: number, y: number, width: number, view: interop.Pointer | interop.Reference<any>): number;

declare function native_flush(canvas_ptr: number): number;

declare function native_free_matrix_data(data: CanvasArray): void;

declare function native_free_path_2d(path: number): void;

declare function native_get_image_data(canvas_native_ptr: number, sx: number, sy: number, sw: number, sh: number): CanvasArray;

declare function native_get_ios_device(canvas_native_ptr: number): CanvasDevice;

declare function native_get_matrix(matrix: number): CanvasArray;

declare function native_image_asset_flip_x(asset: number): number;

declare function native_image_asset_flip_y(asset: number): number;

declare function native_image_asset_free_bytes(data: CanvasArray): void;

declare function native_image_asset_get_bytes(asset: number): CanvasArray;

declare function native_image_asset_get_error(asset: number): string;

declare function native_image_asset_get_height(asset: number): number;

declare function native_image_asset_get_width(asset: number): number;

declare function native_image_asset_load_from_path(asset: number, path: string | interop.Pointer | interop.Reference<any>): number;

declare function native_image_asset_load_from_raw(asset: number, array: string | interop.Pointer | interop.Reference<any>, size: number): number;

declare function native_image_asset_release(asset: number): void;

declare function native_image_asset_scale(asset: number, x: number, y: number): number;

declare function native_image_smoothing_enabled(canvas_native_ptr: number, enabled: boolean): number;

declare function native_image_smoothing_quality(canvas_native_ptr: number, quality: string | interop.Pointer | interop.Reference<any>): number;

declare function native_init(width: number, height: number, device: interop.Pointer | interop.Reference<any>, queue: interop.Pointer | interop.Reference<any>, view: interop.Pointer | interop.Reference<any>, scale: number): number;

declare function native_init_legacy(width: number, height: number, buffer_id: number, scale: number): number;

declare function native_line_dash_offset(canvas_native_ptr: number, offset: number): number;

declare function native_line_join(canvas_native_ptr: number, line_cap: string | interop.Pointer | interop.Reference<any>): number;

declare function native_line_to(canvas_native_ptr: number, x: number, y: number): number;

declare function native_measure_text(canvas_native_ptr: number, text: string | interop.Pointer | interop.Reference<any>): CanvasTextMetrics;

declare function native_miter_limit(canvas_native_ptr: number, limit: number): number;

declare function native_move_to(canvas_native_ptr: number, x: number, y: number): number;

declare function native_native_image_asset_save_path(asset: number, path: string | interop.Pointer | interop.Reference<any>, format: number): number;

declare function native_path_2d_add_path(path: number, path_to_add: number, matrix: number): number;

declare function native_path_2d_arc(path: number, x: number, y: number, radius: number, start_angle: number, end_angle: number, anticlockwise: boolean): number;

declare function native_path_2d_arc_to(path: number, x1: number, y1: number, x2: number, y2: number, radius: number): number;

declare function native_path_2d_bezier_curve_to(path: number, cp1x: number, cp1y: number, cp2x: number, cp2y: number, x: number, y: number): number;

declare function native_path_2d_close_path(path: number): number;

declare function native_path_2d_ellipse(path: number, x: number, y: number, radius_x: number, radius_y: number, rotation: number, start_angle: number, end_angle: number, anticlockwise: boolean): number;

declare function native_path_2d_line_to(path: number, x: number, y: number): number;

declare function native_path_2d_move_to(path: number, x: number, y: number): number;

declare function native_path_2d_quadratic_curve_to(path: number, cpx: number, cpy: number, x: number, y: number): number;

declare function native_path_2d_rect(path: number, x: number, y: number, width: number, height: number): number;

declare function native_put_image_data(canvas_native_ptr: number, width: number, height: number, array: string | interop.Pointer | interop.Reference<any>, array_size: number, x: number, y: number, dirty_x: number, dirty_y: number, dirty_width: number, dirty_height: number): number;

declare function native_quadratic_curve_to(canvas_native_ptr: number, cpx: number, cpy: number, x: number, y: number): number;

declare function native_rect(canvas_native_ptr: number, x: number, y: number, width: number, height: number): number;

declare function native_reset_transform(canvas_native_ptr: number): number;

declare function native_restore(canvas_native_ptr: number): number;

declare function native_rotate(canvas_native_ptr: number, angle: number, view: interop.Pointer | interop.Reference<any>): number;

declare function native_save(canvas_native_ptr: number): number;

declare function native_scale(canvas_native_ptr: number, x: number, y: number, view: interop.Pointer | interop.Reference<any>): number;

declare function native_set_fill_color(canvas_native_ptr: number, color: number): number;

declare function native_set_fill_color_rgba(canvas_native_ptr: number, red: number, green: number, blue: number, alpha: number): number;

declare function native_set_fill_gradient_linear(canvas_native_ptr: number, x0: number, y0: number, x1: number, y1: number, colors_size: number, colors_array: interop.Pointer | interop.Reference<number>, positions_size: number, positions_array: interop.Pointer | interop.Reference<number>): number;

declare function native_set_fill_gradient_radial(canvas_native_ptr: number, x0: number, y0: number, radius_0: number, x1: number, y1: number, radius_1: number, colors_size: number, colors_array: interop.Pointer | interop.Reference<number>, positions_size: number, positions_array: interop.Pointer | interop.Reference<number>): number;

declare function native_set_font(canvas_native_ptr: number, font: string | interop.Pointer | interop.Reference<any>): number;

declare function native_set_global_alpha(canvas_native_ptr: number, alpha: number): number;

declare function native_set_global_composite_operation(canvas_native_ptr: number, composite: string | interop.Pointer | interop.Reference<any>): number;

declare function native_set_line_cap(canvas_native_ptr: number, line_cap: string | interop.Pointer | interop.Reference<any>): number;

declare function native_set_line_dash(canvas_native_ptr: number, size: number, array: interop.Pointer | interop.Reference<number>): number;

declare function native_set_line_width(canvas_native_ptr: number, line_width: number): number;

declare function native_set_matrix(matrix: number, array: interop.Pointer | interop.Reference<any>, length: number): number;

declare function native_set_stroke_color(canvas_native_ptr: number, color: number): number;

declare function native_set_stroke_color_rgba(canvas_native_ptr: number, red: number, green: number, blue: number, alpha: number): number;

declare function native_set_stroke_gradient_linear(canvas_native_ptr: number, x0: number, y0: number, x1: number, y1: number, colors_size: number, colors_array: interop.Pointer | interop.Reference<number>, positions_size: number, positions_array: interop.Pointer | interop.Reference<number>): number;

declare function native_set_stroke_gradient_radial(canvas_native_ptr: number, x0: number, y0: number, radius_0: number, x1: number, y1: number, radius_1: number, colors_size: number, colors_array: interop.Pointer | interop.Reference<number>, positions_size: number, positions_array: interop.Pointer | interop.Reference<number>): number;

declare function native_set_transform(canvas_native_ptr: number, a: number, b: number, c: number, d: number, e: number, f: number, view: interop.Pointer | interop.Reference<any>): number;

declare function native_shadow_blur(canvas_native_ptr: number, limit: number): number;

declare function native_shadow_color(canvas_native_ptr: number, color: number): number;

declare function native_shadow_offset_x(canvas_native_ptr: number, x: number): number;

declare function native_shadow_offset_y(canvas_native_ptr: number, y: number): number;

declare function native_stroke(canvas_native_ptr: number, view: interop.Pointer | interop.Reference<any>): number;

declare function native_stroke_path(canvas_native_ptr: number, path: number, view: interop.Pointer | interop.Reference<any>): number;

declare function native_stroke_rect(canvas_native_ptr: number, x: number, y: number, width: number, height: number, view: interop.Pointer | interop.Reference<any>): number;

declare function native_stroke_text(canvas_native_ptr: number, text: string | interop.Pointer | interop.Reference<any>, x: number, y: number, width: number, view: interop.Pointer | interop.Reference<any>): number;

declare function native_surface_resized(width: number, height: number, device: interop.Pointer | interop.Reference<any>, queue: interop.Pointer | interop.Reference<any>, scale: number, current_canvas: number): number;

declare function native_surface_resized_legacy(width: number, height: number, buffer_id: number, scale: number, canvas_native_ptr: number): number;

declare function native_text_align(canvas_native_ptr: number, alignment: string | interop.Pointer | interop.Reference<any>): number;

declare function native_to_data_url(canvas_ptr: number, format: string | interop.Pointer | interop.Reference<any>, quality: number): string;

declare function native_transform(canvas_native_ptr: number, a: number, b: number, c: number, d: number, e: number, f: number, _view: interop.Pointer | interop.Reference<any>): number;

declare function native_translate(canvas_native_ptr: number, x: number, y: number, view: interop.Pointer | interop.Reference<any>): number;

declare function offsetBy(data: string | interop.Pointer | interop.Reference<any>, offset: number): void;
