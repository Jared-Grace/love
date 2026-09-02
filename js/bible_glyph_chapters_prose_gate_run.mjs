import { bible_glyph_chapters_prose_missing } from "./bible_glyph_chapters_prose_missing.mjs";
import { bible_glyph_chapters_prose_baseline_path } from "./bible_glyph_chapters_prose_baseline_path.mjs";
import { fn_name } from "./fn_name.mjs";
import { baseline_names_gate_generic } from "./baseline_names_gate_generic.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { bible_glyph_chapters } from "./bible_glyph_chapters.mjs";
import { list_size } from "./list_size.mjs";
export async function bible_glyph_chapters_prose_gate_run() {
  "QA gate: what offends now must be what the baseline already held.";
  "Measured against the baseline rather than against nought, because the repo already carried some of these when this was written. What it holds is the thing worth holding - today's change is not allowed to add one more.";
  "HOW MANY CHAPTERS WERE READ COMES BACK BESIDE THE VERDICT. Finding no chapter short of a paragraph is also the answer on the day the list moves under this or the paragraphs stop being shaped the way the sweep looks for, and the verdict is the same word both times. The count of what was walked is the one thing that falls to nothing when the reading breaks while the verdict stays green.";
  "The list is asked for here a second time rather than handed back by the sweep, because what the sweep owes its caller is the offenders and nothing else, and the list is a written-down thing that costs no reading to ask for.";
  let offenders = await bible_glyph_chapters_prose_missing();
  let path = bible_glyph_chapters_prose_baseline_path();
  let name_write = fn_name("bible_glyph_chapters_prose_baseline_write");
  let f_name = fn_name("bible_glyph_chapters");
  let f_name2 = fn_name("bible_glyph_chapters_prose_baseline_write");
  let hint = text_combine_multiple([
    "a picture Bible chapter is on the list with no paragraph about it: write one into ",
    f_name,
    " opening with THE and the chapter place in the list, saying what measurement chose it and what reading overruled the measurement, then run ",
    f_name2,
  ]);
  let verdict = await baseline_names_gate_generic(
    offenders,
    path,
    hint,
    name_write,
  );
  let chapters = bible_glyph_chapters();
  let walked = list_size(chapters);
  let r = {
    walked,
    verdict,
  };
  return r;
}
