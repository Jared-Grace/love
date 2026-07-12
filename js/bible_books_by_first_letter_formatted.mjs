import { each_object } from "./each_object.mjs";
import { log } from "./log.mjs";
import { ternary } from "./ternary.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { equal_0 } from "./equal_0.mjs";
import { list_size } from "./list_size.mjs";
import { list_join_comma_space } from "./list_join_comma_space.mjs";
import { bible_books_by_first_letter } from "./bible_books_by_first_letter.mjs";
export async function bible_books_by_first_letter_formatted() {
  let dictionary = await bible_books_by_first_letter();
  function lambda(value, property) {
    let joined = list_join_comma_space(value);
    let size = list_size(value);
    let eq = equal_0(size);
    let combined2 = text_combine_multiple([" ", "(", size, ") "]);
    let extra = ternary(eq, "", combined2);
    let combined = text_combine_multiple([property, ": ", joined, extra]);
    log(bible_books_by_first_letter_formatted.name, combined);
  }
  each_object(dictionary, lambda);
}
