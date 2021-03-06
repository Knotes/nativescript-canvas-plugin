import {
    WebGLActiveInfo,
    WebGLBuffer,
    WebGLProgram,
    WebGLQuery,
    WebGLSampler,
    WebGLSync,
    WebGLTexture,
    WebGLTransformFeedback,
    WebGLUniformLocation,
    WebGLVertexArrayObject
} from './canvas-plugin.common';

import {TNSWebGLRenderingContext} from './TNSWebGLRenderingContext';
import {ImageSource} from '@nativescript/core/image-source';
import {TNSImageAsset} from './TNSImageAsset';

export class TNSWebGL2RenderingContext extends TNSWebGLRenderingContext {
    public static isDebug = false;

    constructor(context) {
        super(context);
    }

    /* Getting GL parameter information */
    public get READ_BUFFER(): number {
        return this.native.READ_BUFFER;
    }

    public get UNPACK_ROW_LENGTH(): number {
        return this.native.UNPACK_ROW_LENGTH;
    }

    public get UNPACK_SKIP_ROWS(): number {
        return this.native.UNPACK_SKIP_ROWS;
    }

    public get UNPACK_SKIP_PIXELS(): number {
        return this.native.UNPACK_SKIP_PIXELS;
    }

    public get PACK_ROW_LENGTH(): number {
        return this.native.PACK_ROW_LENGTH;
    }

    public get PACK_SKIP_ROWS(): number {
        return this.native.PACK_SKIP_ROWS;
    }

    public get PACK_SKIP_PIXELS(): number {
        return this.native.PACK_SKIP_PIXELS;
    }

    public get TEXTURE_BINDING_3D(): number {
        return this.native.TEXTURE_BINDING_3D;
    }

    public get UNPACK_SKIP_IMAGES(): number {
        return this.native.UNPACK_SKIP_IMAGES;
    }

    public get UNPACK_IMAGE_HEIGHT(): number {
        return this.native.UNPACK_IMAGE_HEIGHT;
    }

    public get MAX_3D_TEXTURE_SIZE(): number {
        return this.native.MAX_3D_TEXTURE_SIZE;
    }

    public get MAX_ELEMENTS_VERTICES(): number {
        return this.native.MAX_ELEMENTS_VERTICES;
    }

    public get MAX_ELEMENTS_INDICES(): number {
        return this.native.MAX_ELEMENTS_INDICES;
    }

    public get MAX_TEXTURE_LOD_BIAS(): number {
        return this.native.MAX_TEXTURE_LOD_BIAS;
    }

    public get MAX_FRAGMENT_UNIFORM_COMPONENTS(): number {
        return this.native.MAX_FRAGMENT_UNIFORM_COMPONENTS;
    }

    public get MAX_VERTEX_UNIFORM_COMPONENTS(): number {
        return this.native.MAX_VERTEX_UNIFORM_COMPONENTS;
    }

    public get MAX_ARRAY_TEXTURE_LAYERS(): number {
        return this.native.MAX_ARRAY_TEXTURE_LAYERS;
    }

    public get MIN_PROGRAM_TEXEL_OFFSET(): number {
        return this.native.MIN_PROGRAM_TEXEL_OFFSET;
    }

    public get MAX_PROGRAM_TEXEL_OFFSET(): number {
        return this.native.MAX_PROGRAM_TEXEL_OFFSET;
    }

    public get MAX_VARYING_COMPONENTS(): number {
        return this.native.MAX_VARYING_COMPONENTS;
    }

    public get FRAGMENT_SHADER_DERIVATIVE_HINT(): number {
        return this.native.FRAGMENT_SHADER_DERIVATIVE_HINT;
    }

    public get RASTERIZER_DISCARD(): number {
        return this.native.RASTERIZER_DISCARD;
    }

    public get VERTEX_ARRAY_BINDING(): number {
        return this.native.VERTEX_ARRAY_BINDING;
    }

    public get MAX_VERTEX_OUTPUT_COMPONENTS(): number {
        return this.native.MAX_VERTEX_OUTPUT_COMPONENTS;
    }

    public get MAX_FRAGMENT_INPUT_COMPONENTS(): number {
        return this.native.MAX_FRAGMENT_INPUT_COMPONENTS;
    }

    public get MAX_SERVER_WAIT_TIMEOUT(): number {
        return this.native.MAX_SERVER_WAIT_TIMEOUT;
    }

    public get MAX_ELEMENT_INDEX(): number {
        return this.native.MAX_ELEMENT_INDEX;
    }

    public get RED(): number {
        return this.native.RED;
    }

    public get RGB8(): number {
        return this.native.RGB8;
    }

    public get RGBA8(): number {
        return this.native.RGBA8;
    }

    public get RGB10_A2(): number {
        return this.native.RGB10_A2;
    }

    public get TEXTURE_3D(): number {
        return this.native.TEXTURE_3D;
    }

    public get TEXTURE_WRAP_R(): number {
        return this.native.TEXTURE_WRAP_R;
    }

    public get TEXTURE_MIN_LOD(): number {
        return this.native.TEXTURE_MIN_LOD;
    }

    public get TEXTURE_MAX_LOD(): number {
        return this.native.TEXTURE_MAX_LOD;
    }

    public get TEXTURE_BASE_LEVEL(): number {
        return this.native.TEXTURE_BASE_LEVEL;
    }

    public get TEXTURE_MAX_LEVEL(): number {
        return this.native.TEXTURE_MAX_LEVEL;
    }

    public get TEXTURE_COMPARE_MODE(): number {
        return this.native.TEXTURE_COMPARE_MODE;
    }

    public get TEXTURE_COMPARE_FUNC(): number {
        return this.native.TEXTURE_COMPARE_FUNC;
    }

    public get SRGB(): number {
        return this.native.SRGB;
    }

    public get SRGB8(): number {
        return this.native.SRGB8;
    }

    public get SRGB8_ALPHA8(): number {
        return this.native.SRGB8_ALPHA8;
    }

    public get COMPARE_REF_TO_TEXTURE(): number {
        return this.native.COMPARE_REF_TO_TEXTURE;
    }

    public get RGBA32F(): number {
        return this.native.RGBA32F;
    }

    public get RGB32F(): number {
        return this.native.RGB32F;
    }

    public get RGBA16F(): number {
        return this.native.RGBA16F;
    }

    public get RGB16F(): number {
        return this.native.RGB16F;
    }

    public get TEXTURE_2D_ARRAY(): number {
        return this.native.TEXTURE_2D_ARRAY;
    }

    public get TEXTURE_BINDING_2D_ARRAY(): number {
        return this.native.TEXTURE_BINDING_2D_ARRAY;
    }

    public get R11F_G11F_B10F(): number {
        return this.native.R11F_G11F_B10F;
    }

    public get RGB9_E5(): number {
        return this.native.RGB9_E5;
    }

    public get RGBA32UI(): number {
        return this.native.RGBA32UI;
    }

    public get RGB32UI(): number {
        return this.native.RGB32UI;
    }

    public get RGBA16UI(): number {
        return this.native.RGBA16UI;
    }

    public get RGB16UI(): number {
        return this.native.RGB16UI;
    }

    public get RGBA8UI(): number {
        return this.native.RGBA8UI;
    }

    public get RGB8UI(): number {
        return this.native.RGB8UI;
    }

    public get RGBA32I(): number {
        return this.native.RGBA32I;
    }

    public get RGB32I(): number {
        return this.native.RGB32I;
    }

    public get RGBA16I(): number {
        return this.native.RGBA16I;
    }

    public get RGB16I(): number {
        return this.native.RGB16I;
    }

