import { arguments_assert } from "./arguments_assert.mjs";
import { bible_words_sightings_lowered } from "./bible_words_sightings_lowered.mjs";
import { property_get } from "./property_get.mjs";
import { object_property_names } from "./object_property_names.mjs";
import { text_letter_dropped_spellings } from "./text_letter_dropped_spellings.mjs";
import { list_add } from "./list_add.mjs";
import { each } from "./each.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { null_is } from "./null_is.mjs";
import { property_set } from "./property_set.mjs";
import { multiply } from "./multiply.mjs";
import { text_size } from "./text_size.mjs";
import { set_new } from "./set_new.mjs";
import { equal } from "./equal.mjs";
import { set_includes } from "./set_includes.mjs";
import { set_add } from "./set_add.mjs";
import { or } from "./or.mjs";
import { less_than } from "./less_than.mjs";
import { subtract } from "./subtract.mjs";
import { greater_than } from "./greater_than.mjs";
import { text_edit_distance } from "./text_edit_distance.mjs";
import { not } from "./not.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { list_sort_number_mapper_reverse } from "./list_sort_number_mapper_reverse.mjs";
import { list_size } from "./list_size.mjs";
export function bible_words_slips_all(sightings, times) {
  "Every word in a whole translation that looks like a slip of the pen: one the translation hardly ever writes while a word it writes constantly stands a single letter away.";
  "This asks of every word what the shortlist reading asks of a few, and it has to reach the same answers by a different road, because comparing every word to every other word is four hundred million comparisons for a translation of twenty thousand words. Words are gathered under the spellings left when one letter is taken out of them, and only words sharing such a spelling are ever measured - which is every pair a single edit apart and a small number of pairs that are not, and those are then measured and dropped.";
  "No word has to be chosen beforehand, and none is exempt. A common word is examined like any other and comes back with nothing, because the rule asks for a neighbour many times commoner than itself and a common word has none. That is what makes this safe to run over everything: the rule selects, rather than the list handed in.";
  "★ THIS PROPOSES AND NEVER RULES, and over a whole translation it proposes far more loosely than over a chosen few. A language that builds words by putting letters in will show real pairs here in numbers. What comes back is where to look, carrying the verse each word was first met in so somebody who reads the language can rule.";
  "$plain sightings";
  "$plain times";
  "the first names every word the translation uses with how often and where it was first met, the second how many times commoner a neighbour must be to be worth showing.";
  arguments_assert(arguments, 2);
  let lowered = bible_words_sightings_lowered(sightings);
  let counts = property_get(lowered, "counts");
  let firsts = property_get(lowered, "firsts");
  let vocabulary = object_property_names(counts);
  let under_key = {};
  function word_filed(word) {
    let dropped = text_letter_dropped_spellings(word);
    let keys = [word];
    function dropped_add(spelling) {
      list_add(keys, spelling);
    }
    each(dropped, dropped_add);
    function key_file(key) {
      let held = property_get_or_null(under_key, key);
      let fresh = null_is(held);
      if (fresh) {
        held = [];
        property_set(under_key, key, held);
      }
      list_add(held, word);
    }
    each(keys, key_file);
  }
  each(vocabulary, word_filed);
  let rows = [];
  function word_examined(word) {
    let seen = property_get(counts, word);
    let needed = multiply(times, seen);
    let mine_size = text_size(word);
    let dropped = text_letter_dropped_spellings(word);
    let keys = [word];
    function dropped_add(spelling) {
      list_add(keys, spelling);
    }
    each(dropped, dropped_add);
    let met = set_new();
    let nearer = [];
    function candidate_try(other) {
      let same = equal(other, word);
      if (same) {
        return;
      }
      let already = set_includes(met, other);
      if (already) {
        return;
      }
      set_add(met, other);
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
      let steps = text_edit_distance(word, other);
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
    function key_walk(key) {
      let sharing = property_get(under_key, key);
      each(sharing, candidate_try);
    }
    each(keys, key_walk);
    let alone = list_empty_is(nearer);
    if (alone) {
      return;
    }
    function neighbour_seen(neighbour) {
      let other_seen = property_get(neighbour, "seen");
      return other_seen;
    }
    let ranked = list_sort_number_mapper_reverse(nearer, neighbour_seen);
    let first = property_get(firsts, word);
    let row = {
      word,
      seen,
      nearer: ranked,
      first,
    };
    list_add(rows, row);
  }
  each(vocabulary, word_examined);
  function row_commonest(row) {
    let nearer = property_get(row, "nearer");
    let best = nearer[0];
    let other_seen = property_get(best, "seen");
    return other_seen;
  }
  let ranked = list_sort_number_mapper_reverse(rows, row_commonest);
  let r = {
    vocabulary_size: list_size(vocabulary),
    suspect: list_size(ranked),
    rows: ranked,
  };
  return r;
}
