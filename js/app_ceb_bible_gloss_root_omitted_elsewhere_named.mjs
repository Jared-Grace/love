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
import { gloss_explain_roots_named } from "./gloss_explain_roots_named.mjs";
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
import { text_size } from "./text_size.mjs";
import { greater_than_equal } from "./greater_than_equal.mjs";
import { list_filter } from "./list_filter.mjs";
import { greater_than } from "./greater_than.mjs";
export async function app_ceb_bible_gloss_root_omitted_elsewhere_named() {
  "Every word the Cebuano gloss store takes back to a root in one place and leaves without one in another, gathered by the word, with the roots it did name and the count of entries that went without.";
  "★ EVERY READING BEFORE THIS ONE LOOKED ONLY AT ENTRIES THAT NAME A ROOT, AND ALSO COULD NOT SEE MOST OF THOSE. Four checks were built asking whether a named root is the right one; none asked whether a root was named at all. All four asked the strict root reader, which sees one of the four wordings the store uses, so their 42484 was really 68536 and their idea of an entry that names nothing held 26052 entries that name a root in plain words. This reads all four wordings.";
  "Both halves of that mattered here and they pulled opposite ways, which is why the numbers moved so little. Allowing the further wordings takes entries out of the bare pile, which shrinks what any one word is owed; and it also moves words over the line where the store usually roots them, which lets more words in. The first run of this reported 1563 words and 8919 entries and the corrected one reports 1643 and 7755, so the summary held while a quarter of the list underneath it changed. A number that survives a correction is not thereby confirmed by it.";
  "Most of the store is right to name no root and is not what this is for. A word that is already a root has no root to give, and so has a name, a number and every small word the language is joined together with. Asking which of them ought to have had one needs Cebuano, and that is exactly the question being avoided here.";
  "So the store is asked about itself instead. Where one chapter gives a word a root and another chapter explains the same word without one, no judgment is needed to see that the second could have said more, because the first already said it. The store holds the answer and the missing entries are next to it.";
  "It is a coverage reading and not a correctness one, and the two come apart. A word may be given a root in every chapter and the root be wrong everywhere, which this cannot see; and an entry counted here may be perfectly good prose that simply did not need the origin repeated.";
  "Two counts come back because the wide one cannot be read on its own. Of 258651 entries, 11423 distinct words are explained and 2379 of them are given a root somewhere and not given one elsewhere, which is 81525 entries gone without. Reading the top of that finds it is mostly not a gap at all: apan, kay, usa, mao and anak are words with no root to give, and the handful of entries that appear to name one are naming the word itself, or a piece of it two letters long. Those are the root reader misfiring, not the store owing anything.";
  "So the narrow count asks the store what it usually does with each word instead. A word is kept when the root it was given is neither the word over again nor a scrap under four letters, and when the entries naming a root outnumber the entries that do not - the store own practice deciding, rather than a line drawn by whoever is reading. That leaves 1643 words and 7755 entries, and the top of that list has nothing in it but plainly built words: babaye, nag-ingon, mahitungod, miabot, mitubag, gibuhat, nakita, kalibotan.";
  "Whether filling one in is mechanical is a separate question and it is not settled. Reading the sentences for six of these words found that five of six that looked bare were the same claim in a wording the reader could not see, and only one was genuinely rootless. The rooted and the bare sentences for one word were read side by side, and where they differ it is not a clause that could be added but whole different prose - one chapter spends its sentence on the word and another spends it on what the verse is doing. So this names the entries and does not say they are a codemod.";
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
      let claimed = gloss_explain_roots_named(explain);
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
  let majority = [];
  let majority_bare = 0;
  function majority_read(held) {
    let word = property_get(held, "word");
    let roots = property_get(held, "roots");
    function root_told_is(root) {
      let itself = equal(root, word);
      if (itself) {
        return false;
      }
      let letters = text_size(root);
      let long = greater_than_equal(letters, 4);
      return long;
    }
    let told = list_filter(roots, root_told_is);
    let count = list_size(told);
    let none = equal(count, 0);
    if (none) {
      return;
    }
    let rooted = property_get(held, "rooted");
    let bare = property_get(held, "bare");
    let usual = greater_than(rooted, bare);
    if (not(usual)) {
      return;
    }
    majority_bare = add(majority_bare, bare);
    list_add(majority, held);
  }
  each(listed, majority_read);
  let r = {
    entries_seen: entries_seen,
    unexplained: unexplained,
    words_explained: list_size(words),
    words_split: list_size(listed),
    entries_fillable: bare_total,
    majority_words: list_size(majority),
    majority_entries: majority_bare,
    majority_listed: majority,
  };
  return r;
}