    public get RGBA8I(): number {
        return this.native.RGBA8I;
    }

    public get RGB8I(): number {
        return this.native.RGB8I;
    }

    public get RED_INTEGER(): number {
        return this.native.RED_INTEGER;
    }

    public get RGB_INTEGER(): number {
        return this.native.RGB_INTEGER;
    }

    public get RGBA_INTEGER(): number {
        return this.native.RGBA_INTEGER;
    }

    public get R8(): number {
        return this.native.R8;
    }

    public get RG8(): number {
        return this.native.RG8;
    }

    public get R16F(): number {
        return this.native.R16F;
    }

    public get R32F(): number {
        return this.native.R32F;
    }

    public get RG16F(): number {
        return this.native.RG16F;
    }

    public get RG32F(): number {
        return this.native.RG32F;
    }

    public get R8I(): number {
        return this.native.R8I;
    }

    public get R8UI(): number {
        return this.native.R8UI;
    }

    public get R16I(): number {
        return this.native.R16I;
    }

    public get R16UI(): number {
        return this.native.R16UI;
    }

    public get R32I(): number {
        return this.native.R32I;
    }

    public get R32UI(): number {
        return this.native.R32UI;
    }

    public get RG8I(): number {
        return this.native.RG8I;
    }

    public get RG8UI(): number {
        return this.native.RG8UI;
    }

    public get RG16I(): number {
        return this.native.RG16I;
    }

    public get RG16UI(): number {
        return this.native.RG16UI;
    }

    public get RG32I(): number {
        return this.native.RG32I;
    }

    public get RG32UI(): number {
        return this.native.RG32UI;
    }

    public get R8_SNORM(): number {
        return this.native.R8_SNORM;
    }

    public get RG8_SNORM(): number {
        return this.native.RG8_SNORM;
    }

    public get RGB8_SNORM(): number {
        return this.native.RGB8_SNORM;
    }

    public get RGBA8_SNORM(): number {
        return this.native.RGBA8_SNORM;
    }

    public get RGB10_A2UI(): number {
        return this.native.RGB10_A2UI;
    }

    public get TEXTURE_IMMUTABLE_FORMAT(): number {
        return this.native.TEXTURE_IMMUTABLE_FORMAT;
    }

    public get TEXTURE_IMMUTABLE_LEVELS(): number {
        return this.native.TEXTURE_IMMUTABLE_LEVELS;
    }

    public get UNSIGNED_INT_2_10_10_10_REV(): number {
        return this.native.UNSIGNED_INT_2_10_10_10_REV;
    }

    public get UNSIGNED_INT_10F_11F_11F_REV(): number {
        return this.native.UNSIGNED_INT_10F_11F_11F_REV;
    }

    public get UNSIGNED_INT_5_9_9_9_REV(): number {
        return this.native.UNSIGNED_INT_5_9_9_9_REV;
    }

    public get FLOAT_32_UNSIGNED_INT_24_8_REV(): number {
        return this.native.FLOAT_32_UNSIGNED_INT_24_8_REV;
    }

    public get UNSIGNED_INT_24_8(): number {
        return this.native.UNSIGNED_INT_24_8;
    }

    public get HALF_FLOAT(): number {
        return this.native.HALF_FLOAT;
    }

    public get RG(): number {
        return this.native.RG;
    }

    public get RG_INTEGER(): number {
        return this.native.RG_INTEGER;
    }

    public get INT_2_10_10_10_REV(): number {
        return this.native.INT_2_10_10_10_REV;
    }

    public get QUERY_RESULT_AVAILABLE(): number {
        return this.native.QUERY_RESULT_AVAILABLE;
    }

    public get QUERY_RESULT(): number {
        return this.native.QUERY_RESULT;
    }

    public get CURRENT_QUERY(): number {
        return this.native.CURRENT_QUERY;
    }

    public get ANY_SAMPLES_PASSED(): number {
        return this.native.ANY_SAMPLES_PASSED;
    }

    public get ANY_SAMPLES_PASSED_CONSERVATIVE(): number {
        return this.native.ANY_SAMPLES_PASSED_CONSERVATIVE;
    }

    public get MAX_DRAW_BUFFERS(): number {
        return this.native.MAX_DRAW_BUFFERS;
    }

    public get DRAW_BUFFER0(): number {
        return this.native.DRAW_BUFFER0;
    }

    public get DRAW_BUFFER1(): number {
        return this.native.DRAW_BUFFER1;
    }

    public get DRAW_BUFFER2(): number {
        return this.native.DRAW_BUFFER2;
    }

    public get DRAW_BUFFER3(): number {
        return this.native.DRAW_BUFFER3;
    }

    public get DRAW_BUFFER4(): number {
        return this.native.DRAW_BUFFER4;
    }

    public get DRAW_BUFFER5(): number {
        return this.native.DRAW_BUFFER5;
    }

    public get DRAW_BUFFER6(): number {
        return this.native.DRAW_BUFFER6;
    }

    public get DRAW_BUFFER7(): number {
        return this.native.DRAW_BUFFER7;
    }

    public get DRAW_BUFFER8(): number {
        return this.native.DRAW_BUFFER8;
    }

    public get DRAW_BUFFER9(): number {
        return this.native.DRAW_BUFFER9;
    }

    public get DRAW_BUFFER10(): number {
        return this.native.DRAW_BUFFER10;
    }

    /* Getting GL parameter information */


    /* Textures */

    public get DRAW_BUFFER11(): number {
        return this.native.DRAW_BUFFER11;
    }

    public get DRAW_BUFFER12(): number {
        return this.native.DRAW_BUFFER12;
    }

    public get DRAW_BUFFER13(): number {
        return this.native.DRAW_BUFFER13;
    }

    public get DRAW_BUFFER14(): number {
        return this.native.DRAW_BUFFER14;
    }

    public get DRAW_BUFFER15(): number {
        return this.native.DRAW_BUFFER15;
    }

    public get MAX_COLOR_ATTACHMENTS(): number {
        return this.native.MAX_COLOR_ATTACHMENTS;
    }

    public get COLOR_ATTACHMENT1(): number {
        return this.native.COLOR_ATTACHMENT1;
    }

    public get COLOR_ATTACHMENT2(): number {
        return this.native.COLOR_ATTACHMENT2;
    }

    public get COLOR_ATTACHMENT3(): number {
        return this.native.COLOR_ATTACHMENT3;
    }

    public get COLOR_ATTACHMENT4(): number {
        return this.native.COLOR_ATTACHMENT4;
    }

    public get COLOR_ATTACHMENT5(): number {
        return this.native.COLOR_ATTACHMENT5;
    }

    public get COLOR_ATTACHMENT6(): number {
        return this.native.COLOR_ATTACHMENT6;
    }

    public get COLOR_ATTACHMENT7(): number {
        return this.native.COLOR_ATTACHMENT7;
    }

    public get COLOR_ATTACHMENT8(): number {
        return this.native.COLOR_ATTACHMENT8;
    }

    public get COLOR_ATTACHMENT9(): number {
        return this.native.COLOR_ATTACHMENT9;
    }

    public get COLOR_ATTACHMENT10(): number {
        return this.native.COLOR_ATTACHMENT10;
    }

    public get COLOR_ATTACHMENT11(): number {
        return this.native.COLOR_ATTACHMENT11;
    }

    public get COLOR_ATTACHMENT12(): number {
        return this.native.COLOR_ATTACHMENT12;
    }

    public get COLOR_ATTACHMENT13(): number {
        return this.native.COLOR_ATTACHMENT13;
    }

