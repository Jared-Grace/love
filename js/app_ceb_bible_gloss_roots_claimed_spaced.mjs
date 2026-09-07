import { arguments_assert } from "./arguments_assert.mjs";
import { app_ceb_bible_gloss_generate } from "./app_ceb_bible_gloss_generate.mjs";
import { gloss_chapters_stored } from "./gloss_chapters_stored.mjs";
import { gloss_entry_explain_key } from "./gloss_entry_explain_key.mjs";
import { app_shared_gloss_bible_generate_generic_word } from "./app_shared_gloss_bible_generate_generic_word.mjs";
import { gloss_chapter_entries_collect_generic } from "./gloss_chapter_entries_collect_generic.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { null_is } from "./null_is.mjs";
import { gloss_explain_roots_claimed } from "./gloss_explain_roots_claimed.mjs";
import { add } from "./add.mjs";
import { text_includes } from "./text_includes.mjs";
import { list_add } from "./list_add.mjs";
import { each } from "./each.mjs";
import { each_async } from "./each_async.mjs";
import { list_size } from "./list_size.mjs";
export async function app_ceb_bible_gloss_roots_claimed_spaced() {
  "Every Cebuano explanation that names something with a space in it as the word's root, given back with the word, the chapter and the sentence itself, because a Cebuano root is one word and a thing with a space in it is a translation standing where a root belongs.";
  "★ THE COUNT OF THESE ALREADY EXISTED AND THE OFFENDERS DID NOT. The reading beside this one arrives at three of them and then returns without any of them in its rows: it collects a row only on the branch where the strict reader found nothing, and these are the entries where the strict reader found something. So the number has been sitting in an answer for as long as anybody has run it, correct and completely unactionable, and the entries it counts cannot be reached from it at all. A count nobody can walk back to is a report that a fault exists and a refusal to say where.";
  "It asks the strict reader rather than the widened one on purpose. The widened reader takes a guess at a root wherever a sentence has not plainly named one, and a guess with a space in it says something about the guess; the strict reader only answers where the sentence really did name a root, so a space in what it hands back is the sentence's own doing.";
  "A space is the whole test and no attempt is made to say what the thing with the space in it is. To give and to sing are English and pa-hinumdom is not, and telling those apart takes a reader who knows both languages - while neither of them is a Cebuano root, which is the only claim being made here and the only one that needs no such reader.";
  arguments_assert(arguments, 0);
  let fn = app_ceb_bible_gloss_generate;
  let chapter_codes = await gloss_chapters_stored(fn);
  let explain_key = gloss_entry_explain_key();
  let word_key = app_shared_gloss_bible_generate_generic_word();
  let claimed_total = 0;
  let rows = [];
  function entries_pass(entries) {
    return entries;
  }
  async function chapter_read(chapter_code) {
    let entries = await gloss_chapter_entries_collect_generic(
      chapter_code,
      fn,
      entries_pass,
    );
    function entry_read(entry) {
      let explain = property_get_or_null(entry, explain_key);
      let none = null_is(explain);
      if (none) {
        return;
      }
      let claimed = gloss_explain_roots_claimed(explain);
      function root_read(root) {
        claimed_total = add(claimed_total, 1);
        let spaced = text_includes(root, " ");
        if (spaced) {
          let word = property_get_or_null(entry, word_key);
          let row = {
            chapter: chapter_code,
            word,
            root,
            explain,
          };
          list_add(rows, row);
        }
      }
      each(claimed, root_read);
    }
    each(entries, entry_read);
  }
  await each_async(chapter_codes, chapter_read);
  let r = {
    chapters: list_size(chapter_codes),
    claimed_total,
    spaced_total: list_size(rows),
    rows,
  };
  return r;
}
