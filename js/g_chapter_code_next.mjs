// Next chapter code within the SAME book: "HEB01" → "HEB02", "1JN05" → "1JN06".
// Book = the code minus its trailing digits; the number increments, keeping width.
export function g_chapter_code_next(chapter_code) {
  let digits = chapter_code.match(/\d+$/)[0];
  let book = chapter_code.slice(0, chapter_code.length - digits.length);
  let next_number = String(Number(digits) + 1).padStart(digits.length, "0");
  return book + next_number;
}