    public get COLOR_ATTACHMENT14(): number {
        return this.native.COLOR_ATTACHMENT14;
    }

    public get COLOR_ATTACHMENT15(): number {
        return this.native.COLOR_ATTACHMENT15;
    }

    public get SAMPLER_3D(): number {
        return this.native.SAMPLER_3D;
    }

    public get SAMPLER_2D_SHADOW(): number {
        return this.native.SAMPLER_2D_SHADOW;
    }

    public get SAMPLER_2D_ARRAY(): number {
        return this.native.SAMPLER_2D_ARRAY;
    }

    public get SAMPLER_2D_ARRAY_SHADOW(): number {
        return this.native.SAMPLER_2D_ARRAY_SHADOW;
    }

    public get SAMPLER_CUBE_SHADOW(): number {
        return this.native.SAMPLER_CUBE_SHADOW;
    }

    public get INT_SAMPLER_2D(): number {
        return this.native.INT_SAMPLER_2D;
    }

    public get INT_SAMPLER_3D(): number {
        return this.native.INT_SAMPLER_3D;
    }

    public get INT_SAMPLER_CUBE(): number {
        return this.native.INT_SAMPLER_CUBE;
    }

    public get INT_SAMPLER_2D_ARRAY(): number {
        return this.native.INT_SAMPLER_2D_ARRAY;
    }

    public get UNSIGNED_INT_SAMPLER_2D(): number {
        return this.native.UNSIGNED_INT_SAMPLER_2D;
    }

    public get UNSIGNED_INT_SAMPLER_3D(): number {
        return this.native.UNSIGNED_INT_SAMPLER_3D;
    }

    public get UNSIGNED_INT_SAMPLER_CUBE(): number {
        return this.native.UNSIGNED_INT_SAMPLER_CUBE;
    }

    public get UNSIGNED_INT_SAMPLER_2D_ARRAY(): number {
        return this.native.UNSIGNED_INT_SAMPLER_2D_ARRAY;
    }

    public get MAX_SAMPLES(): number {
        return this.native.MAX_SAMPLES;
    }

    public get SAMPLER_BINDING(): number {
        return this.native.SAMPLER_BINDING;
    }

    public get PIXEL_PACK_BUFFER(): number {
        return this.native.PIXEL_PACK_BUFFER;
    }

    public get PIXEL_UNPACK_BUFFER(): number {
        return this.native.PIXEL_UNPACK_BUFFER;
    }

    public get PIXEL_PACK_BUFFER_BINDING(): number {
        return this.native.PIXEL_PACK_BUFFER_BINDING;
    }

    public get PIXEL_UNPACK_BUFFER_BINDING(): number {
        return this.native.PIXEL_UNPACK_BUFFER_BINDING;
    }

    public get COPY_READ_BUFFER(): number {
        return this.native.COPY_READ_BUFFER;
    }

    public get COPY_WRITE_BUFFER(): number {
        return this.native.COPY_WRITE_BUFFER;
    }

    public get COPY_READ_BUFFER_BINDING(): number {
        return this.native.COPY_READ_BUFFER_BINDING;
    }

    public get COPY_WRITE_BUFFER_BINDING(): number {
        return this.native.COPY_WRITE_BUFFER_BINDING;
    }

    public get FLOAT_MAT2x3(): number {
        return this.native.FLOAT_MAT2x3;
    }

    public get FLOAT_MAT2x4(): number {
        return this.native.FLOAT_MAT2x4;
    }

    public get FLOAT_MAT3x2(): number {
        return this.native.FLOAT_MAT3x2;
    }

    public get FLOAT_MAT3x4(): number {
        return this.native.FLOAT_MAT3x4;
    }

    public get FLOAT_MAT4x2(): number {
        return this.native.FLOAT_MAT4x2;
    }

    public get FLOAT_MAT4x3(): number {
        return this.native.FLOAT_MAT4x3;
    }

    public get UNSIGNED_INT_VEC2(): number {
        return this.native.UNSIGNED_INT_VEC2;
    }

    public get UNSIGNED_INT_VEC3(): number {
        return this.native.UNSIGNED_INT_VEC3;
    }

    public get UNSIGNED_INT_VEC4(): number {
        return this.native.UNSIGNED_INT_VEC4;
    }

    public get UNSIGNED_NORMALIZED(): number {
        return this.native.UNSIGNED_NORMALIZED;
    }

    public get SIGNED_NORMALIZED(): number {
        return this.native.SIGNED_NORMALIZED;
    }

    /* Vertex attributes */
    public get VERTEX_ATTRIB_ARRAY_INTEGER(): number {
        return this.native.VERTEX_ATTRIB_ARRAY_INTEGER;
    }

    public get VERTEX_ATTRIB_ARRAY_DIVISOR(): number {
        return this.native.VERTEX_ATTRIB_ARRAY_DIVISOR;
    }

    public get TRANSFORM_FEEDBACK_BUFFER_MODE(): number {
        return this.native.TRANSFORM_FEEDBACK_BUFFER_MODE;
    }

    public get MAX_TRANSFORM_FEEDBACK_SEPARATE_COMPONENTS(): number {
        return this.native.MAX_TRANSFORM_FEEDBACK_SEPARATE_COMPONENTS;
    }

    public get TRANSFORM_FEEDBACK_VARYINGS(): number {
        return this.native.TRANSFORM_FEEDBACK_VARYINGS;
    }

    public get TRANSFORM_FEEDBACK_BUFFER_START(): number {
        return this.native.TRANSFORM_FEEDBACK_BUFFER_START;
    }

    public get TRANSFORM_FEEDBACK_BUFFER_SIZE(): number {
        return this.native.TRANSFORM_FEEDBACK_BUFFER_SIZE;
    }

    public get TRANSFORM_FEEDBACK_PRIMITIVES_WRITTEN(): number {
        return this.native.TRANSFORM_FEEDBACK_PRIMITIVES_WRITTEN;
    }

    public get MAX_TRANSFORM_FEEDBACK_INTERLEAVED_COMPONENTS(): number {
        return this.native.MAX_TRANSFORM_FEEDBACK_INTERLEAVED_COMPONENTS;
    }

    /* Textures */


    /* Pixel types */

    public get MAX_TRANSFORM_FEEDBACK_SEPARATE_ATTRIBS(): number {
        return this.native.MAX_TRANSFORM_FEEDBACK_SEPARATE_ATTRIBS;
    }

    public get INTERLEAVED_ATTRIBS(): number {
        return this.native.INTERLEAVED_ATTRIBS;
    }

    public get SEPARATE_ATTRIBS(): number {
        return this.native.SEPARATE_ATTRIBS;
    }

    public get TRANSFORM_FEEDBACK_BUFFER(): number {
        return this.native.TRANSFORM_FEEDBACK_BUFFER;
    }

    public get TRANSFORM_FEEDBACK_BUFFER_BINDING(): number {
        return this.native.TRANSFORM_FEEDBACK_BUFFER_BINDING;
    }

    public get TRANSFORM_FEEDBACK(): number {
        return this.native.TRANSFORM_FEEDBACK;
    }

    public get TRANSFORM_FEEDBACK_PAUSED(): number {
        return this.native.TRANSFORM_FEEDBACK_PAUSED;
    }

    public get TRANSFORM_FEEDBACK_ACTIVE(): number {
        return this.native.TRANSFORM_FEEDBACK_ACTIVE;
    }

    public get TRANSFORM_FEEDBACK_BINDING(): number {
        return this.native.TRANSFORM_FEEDBACK_BINDING;
    }

    /* Pixel types */


    /* Queries */

