import { arguments_assert } from "./arguments_assert.mjs";
import { app_ceb_bible_gloss_generate } from "./app_ceb_bible_gloss_generate.mjs";
import { app_shared_gloss_bible_generate_generic_word } from "./app_shared_gloss_bible_generate_generic_word.mjs";
import { property_set } from "./property_set.mjs";
import { each } from "./each.mjs";
import { property_get } from "./property_get.mjs";
import { text_lower_to } from "./text_lower_to.mjs";
import { list_includes } from "./list_includes.mjs";
import { not } from "./not.mjs";
import { list_size } from "./list_size.mjs";
import { equal } from "./equal.mjs";
import { add } from "./add.mjs";
import { list_add_if_not_includes } from "./list_add_if_not_includes.mjs";
import { gloss_chapters_roots_named_entries_generic } from "./gloss_chapters_roots_named_entries_generic.mjs";
export async function app_ceb_bible_gloss_root_omitted_wordings_walked(words) {
  arguments_assert(arguments, 1);
  let fn = app_ceb_bible_gloss_generate;
  let word_key = app_shared_gloss_bible_generate_generic_word();
  let by_word = {};
  function word_start(word) {
    let made = {
      word: word,
      rooted: 0,
      bare: 0,
      rooted_wordings: [],
      bare_wordings: [],
    };
    property_set(by_word, word, made);
  }
  each(words, word_start);
  function entry_read(found) {
    let entry = property_get(found, "entry");
    let word = property_get(entry, word_key);
    let lowered = text_lower_to(word);
    let wanted = list_includes(words, lowered);
    if (not(wanted)) {
      return;
    }
    let explain = property_get(found, "explain");
    let held = property_get(by_word, lowered);
    let named = property_get(found, "named");
    let count = list_size(named);
    let empty = equal(count, 0);
    let side = empty ? "bare" : "rooted";
    let seen = property_get(held, side);
    let value = add(seen, 1);
    property_set(held, side, value);
    let wordings_key = empty ? "bare_wordings" : "rooted_wordings";
    let wordings = property_get(held, wordings_key);
    list_add_if_not_includes(wordings, explain);
  }
  let walked = await gloss_chapters_roots_named_entries_generic(fn, entry_read);
  let r = {
    by_word,
    walked,
  };
  return r;
}
