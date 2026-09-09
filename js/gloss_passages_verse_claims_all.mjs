import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { gloss_explain_verse_numbers } from "./gloss_explain_verse_numbers.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { list_includes } from "./list_includes.mjs";
import { list_add } from "./list_add.mjs";
import { each } from "./each.mjs";
import { gloss_passages_entries_collect_generic } from "./gloss_passages_entries_collect_generic.mjs";
export function gloss_passages_verse_claims_all(
  passages,
  text_index,
  word_key_read,
) {
  "Every verse a word explanation in a chapter names, whether or not the verse holds a word the explanation's word is related to.";
  "$plain text_index";
  "the index says which of a passage's texts is the wording being explained, and it names a place in a list rather than anything that runs.";
  "The reading beside this one keeps only the claims that come back wrong, which is the half worth mending. This one keeps them all, and that is what gives the wrong ones a denominator. Six wrong claims is a store in good order if two hundred were made and a detector that has quietly stopped firing if seven were.";
  "Each row says whether the named verse held a related word rather than being sorted into two lists here. A caller wanting one half asks for that half in one line, and a caller wanting the proportion needs both halves side by side and would otherwise have to walk twice.";
  "A claim that comes back not held is a report and not a verdict, for the same reason it is there: an explanation may name a verse to say what happens in it rather than to say the word stands in it. The wording that made the row travels with it so a reader can tell the two apart.";
  "Nothing is written. The passages are read as they were handed over.";
  arguments_assert(arguments, 3);
  function entry_read(context) {
    let explain = property_get(context, "explain");
    let key = property_get(context, "key");
    let verse_numbers = property_get(context, "verse_numbers");
    let verse_keys = property_get(context, "verse_keys");
    let verses_key = property_get(context, "verses_key");
    let word = property_get(context, "word");
    let named = gloss_explain_verse_numbers(explain, verse_numbers);
    let claims = [];
    function named_read(verse_named) {
      let keys = property_get_or_null(verse_keys, verse_named);
      let held = list_includes(keys, key);
      let claim = {
        verses_key,
        word,
        verse_named,
        held,
        explain,
      };
      list_add(claims, claim);
    }
    each(named, named_read);
    return claims;
  }
  let found = gloss_passages_entries_collect_generic(
    passages,
    text_index,
    word_key_read,
    entry_read,
  );
  return found;
}