    public get FRAMEBUFFER_ATTACHMENT_COLOR_ENCODING(): number {
        return this.native.FRAMEBUFFER_ATTACHMENT_COLOR_ENCODING;
    }

    public get FRAMEBUFFER_ATTACHMENT_COMPONENT_TYPE(): number {
        return this.native.FRAMEBUFFER_ATTACHMENT_COMPONENT_TYPE;
    }

    public get FRAMEBUFFER_ATTACHMENT_RED_SIZE(): number {
        return this.native.FRAMEBUFFER_ATTACHMENT_RED_SIZE;
    }

    public get FRAMEBUFFER_ATTACHMENT_GREEN_SIZE(): number {
        return this.native.FRAMEBUFFER_ATTACHMENT_GREEN_SIZE;
    }

    public get FRAMEBUFFER_ATTACHMENT_BLUE_SIZE(): number {
        return this.native.FRAMEBUFFER_ATTACHMENT_BLUE_SIZE;
    }

    /* Queries */


    /* Draw buffers */

    public get FRAMEBUFFER_ATTACHMENT_ALPHA_SIZE(): number {
        return this.native.FRAMEBUFFER_ATTACHMENT_ALPHA_SIZE;
    }

    public get FRAMEBUFFER_ATTACHMENT_DEPTH_SIZE(): number {
        return this.native.FRAMEBUFFER_ATTACHMENT_DEPTH_SIZE;
    }

    public get FRAMEBUFFER_ATTACHMENT_STENCIL_SIZE(): number {
        return this.native.FRAMEBUFFER_ATTACHMENT_STENCIL_SIZE;
    }

    public get FRAMEBUFFER_DEFAULT(): number {
        return this.native.FRAMEBUFFER_DEFAULT;
    }

    public get DEPTH_STENCIL_ATTACHMENT(): number {
        return this.native.DEPTH_STENCIL_ATTACHMENT;
    }

    public get DEPTH_STENCIL(): number {
        return this.native.DEPTH_STENCIL;
    }

    public get DEPTH24_STENCIL8(): number {
        return this.native.DEPTH24_STENCIL8;
    }

    public get DRAW_FRAMEBUFFER_BINDING(): number {
        return this.native.DRAW_FRAMEBUFFER_BINDING;
    }

    public get READ_FRAMEBUFFER(): number {
        return this.native.READ_FRAMEBUFFER;
    }

    public get DRAW_FRAMEBUFFER(): number {
        return this.native.DRAW_FRAMEBUFFER;
    }

    public get READ_FRAMEBUFFER_BINDING(): number {
        return this.native.READ_FRAMEBUFFER_BINDING;
    }

    public get RENDERBUFFER_SAMPLES(): number {
        return this.native.RENDERBUFFER_SAMPLES;
    }

    public get FRAMEBUFFER_ATTACHMENT_TEXTURE_LAYER(): number {
        return this.native.FRAMEBUFFER_ATTACHMENT_TEXTURE_LAYER;
    }

    public get FRAMEBUFFER_INCOMPLETE_MULTISAMPLE(): number {
        return this.native.FRAMEBUFFER_INCOMPLETE_MULTISAMPLE;
    }

    public get UNIFORM_BUFFER(): number {
        return this.native.UNIFORM_BUFFER;
    }

    public get UNIFORM_BUFFER_BINDING(): number {
        return this.native.UNIFORM_BUFFER_BINDING;
    }

    public get UNIFORM_BUFFER_START(): number {
        return this.native.UNIFORM_BUFFER_START;
    }

    public get UNIFORM_BUFFER_SIZE(): number {
        return this.native.UNIFORM_BUFFER_SIZE;
    }

    public get MAX_VERTEX_UNIFORM_BLOCKS(): number {
        return this.native.MAX_VERTEX_UNIFORM_BLOCKS;
    }

    public get MAX_FRAGMENT_UNIFORM_BLOCKS(): number {
        return this.native.MAX_FRAGMENT_UNIFORM_BLOCKS;
    }

    public get MAX_COMBINED_UNIFORM_BLOCKS(): number {
        return this.native.MAX_COMBINED_UNIFORM_BLOCKS;
    }

    public get MAX_UNIFORM_BUFFER_BINDINGS(): number {
        return this.native.MAX_UNIFORM_BUFFER_BINDINGS;
    }

    public get MAX_UNIFORM_BLOCK_SIZE(): number {
        return this.native.MAX_UNIFORM_BLOCK_SIZE;
    }

    public get MAX_COMBINED_VERTEX_UNIFORM_COMPONENTS(): number {
        return this.native.MAX_COMBINED_VERTEX_UNIFORM_COMPONENTS;
    }

    public get MAX_COMBINED_FRAGMENT_UNIFORM_COMPONENTS(): number {
        return this.native.MAX_COMBINED_FRAGMENT_UNIFORM_COMPONENTS;
    }

    public get UNIFORM_BUFFER_OFFSET_ALIGNMENT(): number {
        return this.native.UNIFORM_BUFFER_OFFSET_ALIGNMENT;
    }

    public get ACTIVE_UNIFORM_BLOCKS(): number {
        return this.native.ACTIVE_UNIFORM_BLOCKS;
    }

    public get UNIFORM_TYPE(): number {
        return this.native.UNIFORM_TYPE;
    }

    public get UNIFORM_SIZE(): number {
        return this.native.UNIFORM_SIZE;
    }

    public get UNIFORM_BLOCK_INDEX(): number {
        return this.native.UNIFORM_BLOCK_INDEX;
    }

    public get UNIFORM_OFFSET(): number {
        return this.native.UNIFORM_OFFSET;
    }

    public get UNIFORM_ARRAY_STRIDE(): number {
        return this.native.UNIFORM_ARRAY_STRIDE;
    }

    public get UNIFORM_MATRIX_STRIDE(): number {
        return this.native.UNIFORM_MATRIX_STRIDE;
    }

    /* Draw buffers */

    /* Samplers */

    public get UNIFORM_IS_ROW_MAJOR(): number {
        return this.native.UNIFORM_IS_ROW_MAJOR;
    }

    public get UNIFORM_BLOCK_BINDING(): number {
        return this.native.UNIFORM_BLOCK_BINDING;
    }

    public get UNIFORM_BLOCK_DATA_SIZE(): number {
        return this.native.UNIFORM_BLOCK_DATA_SIZE;
    }

    public get UNIFORM_BLOCK_ACTIVE_UNIFORMS(): number {
        return this.native.UNIFORM_BLOCK_ACTIVE_UNIFORMS;
    }

    public get UNIFORM_BLOCK_ACTIVE_UNIFORM_INDICES(): number {
        return this.native.UNIFORM_BLOCK_ACTIVE_UNIFORM_INDICES;
    }

    public get UNIFORM_BLOCK_REFERENCED_BY_VERTEX_SHADER(): number {
        return this.native.UNIFORM_BLOCK_REFERENCED_BY_VERTEX_SHADER;
    }

    public get UNIFORM_BLOCK_REFERENCED_BY_FRAGMENT_SHADER(): number {
        return this.native.UNIFORM_BLOCK_REFERENCED_BY_FRAGMENT_SHADER;
    }

    public get OBJECT_TYPE(): number {
        return this.native.OBJECT_TYPE;
    }

    public get SYNC_CONDITION(): number {
        return this.native.SYNC_CONDITION;
    }

    public get SYNC_STATUS(): number {
        return this.native.SYNC_STATUS;
    }

    public get SYNC_FLAGS(): number {
        return this.native.SYNC_FLAGS;
    }

    public get SYNC_FENCE(): number {
        return this.native.SYNC_FENCE;
    }

