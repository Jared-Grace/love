import { assert_json } from "./assert_json.mjs";
// Next chapter code within the SAME book: "HEB01" → "HEB02", "1JN05" → "1JN06".
// Book = the code minus its trailing digits; the number increments, keeping width.
export function g_chapter_code_next(chapter_code) {
  let numbered = chapter_code.match(/\d+$/);
  assert_json(numbered, {
    chapter_code,
    hint: "which chapter was meant? a chapter code ends with its chapter number, like HEB01 — a blank or malformed line in chapters.txt reaches here",
  });
  let digits = numbered[0];
  let book = chapter_code.slice(0, chapter_code.length - digits.length);
  let next_number = String(Number(digits) + 1).padStart(digits.length, "0");
  return book + next_number;
}
