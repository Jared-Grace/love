import { bible_books_by_first_letter } from "../../../love/public/src/bible_books_by_first_letter.mjs";
export async function sandbox_3() {
  let dictionary = await bible_books_by_first_letter();
  return dictionary;
}
