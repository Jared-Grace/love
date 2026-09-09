import { fn_name } from "./fn_name.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { app_shared_gloss_bible_generate_generic_word } from "./app_shared_gloss_bible_generate_generic_word.mjs";
import { property_get } from "./property_get.mjs";
import { list_size } from "./list_size.mjs";
import { equal } from "./equal.mjs";
import { add } from "./add.mjs";
import { list_get } from "./list_get.mjs";
import { text_accent_marks_removed } from "./text_accent_marks_removed.mjs";
import { gloss_word_bare } from "./gloss_word_bare.mjs";
import { text_lower_to } from "./text_lower_to.mjs";
import { gloss_word_folded } from "./gloss_word_folded.mjs";
import { text_includes } from "./text_includes.mjs";
import { gloss_root_shapes_reaching } from "./gloss_root_shapes_reaching.mjs";
import { not } from "./not.mjs";
import { property_count_add } from "./property_count_add.mjs";
import { gloss_root_shapes_written } from "./gloss_root_shapes_written.mjs";
import { object_property_names } from "./object_property_names.mjs";
import { text_size } from "./text_size.mjs";
import { less_than } from "./less_than.mjs";
import { list_join_space } from "./list_join_space.mjs";
import { list_add } from "./list_add.mjs";
import { gloss_chapters_roots_claimed_entries_generic } from "./gloss_chapters_roots_claimed_entries_generic.mjs";
import { app_ceb_bible_gloss_generate } from "./app_ceb_bible_gloss_generate.mjs";
export async function app_ceb_bible_gloss_roots_claimed_shapes_priced() {
  "What each named shape of Cebuano word building would buy if somebody decided it counts as a shape rather than a fault, measured over every root in the store that is not spelled inside its own word - so that a question a reader of shapes says needs a Cebuano speaker is put to that speaker with numbers on it.";
  (fn_name("gloss_root_claimed_shape"),
    " reaches three shapes and its own prose names four more it does not reach, and says of each that somebody who knows Cebuano has to call it a shape rather than a fault before it is written down. That is the right refusal and it has stood unanswered, because a refusal with no numbers beside it gives nobody anything to answer with. This does not decide any of it. It counts.");
  ("★ NOTHING HERE IS A VERDICT AND NOTHING HERE FORGIVES ANYTHING. A shape reaching a word says ordinary word building could have written what is written, never that this root is the word's root. A root somebody invented lands inside a shape as readily as a true one, so the reached pile is not clean and is not claimed to be. The pile that is worth something is the one no shape reaches.");
  ("Measured over the store on 2026-09-09, forty two thousand four hundred and eighty four sentences plainly say the word root. Thirty six thousand seven hundred and sixty one of them spell the root inside the word once the accent is off, leaving five thousand seven hundred and twenty three. Of those, five thousand one hundred and thirty five are reached by one named shape, three hundred and ninety one by two shapes in turn, and one hundred and ninety seven by none. Five thousand one hundred and thirty five and three hundred and ninety one and one hundred and ninety seven is five thousand seven hundred and twenty three, and that with the thirty six thousand seven hundred and sixty one is the forty two thousand four hundred and eighty four.");
  ("One hundred and ninety seven sightings over sixty five word and root pairs is a list somebody reads in an evening - sixty five once a word standing at the opening of a sentence is counted as the same word as the one standing inside it, which the rows handed back do not do for themselves. The reading this starts from hands back five thousand seven hundred and fifty three sightings, and the reading of relations that sorts the same rows hands back four hundred and two pairs ordered by how often each is met, which is the order that puts the faults last.");
  ("What each shape buys on its own is counted separately from what it buys first, and the two do not agree because the shapes overlap. A root reached by a dropped vowel is commonly reached by a nasal exchange too: the nasal exchange alone reaches two thousand nine hundred and forty four sightings and is the first account of one thousand two hundred and ninety nine. So the counts under each shape name add up to more than the pile, on purpose - that is what it costs to be able to say what one shape alone would buy, which is the question somebody deciding one shape at a time is actually asking.");
  ("The two shapes nobody had named are the two largest. Exchanging a root's first consonant for a nasal, and copying a syllable with an l or an r inside it, are not among the four shapes named as missing, and between them they are the first account of one thousand eight hundred and forty of the five thousand seven hundred and twenty three.");
  ("The unreached rows are handed back whole, sentence and all, because a count of one hundred and ninety seven that nobody can walk back to says a fault exists and refuses to say where.");
  arguments_assert(arguments, 0);
  let word_key = app_shared_gloss_bible_generate_generic_word();
  let strict_total = 0;
  let inside = 0;
  let once = 0;
  let twice = 0;
  let alone = {};
  let accounts = {};
  let rows = [];
  function entry_read(found) {
    let entry = property_get(found, "entry");
    let claimed = property_get(found, "claimed");
    let claimed_count = list_size(claimed);
    let empty = equal(claimed_count, 0);
    if (empty) {
      return;
    }
    strict_total = add(strict_total, 1);
    let first = list_get(claimed, 0);
    let word = property_get(entry, word_key);
    let word_plain = text_accent_marks_removed(word);
    let word_bare = gloss_word_bare(word_plain);
    let word_lowered = text_lower_to(word_bare);
    let word_folded = gloss_word_folded(word_lowered);
    let root_plain = text_accent_marks_removed(first);
    let root_bare = gloss_word_bare(root_plain);
    let root_lowered = text_lower_to(root_bare);
    let root_folded = gloss_word_folded(root_lowered);
    let held = text_includes(word_folded, root_folded);
    if (held) {
      inside = add(inside, 1);
      return;
    }
    let reaching = gloss_root_shapes_reaching(word_folded, root_lowered);
    let reaching_count = list_size(reaching);
    let none = equal(reaching_count, 0);
    if (not(none)) {
      for (let name of reaching) {
        property_count_add(alone, name, 1);
      }
      let named = list_get(reaching, 0);
      property_count_add(accounts, named, 1);
      once = add(once, 1);
      return;
    }
    let written = gloss_root_shapes_written(root_lowered);
    let names = object_property_names(written);
    let pairs = [];
    for (let name of names) {
      let spellings = property_get(written, name);
      for (let spelling of spellings) {
        let size = text_size(spelling);
        let long_enough = less_than(1, size);
        if (long_enough) {
          let onward = gloss_root_shapes_reaching(word_folded, spelling);
          let onward_count = list_size(onward);
          let reached = less_than(0, onward_count);
          if (reached) {
            let second = list_get(onward, 0);
            let both = list_join_space([name, second]);
            list_add(pairs, both);
          }
        }
      }
    }
    let pair_count = list_size(pairs);
    let paired = less_than(0, pair_count);
    if (paired) {
      let both = list_get(pairs, 0);
      property_count_add(accounts, both, 1);
      twice = add(twice, 1);
      return;
    }
    let chapter_code = property_get(found, "chapter_code");
    let explain = property_get(found, "explain");
    let row = {
      chapter: chapter_code,
      word,
      root: first,
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
    strict_total,
    inside,
    once,
    twice,
    unreached: list_size(rows),
    alone,
    accounts,
    rows,
  };
  return r;
}
