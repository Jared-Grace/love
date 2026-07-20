import { ebible_folder_english } from "./ebible_folder_english.mjs";
import { list_to_lookup_letter_first_alphabet } from "./list_to_lookup_letter_first_alphabet.mjs";
import { ebible_version_books_names } from "./ebible_version_books_names.mjs";
export async function bible_books_by_first_letter() {
  let mapped = await ebible_version_books_names(ebible_folder_english());
  let dictionary = list_to_lookup_letter_first_alphabet(mapped);
  return dictionary;
}
