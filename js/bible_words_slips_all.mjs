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
import { text_size } from "./text_size.mjs";
import { less_than } from "./less_than.mjs";
import { multiply } from "./multiply.mjs";
import { set_new } from "./set_new.mjs";
import { equal } from "./equal.mjs";
import { set_includes } from "./set_includes.mjs";
import { set_add } from "./set_add.mjs";
import { or } from "./or.mjs";
import { subtract } from "./subtract.mjs";
import { greater_than } from "./greater_than.mjs";
import { text_edit_distance } from "./text_edit_distance.mjs";
import { not } from "./not.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { list_sort_number_mapper_reverse } from "./list_sort_number_mapper_reverse.mjs";
import { list_size } from "./list_size.mjs";
export function bible_words_slips_all(sightings, times, letters) {
  "Every word in a whole translation that looks like a slip of the pen: one the translation hardly ever writes while a word it writes constantly stands a single letter away.";
  "This asks of every word what the shortlist reading asks of a few, and it has to reach the same answers by a different road, because comparing every word to every other word is four hundred million comparisons for a translation of twenty thousand words. Words are gathered under the spellings left when one letter is taken out of them, and only words sharing such a spelling are ever measured - which is every pair a single edit apart together with a few that are not, and those few are then measured and dropped. Run beside the shortlist reading over the same translation the two roads named the same words with no disagreement at all.";
  "★ ONE EDIT MEANS LESS THE SHORTER THE WORD, AND THAT IS WHY A LEAST LENGTH IS ASKED FOR. An edit is a tenth of a ten-letter word and half of a two-letter one, so in a short word it says almost nothing: every two-letter word in Cebuano stands one letter from sa, which is written eighty-seven thousand times. Asked without a length this named three thousand seven hundred words, headed by ka, usa, na and pa - all of them ordinary words, all of them beside sa. At eight letters and over the same reading names a thousand, and they read like misprints because at that length a single edit is a real coincidence.";
  "The commoner neighbour has to be far commoner, not merely commoner. Two spellings at a similar count are a translation using both, which is a fact about the language; a thousand to one is not.";
  "No word has to be chosen beforehand, and none is exempt. A common word is examined like any other and comes back with nothing, because the rule asks for a neighbour many times commoner than itself and a common word has none. That is what makes this safe to run over everything: the rule selects, rather than a list handed in.";
  "A word the translation never writes cannot be found here at all, however plainly it is a slip. This walks the translation's own vocabulary, so a misspelling that reached some other reading - a gloss store, a queue of repairs - and never the text is a question for the shortlist reading, which examines whatever it is handed.";
  "★ THIS PROPOSES AND NEVER RULES. Cebuano builds words by putting letters on, so the same word carrying a linking letter sits one edit from its bare form and is perfectly good writing: kinahanglang beside kinahanglan, pinaagig beside pinaagi. Telling those from misprints was measured and it cannot be done from the spelling - what comes back is where to look, carrying the verse each word was first met in so somebody who reads the language can rule.";
  "$plain sightings";
  "$plain times";
  "$plain letters";
  "the first names every word the translation uses with how often and where it was first met, the second how many times commoner a neighbour must be to be worth showing, the third how many letters a word must have before one edit is worth remarking on.";
  arguments_assert(arguments, 3);
  let lowered = bible_words_sightings_lowered(sightings);
  let counts = property_get(lowered, "counts");
  let firsts = property_get(lowered, "firsts");
  let vocabulary = object_property_names(counts);
  let under_key = {};
  function word_keys(word) {
    let dropped = text_letter_dropped_spellings(word);
    let keys = [word];
    function dropped_add(spelling) {
      list_add(keys, spelling);
    }
    each(dropped, dropped_add);
    return keys;
  }
  function word_filed(word) {
    let keys = word_keys(word);
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
  let examined = 0;
  function word_examined(word) {
    let mine_size = text_size(word);
    let short = less_than(mine_size, letters);
    if (short) {
      return;
    }
    examined = examined + 1;
    let seen = property_get(counts, word);
    let needed = multiply(times, seen);
    let keys = word_keys(word);
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
    examined,
    suspect: list_size(ranked),
    rows: ranked,
  };
  return r;
}
