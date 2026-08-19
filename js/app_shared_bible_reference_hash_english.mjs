import { app_shared_bible_reference_book_english } from "./app_shared_bible_reference_book_english.mjs";
import { app_shared_bible_reference_hash_key } from "./app_shared_bible_reference_hash_key.mjs";
import { app_shared_bible_reference_spaced } from "./app_shared_bible_reference_spaced.mjs";
import { equal } from "./equal.mjs";
import { html_hash_set_object } from "./html_hash_set_object.mjs";
import { property_set } from "./property_set.mjs";
import { text_replace_space_to } from "./text_replace_space_to.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
export async function app_shared_bible_reference_hash_english(hash, ref) {
  "The reference out of the address, read as a reader writes it, and with its book named in English however the reader named it.";
  "The address is corrected to match, so a reader who reached this passage by typing Juan copies out a link that says John. A link is a thing sent to somebody else, and the language it should open in is already written in it under its own key - so a book name in the address is not the reader's language, it is the passage's name, and one passage wants one name. Two spellings would be two links to the same place, splitting what people have saved and sent between them.";
  "The address given is written into rather than replaced, so the reading of it the caller already has in hand says the same thing this does. A correction the caller cannot see is the kind that gets checked against the old answer a line later.";
  "It is left alone when there was nothing to change, because rewriting an address that already said the right thing is a change to the page's history for no reason.";
  arguments_assert(arguments, 2);
  let ref_line = app_shared_bible_reference_spaced(ref);
  let english = await app_shared_bible_reference_book_english(ref_line);
  let same = equal(english, ref_line);
  if (same) {
    return ref_line;
  }
  let plus = "+";
  let value = text_replace_space_to(english, plus);
  let key = app_shared_bible_reference_hash_key();
  property_set(hash, key, value);
  html_hash_set_object(hash);
  return english;
}
