import { text_starts_with } from "./text_starts_with.mjs";
export function js_file_color_palette_is(name) {
  "whether a js file name is one of the shared palette colours. The palette is the one place a screen colour may be spelled, so these files are where every other file's colour is meant to come from.";
  let r = text_starts_with(name, "app_shared_color_");
  return r;
}
