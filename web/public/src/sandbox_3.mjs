import { list_to_lookup_letter_first_alphabet } from "../../../love/public/src/list_to_lookup_letter_first_alphabet.mjs";
import { ebible_version_books_names } from "../../../love/public/src/ebible_version_books_names.mjs";
export async function sandbox_3() {
  let mapped = await ebible_version_books_names("engbsb");
  let dictionary = list_to_lookup_letter_first_alphabet(mapped);
  return dictionary;
}
