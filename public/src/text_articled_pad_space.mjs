import { text_pad_space } from "../../../love/public/src/text_pad_space.mjs";
import { text_articled } from "../../../love/public/src/text_articled.mjs";
export function text_articled_pad_space(noun) {
  let articled = text_articled(noun);
  let padded = text_pad_space(articled);
  return padded;
}
