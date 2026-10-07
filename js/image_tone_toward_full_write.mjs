import { import_install } from "./import_install.mjs";
import { property_get } from "./property_get.mjs";
import { image_pixels_tone_toward_full } from "./image_pixels_tone_toward_full.mjs";
import { file_parent_exists_ensure } from "./file_parent_exists_ensure.mjs";
import { file_overwrite_buffer } from "./file_overwrite_buffer.mjs";
export async function image_tone_toward_full_write(
  path_from,
  strength,
  path_to,
) {
  "$plain path_from";
  "$plain strength";
  "$plain path_to";
  "Reads one picture, moves it part of the way toward the whole range of dark and light and of colour by the strength given, and saves that as a new picture, leaving the first one as it was.";
  "The first picture is never overwritten, so a strength that turns out too strong is undone by running again at a lower one rather than by finding the original.";
  let library = await import_install("canvas");
  let createCanvas = property_get(library, "createCanvas");
  let loadImage = property_get(library, "loadImage");
  let image = await loadImage(path_from);
  let canvas = createCanvas(image.width, image.height);
  let ctx = canvas.getContext("2d");
  ctx.drawImage(image, 0, 0);
  let image_data = ctx.getImageData(0, 0, image.width, image.height);
  let strength2 = Number(strength);
  let measured = image_pixels_tone_toward_full(image_data.data, strength2);
  ctx.putImageData(image_data, 0, 0);
  let buffer = canvas.toBuffer("image/png");
  await file_parent_exists_ensure(path_to);
  await file_overwrite_buffer(path_to, buffer);
  return measured;
}