    public get SYNC_GPU_COMMANDS_COMPLETE(): number {
        return this.native.SYNC_GPU_COMMANDS_COMPLETE;
    }

    public get UNSIGNALED(): number {
        return this.native.UNSIGNALED;
    }

    public get SIGNALED(): number {
        return this.native.SIGNALED;
    }

    /* Samplers */


    /* Buffers */

    public get ALREADY_SIGNALED(): number {
        return this.native.ALREADY_SIGNALED;
    }

    public get TIMEOUT_EXPIRED(): number {
        return this.native.TIMEOUT_EXPIRED;
    }

    public get CONDITION_SATISFIED(): number {
        return this.native.CONDITION_SATISFIED;
    }

    public get WAIT_FAILED(): number {
        return this.native.WAIT_FAILED;
    }

    public get SYNC_FLUSH_COMMANDS_BIT(): number {
        return this.native.SYNC_FLUSH_COMMANDS_BIT;
    }

    public get COLOR(): number {
        return this.native.COLOR;
    }

    public get DEPTH(): number {
        return this.native.DEPTH;
    }

    public get STENCIL(): number {
        return this.native.STENCIL;
    }

    /* Buffers */


    /* Data types */

    public get MIN(): number {
        return this.native.MIN;
    }

    public get MAX(): number {
        return this.native.MAX;
    }

    public get DEPTH_COMPONENT24(): number {
        return this.native.DEPTH_COMPONENT24;
    }

    public get STREAM_READ(): number {
        return this.native.STREAM_READ;
    }

    public get STREAM_COPY(): number {
        return this.native.STREAM_COPY;
    }

    public get STATIC_READ(): number {
        return this.native.STATIC_READ;
    }

    public get STATIC_COPY(): number {
        return this.native.STATIC_COPY;
    }

    public get DYNAMIC_READ(): number {
        return this.native.DYNAMIC_READ;
    }

    public get DYNAMIC_COPY(): number {
        return this.native.DYNAMIC_COPY;
    }

    public get DEPTH_COMPONENT32F(): number {
        return this.native.DEPTH_COMPONENT32F;
    }

    public get DEPTH32F_STENCIL8(): number {
        return this.native.DEPTH32F_STENCIL8;
    }


    /* Data types */

    public get INVALID_INDEX(): number {
        return this.native.INVALID_INDEX;
    }

    public get TIMEOUT_IGNORED(): number {
        return this.native.TIMEOUT_IGNORED;
    }

    /* Vertex attributes */


    /* Transform feedback */

    public get MAX_CLIENT_WAIT_TIMEOUT_WEBGL(): number {
        return this.native.MAX_CLIENT_WAIT_TIMEOUT_WEBGL;
    }

    beginQuery(target: number, query: WebGLQuery): void {
        this._glCheckError('beginQuery');
        const value = query ? query.native : 0;
        this.native.beginQueryWithTargetQuery(target, value);
    }

    beginTransformFeedback(primitiveMode: number): void {
        this._glCheckError('beginTransformFeedback');
        this.native.beginTransformFeedbackWithPrimitiveMode(primitiveMode);
    }

    bindBufferBase(target: number, index: number, buffer: WebGLBuffer): void {
        this._glCheckError('bindBufferBase');
        const value = buffer ? buffer.native : 0;
        this.native.bindBufferBaseWithTargetIndexBuffer(target, index, value);
    }

    bindBufferRange(target: number, index: number, buffer: WebGLBuffer, offset: number, size: number): void {
        this._glCheckError('bindBufferRange');
        const value = buffer ? buffer.native : 0;
        this.native.bindBufferRangeWithTargetIndexBufferOffsetSize(target, index, value, offset, size);
    }

    bindSampler(unit: number, sampler: WebGLSampler): void {
        this._glCheckError('bindSampler');
        const value = sampler ? sampler.native : 0;
        this.native.bindSamplerWithUnitSampler(unit, value);
    }

    bindTransformFeedback(target: number, transformFeedback: WebGLTransformFeedback): void {
        this._glCheckError('bindTransformFeedback');
        const value = transformFeedback ? transformFeedback.native : 0;
        this.native.bindTransformFeedbackWithTargetTransformFeedback(target, value);
    }

    bindVertexArray(vertexArray: WebGLVertexArrayObject): void {
        this._glCheckError('bindVertexArray');
        const value = vertexArray ? vertexArray.native : 0;
        this.native.bindVertexArrayWithVertexArray(value);
    }

    blitFramebuffer(srcX0: number, srcY0: number, srcX1: number, srcY1: number, dstX0: number, dstY0: number, dstX1: number, dstY1: number, mask: number, filter: number): void {
        this._glCheckError('blitFramebuffer');
        this.native.blitFramebufferWithSrcX0SrcY0SrcX1SrcY1DstX0DstY0DstX1DstY1MaskFilter(srcX0, srcY0, srcX1, srcY1, dstX0, dstY0, dstX1, dstY1, mask, filter);
    }

    clearBufferfi(buffer: WebGLBuffer, drawbuffer: number, depth: number, stencil: number): void {
        this._glCheckError('clearBufferfi');
        this.native.clearBufferfiWithBufferDrawbufferDepthStencil(buffer.native, drawbuffer, depth, stencil);
    }

    clearBufferfv(buffer: WebGLBuffer, drawbuffer: number, values: number[] | Float32Array): void {
        this._glCheckError('clearBufferfv');
        this.native.clearBufferfvWithBufferDrawbufferValues(buffer.native, drawbuffer, values as any);
    }

    clearBufferiv(buffer: WebGLBuffer, drawbuffer: number, values: number[] | Int32Array): void {
        this._glCheckError('clearBufferiv');
        this.native.clearBufferivWithBufferDrawbufferValues(buffer.native, drawbuffer, values as any);
    }

    clearBufferuiv(buffer: WebGLBuffer, drawbuffer: number, values: number[] | Uint32Array): void {
        this._glCheckError('clearBufferuiv');
        this.native.clearBufferuivWithBufferDrawbufferValues(buffer.native, drawbuffer, values as any);
    }

    clientWaitSync(sync: WebGLSync, flags: number, timeout: number): number {
        this._glCheckError('clientWaitSync');
        return this.native.clientWaitSyncWithSyncFlagsTimeout(sync.native, flags, timeout);
    }

    compressedTexSubImage3D(target: number, level: number, xoffset: number, yoffset: number, zoffset: number, width: number, height: number, depth: number, format: number, imageSize: number, offset: any);

    compressedTexSubImage3D(target: number, level: number, xoffset: number, yoffset: number, zoffset: number, width: number, height: number, depth: number, format: number, srcData: any, srcOffset: number = 0, srcLengthOverride: number = 0): void {
        this._glCheckError('compressedTexSubImage3D');
        if (typeof srcOffset === 'number') {
            this.native.compressedTexSubImage3DWithTargetLevelXoffsetYoffsetZoffsetWidthHeightDepthFormatImageSizeOffset(target, level, xoffset, yoffset, zoffset, width, height, depth, format, srcData, srcOffset);
        } else if (srcData && srcData.buffer) {
            this.native.compressedTexSubImage3DWithTargetLevelXoffsetYoffsetZoffsetWidthHeightDepthFormatSrcDataSrcOffsetSrcLengthOverride(
                target, level, xoffset, yoffset, zoffset, width, height, depth, format, srcData as any, srcOffset, srcLengthOverride
            );
        }
    }

    /* Transform feedback */

    /* Framebuffers and renderbuffers */

