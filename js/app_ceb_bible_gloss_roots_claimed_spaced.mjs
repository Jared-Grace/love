import { arguments_assert } from "./arguments_assert.mjs";
import { app_shared_gloss_bible_generate_generic_word } from "./app_shared_gloss_bible_generate_generic_word.mjs";
import { property_get } from "./property_get.mjs";
import { add } from "./add.mjs";
import { text_includes } from "./text_includes.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { list_add } from "./list_add.mjs";
import { each } from "./each.mjs";
import { gloss_chapters_roots_claimed_entries_generic } from "./gloss_chapters_roots_claimed_entries_generic.mjs";
import { app_ceb_bible_gloss_generate } from "./app_ceb_bible_gloss_generate.mjs";
import { list_size } from "./list_size.mjs";
export async function app_ceb_bible_gloss_roots_claimed_spaced() {
  "Every Cebuano explanation that names something with a space in it as the word's root, given back with the word, the chapter and the sentence itself, because a Cebuano root is one word and a thing with a space in it is a translation standing where a root belongs.";
  "★ THE COUNT OF THESE ALREADY EXISTED AND THE OFFENDERS DID NOT. The reading beside this one arrives at three of them and then returns without any of them in its rows: it collects a row only on the branch where the strict reader found nothing, and these are the entries where the strict reader found something. So the number has been sitting in an answer for as long as anybody has run it, correct and completely unactionable, and the entries it counts cannot be reached from it at all. A count nobody can walk back to is a report that a fault exists and a refusal to say where.";
  "It asks the strict reader rather than the widened one on purpose. The widened reader takes a guess at a root wherever a sentence has not plainly named one, and a guess with a space in it says something about the guess; the strict reader only answers where the sentence really did name a root, so a space in what it hands back is the sentence's own doing.";
  "A space is the whole test and no attempt is made to say what the thing with the space in it is. To give and to sing are English and pa-hinumdom is not, and telling those apart takes a reader who knows both languages - while neither of them is a Cebuano root, which is the only claim being made here and the only one that needs no such reader.";
  "The word is read off the entry with the reader that answers nothing when it is absent, and that is this reading's own choice rather than the shared walk's: the walk hands the whole entry over precisely so that each reading keeps the reader it had.";
  arguments_assert(arguments, 0);
  let word_key = app_shared_gloss_bible_generate_generic_word();
  let claimed_total = 0;
  let rows = [];
  function entry_read(found) {
    let chapter_code = property_get(found, "chapter_code");
    let entry = property_get(found, "entry");
    let explain = property_get(found, "explain");
    let claimed = property_get(found, "claimed");
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
  let walked = await gloss_chapters_roots_claimed_entries_generic(
    app_ceb_bible_gloss_generate,
    entry_read,
  );
  let r = {
    chapters: property_get(walked, "chapters"),
    claimed_total,
    spaced_total: list_size(rows),
    rows,
  };
  return r;
}
