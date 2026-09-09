import { gloss_word_priced_lossless_is } from "./gloss_word_priced_lossless_is.mjs";
import { gloss_word_priced_silent } from "./gloss_word_priced_silent.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { text_lower_to } from "./text_lower_to.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { null_is } from "./null_is.mjs";
import { property_set } from "./property_set.mjs";
import { add } from "./add.mjs";
import { each } from "./each.mjs";
import { object_property_names } from "./object_property_names.mjs";
import { gloss_chapters_words_glosses } from "./gloss_chapters_words_glosses.mjs";
import { subtract } from "./subtract.mjs";
import { equal } from "./equal.mjs";
import { list_map } from "./list_map.mjs";
import { list_sort_number_mapper_reverse } from "./list_sort_number_mapper_reverse.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_size } from "./list_size.mjs";
export async function gloss_words_repair_priced_generic(fn, rows) {
  "What repairing each queued word would actually cost: beside the sightings that are at fault, every sighting of that word the store holds, and so how many standing explanations a one-sentence repair would overwrite.";
  "The repair is keyed on the word and the fault is per sighting, and those are not the same size. A word sits in the queue at six and the writer finds it in a hundred and sixty-four chapters, because a common word is already explained correctly nearly everywhere - which is exactly why so few of its sightings are silent, and exactly why it sinks to the bottom of a queue ordered by silent sightings. So the queue's order runs backwards against cost for the commonest words, and the rows it puts last are the ones to price first.";
  "A row is lossless when every sighting of the word is at fault: there is no correct explanation to lose, so the repair can only improve the store. Those are the rows worth draining without a further thought, and they are far fewer than the queue is long.";
  "Every word is asked in one walk over the store rather than one walk each. Asking per word costs a full reading of every chapter to learn one answer that was sitting in the first reading, and over a queue of hundreds that is the difference between a command somebody runs and one nobody does.";
  "Nothing is written and nothing is decided. This says what a repair would cost and leaves the choosing to whoever reads it.";
  "$plain fn";
  "$plain rows";
  "the first names the gloss store to read, the second the queue rows to price - each carrying the word and how many of its sightings are at fault.";
  arguments_assert(arguments, 2);
  let by_word = {};
  function row_note(row) {
    let spelling = property_get(row, "word");
    let lower = text_lower_to(spelling);
    let silent = property_get(row, "sightings");
    let held = property_get_or_null(by_word, lower);
    let fresh = null_is(held);
    if (fresh) {
      let started = {
        word: lower,
        silent: 0,
      };
      property_set(by_word, lower, started);
      held = started;
    }
    let so_far = property_get(held, "silent");
    let more = add(so_far, silent);
    property_set(held, "silent", more);
  }
  each(rows, row_note);
  let words = object_property_names(by_word);
  let asked = await gloss_chapters_words_glosses(fn, words);
  let chapters = property_get(asked, "chapters");
  let tallies = property_get(asked, "words");
  function word_priced(lower) {
    let held = property_get(by_word, lower);
    let silent = property_get(held, "silent");
    let tally = property_get(tallies, lower);
    let used = property_get(tally, "used");
    let already_naming = subtract(used, silent);
    let lossless = equal(used, silent);
    let priced_row = {
      word: lower,
      silent,
      used,
      already_naming,
      lossless,
    };
    return priced_row;
  }
  let priced = list_map(words, word_priced);
  function row_used(row) {
    let used = property_get(row, "used");
    return used;
  }
  let ranked = list_sort_number_mapper_reverse(priced, row_used);
  let totals = {
    silent: 0,
    used: 0,
    already_naming: 0,
  };
  function priced_add(row) {
    function total_add(name) {
      let so_far = property_get(totals, name);
      let mine = property_get(row, name);
      let more = add(so_far, mine);
      property_set(totals, name, more);
    }
    each(["silent", "used", "already_naming"], total_add);
  }
  each(ranked, priced_add);
  let lossless_rows = list_filter(ranked, gloss_word_priced_lossless_is);
  let lossless_silent = 0;
  function lossless_add(row) {
    let mine = gloss_word_priced_silent(row);
    lossless_silent = add(lossless_silent, mine);
  }
  each(lossless_rows, lossless_add);
  let r = {
    chapters,
    words_total: list_size(ranked),
    silent_total: property_get(totals, "silent"),
    used_total: property_get(totals, "used"),
    already_naming_total: property_get(totals, "already_naming"),
    lossless_words: list_size(lossless_rows),
    lossless_silent,
    priced: ranked,
  };
  return r;
}
