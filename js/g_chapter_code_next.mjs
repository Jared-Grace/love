import { add } from "./add.mjs";
import { number_pad } from "./number_pad.mjs";
import { subtract } from "./subtract.mjs";
import { assert_json } from "./assert_json.mjs";
('Next chapter code within the SAME book: "HEB01" → "HEB02", "1JN05" → "1JN06".');
("Book = the code minus its trailing digits; the number increments, keeping width.");
export function g_chapter_code_next(chapter_code) {
  "$plain chapter_code";
  let numbered = chapter_code.match(/\d+$/);
  assert_json(numbered, {
    chapter_code,
    hint: "which chapter was meant? a chapter code ends with its chapter number, like HEB01 — a blank or malformed line in chapters.txt reaches here",
  });
  let digit_texts = numbered[0];
  let difference = subtract(chapter_code.length, digit_texts.length);
  let book = chapter_code.slice(0, difference);
  let left = Number(digit_texts);
  let num = add(left, 1);
  let next_number = number_pad(num, digit_texts.length);
  let r = book + next_number;
  return r;
}