    copyBufferSubData(readTarget: number, writeTarget: number, readOffset: number, writeOffset: number, size: number): void {
        this._glCheckError('copyBufferSubData');
        this.native.copyBufferSubDataWithReadTargetWriteTargetReadOffsetWriteOffsetSize(readTarget, writeTarget, readOffset, writeOffset, size);
    }

    copyTexSubImage3D(target: number, level: number, xoffset: number, yoffset: number, zoffset: number, x: number, y: number, width: number, height: number): void {
        this._glCheckError('copyTexSubImage3D');
        this.native.copyTexSubImage3DWithTargetLevelXoffsetYoffsetZoffsetXYWidthHeight(target, level, xoffset, yoffset, zoffset, x, y, width, height);
    }

    createQuery(): WebGLQuery {
        this._glCheckError('createQuery');
        return new WebGLQuery(this.native.createQuery());
    }

    createSampler(): WebGLSampler {
        this._glCheckError('createSampler');
        return new WebGLSampler(this.native.createSampler());
    }

    createTransformFeedback(): WebGLTransformFeedback {
        this._glCheckError('createTransformFeedback');
        return new WebGLTransformFeedback(this.native.createTransformFeedback());
    }

    createVertexArray(): WebGLVertexArrayObject {
        this._glCheckError('createVertexArray');
        return new WebGLVertexArrayObject(this.native.createVertexArray());
    }

    deleteQueryWithQuery(query: WebGLQuery): void {
        this._glCheckError('deleteQueryWithQuery');
        this.native.deleteQueryWithQuery(query.native);
    }

    deleteSamplerWithSampler(sampler: WebGLSampler): void {
        this._glCheckError('deleteSamplerWithSampler');
        this.native.deleteSamplerWithSampler(sampler.native);
    }

    deleteSyncWithSync(sync: WebGLSync): void {
        this._glCheckError('deleteSyncWithSync');
        this.native.deleteSyncWithSync(sync.native);
    }

    deleteTransformFeedback(transformFeedback: WebGLTransformFeedback): void {
        this._glCheckError('deleteTransformFeedback');
        this.native.deleteTransformFeedbackWithTransformFeedback(transformFeedback.native);
    }

    deleteVertexArray(vertexArray: WebGLVertexArrayObject): void {
        this._glCheckError('deleteVertexArray');
        this.native.deleteVertexArrayWithVertexArray(vertexArray.native);
    }

    drawArraysInstanced(mode: number, first: number, count: number, instanceCount: number): void {
        this._glCheckError('drawArraysInstanced');
        this.native.drawArraysInstancedWithModeFirstCountInstanceCount(mode, first, count, instanceCount);
    }

    drawBuffers(buffers: number[]): void {
        this._glCheckError('drawBuffers');
        this.native.drawBuffersWithBuffers(buffers);
    }

    drawElementsInstanced(mode: number, count: number, type: number, offset: number, instanceCount: number): void {
        this._glCheckError('drawElementsInstanced');
        this.native.drawElementsInstancedWithModeCountTypeOffsetInstanceCount(mode, count, type, offset, instanceCount);
    }

    drawRangeElements(mode: number, start: number, end: number, count: number, type: number, offset: number): void {
        this._glCheckError('drawRangeElements');
        this.native.drawRangeElementsWithModeStartEndCountTypeOffset(mode, start, end, count, type, offset);
    }

    endQuery(target: number): void {
        this._glCheckError('endQuery');
        this.native.endQueryWithTarget(target);
    }

    endTransformFeedback(): void {
        this._glCheckError('endTransformFeedback');
        this.native.endTransformFeedback();
    }

    fenceSync(condition: number, flags: number): void {
        this._glCheckError('fenceSync');
        this.native.fenceSyncWithConditionFlags(condition, flags);
    }

    framebufferTextureLayer(target: number, attachment: number, texture: WebGLTexture, level: number, layer: number): void {
        this._glCheckError('framebufferTextureLayer');
        this.native.framebufferTextureLayerWithTargetAttachmentTextureLevelLayer(target, attachment, texture.native, level, layer);
    }

    /* Framebuffers and renderbuffers */


    /* Uniforms */

    getActiveUniformBlockName(program: WebGLProgram, uniformBlockIndex: number): string {
        this._glCheckError('getActiveUniformBlockName');
        return this.native.getActiveUniformBlockNameWithProgramUniformBlockIndex(program.native, uniformBlockIndex);
    }

    getActiveUniformBlockParameter(program: WebGLProgram, uniformBlockIndex: number, pname: number): any {
        this._glCheckError('getActiveUniformBlockParameter');
        const param = this.native.getActiveUniformBlockParameterWithProgramUniformBlockIndexPname(program.native, uniformBlockIndex, pname);
        if (pname === this.UNIFORM_BLOCK_ACTIVE_UNIFORM_INDICES) {
            return new Uint32Array(this.getJSArray(param));
        }
        return param;
    }

    getActiveUniforms(program: WebGLProgram, uniformIndices: number[], pname: number): any {
        this._glCheckError('getActiveUniforms');
        return this.getJSArray(this.native.getActiveUniformsWithProgramUniformIndicesPname(program.native, uniformIndices, pname));
    }

    getBufferSubData(target: number, srcByteOffset: number, dstData: ArrayBuffer, dstOffset: number = 0, length: number = 0): void {
        this._glCheckError('getBufferSubData');
        this.native.getBufferSubDataWithTargetSrcByteOffsetDstDataDstOffsetLength(target, srcByteOffset, new Uint8Array(dstData.slice(0)) as any, dstOffset, length);
    }

    getFragDataLocation(program: WebGLProgram, name: string): number {
        this._glCheckError('getFragDataLocation');
        const result = this.native.getFragDataLocationWithProgramName(program.native, name);
        return result !== -1 ? result : null;
    }

    getIndexedParameter(target: number, index: number): any {
        this._glCheckError('getIndexedParameter');
        const param = this.native.getIndexedParameterWithTargetIndex(target, index);
        if (target === this.TRANSFORM_FEEDBACK_BUFFER_BINDING || target === this.UNIFORM_BUFFER_BINDING) {
            return new WebGLBuffer(param);
        }
        return param;
    }

    getInternalformatParameter(target: number, internalformat: number, pname: number): any {
        this._glCheckError('getInternalformatParameter');
        const param = this.native.getInternalformatParameterWithTargetInternalformatPname(target, internalformat, pname);
        if (pname === this.SAMPLES) {
            return new Int32Array(this.getJSArray(param));
        }
        return param;
    }

    getQueryParameter(query: WebGLQuery, pname: number): any {
        this._glCheckError('getQueryParameter');
        const result = this.native.getQueryParameterWithQueryPname(query.native, pname);
        if (result === 0) {
            return null;
        }
        return result;
    }

    getQuery(target: number, pname: number): any {
        this._glCheckError('getQuery');
        const query = this.native.getQueryParameterWithQueryPname(target, pname);
        if (query) {
            return new WebGLQuery(query);
        }
        return null;
    }

    getSamplerParameter(sampler: WebGLSampler, pname: number): any {
        this._glCheckError('getSamplerParameter');
        return this.native.getSamplerParameterWithSamplerPname(sampler.native, pname);
    }

    getSyncParameter(sync: WebGLSync, pname: number): any {
        this._glCheckError('getSyncParameter');
        return this.native.getSyncParameterWithSyncPname(sync.native, pname);
    }

    getTransformFeedbackVarying(program: WebGLProgram, index: number): any {
        this._glCheckError('getTransformFeedbackVarying');
        const info = this.native.getTransformFeedbackVaryingWithProgramIndex(program.native, index);
        if (info) {
            return new WebGLActiveInfo(info.name, info.size, info.size);
        }
        return null;
    }

