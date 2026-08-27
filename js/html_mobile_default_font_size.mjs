import { html_style_font_size } from "./html_style_font_size.mjs";
export function html_mobile_default_font_size(root) {
  "The size a page root starts at before an app writes the size its own reader chose: exactly the size this reader's browser is set to, and so no size at all.";
  "It used to write 20 pixels. That number was the reading apps' opening size spelled a second time, down here where nothing joins it to the first, and the two agreed by luck. Five pages take this one and never go on to ask the app what its reader chose, so one of them could open a quarter larger than the reading pages beside it with nothing anywhere saying why - and 16 pixels against 20 is exactly what the game and the sandbox were measured at.";
  "100% belongs at this layer where a number never did. It is not a size, it is the absence of one: it hands the root back the size the reader's own browser is set to, which is the setting a person who cannot read small print has already found, and which a count of pixels overrides outright.";
  html_style_font_size(root, "100%");
}
