import { fn_name } from "./fn_name.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { bible_words_names_apart } from "./bible_words_names_apart.mjs";
import { property_get } from "./property_get.mjs";
export async function bible_words_common(bible_folder) {
  "$plain bible_folder";
  "Every different word one whole bible writes somewhere in small letters - the vocabulary with the names taken out.";
  ("This is the half of ",
    fn_name("bible_words_names_apart"),
    " that seven readings wanted, and every one of them asked for the pair and then threw the other half away on the very next line. Naming the half means a caller says which vocabulary it wants rather than saying it twice.");
  ("The other half is deliberately not given a name of its own beside this. Two readings ask for the names and one asks for both halves at once, and a caller that wants both is better served by the pair than by two reads of the same bible.");
  arguments_assert(arguments, 1);
  let apart = await bible_words_names_apart(bible_folder);
  let common = property_get(apart, "common");
  return common;
}