    getUniformBlockIndex(program: WebGLProgram, uniformBlockName: string): number {
        this._glCheckError('getUniformBlockIndex');
        return this.native.getUniformBlockIndexWithProgramUniformBlockName(program.native, uniformBlockName);
    }

    getUniformIndices(program: WebGLProgram, uniformNames: string[]): number[] {
        this._glCheckError('getUniformIndices');
        return this.getJSArray(this.native.getUniformIndicesWithProgramUniformNames(program.native, uniformNames));
    }

    invalidateFramebuffer(target: number, attachments: number[]): void {
        this._glCheckError('invalidateFramebuffer');
        this.native.invalidateFramebufferWithTargetAttachments(target, attachments);
    }

    invalidateSubFramebuffer(target: number, attachments: number[], x: number, y: number, width: number, height: number): void {
        this._glCheckError('invalidateSubFramebuffer');
        this.native.invalidateSubFramebufferWithTargetAttachmentsXYWidthHeight(target, attachments, x, y, width, height);
    }

    isQuery(query: WebGLQuery): boolean {
        this._glCheckError('isQuery');
        return this.native.isQueryWithQuery(query.native);
    }

    isSampler(sampler: WebGLSampler): boolean {
        this._glCheckError('isSampler');
        return this.native.isSamplerWithSampler(sampler.native);
    }

    isSync(sync: WebGLSync): boolean {
        this._glCheckError('isSync');
        return this.native.isSyncWithSync(sync.native);
    }

    isTransformFeedback(transformFeedback: WebGLTransformFeedback): boolean {
        this._glCheckError('isTransformFeedback');
        return this.native.isTransformFeedbackWithTransformFeedback(transformFeedback.native);
    }

    isVertexArray(vertexArray: WebGLVertexArrayObject): boolean {
        this._glCheckError('isVertexArray');
        return this.native.isVertexArrayWithVertexArray(vertexArray.native);
    }

    pauseTransformFeedback(): void {
        this._glCheckError('pauseTransformFeedback');
        this.native.pauseTransformFeedback();
    }

    readBuffer(src: number): void {
        this._glCheckError('readBuffer');
        this.native.readBufferWithSrc(src);
    }

    renderbufferStorageMultisample(target: number, samples: number, internalFormat: number, width: number, height: number): void {
        this._glCheckError('renderbufferStorageMultisample');
        this.native.renderbufferStorageMultisampleWithTargetSamplesInternalFormatWidthHeight(target, samples, internalFormat, width, height);
    }

    resumeTransformFeedback(): void {
        this._glCheckError('resumeTransformFeedback');
        this.native.resumeTransformFeedback();
    }

    samplerParameterf(sampler: WebGLSampler, pname: number, param: number): void {
        this._glCheckError('samplerParameterf');
        this.native.samplerParameterfWithSamplerPnameParam(sampler.native, pname, param);
    }


    /* Uniforms */

    /* Sync objects */

    samplerParameteri(sampler: WebGLSampler, pname: number, param: number): void {
        this._glCheckError('samplerParameteri');
        this.native.samplerParameteriWithSamplerPnameParam(sampler.native, pname, param);
    }

    texImage3D(target: number, level: number, internalformat: number, width: number, height: number, depth: number, border: number, format: number, type: number, offset: any);

    texImage3D(target: number, level: number, internalformat: number, width: number, height: number, depth: number, border: number, format: number, type: number, source: any): void {
        this._glCheckError('texImage3D');
        if (typeof source === 'number') {
            this.native.texImage3DWithTargetLevelInternalformatWidthHeightDepthBorderFormatTypeOffset(target, level, internalformat, width, height, depth, border, format, type, source);
        } else if (source && source.buffer) {
            this.native.texImage3DWithTargetLevelInternalformatWidthHeightDepthBorderFormatTypeSource(target, level, internalformat, width, height, depth, border, format, type, new Uint8Array(source.slice(0)) as any);
        } else if (source instanceof UIImage) {
            this.native.texImage3DWithTargetLevelInternalformatWidthHeightDepthBorderFormatTypeImage(target, level, internalformat, width, height, depth, border, format, type, source);
        } else if (source instanceof ImageSource) {
            this.native.texImage3DWithTargetLevelInternalformatWidthHeightDepthBorderFormatTypeImage(target, level, internalformat, width, height, depth, border, format, type, source.ios);
        } else if (source instanceof TNSImageAsset) {
            this.native.texImage3DWithTargetLevelInternalformatWidthHeightDepthBorderFormatTypeAsset(target, level, internalformat, width, height, depth, border, format, type, source.native);
        } else if (source &&
            typeof source.tagName === 'string' &&
            source.tagName === 'IMG') {
            if (source._imageSource instanceof ImageSource) {
                this.native.texImage3DWithTargetLevelInternalformatWidthHeightDepthBorderFormatTypeImage(target, level, internalformat, width, height, depth, border, format, type, source._imageSource.ios);
            } else if (source._image instanceof UIImage) {
                this.native.texImage3DWithTargetLevelInternalformatWidthHeightDepthBorderFormatTypeImage(target, level, internalformat, width, height, depth, border, format, type, source._image);
            } else if (source._asset instanceof TNSImageAsset) {
                this.native.texImage3DWithTargetLevelInternalformatWidthHeightDepthBorderFormatTypeAsset(target, level, internalformat, width, height, depth, border, format, type, source._asset.native);
            } else if (typeof source.src === 'string') {
                const result = ImageSource.fromFileSync(source.src);
                this.native.texImage3DWithTargetLevelInternalformatWidthHeightDepthBorderFormatTypeAsset(target, level, internalformat, width, height, depth, border, format, type, result ? result.ios : null);
            }
        }
    }

    texStorage2D(target: number, levels: number, internalformat: number, width: number, height: number): void {
        this._glCheckError('texStorage2D');
        this.native.texStorage2DWithTargetLevelsInternalformatWidthHeight(target, levels, internalformat, width, height);
    }

    texStorage3D(target: number, levels: number, internalformat: number, width: number, height: number, depth: number): void {
        this._glCheckError('texStorage3D');
        this.native.texStorage3DWithTargetLevelsInternalformatWidthHeightDepth(target, levels, internalformat, width, height, depth);
    }

    texSubImage3D(target: number, level: number, xoffset: number, yoffset: number, zoffset: number, width: number, height: number, depth: number, format: number, type: number, offset: any);

    texSubImage3D(target: number, level: number, xoffset: number, yoffset: number, zoffset: number, width: number, height: number, depth: number, format: number, type: number, srcData: any);

