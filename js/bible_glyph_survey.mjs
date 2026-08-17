import { round } from "./round.mjs";
import { greater_than } from "./greater_than.mjs";
import { subtract } from "./subtract.mjs";
import { divide } from "./divide.mjs";
import { multiply } from "./multiply.mjs";
import { bible_strong_glosses } from "./bible_strong_glosses.mjs";
import { bible_glyph_roots } from "./bible_glyph_roots.mjs";
import { bible_glyph_characters } from "./bible_glyph_characters.mjs";
import { bible_glyph_gloss_placeholder_is } from "./bible_glyph_gloss_placeholder_is.mjs";
import { bible_glyph_gloss_normalized } from "./bible_glyph_gloss_normalized.mjs";
import { bible_glyph_referents } from "./bible_glyph_referents.mjs";
import { property_get } from "./property_get.mjs";
import { property_set } from "./property_set.mjs";
import { property_exists } from "./property_exists.mjs";
import { object_property_names } from "./object_property_names.mjs";
import { list_add } from "./list_add.mjs";
import { not } from "./not.mjs";
export async function bible_glyph_survey(testament_name) {
  "What the seed glyph table gets wrong, measured against every word the interlinear actually uses in one testament.";
  "$plain testament_name";
  "the name is a testament's own, spelled as the book divisions spell it. It names a stretch of text to read and nothing that runs.";
  "This is reconnaissance and not a Bible. Choosing a glyph for every word by hand, one at a time, is a guess repeated thousands of times, and a guess cannot be checked. Running the seed table over the whole text instead turns the question into a measurement: these two roots are asking for the same picture, this one glyph is being asked to carry senses that have nothing to do with each other, and this word is common enough that leaving it undrawn matters. Only where the report names a problem does anyone have to judge anything.";
  "A collision is reported and not resolved. Two roots wanting one glyph may be a mistake, or it may be the truth - two words a reader should feel the kinship between can be drawn alike on purpose - and nothing mechanical can tell those two cases apart. The report says where to look.";
  "Sense spread is the honest measure of whether one picture can stand for one word. A word the interlinear renders the same way almost everywhere has one plain meaning and one glyph will do. A word split evenly between wordings that are not synonyms is a word whose glyph is lying somewhere, and the count says which.";
  "Coverage is counted in OCCURRENCES and not in words, because a table covering five hundred rare words leaves the page looking untranslated while a table covering thirty common ones fills it. The reader meets occurrences.";
  let glosses = await bible_strong_glosses(testament_name);
  let characters = bible_glyph_characters();
  let character_names = {};
  for (let character of characters) {
    property_set(character_names, character.name, true);
  }
  let roots = bible_glyph_roots();
  let glyph_roots = {};
  let mapped = {};
  let glyph_missing = [];
  for (let root of roots) {
    for (let word of root.words) {
      let glyph = word.glyph;
      let known = property_exists(character_names, glyph);
      if (not(known)) {
        list_add(glyph_missing, {
          root: root.root,
          strong: word.strong,
          glyph,
        });
      }
      let started = property_exists(glyph_roots, glyph);
      if (not(started)) {
        property_set(glyph_roots, glyph, []);
      }
      let sharers = property_get(glyph_roots, glyph);
      let already = sharers.includes(root.root);
      if (not(already)) {
        list_add(sharers, root.root);
      }
      property_set(mapped, word.strong, {
        root: root.root,
        glyph,
      });
    }
  }
  let glyph_collisions = [];
  for (let glyph of object_property_names(glyph_roots)) {
    let sharers = property_get(glyph_roots, glyph);
    let shared = greater_than(sharers.length, 1);
    if (shared) {
      list_add(glyph_collisions, {
        glyph,
        roots: sharers,
      });
    }
  }
  let occurrences_total = 0;
  let occurrences_mapped = 0;
  let sense_spread = [];
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
  sense_spread.sort(occurrences_descending);
  unmapped.sort(occurrences_descending);
  let left2 = divide(occurrences_mapped, occurrences_total);
  let n2 = multiply(left2, 1000);
  let top = round(n2);
  let percent = divide(top, 10);
  let referents = bible_glyph_referents();
  let referent_reach = [];
  for (let referent of referents) {
    let overrides = property_exists(mapped, referent.strong)
      ? property_get(mapped, referent.strong).glyph
      : null;
    let by_verses = property_exists(referent, "verses");
    let kind = by_verses ? "verses" : "phrase";
    list_add(referent_reach, {
      strong: referent.strong,
      root: referent.root,
      kind,
      glyph_usually: overrides,
      glyphs: referent.glyphs,
      because: referent.because,
    });
  }
  let report = {
    testament: testament_name,
    referent_reach,
    roots_count: roots.length,
    words_count: object_property_names(mapped).length,
    coverage: {
      occurrences_mapped,
      occurrences_total,
      percent,
    },
    glyph_missing,
    glyph_collisions,
    sense_spread,
    unmapped_count: unmapped.length,
    unmapped_frequent: unmapped.slice(0, 40),
  };
  return report;
}
