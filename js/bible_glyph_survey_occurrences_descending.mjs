import { arguments_assert } from "./arguments_assert.mjs";
import { bible_glyph_survey_sense_spread } from "./bible_glyph_survey_sense_spread.mjs";
import { property_get } from "./property_get.mjs";
import { object_property_names } from "./object_property_names.mjs";
import { bible_glyph_gloss_placeholder_is } from "./bible_glyph_gloss_placeholder_is.mjs";
import { not } from "./not.mjs";
import { list_add } from "./list_add.mjs";
import { bible_glyph_gloss_normalized } from "./bible_glyph_gloss_normalized.mjs";
import { property_exists } from "./property_exists.mjs";
import { property_set } from "./property_set.mjs";
import { subtract } from "./subtract.mjs";
export async function bible_glyph_survey_occurrences_descending(
  testament_name,
) {
  "Every original word in one testament counted up: how often it occurs, how many different meanings it has been given in English, and whether a picture has been chosen to stand for it - the words with a picture in one list and the words without in another, ready to be read worst first.";
  "It is the reading the picture Bible is planned from. A word occurring four thousand times with one settled meaning is worth a picture and a word occurring twice is not, so the two numbers have to sit beside each other before anything is drawn.";
  "Two things are dropped before a meaning is counted. A gloss that says nothing yet is not a meaning, and two glosses differing only in how they are written are one meaning rather than two - counting either would say a word is more scattered than it is, which is the opposite of what the number is read for.";
  "The way to sort by occurrences is handed back rather than applied, because the caller has two lists to put in that order and one of them it builds itself.";
  arguments_assert(arguments, 1);
  let r = await bible_glyph_survey_sense_spread(testament_name);
  let sense_spread = property_get(r, "sense_spread");
  let occurrences_mapped = property_get(r, "occurrences_mapped");
  let occurrences_total = property_get(r, "occurrences_total");
  let glyph_collisions = property_get(r, "glyph_collisions");
  let glyph_missing = property_get(r, "glyph_missing");
  let mapped = property_get(r, "mapped");
  let roots = property_get(r, "roots");
  let glosses = property_get(r, "glosses");
  let unmapped = [];
  for (let strong of object_property_names(glosses)) {
    let tally = property_get(glosses, strong);
    let occurrences = 0;
    let senses = [];
    let rolled = {};
    for (let entry of tally) {
      occurrences = occurrences + entry.count;
      let placeholder = bible_glyph_gloss_placeholder_is(entry.value);
      if (not(placeholder)) {
        list_add(senses, entry);
        let plain = bible_glyph_gloss_normalized(entry.value);
        let seen = property_exists(rolled, plain);
        let running = seen ? property_get(rolled, plain) : 0;
        property_set(rolled, plain, running + entry.count);
      }
    }
    let senses_plain = [];
    for (let plain of object_property_names(rolled)) {
      list_add(senses_plain, {
        value: plain,
        count: property_get(rolled, plain),
      });
    }
    function count_descending(a, b) {
      let n = subtract(b.count, a.count);
      return n;
    }
    senses_plain.sort(count_descending);
    occurrences_total = occurrences_total + occurrences;
    let entry_mapped = property_exists(mapped, strong);
    if (entry_mapped) {
      occurrences_mapped = occurrences_mapped + occurrences;
      let seat = property_get(mapped, strong);
      list_add(sense_spread, {
        strong,
        root: seat.root,
        glyph: seat.glyph,
        occurrences,
        senses_count: senses.length,
        senses_plain_count: senses_plain.length,
        senses_plain_top: senses_plain.slice(0, 8),
      });
      continue;
    }
    list_add(unmapped, {
      strong,
      occurrences,
      senses_plain_count: senses_plain.length,
      senses_plain_top: senses_plain.slice(0, 4),
    });
  }
  function occurrences_of(row) {
    let n = row.occurrences;
    return n;
  }
  function occurrences_descending(a, b) {
    let left = occurrences_of(b);
    let right = occurrences_of(a);
    let n = subtract(left, right);
    return n;
  }
  let r2 = {
    sense_spread,
    occurrences_mapped,
    occurrences_total,
    glyph_collisions,
    glyph_missing,
    mapped,
    roots,
    unmapped,
    occurrences_descending,
  };
  return r2;
}
