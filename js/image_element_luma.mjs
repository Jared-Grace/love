import { image_luma_pixels_mean } from "./image_luma_pixels_mean.mjs";
export function image_element_luma(image, size) {
  "the mean brightness of a picture that has already loaded, read by drawing it small onto a canvas and averaging every pixel; it throws when the canvas has been tainted, which is what a picture served without cross-origin permission does, so the caller has to be ready for no answer";
  let canvas = document.createElement("canvas");
  canvas.width = size;
  canvas.height = size;
  let context = canvas.getContext("2d");
  context.drawImage(image, 0, 0, size, size);
  let pixels = context.getImageData(0, 0, size, size).data;
  let mean = image_luma_pixels_mean(pixels);
  return mean;
}
