import { app_shared_code_rounded_unbordered_padded } from "./app_shared_code_rounded_unbordered_padded.mjs";
import { app_shared_spaced_frame_gap } from "./app_shared_spaced_frame_gap.mjs";
import { html_style_padding_y } from "./html_style_padding_y.mjs";
import { html_margin } from "./html_margin.mjs";
export function app_shared_symbol_tile_style_inner(b) {
  app_shared_code_rounded_unbordered_padded(b);
  let value = app_shared_spaced_frame_gap();
  html_style_padding_y(b, value);
  ("the space a tile keeps OUTSIDE itself is the same measure it keeps inside, so a row of tiles reads as evenly spaced whether the eye is following the gaps between them or the room around their words. It was written here as a bare number a hair under this one - close enough that the two were the same value in every place either was seen, and near enough to nothing that naming which of them was meant was never a question anybody could answer");
  html_margin(b, value);
}
