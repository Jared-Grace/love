import { arguments_assert } from "./arguments_assert.mjs";
import { html_input_file_accept } from "./html_input_file_accept.mjs";
import { html_attribute_set } from "./html_attribute_set.mjs";
export function html_input_file_camera(parent, on_file) {
  "$plain parent";
  "$plain on_file";
  "A box that opens a phone's back camera and hands the photo taken straight to whoever asked for it.";
  "THE CAMERA IS THE PHONE'S OWN APP, NOT ONE DRAWN IN THE PAGE. Asking for the camera through the file box needs no permission prompt inside the page and works on a plain http address too, where a live camera stream is refused. On a computer, with no camera to open, the same box offers a picture off the disk instead.";
  arguments_assert(arguments, 2);
  let component = html_input_file_accept(parent, "image/*", on_file);
  html_attribute_set(component, "capture", "environment");
  return component;
}
