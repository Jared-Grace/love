import { text_combine_multiple } from "../../../love/public/src/text_combine_multiple.mjs";
import { log } from "../../../love/public/src/log.mjs";
import { each_object } from "../../../love/public/src/each_object.mjs";
import { bible_books_by_first_letter } from "../../../love/public/src/bible_books_by_first_letter.mjs";
export async function sandbox_3() {
  let dictionary = await bible_books_by_first_letter();
  function lambda(value, property) {
    let combined = text_combine_multiple(list);
    log(sandbox_3.name, {});
  }
  each_object(object, lambda);
  return dictionary;
}
