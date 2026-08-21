import { arguments_assert } from "./arguments_assert.mjs";
import { text_split_comma_or_empty } from "./text_split_comma_or_empty.mjs";
import { list_map } from "./list_map.mjs";
import { text_trim } from "./text_trim.mjs";
import { ebible_folder_english } from "./ebible_folder_english.mjs";
import { ebible_version_books } from "./ebible_version_books.mjs";
import { ebible_reference_books_text } from "./ebible_reference_books_text.mjs";
import { property_set } from "./property_set.mjs";
export async function ebible_references_texts(references_comma) {
  "$plain references_comma";
  "The words the English bible holds at each of several references, named the way a person writes them and joined with commas - 'John 3:16, Romans 5:8' - answered as each reference against its words.";
  "THE LIST OF BOOKS IS FETCHED ONCE FOR THE WHOLE LIST. That fetch is the slow half of answering even one reference, so asking a hundred references one at a time costs a hundred times what asking them together does. Anything writing out a set of references wants this name and not the singular one.";
  "A reference this bible does not carry is answered with null and the rest are still answered, so one mistyped reference in a hand-written list cannot take the other thirty down with it.";
  "The spaces people leave after their commas are taken off, because 'John 3:16, Romans 5:8' is how a person writes a list and ' Romans 5:8' is not a reference.";
  arguments_assert(arguments, 1);
  let split = text_split_comma_or_empty(references_comma);
  let references = list_map(split, text_trim);
  let folder = ebible_folder_english();
  let books = await ebible_version_books(folder);
  let texts = {};
  for (let reference of references) {
    let text = await ebible_reference_books_text(books, reference);
    property_set(texts, reference, text);
  }
  return texts;
}
