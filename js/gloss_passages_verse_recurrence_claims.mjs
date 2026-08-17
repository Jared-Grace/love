import { gloss_passages_entries_collect_generic } from "./gloss_passages_entries_collect_generic.mjs";
import { gloss_recurrence_claim_markers } from "./gloss_recurrence_claim_markers.mjs";
import { gloss_verse_keys_verse_numbers } from "./gloss_verse_keys_verse_numbers.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { list_size } from "./list_size.mjs";
import { property_get } from "./property_get.mjs";
import { text_markers_found } from "./text_markers_found.mjs";
export function gloss_passages_verse_recurrence_claims(
  passages,
  text_index,
  word_key_read,
) {
  "Every word explanation in a chapter that says how often its word stands there, laid beside the verses the word actually stands in.";
  "$plain text_index";
  "the index says which of a passage's texts is the wording being explained, and it names a place in a list rather than anything that runs.";
  "An explanation naming a verse can be settled outright, and the reading beside this one settles it. A sentence saying the word is named in six verses, or that this is the third time, or that it stands nowhere else, names no verse at all and so can be settled by nobody - until the true list is put next to it, and then it takes a second to read.";
  "So nothing here is called wrong. What comes back is a reading list: the sentence that counts, and the count. That is why the phrase that caught each one comes back too - a reader who can see which words did the catching can tell a real claim from a turn of speech without opening the chapter.";
  let markers = gloss_recurrence_claim_markers();
  function entry_read(context) {
    let explain = property_get(context, "explain");
    let key = property_get(context, "key");
    let verse_keys = property_get(context, "verse_keys");
    let verses_key = property_get(context, "verses_key");
    let word = property_get(context, "word");
    let counting = text_markers_found(explain, markers);
    let none = list_empty_is(counting);
    if (none) {
      let quiet = [];
      return quiet;
    }
    let verses_standing = gloss_verse_keys_verse_numbers(verse_keys, key);
    let times = list_size(verses_standing);
    let finding = {
      verses_key,
      word,
      counting,
      times,
      verses_standing,
      explain,
    };
    let one = [finding];
    return one;
  }
  let found = gloss_passages_entries_collect_generic(
    passages,
    text_index,
    word_key_read,
    entry_read,
  );
  return found;
}
