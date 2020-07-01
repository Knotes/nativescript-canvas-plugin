import { Document } from "./DOM/Document";

import "./performance";

import { HTMLImageElement } from "./DOM/HTMLImageElement";
import { HTMLCanvasElement } from "./DOM/HTMLCanvasElement";
import { HTMLVideoElement } from "./DOM/HTMLVideoElement";
import { fromObject } from "@nativescript/core/data/observable";
import { device } from "@nativescript/core/platform";
import { TNSCanvasRenderingContext2D as CanvasRenderingContext2D , TNSWebGLRenderingContext as WebGLRenderingContext} from "nativescript-canvas-plugin";
(global as any).CANVAS_RENDERER = "true";
(global as any).WEBGL_RENDERER = "true";
(global as any).window = (global as any).window || {
    console: console,
    CANVAS_RENDERER: "true",
    WEBGL_RENDERER: "true"
};

(global as any).window.HTMLImageElement = (global as any).HTMLImageElement =
    (global as any).HTMLImageElement || HTMLImageElement;
(global as any).window.Image = (global as any).Image =
    (global as any).Image || HTMLImageElement;
(global as any).window.ImageBitmap = (global as any).ImageBitmap =
    (global as any).ImageBitmap || HTMLImageElement;
(global as any).window.HTMLVideoElement = (global as any).HTMLVideoElement =
    (global as any).HTMLVideoElement || HTMLVideoElement;
(global as any).window.Video = (global as any).Video =
    (global as any).Video || HTMLVideoElement;
(global as any).window.HTMLCanvasElement = (global as any).HTMLCanvasElement =
    (global as any).HTMLCanvasElement || HTMLCanvasElement;
(global as any).window.Canvas = (global as any).Canvas =
    (global as any).Canvas || HTMLCanvasElement;
(global as any).window.CanvasRenderingContext2D = (global as any).CanvasRenderingContext2D =
    (global as any).CanvasRenderingContext2D || CanvasRenderingContext2D;
(global as any).window.WebGLRenderingContext = (global as any).WebGLRenderingContext =
    (global as any).WebGLRenderingContext || WebGLRenderingContext

function checkEmitter() {
    if (
        !(global as any).emitter ||
        !(
            (global as any).emitter.on ||
            (global as any).emitter.addEventListener ||
            (global as any).emitter.addListener
        )
    ) {
        (global as any).window.emitter = (global as any).emitter = fromObject(
            {}
        );
    }
}

(global as any).window.scrollTo = (global as any).scrollTo =
    (global as any).scrollTo || (() => ({}));

(global as any).window.addEventListener = (global as any).addEventListener = (
    eventName,
    listener
) => {
    checkEmitter();
    const addListener = () => {
        if ((global as any).emitter.on) {
            (global as any).emitter.on(eventName, listener);
        } else if ((global as any).emitter.addEventListener) {
            (global as any).emitter.addEventListener(eventName, listener);
        } else if ((global as any).emitter.addListener) {
            (global as any).emitter.addListener(eventName, listener);
        }
    };

    addListener();

    if (eventName.toLowerCase() === "load") {
        if ((global as any).emitter && (global as any).emitter.emit) {
            setTimeout(() => {
                (global as any).emitter.emit("load");
            }, 1);
        }
    }
};

(global as any).window.removeEventListener = (global as any).removeEventListener = (
    eventName,
    listener
) => {
    checkEmitter();
    if ((global as any).emitter.off) {
        (global as any).emitter.off(eventName, listener);
    } else if ((global as any).emitter.removeEventListener) {
        (global as any).emitter.removeEventListener(eventName, listener);
    } else if ((global as any).emitter.removeListener) {
        (global as any).emitter.removeListener(eventName, listener);
    }
};

//window.DOMParser = window.DOMParser || require('xmldom-qsa').DOMParser;

const agent = "chrome";
(global as any).window.navigator = (global as any).navigator =
    (global as any).navigator || {};
(global as any).window.userAgent = (global as any).userAgent =
    (global as any).userAgent || agent;
(global as any).window.navigator.userAgent = (global as any).navigator.userAgent =
    (global as any).navigator.userAgent || agent;
(global as any).window.navigator.product = (global as any).navigator.product =
    "NativeScript";
(global as any).window.navigator.platform = (global as any).navigator.platform =
    (global as any).navigator.platform || [];
(global as any).window.navigator.appVersion = (global as any).navigator.appVersion =
    (global as any).navigator.appVersion || device.osVersion;
(global as any).window.navigator.maxTouchPoints = (global as any).navigator.maxTouchPoints =
    (global as any).navigator.maxTouchPoints || 5;
(global as any).window.navigator.standalone = (global as any).navigator.standalone =
    (global as any).navigator.standalone === null
        ? true
        : (global as any).navigator.standalone;

(global as any).window["chrome"] = (global as any)["chrome"] = (global as any)[
    "chrome"
] || {
    extension: {},
};
///https://www.w3schools.com/js/js_window_location.asp
(global as any).window.location = (global as any).location = (global as any)
    .location || {
    href: "", //  window.location.href returns the href (URL) of the current page
    hostname: "", //window.location.hostname returns the domain name of the web host
    pathname: "", //window.location.pathname returns the path and filename of the current page
    protocol: "https", //window.location.protocol returns the web protocol used (http: or https:)
    assign: null, //window.location.assign loads a new document
};

if ((global as any).document) {
    (global as any).window.document = (global as any).document.readyState =
        "complete";
}

(global as any).window.setTimeout = setTimeout;
(global as any).window.setInterval = setInterval;
