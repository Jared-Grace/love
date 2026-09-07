import { arguments_assert } from "./arguments_assert.mjs";
import { object_property_names } from "./object_property_names.mjs";
import { text_lower_to } from "./text_lower_to.mjs";
import { property_get } from "./property_get.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { null_is } from "./null_is.mjs";
import { property_set } from "./property_set.mjs";
import { add } from "./add.mjs";
import { each } from "./each.mjs";
import { multiply } from "./multiply.mjs";
import { text_size } from "./text_size.mjs";
import { equal } from "./equal.mjs";
import { or } from "./or.mjs";
import { less_than } from "./less_than.mjs";
import { subtract } from "./subtract.mjs";
import { greater_than } from "./greater_than.mjs";
import { text_edit_distance } from "./text_edit_distance.mjs";
import { not } from "./not.mjs";
import { list_add } from "./list_add.mjs";
import { list_sort_number_mapper_reverse } from "./list_sort_number_mapper_reverse.mjs";
import { list_map } from "./list_map.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_size } from "./list_size.mjs";
export function bible_words_slips(sightings, words, times) {
  "Which of several words look like slips of the pen rather than words: each one that a translation hardly ever uses while standing one letter away from a word it uses constantly, shown beside those commoner neighbours.";
  "A misprint in a published translation reads exactly like a rare word, and every reading built on top treats it as one - it gets looked up, it gets a root invented for it, and it gets explained. The one thing that separates the two is the company it keeps: a real rare word has no near neighbour, while kanabuhi stands once against kinabuhi's six hundred, and panaagi once against pinaagi's two thousand. That gap is the whole signal.";
  "The commoner neighbour has to be far commoner, not merely commoner, and how far is asked for rather than decided here. Two spellings at a similar count are a translation using both, which is a fact about the language; a thousand to one is not.";
  "★ THIS PROPOSES AND NEVER RULES. Cebuano builds words by putting letters in, so a genuine pair can sit one edit apart - hinoon beside hinuon, and both are words. What comes back is a shortlist for somebody who reads the language, carrying the verse each word was first met in so they can rule without going back to the translation for it.";
  "$plain sightings";
  "$plain words";
  "$plain times";
  "the first names every word the translation uses with how often, the second the words to examine, the third how many times commoner a neighbour must be to be worth showing.";
  arguments_assert(arguments, 3);
  let counts = {};
  let firsts = {};
  let spellings = object_property_names(sightings);
  function spelling_note(spelling) {
    let lower = text_lower_to(spelling);
    let sighting = property_get(sightings, spelling);
    let count = property_get(sighting, "count");
    let so_far = property_get_or_null(counts, lower);
    let fresh = null_is(so_far);
    if (fresh) {
      property_set(counts, lower, count);
      property_set(firsts, lower, sighting);
      return;
    }
    let more = add(so_far, count);
    property_set(counts, lower, more);
  }
  each(spellings, spelling_note);
  let vocabulary = object_property_names(counts);
  function word_examined(word) {
    let lower = text_lower_to(word);
    let held = property_get_or_null(counts, lower);
    let unseen = null_is(held);
    let seen = unseen ? 0 : held;
    let needed = multiply(times, seen);
    let mine_size = text_size(lower);
    let nearer = [];
    function neighbour_try(other) {
      let same = equal(other, lower);
      if (same) {
        return;
      }
      let other_seen = property_get(counts, other);
      let left = less_than(other_seen, needed);
      let right = less_than(other_seen, times);
      let too_rare = or(left, right);
      if (too_rare) {
        return;
      }
      let other_size = text_size(other);
      let gap = subtract(mine_size, other_size);
      let left2 = greater_than(gap, 1);
      let right2 = less_than(gap, -1);
      let far = or(left2, right2);
      if (far) {
        return;
      }
      let steps = text_edit_distance(lower, other);
      let b = equal(steps, 1);
      let apart = not(b);
      if (apart) {
        return;
      }
      let neighbour = {
        word: other,
        seen: other_seen,
      };
      list_add(nearer, neighbour);
    }
    each(vocabulary, neighbour_try);
    function neighbour_seen(neighbour) {
      let other_seen = property_get(neighbour, "seen");
      return other_seen;
    }
    let ranked = list_sort_number_mapper_reverse(nearer, neighbour_seen);
    let first = property_get_or_null(firsts, lower);
    let row = {
      word: lower,
      seen,
      nearer: ranked,
      first,
    };
    return row;
  }
  let rows = list_map(words, word_examined);
  function row_suspect(row) {
    let nearer = property_get(row, "nearer");
    let alone = list_empty_is(nearer);
    let suspect = not(alone);
    return suspect;
  }
  let suspect = list_filter(rows, row_suspect);
  function row_commonest(row) {
    let nearer = property_get(row, "nearer");
    let best = nearer[0];
    let other_seen = property_get(best, "seen");
    return other_seen;
  }
  let ranked = list_sort_number_mapper_reverse(suspect, row_commonest);
  let r = {
    vocabulary_size: list_size(vocabulary),
    examined: list_size(rows),
    suspect: list_size(ranked),
    rows: ranked,
  };
  return r;
}
