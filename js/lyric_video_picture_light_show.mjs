import { arguments_assert } from "./arguments_assert.mjs";
import { lyric_video_picture_light_text } from "./lyric_video_picture_light_text.mjs";
import { text_empty_is } from "./text_empty_is.mjs";
import { lyric_video_picture_light_lut } from "./lyric_video_picture_light_lut.mjs";
import { lyric_video_picture_url } from "./lyric_video_picture_url.mjs";
import { image_luma_lut_apply } from "./image_luma_lut_apply.mjs";
import { html_src_set } from "./html_src_set.mjs";
export async function lyric_video_picture_light_show(drawing, picture) {
  "$plain drawing";
  "$plain picture";
  "Puts one picture on the screen with the light its document asks for, so what is judged is what the video will show; a picture the document says nothing about is left as it was fetched.";
  "THE PICTURE IS CHANGED HERE ON THE PHONE AND NOT SAVED ANYWHERE. The numbers live beside the picture in the document and the drawing on disk stays the one that was painted, so a lift is changed or taken back by editing a number rather than by redrawing.";
  "IT WAS CHECKED AGAINST THE RENDER TOOL ITSELF: a stretch of a lifted painting run through both came out within one level of two hundred and fifty-five on every channel of every pixel.";
  arguments_assert(arguments, 2);
  let light = lyric_video_picture_light_text(picture);
  if (text_empty_is(light)) {
    return;
  }
  let lut = lyric_video_picture_light_lut(picture);
  let image = new Image();
  image.src = lyric_video_picture_url(picture);
  await image.decode();
  let canvas = document.createElement("canvas");
  canvas.width = image.naturalWidth;
  canvas.height = image.naturalHeight;
  let context = canvas.getContext("2d");
  context.drawImage(image, 0, 0);
  let whole = context.getImageData(0, 0, canvas.width, canvas.height);
  image_luma_lut_apply(whole.data, lut);
  context.putImageData(whole, 0, 0);
  function lambda(resolve) {
    canvas.toBlob(resolve);
  }
  let blob = await new Promise(lambda);
  let url = URL.createObjectURL(blob);
  html_src_set(drawing, url);
}
