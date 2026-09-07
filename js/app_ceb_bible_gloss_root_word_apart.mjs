import { arguments_assert } from "./arguments_assert.mjs";
import { app_ceb_bible_gloss_generate } from "./app_ceb_bible_gloss_generate.mjs";
import { local_function_folder } from "./local_function_folder.mjs";
import { folder_read_files_exists_ensure } from "./folder_read_files_exists_ensure.mjs";
import { list_map } from "./list_map.mjs";
import { file_name_json_name } from "./file_name_json_name.mjs";
import { app_shared_gloss_bible_generate_generic_word } from "./app_shared_gloss_bible_generate_generic_word.mjs";
import { gloss_entry_explain_key } from "./gloss_entry_explain_key.mjs";
import { gloss_chapter_entries_collect_generic } from "./gloss_chapter_entries_collect_generic.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { null_is } from "./null_is.mjs";
import { gloss_explain_roots_claimed } from "./gloss_explain_roots_claimed.mjs";
import { list_size } from "./list_size.mjs";
import { equal } from "./equal.mjs";
import { add } from "./add.mjs";
import { property_get } from "./property_get.mjs";
import { text_lower_to } from "./text_lower_to.mjs";
import { list_get } from "./list_get.mjs";
import { gloss_root_claimed_relation } from "./gloss_root_claimed_relation.mjs";
import { property_set } from "./property_set.mjs";
import { not } from "./not.mjs";
import { list_join } from "./list_join.mjs";
import { list_add_if_not_includes } from "./list_add_if_not_includes.mjs";
import { each } from "./each.mjs";
import { each_async } from "./each_async.mjs";
import { object_property_names } from "./object_property_names.mjs";
import { list_slice_count } from "./list_slice_count.mjs";
import { list_add } from "./list_add.mjs";
import { list_sort_number_mapper_reverse } from "./list_sort_number_mapper_reverse.mjs";
export async function app_ceb_bible_gloss_root_word_apart() {
  "Every entry in the Cebuano gloss store whose explanation takes a word back to a root sharing nothing with it, gathered by the pair so one repeated claim counts once, beside the counts of the ordinary relations for scale.";
  "★ EVERY EARLIER READING SET THE NAMED ROOT AGAINST SOMETHING OTHER THAN THE WORD IT IS THE ROOT OF. One asked whether two chapters name the same root for one word, another whether the dictionary names the same root, another whether the dictionary derives the named root further. All three need a second opinion before they can say anything, so all three are silent wherever no second opinion exists. This needs none: the word is written right there in the entry, and a root sharing no run of four letters with the word it explains looked wrong on its face, whoever else was asked. It is not, and the measurement below is the refutation of that sentence rather than a use of it.";
  "It is the cheapest check of the four and it was the last one built, which is worth saying plainly rather than quietly fixing. The dictionary took a network and months of gathering; this needed nothing that was not already in the file being read. Reaching for the outside source first is what left it until last - and the outside source turns out to have been worth the trouble, because it knows the language and a rule about shared letters does not.";
  "The relations are all counted rather than only the bad one, because apart on its own cannot be read. If the store answers apart once in a thousand it is a list of mistakes; if it answers apart once in five, the reader saying what is apart is the thing at fault and not the store.";
  "Gathered by the word and root together, because a rule wrongly learned is written into every chapter using the word, and a hundred entries of one wrong pair is one thing to disagree with and not a hundred.";
  "The words are folded before they are compared, the same folding the relation reader uses, so that a d written as an r never reads as a word apart.";
  "Measured over 42484 entries naming a root: deeper 36395, kin 3441, apart 2311, spelling 336, shallower 1. So five entries in a hundred answer apart, from 402 distinct pairs - the middle of the two readings above, which is the answer that decides nothing on its own. Reading the top of the list decides it, and it decides against the check. Sulugoon under sugo, kusgan under kusog, hukman under hukom, lubnganan under lubong, kagabhion under gabii, sudlanan under sulod, puluy-anan under puyo: every one of those is correct Cebuano and every one answers apart.";
  "The reason is one regular thing the language does and the reader does not know about. Cebuano drops the vowel out of the last syllable of a root when a suffix is attached, so kusog becomes kusgan and sulod becomes sudlanan, and the run of four letters the reader needs is broken by the very step that made the word. A rule looking for shared letters cannot see through that, and here it is looking at exactly the pairs where it happens, because a word and its own root are always separated by an affix.";
  "So the reader is sound where it was built to work and wrong here, and the difference is which two things are being compared. Set two roots against each other, which is what it was written for, and neither has an affix on it, so a broken run really does mean two different words. Set a word against its root and an affix is always in the way. The same function answers honestly in one place and misleadingly in the other, and nothing about the answer says which.";
  "One row in the list is a fault of a different kind and is worth keeping in view: ayaw explained as coming from dili, forty entries of it. Neither is built from the other - they are two ways of saying no - so the explanation handed a reader a word of the same meaning where it promised the word it came from. That is the shape a real fault takes here, and finding one of it among four hundred pairs is the measure of what this check is worth as a fault list.";
  "Nothing is asked of the site and nothing is written.";
  arguments_assert(arguments, 0);
  let fn = app_ceb_bible_gloss_generate;
  let folder = local_function_folder(fn);
  let file_names = await folder_read_files_exists_ensure(folder);
  let chapter_codes = list_map(file_names, file_name_json_name);
  let word_key = app_shared_gloss_bible_generate_generic_word();
  let explain_key = gloss_entry_explain_key();
  let counts = {};
  let apart_pairs = {};
  let named_seen = 0;
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
      let count = list_size(claimed);
      let empty = equal(count, 0);
      if (empty) {
        return;
      }
      named_seen = add(named_seen, 1);
      let word = property_get(entry, word_key);
      let lowered = text_lower_to(word);
      let first = list_get(claimed, 0);
      let root = text_lower_to(first);
      let relation = gloss_root_claimed_relation(lowered, root);
      let held = property_get_or_null(counts, relation);
      let unseen = null_is(held);
      let before = unseen ? 0 : held;
      let value = add(before, 1);
      property_set(counts, relation, value);
      let far = equal(relation, "apart");
      if (not(far)) {
        return;
      }
      let key = list_join([lowered, root], " ");
      let held_pair = property_get_or_null(apart_pairs, key);
      let fresh = null_is(held_pair);
      if (fresh) {
        let made = {
          word: lowered,
          root: root,
          entries: 0,
          chapters: [],
        };
        property_set(apart_pairs, key, made);
        held_pair = made;
      }
      let left = property_get(held_pair, "entries");
      let value2 = add(left, 1);
      property_set(held_pair, "entries", value2);
      let chapters = property_get(held_pair, "chapters");
      list_add_if_not_includes(chapters, chapter_code);
    }
    each(entries, entry_read);
  }
  await each_async(chapter_codes, chapter_read);
  let keys = object_property_names(apart_pairs);
  let listed = [];
  function key_read(key) {
    let held = property_get(apart_pairs, key);
    let chapters = property_get(held, "chapters");
    let value = list_size(chapters);
    property_set(held, "chapters_count", value);
    let shown = list_slice_count(chapters, 0, 3);
    property_set(held, "chapters", shown);
    list_add(listed, held);
  }
  each(keys, key_read);
  function entries_of(held) {
    let count = property_get(held, "entries");
    return count;
  }
  list_sort_number_mapper_reverse(listed, entries_of);
  let r = {
    naming_a_root: named_seen,
    relations: counts,
    apart_pairs: list_size(listed),
    listed: listed,
  };
  return r;
}
