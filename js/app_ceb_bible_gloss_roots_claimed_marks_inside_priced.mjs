import { fn_name } from "./fn_name.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { app_shared_gloss_bible_generate_generic_word } from "./app_shared_gloss_bible_generate_generic_word.mjs";
import { property_get } from "./property_get.mjs";
import { list_size } from "./list_size.mjs";
import { equal } from "./equal.mjs";
import { list_get } from "./list_get.mjs";
import { text_accent_marks_removed } from "./text_accent_marks_removed.mjs";
import { add } from "./add.mjs";
import { gloss_word_folded } from "./gloss_word_folded.mjs";
import { text_lower_to } from "./text_lower_to.mjs";
import { gloss_word_bare } from "./gloss_word_bare.mjs";
import { text_includes } from "./text_includes.mjs";
import { not } from "./not.mjs";
import { and } from "./and.mjs";
import { list_add } from "./list_add.mjs";
import { gloss_chapters_roots_claimed_entries_generic } from "./gloss_chapters_roots_claimed_entries_generic.mjs";
import { app_ceb_bible_gloss_generate } from "./app_ceb_bible_gloss_generate.mjs";
export async function app_ceb_bible_gloss_roots_claimed_marks_inside_priced() {
  "What taking the accent marks off a stated root would buy on the one test that the marks actually reach: whether the root is spelled inside the word it is said to be the root of.";
  ("★ THE FOLD IS ALREADY PRICED AND THE PRICE WAS TAKEN OVER THE WRONG POPULATION. ",
    fn_name("app_ceb_bible_gloss_roots_claimed_marks_priced"),
    " asks whether the stripped spelling turns up among the words the bible writes or the words the dictionary holds, and answers nothing bought, none of twelve, none of thirty sightings. That answer is correct and it is about a question nobody was going to ask. Every marked root is already held by the dictionary with its mark on, so of course the strip adds nothing there. The place a mark costs something is somewhere else entirely, and it was never asked.");
  ("Where it costs something is ",
    fn_name("app_ceb_bible_gloss_roots_claimed_outside_word"),
    ". That reading folds a word and a root the same way and asks whether the one is spelled inside the other, and the fold it uses writes o and u alike and d and l and r alike and leaves a mark exactly where it found it. The Cebuano bible writes no accent in any word of its text, so a root wearing one cannot be inside any word at all, and the sentence is filed as naming a root that stands outside the word it plainly stands inside.");
  ("Both verdicts come back for every marked sighting, which turns the question from an argument into a number: how many are outside the word while the mark is on, and how many of those come inside once it is off. A root that was outside for some other reason stays outside and is counted as bought nothing, which is the case the counting exists to keep separate.");
  ("The same fold, the same word reader and the same walk as the outside reading are used on purpose. A price measured with a different comparison than the one it is pricing is a price for a change nobody proposed.");
  ("★ THIS PRICES A CHANGE AND DOES NOT MAKE ONE. No fold anywhere folds a mark that did not fold one before, and no reader is shown anything different. Whether the mark should be folded away for comparing, or the explanations rewritten without it, is a decision about words a person chose and belongs to whoever owns them.");
  ("Nothing is written and nothing is asked of the site.");
  arguments_assert(arguments, 0);
  let word_key = app_shared_gloss_bible_generate_generic_word();
  let marked_sightings = 0;
  let outside_marked = 0;
  let bought_sightings = 0;
  let rows = [];
  function entry_read(found) {
    let entry = property_get(found, "entry");
    let claimed = property_get(found, "claimed");
    let claimed_count = list_size(claimed);
    let empty = equal(claimed_count, 0);
    if (empty) {
      return;
    }
    let first = list_get(claimed, 0);
    let stripped = text_accent_marks_removed(first);
    let unmarked = equal(stripped, first);
    if (unmarked) {
      return;
    }
    marked_sightings = add(marked_sightings, 1);
    let chapter_code = property_get(found, "chapter_code");
    let explain = property_get(found, "explain");
    let word = property_get(entry, word_key);
    let s = gloss_word_bare(word);
    let word2 = text_lower_to(s);
    let word_folded = gloss_word_folded(word2);
    let s2 = gloss_word_bare(first);
    let word3 = text_lower_to(s2);
    let root_folded = gloss_word_folded(word3);
    let s3 = gloss_word_bare(stripped);
    let word4 = text_lower_to(s3);
    let stripped_folded = gloss_word_folded(word4);
    let inside_marked = text_includes(word_folded, root_folded);
    let inside_stripped = text_includes(word_folded, stripped_folded);
    let outside_now = not(inside_marked);
    let bought = and(outside_now, inside_stripped);
    if (outside_now) {
      outside_marked = add(outside_marked, 1);
    }
    if (bought) {
      bought_sightings = add(bought_sightings, 1);
    }
    let row = {
      chapter: chapter_code,
      word,
      root: first,
      stripped,
      inside_marked,
      inside_stripped,
      bought,
      explain,
    };
    list_add(rows, row);
  }
  let walked = await gloss_chapters_roots_claimed_entries_generic(
    app_ceb_bible_gloss_generate,
    entry_read,
  );
  let r = {
    chapters: property_get(walked, "chapters"),
    marked_sightings,
    outside_marked,
    bought_sightings,
    rows,
  };
  return r;
}
