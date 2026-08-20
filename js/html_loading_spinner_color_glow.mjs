import { html_color_blue_on_dark } from "./html_color_blue_on_dark.mjs";
export function html_loading_spinner_color_glow() {
  "the spinner's blue, as an opaque hex — every place the spinner needs it at part opacity appends a two-digit alpha to this one value, so the ring, the halo and the core can never drift to different blues";
  let c = html_color_blue_on_dark();
  return c;
}
