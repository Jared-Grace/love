import { number_pad } from "../../../love/public/src/number_pad.mjs";
import { equal } from "../../../love/public/src/equal.mjs";
import { text_combine } from "../../../love/public/src/text_combine.mjs";
export function ebible_chapter_code_pad(book_code, chapter_name) {
  let pad_count = 2;
  if (equal(book_code, "PSA")) {
    pad_count = 3;
  }
  let chapter_padded = number_pad(chapter_name, pad_count);
  let chapter_code = text_combine(book_code, chapter_padded);
  return chapter_code;
}
