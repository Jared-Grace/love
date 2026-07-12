import { text_pad_space } from "./text_pad_space.mjs";
import { text_articled } from "./text_articled.mjs";
export function text_articled_pad_space(noun) {
  let articled = text_articled(noun);
  let padded = text_pad_space(articled);
  return padded;
}
