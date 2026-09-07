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
import { gloss_explain_roots_named } from "./gloss_explain_roots_named.mjs";
import { list_size } from "./list_size.mjs";
import { equal } from "./equal.mjs";
import { add } from "./add.mjs";
import { list_add_if_not_includes } from "./list_add_if_not_includes.mjs";
import { each_async } from "./each_async.mjs";
import { greater_than_equal } from "./greater_than_equal.mjs";
import { list_get } from "./list_get.mjs";
import { list_add } from "./list_add.mjs";
export async function app_ceb_bible_gloss_root_omitted_wordings() {
  "The sentences the Cebuano gloss store actually writes for a handful of words it names a root for most of the time and no root for the rest of the time, one rooted wording and one bare wording of each set side by side so a reader can see what the difference between them is made of.";
  "★ IT WAS BUILT TO TEST A SENTENCE THAT HAD ALREADY BEEN OFFERED AS A RECOMMENDATION, WHICH IS THAT FILLING THOSE ENTRIES IN IS MECHANICAL. The reading beside this one found the words the store roots more often than it does not, and the entries where it does not, and called filling them a codemod because the answer is already in the store. That is a claim about the shape of the writing and not about the count, and nothing measured up to then had looked at the writing.";
  "Reading the writing answered a different question four times over. Each run of this printed a first bare sentence that was not bare at all but named the same root in a wording the reader could not yet see, and each of those became a wording the reader now reads. Three came out of three rounds that way. So this is what found them, and it found them by printing sentences rather than by counting anything.";
  "★ THE FOURTH ROUND FOUND A FIFTH WORDING AND THAT IS WHERE THIS STOPS, BECAUSE THE FIFTH CANNOT BE READ FROM THE SENTENCE ALONE. Five of the six bare sentences left now open with the root instead of the word - 'Buhat' is to do. 'Gi-' tells it from the side of the deed - and the only thing that tells the root from the headword there is the headword, which the reader is not given. Adding it needs a reader taking the word too, and that is a decision about what this store owes rather than a pattern to bolt on.";
  "So the question this was built for is still open and the honest state of it is worth saying plainly. Of the six, five bare sentences are the same claim in other words and one - matarong - is genuinely rootless, spending its sentence on what the verse is doing rather than on how the word is built. If that ratio holds, most of what a coverage count calls missing is wording, and the residue is prose that would have to be authored rather than filled.";
  "The words are named here rather than found, because the question is not how many there are. Six of the clean top of that reading are enough to see the shape, and a list that finds itself would only make the answer longer without making it surer.";
  "One wording of each side is handed back and the rest counted, because the ways run to dozens for a common word and the point is made by two sentences.";
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
      let claimed = gloss_explain_roots_named(explain);
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
    let rooted_ways = list_size(rooted_wordings);
    property_set(held, "rooted_ways", rooted_ways);
    let bare_ways = list_size(bare_wordings);
    property_set(held, "bare_ways", bare_ways);
    let rooted_any = greater_than_equal(rooted_ways, 1);
    let rooted_shown = rooted_any ? list_get(rooted_wordings, 0) : "";
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