    texSubImage3D(target: number, level: number, xoffset: number, yoffset: number, zoffset: number, width: number, height: number, depth: number, format: number, type: number, srcData: any, srcOffset: number = 0): void {
        this._glCheckError('texSubImage3D');
        if (typeof srcData === 'number') {
            this.native.texSubImage3DWithTargetLevelXoffsetYoffsetZoffsetWidthHeightDepthFormatTypeOffset(target, level, xoffset, yoffset, zoffset, width, height, depth, format, type, srcData);
        } else if (srcData && srcData.buffer) {
            if (srcOffset) {
                this.native.texSubImage3DWithTargetLevelXoffsetYoffsetZoffsetWidthHeightDepthFormatTypeSrcDataSrcOffset(
                    target, level, xoffset, yoffset, zoffset, width, height, depth, format, type, srcData, srcOffset
                );
            } else {
                this.native.texSubImage3DWithTargetLevelXoffsetYoffsetZoffsetWidthHeightDepthFormatTypeSrcData(
                    target, level, xoffset, yoffset, zoffset, width, height, depth, format, type, srcData
                );
            }
        } else if (srcData instanceof UIImage) {
            this.native.texSubImage3DWithTargetLevelXoffsetYoffsetZoffsetWidthHeightDepthFormatTypeImage(target, level, xoffset, yoffset, zoffset, width, height, depth, format, type, srcData);
        } else if (srcData instanceof ImageSource) {
            this.native.texSubImage3DWithTargetLevelXoffsetYoffsetZoffsetWidthHeightDepthFormatTypeImage(target, level, xoffset, yoffset, zoffset, width, height, depth, format, type, srcData.ios);
        } else if (srcData instanceof TNSImageAsset) {
            this.native.texSubImage3DWithTargetLevelXoffsetYoffsetZoffsetWidthHeightDepthFormatTypeAsset(target, level, xoffset, yoffset, zoffset, width, height, depth, format, type, srcData.native);
        } else if (srcData &&
            typeof srcData.tagName === 'string' &&
            srcData.tagName === 'IMG') {
            if (srcData._imageSource instanceof ImageSource) {
                this.native.texSubImage3DWithTargetLevelXoffsetYoffsetZoffsetWidthHeightDepthFormatTypeImage(target, level, xoffset, yoffset, zoffset, width, height, depth, format, type, srcData._imageSource.ios);
            } else if (srcData._image instanceof UIImage) {
                this.native.texSubImage3DWithTargetLevelXoffsetYoffsetZoffsetWidthHeightDepthFormatTypeImage(target, level, xoffset, yoffset, zoffset, width, height, depth, format, type, srcData._image);
            } else if (srcData._asset instanceof TNSImageAsset) {
                this.native.texSubImage3DWithTargetLevelXoffsetYoffsetZoffsetWidthHeightDepthFormatTypeAsset(target, level, xoffset, yoffset, zoffset, width, height, depth, format, type, srcData._asset.native);
            } else if (typeof srcData.src === 'string') {
                const result = ImageSource.fromFileSync(srcData.src);
                this.native.texSubImage3DWithTargetLevelXoffsetYoffsetZoffsetWidthHeightDepthFormatTypeImage(target, level, xoffset, yoffset, zoffset, width, height, depth, format, type, result ? result.ios : null);
            }
        }

    }

    transformFeedbackVaryings(program: WebGLProgram, varyings: string[], bufferMode: number): void {
        this._glCheckError('transformFeedbackVaryings');
        this.native.transformFeedbackVaryingsWithProgramVaryingsBufferMode(program.native, varyings, bufferMode);
    }

    uniform1ui(location: number, v0: number): void {
        this._glCheckError('uniform1ui');
        this.native.uniform1uiWithLocationV0(location, v0);
    }

    uniform1uiv(location: number, data: Uint32Array): void {
        this._glCheckError('uniform1uiv');
        this.native.uniform1uivWithLocationData(location, data as any);
    }

    uniform2ui(location: number, v0: number, v1: number): void {
        this._glCheckError('uniform2ui');
        this.native.uniform2uiWithLocationV0V1(location, v0, v1);
    }

    uniform2uiv(location: number, data: Uint32Array): void {
        this._glCheckError('uniform2uiv');
        this.native.uniform2uivWithLocationData(location, data as any);
    }

    /* Sync objects */

    /* Miscellaneous constants */

    uniform3ui(location: number, v0: number, v1: number, v2: number): void {
        this._glCheckError('uniform3ui');
        this.native.uniform3uiWithLocationV0V1V2(location, v0, v1, v2);
    }

    uniform3uiv(location: number, data: Uint32Array): void {
        this._glCheckError('uniform3uiv');
        this.native.uniform3uivWithLocationData(location, data as any);
    }

    uniform4ui(location: number, v0: number, v1: number, v2: number, v3: number): void {
        this._glCheckError('uniform4ui');
        this.native.uniform4uiWithLocationV0V1V2V3(location, v0, v1, v2, v3);
    }

    uniform4uiv(location: number, data: Uint32Array): void {
        this._glCheckError('uniform4uiv');
        this.native.uniform4uivWithLocationData(location, data as any);
    }

    uniformBlockBinding(program: WebGLProgram, uniformBlockIndex: number, uniformBlockBinding: number): void {
        this._glCheckError('uniformBlockBinding');
        this.native.uniformBlockBindingWithProgramUniformBlockIndexUniformBlockBinding(program.native, uniformBlockIndex, uniformBlockBinding);
    }

    uniformMatrix2x3fv(location: WebGLUniformLocation, transpose: boolean, data: Float32Array): void {
        this._glCheckError('uniformMatrix2x3fv');
        this.native.uniformMatrix2x3fvWithLocationTransposeData(location.native, transpose, data as any);
    }

    uniformMatrix2x4fv(location: WebGLUniformLocation, transpose: boolean, data: Float32Array): void {
        this._glCheckError('uniformMatrix2x4fv');
        this.native.uniformMatrix2x4fvWithLocationTransposeData(location.native, transpose, data as any);
    }

    uniformMatrix3x2fv(location: WebGLUniformLocation, transpose: boolean, data: Float32Array): void {
        this._glCheckError('uniformMatrix3x2fv');
        this.native.uniformMatrix3x2fvWithLocationTransposeData(location.native, transpose, data as any);
    }

    uniformMatrix3x4fv(location: WebGLUniformLocation, transpose: boolean, data: Float32Array): void {
        this._glCheckError('uniformMatrix3x4fv');
        this.native.uniformMatrix3x4fvWithLocationTransposeData(location.native, transpose, data as any);
    }

    uniformMatrix4x2fv(location: WebGLUniformLocation, transpose: boolean, data: Float32Array): void {
        this._glCheckError('uniformMatrix4x2fv');
        this.native.uniformMatrix4x2fvWithLocationTransposeData(location.native, transpose, data as any);
    }

    uniformMatrix4x3fv(location: WebGLUniformLocation, transpose: boolean, data: Float32Array): void {
        this._glCheckError('uniformMatrix4x3fv');
        this.native.uniformMatrix4x3fvWithLocationTransposeData(location.native, transpose, data as any);
    }

    vertexAttribDivisor(index: number, divisor: number): void {
        this._glCheckError('vertexAttribDivisor');
        this.native.vertexAttribDivisorWithIndexDivisor(index, divisor);
    }

    vertexAttribI4i(index: number, v0: number, v1: number, v2: number, v3: number): void {
        this._glCheckError('vertexAttribI4i');
        this.native.vertexAttribI4iWithIndexV0V1V2V3(index, v0, v1, v2, v3);
    }

    vertexAttribI4iv(index: number, value: number[] | Int32Array): void {
        this._glCheckError('vertexAttribI4iv');
        this.native.vertexAttribI4uivWithIndexValue(index, value as any);
    }

    vertexAttribI4ui(index: number, v0: number, v1: number, v2: number, v3: number): void {
        this._glCheckError('vertexAttribI4ui');
        this.native.vertexAttribI4uiWithIndexV0V1V2V3(index, v0, v1, v2, v3);
    }

    vertexAttribI4uiv(index: number, value: number[] | Uint32Array): void {
        this._glCheckError('vertexAttribI4uiv');
        this.native.vertexAttribI4uivWithIndexValue(index, value as any);
    }

    protected _glCheckError(message: string) {
        if (!TNSWebGL2RenderingContext.isDebug) {
            return;
        }
        console.log(message, this.getError());
    }

    /* Miscellaneous constants */
}
