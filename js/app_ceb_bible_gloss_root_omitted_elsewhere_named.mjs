import { arguments_assert } from "./arguments_assert.mjs";
import { app_ceb_bible_gloss_generate } from "./app_ceb_bible_gloss_generate.mjs";
import { gloss_chapters_stored } from "./gloss_chapters_stored.mjs";
import { app_shared_gloss_bible_generate_generic_word } from "./app_shared_gloss_bible_generate_generic_word.mjs";
import { gloss_entry_explain_key } from "./gloss_entry_explain_key.mjs";
import { gloss_chapter_entries_collect_generic } from "./gloss_chapter_entries_collect_generic.mjs";
import { add } from "./add.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { null_is } from "./null_is.mjs";
import { property_get } from "./property_get.mjs";
import { text_lower_to } from "./text_lower_to.mjs";
import { property_set } from "./property_set.mjs";
import { gloss_explain_roots_claimed } from "./gloss_explain_roots_claimed.mjs";
import { list_size } from "./list_size.mjs";
import { equal } from "./equal.mjs";
import { list_add_if_not_includes } from "./list_add_if_not_includes.mjs";
import { list_get } from "./list_get.mjs";
import { each } from "./each.mjs";
import { each_async } from "./each_async.mjs";
import { object_property_names } from "./object_property_names.mjs";
import { not } from "./not.mjs";
import { list_slice_count } from "./list_slice_count.mjs";
import { list_add } from "./list_add.mjs";
import { list_sort_number_mapper_reverse } from "./list_sort_number_mapper_reverse.mjs";
export async function app_ceb_bible_gloss_root_omitted_elsewhere_named() {
  "Every word the Cebuano gloss store takes back to a root in one place and leaves without one in another, gathered by the word, with the roots it did name and the count of entries that went without.";
  "★ EVERY READING BEFORE THIS ONE LOOKED ONLY AT ENTRIES THAT NAME A ROOT, WHICH IS ONE ENTRY IN SIX. Four checks were built asking whether a named root is the right one; none asked whether a root was named at all. Of 258651 entries only 42484 name one, and an explanation that never says where a word came from cannot be wrong about it - so a fault list built from named roots has 84 percent of the store outside its reach by construction, and nothing in any of those four answers says so.";
  "Most of that 84 percent is right and is not what this is for. A word that is already a root has no root to give, and so has a name, a number and every small word the language is joined together with. Asking which of them ought to have had one needs Cebuano, and that is exactly the question being avoided here.";
  "So the store is asked about itself instead. Where one chapter gives a word a root and another chapter explains the same word without one, no judgment is needed to see that the second could have said more, because the first already said it. The store holds the answer and the missing entries are next to it.";
  "It is a coverage reading and not a correctness one, and the two come apart. A word may be given a root in every chapter and the root be wrong everywhere, which this cannot see; and an entry counted here may be perfectly good prose that simply did not need the origin repeated. What the count is worth is that filling one in takes no Cebuano at all - the words are already written down in the same store.";
  "Nothing is asked of the site and nothing is written.";
  arguments_assert(arguments, 0);
  let fn = app_ceb_bible_gloss_generate;
  let chapter_codes = await gloss_chapters_stored(fn);
  let word_key = app_shared_gloss_bible_generate_generic_word();
  let explain_key = gloss_entry_explain_key();
  let by_word = {};
  let entries_seen = 0;
  let unexplained = 0;
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
      entries_seen = add(entries_seen, 1);
      let explain = property_get_or_null(entry, explain_key);
      let none = null_is(explain);
      if (none) {
        unexplained = add(unexplained, 1);
        return;
      }
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
      let claimed = gloss_explain_roots_claimed(explain);
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
    each(entries, entry_read);
  }
  await each_async(chapter_codes, chapter_read);
  let words = object_property_names(by_word);
  let listed = [];
  let bare_total = 0;
  function word_read(name) {
    let held = property_get(by_word, name);
    let rooted = property_get(held, "rooted");
    let bare = property_get(held, "bare");
    let never = equal(rooted, 0);
    let always = equal(bare, 0);
    let split = not(never) ? not(always) : false;
    if (not(split)) {
      return;
    }
    bare_total = add(bare_total, bare);
    let chapters = property_get(held, "chapters");
    let value = list_size(chapters);
    property_set(held, "chapters_count", value);
    let shown = list_slice_count(chapters, 0, 3);
    property_set(held, "chapters", shown);
    list_add(listed, held);
  }
  each(words, word_read);
  function bare_of(held) {
    let count = property_get(held, "bare");
    return count;
  }
  list_sort_number_mapper_reverse(listed, bare_of);
  let r = {
    entries_seen: entries_seen,
    unexplained: unexplained,
    words_explained: list_size(words),
    words_split: list_size(listed),
    entries_fillable: bare_total,
    listed: listed,
  };
  return r;
}
