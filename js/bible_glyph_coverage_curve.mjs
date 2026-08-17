import { bible_strong_glosses } from "./bible_strong_glosses.mjs";
import { bible_glyph_roots } from "./bible_glyph_roots.mjs";
import { property_set } from "./property_set.mjs";
import { property_get } from "./property_get.mjs";
import { list_add } from "./list_add.mjs";
import { property_exists } from "./property_exists.mjs";
import { object_property_names } from "./object_property_names.mjs";
import { round } from "./round.mjs";
import { subtract } from "./subtract.mjs";
import { greater_than } from "./greater_than.mjs";
import { less_than } from "./less_than.mjs";
import { divide } from "./divide.mjs";
import { multiply } from "./multiply.mjs";
export async function bible_glyph_coverage_curve(testament_name) {
  "How much of a testament's page a picture Bible covers as its vocabulary grows, measured at a spread of vocabulary sizes.";
  "$plain testament_name";
  "the name is a testament's own, spelled as the book divisions spell it. It names a stretch of text to read and nothing that runs.";
  "The question this answers is the only one that decides how big a job this is: HOW MANY GLYPHS BUY HOW MUCH PAGE. A vocabulary can be argued about forever in the abstract, and the argument is settled in a second by counting, because word frequency is enormously lopsided - a handful of words are most of the text and the rest of the dictionary is the tail.";
  "It counts OCCURRENCES and not words, for the same reason the survey does: a reader meets occurrences. A vocabulary of five hundred rare words leaves the page looking untranslated.";
  "Every word is counted, whether the seed table draws it or not, so this is the ceiling rather than the progress. What the seed table has actually reached is the survey's coverage, and the gap between the two is the work left.";
  "The curve is reported alongside HOW MUCH OF EACH STEP IS ALREADY DRAWN, because the two numbers answer different questions. The curve says how big the job is; the drawn count says where in it the current table stands.";
  let glosses = await bible_strong_glosses(testament_name);
  let roots = bible_glyph_roots();
  let drawn = {};
  for (let root of roots) {
    for (let word of root.words) {
      property_set(drawn, word.strong, true);
    }
  }
  let counted = [];
  let occurrences_total = 0;
  for (let strong of object_property_names(glosses)) {
    let tally = property_get(glosses, strong);
    let occurrences = 0;
    for (let entry of tally) {
      occurrences = occurrences + entry.count;
    }
    occurrences_total = occurrences_total + occurrences;
    list_add(counted, {
      strong,
      occurrences,
      drawn: property_exists(drawn, strong),
    });
  }
  function occurrences_descending(a, b) {
    let n = subtract(b.occurrences, a.occurrences);
    return n;
  }
  counted.sort(occurrences_descending);
  let steps = [10, 25, 50, 100, 200, 400, 800, 1600];
  let curve = [];
  for (let step of steps) {
    let past = greater_than(step, counted.length);
    if (past) {
      continue;
    }
    let reached = 0;
    let reached_drawn = 0;
    let index = 0;
    while (less_than(index, step)) {
      let row = counted[index];
      reached = reached + row.occurrences;
      if (row.drawn) {
        reached_drawn = reached_drawn + row.occurrences;
      }
      index = index + 1;
    }
    let share = divide(reached, occurrences_total);
    let n2 = multiply(share, 1000);
    let tenths = round(n2);
    let percent = divide(tenths, 10);
    let share_drawn = divide(reached_drawn, occurrences_total);
    let n3 = multiply(share_drawn, 1000);
    let tenths_drawn = round(n3);
    let percent_drawn = divide(tenths_drawn, 10);
    list_add(curve, {
      words: step,
      occurrences: reached,
      percent,
      percent_drawn,
    });
  }
  let report = {
    testament: testament_name,
    words_total: counted.length,
    occurrences_total,
    curve,
  };
  return report;
}
