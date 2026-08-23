import { bible_glyph_chapters_marks_unseated_names } from "./bible_glyph_chapters_marks_unseated_names.mjs";
import { bible_glyph_chapters_marks_unseated_baseline_path } from "./bible_glyph_chapters_marks_unseated_baseline_path.mjs";
import { fn_name } from "./fn_name.mjs";
import { baseline_names_gate_generic } from "./baseline_names_gate_generic.mjs";
export async function bible_glyph_chapters_marks_unseated_gate_run() {
  "QA gate: what offends now must be what the baseline already held.";
  "Measured against the baseline rather than against nought, because the repo already carried some of these when this was written. What it holds is the thing worth holding - today's change is not allowed to add one more.";
  let offenders = await bible_glyph_chapters_marks_unseated_names();
  let path = bible_glyph_chapters_marks_unseated_baseline_path();
  let name_write = fn_name(
    "bible_glyph_chapters_marks_unseated_baseline_write",
  );
  let r = await baseline_names_gate_generic(
    offenders,
    path,
    "these picture Bible chapters draw a mark on a word the root table never seats it on - pull the mark back to plain English, or seat that word in the root table if it belongs there",
    name_write,
  );
  return r;
}
