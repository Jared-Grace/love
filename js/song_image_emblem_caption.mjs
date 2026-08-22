import { arguments_assert } from "./arguments_assert.mjs";
import { text_combine } from "./text_combine.mjs";
import { equal } from "./equal.mjs";
export function song_image_emblem_caption(position, count) {
  "$plain position";
  "$plain count";
  "What to call the card holding a picture's passages, given which of a line's pictures it is and how many that line has.";
  "ONE PICTURE IS NOT NUMBERED. Numbering it would be answering a question nobody asked - there is nothing for it to be the first of - and reading picture 1 under a line with a single picture makes a reader look for a second one that is not there.";
  "SEVERAL PICTURES ARE NUMBERED IN THE ORDER THEY ARE SUNG, because that is the order they stand in on the page, so what a reader is told matches what a reader sees without either of them having to describe the other.";
  arguments_assert(arguments, 2);
  let alone = equal(count, 1);
  if (alone) {
    let one = "scripture behind this picture";
    return one;
  }
  let r = text_combine("scripture behind picture ", position);
  return r;
}
