import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { bible_glyph_chapters_prose_missing } from "./bible_glyph_chapters_prose_missing.mjs";
import { bible_glyph_chapters_prose_baseline_path } from "./bible_glyph_chapters_prose_baseline_path.mjs";
import { fn_name } from "./fn_name.mjs";
import { baseline_names_gate_generic } from "./baseline_names_gate_generic.mjs";
export async function bible_glyph_chapters_prose_gate_run() {
  "QA gate: what offends now must be what the baseline already held.";
  "Measured against the baseline rather than against nought, because the repo already carried some of these when this was written. What it holds is the thing worth holding - today's change is not allowed to add one more.";
  let offenders = await bible_glyph_chapters_prose_missing();
  let path = bible_glyph_chapters_prose_baseline_path();
  let name_write = fn_name("bible_glyph_chapters_prose_baseline_write");
  let r = await baseline_names_gate_generic(
    offenders,
    path,
    text_combine_multiple([
      "a picture Bible chapter is on the list with no paragraph about it: write one into ",
      fn_name("bible_glyph_chapters"),
      " opening with THE and the chapter place in the list, saying what measurement chose it and what reading overruled the measurement, then run ",
      fn_name("bible_glyph_chapters_prose_baseline_write"),
    ]),
    name_write,
  );
  return r;
}
