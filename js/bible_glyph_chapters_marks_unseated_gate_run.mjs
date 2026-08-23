import { bible_glyph_chapters_marks_unseated_names_walked } from "./bible_glyph_chapters_marks_unseated_names_walked.mjs";
import { bible_glyph_chapters_marks_unseated_baseline_path } from "./bible_glyph_chapters_marks_unseated_baseline_path.mjs";
import { property_get } from "./property_get.mjs";
import { fn_name } from "./fn_name.mjs";
import { baseline_names_gate_walked_generic } from "./baseline_names_gate_walked_generic.mjs";
export async function bible_glyph_chapters_marks_unseated_gate_run() {
  "QA gate: a picture Bible chapter draws no mark on a word the root table never seated it on.";
  "The pictures are taught by use and nothing else - a reader meets the flame beside God until the flame means God - so a mark drawn once on the thing it happens to look like teaches the opposite of every page that taught it right. The three that can go wrong this way are already in the tables: the flame is seated on God and not on fire, the breath on Spirit and not on wind, the star on glory and not on star, and any letter mentioning eternal fire or a driving wind or wandering stars puts all three in front of an author as an obvious picture apparently missing.";
  "Measured against the record rather than against nought, because two were already drawn when this was written and neither is a decision code can make. One is the twentieth of Exodus drawing the darkness on araphel, a real Hebrew word for darkness the table does not seat - that one is a mistake. The other is a compound, the false prophet, whose second half is seated and whose whole is not, and whether a compound may draw its root's mark is a question about the language. The record holds both so that today's chapter cannot add a third.";
  "The number handed back is how many marks were compared, not how many were wrong. On a good day nothing is wrong, which is also what a run that opened no chapter would say, and the count is the one part of the answer that falls when the sweep stops reaching the chapters.";
  let told = await bible_glyph_chapters_marks_unseated_names_walked();
  let walked = property_get(told, "walked");
  let offenders = property_get(told, "offenders");
  let path = bible_glyph_chapters_marks_unseated_baseline_path();
  let name_write = fn_name(
    "bible_glyph_chapters_marks_unseated_baseline_write",
  );
  let r = await baseline_names_gate_walked_generic(
    walked,
    offenders,
    path,
    "these picture Bible chapters draw a mark on a word the root table never seats it on - pull the mark back to plain English, or seat that word in the root table if it belongs there",
    name_write,
  );
  return r;
}
