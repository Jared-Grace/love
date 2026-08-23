import { bible_glyph_roots_testament_table } from "./bible_glyph_roots_testament_table.mjs";
import { bible_glyph_coverage_curve_report } from "./bible_glyph_coverage_curve_report.mjs";
import { bible_glyph_coverage_curve_begin } from "./bible_glyph_coverage_curve_begin.mjs";
import { bible_strong_glosses } from "./bible_strong_glosses.mjs";
export async function bible_glyph_coverage_curve(testament_name) {
  "How much of a testament's page a picture Bible covers as its vocabulary grows, measured at a spread of vocabulary sizes.";
  "$plain testament_name";
  "the name is a testament's own, spelled as the book divisions spell it. It names a stretch of text to read and nothing that runs.";
  "The question this answers is the only one that decides how big a job this is: HOW MANY GLYPHS BUY HOW MUCH PAGE. A vocabulary can be argued about forever in the abstract, and the argument is settled in a second by counting, because word frequency is enormously lopsided - a handful of words are most of the text and the rest of the dictionary is the tail.";
  "It counts OCCURRENCES and not words, for the same reason the survey does: a reader meets occurrences. A vocabulary of five hundred rare words leaves the page looking untranslated.";
  "Every word is counted, whether the seed table draws it or not, so this is the ceiling rather than the progress. What the seed table has actually reached is the survey's coverage, and the gap between the two is the work left.";
  "The curve is reported alongside HOW MUCH OF EACH STEP IS ALREADY DRAWN, because the two numbers answer different questions. The curve says how big the job is; the drawn count says where in it the current table stands.";
  let glosses = await bible_strong_glosses(testament_name);
  let roots = bible_glyph_roots_testament_table(testament_name);
  let r = bible_glyph_coverage_curve_begin(roots, glosses);
  let report = bible_glyph_coverage_curve_report(r, testament_name);
  return report;
}
