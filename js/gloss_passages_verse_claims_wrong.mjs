import { each } from "./each.mjs";
import { gloss_explain_verse_numbers } from "./gloss_explain_verse_numbers.mjs";
import { gloss_passages_entries_collect_generic } from "./gloss_passages_entries_collect_generic.mjs";
import { list_add } from "./list_add.mjs";
import { list_includes } from "./list_includes.mjs";
import { property_get } from "./property_get.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
export function gloss_passages_verse_claims_wrong(
  passages,
  text_index,
  word_key_read,
) {
  "Every word explanation in a chapter that names a verse holding nothing the word is related to.";
  "$plain text_index";
  "the index says which of a passage's texts is the wording being explained, and it names a place in a list rather than anything that runs.";
  "An explanation saying a word also stands in verse fifteen is the one kind of claim a machine can settle, because the chapter holds the answer and nothing outside it is needed. Everything else an explanation says is a matter of judgment; this is a matter of fact, and a wrong fact costs a reader more than a clumsy sentence does.";
  "How loosely two words count as the same is the caller's, and it is handed straight through, so the word being explained and the words of the verse are reduced the same way. Reduced differently, every claim would come back wrong.";
  "What comes back is a report and not a verdict. An explanation may name a verse to say what happens there rather than to say the word stands there, and such a sentence is right while being caught here. So each finding carries the wording that made it, and a reader decides.";
  function entry_read(context) {
    let explain = property_get(context, "explain");
    let key = property_get(context, "key");
    let verse_numbers = property_get(context, "verse_numbers");
    let verse_keys = property_get(context, "verse_keys");
    let verses_key = property_get(context, "verses_key");
    let word = property_get(context, "word");
    let named = gloss_explain_verse_numbers(explain, verse_numbers);
    let wrong = [];
    function named_read(verse_named) {
      let keys = property_get_or_null(verse_keys, verse_named);
      let held = list_includes(keys, key);
      if (held) {
        return;
      }
      let finding = {
        verses_key,
        word,
        verse_named,
        explain,
      };
      list_add(wrong, finding);
    }
    each(named, named_read);
    return wrong;
  }
  let found = gloss_passages_entries_collect_generic(
    passages,
    text_index,
    word_key_read,
    entry_read,
  );
  return found;
}
