import { arguments_assert } from "./arguments_assert.mjs";
import { text_starts_with } from "./text_starts_with.mjs";
import { text_slice_from } from "./text_slice_from.mjs";
import { text_lower_to } from "./text_lower_to.mjs";
export function ebible_bible_folder_version_word(bible_folder) {
  arguments_assert(arguments, 1);
  ("$plain bible_folder");
  ("The short word a person asks for an eBible translation by, worked out from the folder its publisher packs it in.");
  ("EVERY ENGLISH FOLDER THERE OPENS WITH THE LANGUAGE, AND NOBODY SAYS THE LANGUAGE. A person asking for the updated World English Bible says webu, not engwebu; that it is english is already settled by their reading it. So the word is the folder with its language dropped and its letters brought down to one case - a rule rather than a table, which is what lets it answer for a translation added after this was written.");
  ("Some folders spell the language off with a dash and some run it straight into the name, so both are taken. A folder naming no language at all is answered whole, because taking three letters off the front of a word that never carried them would name a different translation.");
  let dashed = text_starts_with(bible_folder, "eng-");
  if (dashed) {
    let after_dash = text_slice_from(bible_folder, 4);
    let lowered_dash = text_lower_to(after_dash);
    return lowered_dash;
  }
  let prefixed = text_starts_with(bible_folder, "eng");
  if (prefixed) {
    let after = text_slice_from(bible_folder, 3);
    let lowered = text_lower_to(after);
    return lowered;
  }
  let whole = text_lower_to(bible_folder);
  return whole;
}
