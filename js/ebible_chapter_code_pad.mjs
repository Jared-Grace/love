import { number_pad } from "./number_pad.mjs";
import { equal } from "./equal.mjs";
import { text_combine } from "./text_combine.mjs";
export function ebible_chapter_code_pad(book_code, chapter_name) {
  let pad_count = 2;
  if (equal(book_code, "PSA")) {
    pad_count = 3;
  }
  let chapter_padded = number_pad(chapter_name, pad_count);
  let chapter_code = text_combine(book_code, chapter_padded);
  return chapter_code;
}
