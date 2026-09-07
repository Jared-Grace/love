import { arguments_assert } from "./arguments_assert.mjs";
import { app_ceb_bible_gloss_generate } from "./app_ceb_bible_gloss_generate.mjs";
import { gloss_chapters_stored } from "./gloss_chapters_stored.mjs";
import { app_shared_gloss_bible_generate_generic_word } from "./app_shared_gloss_bible_generate_generic_word.mjs";
import { gloss_entry_explain_key } from "./gloss_entry_explain_key.mjs";
import { property_set } from "./property_set.mjs";
import { each } from "./each.mjs";
import { gloss_chapter_entries_collect_generic } from "./gloss_chapter_entries_collect_generic.mjs";
import { property_get } from "./property_get.mjs";
import { text_lower_to } from "./text_lower_to.mjs";
import { list_includes } from "./list_includes.mjs";
import { not } from "./not.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { null_is } from "./null_is.mjs";
import { gloss_explain_roots_claimed } from "./gloss_explain_roots_claimed.mjs";
import { list_size } from "./list_size.mjs";
import { equal } from "./equal.mjs";
import { add } from "./add.mjs";
import { list_add_if_not_includes } from "./list_add_if_not_includes.mjs";
import { each_async } from "./each_async.mjs";
import { greater_than_equal } from "./greater_than_equal.mjs";
import { list_get } from "./list_get.mjs";
import { list_add } from "./list_add.mjs";
export async function app_ceb_bible_gloss_root_omitted_wordings() {
  "The sentences the Cebuano gloss store actually writes for a handful of words it names a root for most of the time and no root for the rest of the time, the rooted wordings and the bare wordings set side by side so a reader can see what the difference between them is made of.";
  "★ IT WAS BUILT TO TEST A SENTENCE THAT HAD ALREADY BEEN OFFERED AS A RECOMMENDATION, WHICH IS THAT FILLING THOSE ENTRIES IN IS MECHANICAL. The reading beside this one found 1563 words the store roots more often than it does not, over 8919 entries where it does not, and called filling them a codemod because the answer is already in the store. That is a claim about the shape of the writing and not about the count, and nothing measured so far had looked at the writing.";
  "The words are named here rather than found, because the question is not how many there are. Six of the clean top of that reading are enough to see the shape, and a list that finds itself would only make the answer longer without making it surer.";
  "An explanation is called rooted when the root reader finds a root named in it and bare when it does not, which is the same test the count used. Distinct wordings are kept and repeats are dropped, because the same sentence written ninety times is one way of explaining the word.";
  "Nothing is asked of the site and nothing is written.";
  arguments_assert(arguments, 0);
  let words = [
    "gibuhat",
    "moabot",
    "matarong",
    "daotan",
    "kinabuhi",
    "atubangan",
  ];
  let fn = app_ceb_bible_gloss_generate;
  let chapter_codes = await gloss_chapters_stored(fn);
  let word_key = app_shared_gloss_bible_generate_generic_word();
  let explain_key = gloss_entry_explain_key();
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
      let word = property_get(entry, word_key);
      let lowered = text_lower_to(word);
      let wanted = list_includes(words, lowered);
      if (not(wanted)) {
        return;
      }
      let explain = property_get_or_null(entry, explain_key);
      let none = null_is(explain);
      if (none) {
        return;
      }
      let held = property_get(by_word, lowered);
      let claimed = gloss_explain_roots_claimed(explain);
      let count = list_size(claimed);
      let empty = equal(count, 0);
      let side = empty ? "bare" : "rooted";
      let seen = property_get(held, side);
      let value = add(seen, 1);
      property_set(held, side, value);
      let wordings_key = empty ? "bare_wordings" : "rooted_wordings";
      let wordings = property_get(held, wordings_key);
      list_add_if_not_includes(wordings, explain);
    }
    each(entries, entry_read);
  }
  await each_async(chapter_codes, chapter_read);
  let rows = [];
  function word_read(word) {
    let held = property_get(by_word, word);
    let rooted_wordings = property_get(held, "rooted_wordings");
    let bare_wordings = property_get(held, "bare_wordings");
    let value2 = list_size(rooted_wordings);
    property_set(held, "rooted_ways", value2);
    let value3 = list_size(bare_wordings);
    property_set(held, "bare_ways", value3);
    let rooted_ways = list_size(rooted_wordings);
    let rooted_any = greater_than_equal(rooted_ways, 1);
    let rooted_shown = rooted_any ? list_get(rooted_wordings, 0) : "";
    let bare_ways = list_size(bare_wordings);
    let bare_any = greater_than_equal(bare_ways, 1);
    let bare_shown = bare_any ? list_get(bare_wordings, 0) : "";
    property_set(held, "rooted_shown", rooted_shown);
    property_set(held, "bare_shown", bare_shown);
    property_set(held, "rooted_wordings", []);
    property_set(held, "bare_wordings", []);
    list_add(rows, held);
  }
  each(words, word_read);
  let r = {
    chapters: list_size(chapter_codes),
    rows: rows,
  };
  return r;
}
