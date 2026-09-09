import { fn_name } from "./fn_name.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { app_shared_gloss_bible_generate_generic_word } from "./app_shared_gloss_bible_generate_generic_word.mjs";
import { property_get } from "./property_get.mjs";
import { list_size } from "./list_size.mjs";
import { equal } from "./equal.mjs";
import { add } from "./add.mjs";
import { text_lower_to } from "./text_lower_to.mjs";
import { list_get } from "./list_get.mjs";
import { gloss_root_claimed_relation } from "./gloss_root_claimed_relation.mjs";
import { property_count_add } from "./property_count_add.mjs";
import { gloss_word_folded } from "./gloss_word_folded.mjs";
import { gloss_word_bare } from "./gloss_word_bare.mjs";
import { text_accent_marks_removed } from "./text_accent_marks_removed.mjs";
import { text_edit_distance_inside } from "./text_edit_distance_inside.mjs";
import { less_than } from "./less_than.mjs";
import { text_from_number } from "./text_from_number.mjs";
import { list_join } from "./list_join.mjs";
import { not } from "./not.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { null_is } from "./null_is.mjs";
import { property_set } from "./property_set.mjs";
import { list_add_if_not_includes } from "./list_add_if_not_includes.mjs";
import { gloss_chapters_roots_claimed_entries_generic } from "./gloss_chapters_roots_claimed_entries_generic.mjs";
import { app_ceb_bible_gloss_generate } from "./app_ceb_bible_gloss_generate.mjs";
import { object_property_names } from "./object_property_names.mjs";
import { list_slice_count } from "./list_slice_count.mjs";
import { list_add } from "./list_add.mjs";
import { each } from "./each.mjs";
import { list_sort_number_mapper_reverse } from "./list_sort_number_mapper_reverse.mjs";
import { gloss_entries_count } from "./gloss_entries_count.mjs";
export async function app_ceb_bible_gloss_roots_relation_by_reach() {
  "Every relation the Cebuano store's roots answer, split by how many single-letter edits the root stands from being spelled inside the word it explains, so that the one warning written on the relation reader is a number instead of a reading of the top of a list.";
  ("★ THE READER SAYS OF ITSELF THAT IT IS MISLEADING HERE, AND NOBODY HAD PRICED THAT. ",
    fn_name("gloss_root_claimed_relation"),
    " carries the warning outright: between two roots it is sound, between a word and its root an affix is always in the way, and apart comes back for correct Cebuano like sulugoon under sugo and kusgan under kusog. ",
    fn_name("app_ceb_bible_gloss_root_word_apart"),
    " met 2311 of those and decided the check against itself by reading the top of the list. That is the head, and the head of a list sorted by how often a pair is met is clean by selection: four hundred pairs sit in the tail at one entry each, unread.");
  ("A distance settles the tail without anybody reading it. Cebuano drops the vowel out of a root's last syllable when a suffix goes on, and that is one edit; a consonant shifting where a piece meets the root is one more. So a root within two edits of standing inside its word is reachable by the language's own ordinary word-building, whatever relation the shared-run rule answered, and a root three or more edits away is not reachable that way at all.");
  ("★ REACHABLE IS NOT INNOCENT. A root somebody invented can land one edit away by chance, so this splits what ordinary word-building could have made from what it could not, and never true from false. The unreachable rows are a floor under the faults on this side and never a ceiling.");
  ("The relation and the distance are crossed rather than reported one beside the other, because the whole question is whether they disagree: a table of both says how much of apart is ordinary morphology, which is the sentence the reader's own warning makes and does not measure.");
  ("The apart rows that are also unreachable are gathered by the word and root together, because one rule wrongly learned is written into every chapter using the word, and a run of entries of one wrong pair is one thing to disagree with rather than a run of them.");
  ("The accent marks come off before the distance is taken, for the reason ",
    fn_name("app_ceb_bible_gloss_roots_claimed_outside_word_priced"),
    " gives: the fold leaves a mark where it finds it and the Cebuano text writes none, so a marked root would read as distance where it is really spelling. The relation is asked exactly as the reading beside this one asks it, marks and all, so that the two tallies can be set against each other.");
  ("Nothing is asked of the site and nothing is written.");
  arguments_assert(arguments, 0);
  let word_key = app_shared_gloss_bible_generate_generic_word();
  let naming_a_root = 0;
  let crossed = {};
  let relations = {};
  let far_pairs = {};
  function entry_read(found) {
    let entry = property_get(found, "entry");
    let claimed = property_get(found, "claimed");
    let claimed_count = list_size(claimed);
    let empty = equal(claimed_count, 0);
    if (empty) {
      return;
    }
    naming_a_root = add(naming_a_root, 1);
    let word = property_get(entry, word_key);
    let lowered = text_lower_to(word);
    let first = list_get(claimed, 0);
    let root = text_lower_to(first);
    let relation = gloss_root_claimed_relation(lowered, root);
    property_count_add(relations, relation, 1);
    let word2 = text_accent_marks_removed(lowered);
    let word3 = gloss_word_bare(word2);
    let word_folded = gloss_word_folded(word3);
    let word4 = text_accent_marks_removed(root);
    let word5 = gloss_word_bare(word4);
    let root_folded = gloss_word_folded(word5);
    let edits = text_edit_distance_inside(word_folded, root_folded);
    let reachable = less_than(edits, 3);
    let reach = "unreachable";
    if (reachable) {
      reach = text_from_number(edits);
    }
    let crossed_key = list_join([relation, reach], " ");
    property_count_add(crossed, crossed_key, 1);
    let far = equal(relation, "apart");
    if (not(far)) {
      return;
    }
    if (reachable) {
      return;
    }
    let chapter_code = property_get(found, "chapter_code");
    let key = list_join([lowered, root], " ");
    let held = property_get_or_null(far_pairs, key);
    let fresh = null_is(held);
    if (fresh) {
      let made = {
        word: lowered,
        root,
        edits,
        entries: 0,
        chapters: [],
      };
      property_set(far_pairs, key, made);
      held = made;
    }
    let so_far = property_get(held, "entries");
    let value = add(so_far, 1);
    property_set(held, "entries", value);
    let chapters = property_get(held, "chapters");
    list_add_if_not_includes(chapters, chapter_code);
  }
  let walked = await gloss_chapters_roots_claimed_entries_generic(
    app_ceb_bible_gloss_generate,
    entry_read,
  );
  let keys = object_property_names(far_pairs);
  let listed = [];
  function key_read(key) {
    let held = property_get(far_pairs, key);
    let chapters = property_get(held, "chapters");
    let value2 = list_size(chapters);
    property_set(held, "chapters_count", value2);
    let value3 = list_slice_count(chapters, 0, 3);
    property_set(held, "chapters", value3);
    list_add(listed, held);
  }
  each(keys, key_read);
  list_sort_number_mapper_reverse(listed, gloss_entries_count);
  let r = {
    chapters: property_get(walked, "chapters"),
    naming_a_root,
    relations,
    crossed,
    apart_unreachable_pairs: list_size(listed),
    listed,
  };
  return r;
}
