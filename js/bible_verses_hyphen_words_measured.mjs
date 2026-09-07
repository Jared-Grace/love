import { subtract } from "./subtract.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { null_is } from "./null_is.mjs";
import { property_set } from "./property_set.mjs";
import { add } from "./add.mjs";
import { property_get } from "./property_get.mjs";
import { text_words_hyphened_pattern } from "./text_words_hyphened_pattern.mjs";
import { text_lower_to } from "./text_lower_to.mjs";
import { text_includes } from "./text_includes.mjs";
import { each } from "./each.mjs";
import { object_property_names } from "./object_property_names.mjs";
import { text_split_dash } from "./text_split_dash.mjs";
import { list_join_empty } from "./list_join_empty.mjs";
import { not } from "./not.mjs";
import { list_map } from "./list_map.mjs";
import { greater_than } from "./greater_than.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_size } from "./list_size.mjs";
import { list_sort_number_mapper_reverse } from "./list_sort_number_mapper_reverse.mjs";
import { equal } from "./equal.mjs";
export function bible_verses_hyphen_words_measured(verses) {
  "Whether the hyphens in one translation's writing stand inside its words or between them, answered from the writing itself rather than decided beforehand.";
  "Every run of letters is counted twice over: once as the whole thing hyphens and all, and once as the pieces a reading that ends a word at a hyphen would make of it. Then for each hyphened word each of its pieces is looked for elsewhere in the translation, written on its own with no hyphen anywhere near it. That is the whole question. If the pieces are words the translation writes freely, the hyphen is joining two words and a reading that splits there is right; if the pieces appear nowhere except inside hyphened words, they are not words at all and a reading that splits there is inventing them.";
  "★ NOTHING HERE RULES ON THE LANGUAGE - IT COUNTS, AND THE COUNTS ARE ONE-SIDED OR THEY ARE NOT. A piece standing alone somewhere proves it is a word; a piece standing alone nowhere is very strong evidence it is not, but it is evidence and not proof, because a rare word can go unwritten. So what comes back is how many pieces were found written on their own and how many were not, and a reader can see at a glance whether the answer is close.";
  "The joined spelling is counted as well, because there are two different ways a hyphened word can disagree with the rest of the translation. The translation may write panan-aw and pananaw both, which is a spelling it is inconsistent about; or it may write only panan-aw, in which case a reading that drops the hyphen names something the translation never says at all.";
  "Everything is lowered before it is counted, so a word at the start of a sentence is the same word as one in the middle of it.";
  "$plain verses";
  "each verse of the translation, as its publisher wrote it.";
  arguments_assert(arguments, 1);
  let hyphened_counts = {};
  let plain_counts = {};
  function tally_add(counts, word) {
    let held = property_get_or_null(counts, word);
    let fresh = null_is(held);
    if (fresh) {
      held = 0;
    }
    let value = add(held, 1);
    property_set(counts, word, value);
  }
  function verse_read(verse) {
    let text = property_get(verse, "text");
    let pattern = text_words_hyphened_pattern();
    let found = text.match(pattern);
    let wordless = null_is(found);
    if (wordless) {
      return;
    }
    function word_read(written) {
      let word = text_lower_to(written);
      let hyphened = text_includes(word, "-");
      if (hyphened) {
        tally_add(hyphened_counts, word);
        return;
      }
      tally_add(plain_counts, word);
    }
    each(found, word_read);
  }
  each(verses, verse_read);
  let words = object_property_names(hyphened_counts);
  function word_measured(word) {
    let count = property_get(hyphened_counts, word);
    let pieces = text_split_dash(word);
    let joined = list_join_empty(pieces);
    let joined_held = property_get_or_null(plain_counts, joined);
    let unwritten = null_is(joined_held);
    let joined_count = 0;
    if (not(unwritten)) {
      joined_count = joined_held;
    }
    function piece_measured(piece) {
      let held = property_get_or_null(plain_counts, piece);
      let never = null_is(held);
      let alone = 0;
      if (not(never)) {
        alone = held;
      }
      let measured = {
        piece,
        alone,
      };
      return measured;
    }
    let parts = list_map(pieces, piece_measured);
    function part_standalone_is(part) {
      let alone = property_get(part, "alone");
      let standalone = greater_than(alone, 0);
      return standalone;
    }
    let standing = list_filter(parts, part_standalone_is);
    let row = {
      word,
      count,
      joined,
      joined_count,
      parts,
      parts_standalone: list_size(standing),
      parts_total: list_size(parts),
    };
    return row;
  }
  let rows = list_map(words, word_measured);
  function row_count(row) {
    let count = property_get(row, "count");
    return count;
  }
  let ranked = list_sort_number_mapper_reverse(rows, row_count);
  let parts_total = 0;
  let parts_standalone = 0;
  let sightings = 0;
  let joined_written = 0;
  function row_summed(row) {
    let right = property_get(row, "parts_total");
    parts_total = add(parts_total, right);
    let right2 = property_get(row, "parts_standalone");
    parts_standalone = add(parts_standalone, right2);
    let right3 = property_get(row, "count");
    sightings = add(sightings, right3);
    let joined_count = property_get(row, "joined_count");
    let written = greater_than(joined_count, 0);
    if (written) {
      joined_written = add(joined_written, 1);
    }
  }
  each(ranked, row_summed);
  function row_wholly_alone_is(row) {
    let standalone = property_get(row, "parts_standalone");
    let total = property_get(row, "parts_total");
    let wholly = equal(standalone, total);
    return wholly;
  }
  let wholly = list_filter(ranked, row_wholly_alone_is);
  let list = object_property_names(plain_counts);
  let r = {
    verses: list_size(verses),
    plain_words: list_size(list),
    hyphened_words: list_size(ranked),
    hyphened_sightings: sightings,
    parts_total,
    parts_standalone,
    parts_never_standalone: subtract(parts_total, parts_standalone),
    words_every_part_standalone: list_size(wholly),
    words_joined_spelling_written: joined_written,
    rows: ranked,
  };
  return r;
}
