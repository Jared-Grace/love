import { arguments_assert } from "./arguments_assert.mjs";
import { app_ceb_bible_gloss_generate } from "./app_ceb_bible_gloss_generate.mjs";
import { app_shared_gloss_bible_generate_generic_word } from "./app_shared_gloss_bible_generate_generic_word.mjs";
import { add } from "./add.mjs";
import { property_get } from "./property_get.mjs";
import { text_lower_to } from "./text_lower_to.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { null_is } from "./null_is.mjs";
import { property_set } from "./property_set.mjs";
import { list_size } from "./list_size.mjs";
import { equal } from "./equal.mjs";
import { list_add_if_not_includes } from "./list_add_if_not_includes.mjs";
import { list_get } from "./list_get.mjs";
import { gloss_chapters_roots_named_entries_generic } from "./gloss_chapters_roots_named_entries_generic.mjs";
import { subtract } from "./subtract.mjs";
export async function app_ceb_bible_gloss_root_omitted_elsewhere_named_unexplained() {
  arguments_assert(arguments, 0);
  let fn = app_ceb_bible_gloss_generate;
  let word_key = app_shared_gloss_bible_generate_generic_word();
  let by_word = {};
  let explained = 0;
  function entry_read(found) {
    explained = add(explained, 1);
    let chapter_code = property_get(found, "chapter_code");
    let entry = property_get(found, "entry");
    let claimed = property_get(found, "named");
    let word = property_get(entry, word_key);
    let lowered = text_lower_to(word);
    let held = property_get_or_null(by_word, lowered);
    let fresh = null_is(held);
    if (fresh) {
      let made = {
        word: lowered,
        roots: [],
        rooted: 0,
        bare: 0,
        chapters: [],
      };
      property_set(by_word, lowered, made);
      held = made;
    }
    let count = list_size(claimed);
    let empty = equal(count, 0);
    if (empty) {
      let bare = property_get(held, "bare");
      let value = add(bare, 1);
      property_set(held, "bare", value);
      let chapters = property_get(held, "chapters");
      list_add_if_not_includes(chapters, chapter_code);
      return;
    }
    let rooted = property_get(held, "rooted");
    let value2 = add(rooted, 1);
    property_set(held, "rooted", value2);
    let first = list_get(claimed, 0);
    let root = text_lower_to(first);
    let roots = property_get(held, "roots");
    list_add_if_not_includes(roots, root);
  }
  let walked = await gloss_chapters_roots_named_entries_generic(fn, entry_read);
  let entries_seen = property_get(walked, "entries_seen");
  let unexplained = subtract(entries_seen, explained);
  let r = {
    by_word,
    entries_seen,
    unexplained,
  };
  return r;
}
