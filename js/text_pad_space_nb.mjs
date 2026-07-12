import { text_space_nb } from "./text_space_nb.mjs";
import { text_pad } from "./text_pad.mjs";
export function text_pad_space_nb(s) {
  let padding = text_space_nb();
  let padded = text_pad(s, padding);
  return padded;
}
