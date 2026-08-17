import { app_shared_gloss_bible_generate_generic_word } from "./app_shared_gloss_bible_generate_generic_word.mjs";
import { each } from "./each.mjs";
import { g_sermon_passage_verses_key } from "./g_sermon_passage_verses_key.mjs";
import { gloss_entry_explain_key } from "./gloss_entry_explain_key.mjs";
import { gloss_explain_verse_numbers } from "./gloss_explain_verse_numbers.mjs";
import { gloss_passage_entries } from "./gloss_passage_entries.mjs";
import { gloss_passages_verse_numbers } from "./gloss_passages_verse_numbers.mjs";
import { gloss_passages_verse_word_keys } from "./gloss_passages_verse_word_keys.mjs";
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
  "How loosely two words count as the same is the caller's, and it is handed straight through to the reader that lays out the verses, so the word being explained and the words of the verse are reduced the same way. Reduced differently, every claim would come back wrong.";
  "A chapter is walked twice on purpose. The verses have to be laid out whole before any single explanation can be asked about, since an explanation in the first passage may well name the last verse in the chapter.";
  "What comes back is a report and not a verdict. An explanation may name a verse to say what happens there rather than to say the word stands there, and such a sentence is right while being caught here. So each finding carries the wording that made it, and a reader decides.";
  let word_key = app_shared_gloss_bible_generate_generic_word();
  let explain_key = gloss_entry_explain_key();
  let verse_numbers = gloss_passages_verse_numbers(passages);
  let verse_keys = gloss_passages_verse_word_keys(
    passages,
    text_index,
    word_key_read,
  );
  let found = [];
  function passage_read(passage) {
    let verses_key = g_sermon_passage_verses_key(passage);
    let entries = gloss_passage_entries(passage);
    function entry_read(entry) {
      let word = property_get(entry, word_key);
      let explain = property_get(entry, explain_key);
      let key = word_key_read(word);
      let named = gloss_explain_verse_numbers(explain, verse_numbers);
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
        list_add(found, finding);
      }
      each(named, named_read);
    }
    each(entries, entry_read);
  }
  each(passages, passage_read);
  return found;
}
