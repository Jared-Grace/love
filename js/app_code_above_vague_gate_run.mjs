import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lessons_above_vague } from "./app_code_lessons_above_vague.mjs";
import { property_get } from "./property_get.mjs";
import { app_code_above_vague_baseline_path } from "./app_code_above_vague_baseline_path.mjs";
import { baseline_names_gate_walked_generic } from "./baseline_names_gate_walked_generic.mjs";
import { fn_name } from "./fn_name.mjs";
export async function app_code_above_vague_gate_run() {
  arguments_assert(arguments, 0);
  ("Gate: a lesson's telling shows the code it talks about rather than pointing at it with a word - the first runs, the outer part, that line.");
  ("The human's rule, 2026-10-08: be explicit and spell things out, because a pronoun is a computation for the reader. Thirteen if lessons were rewritten that day to show if (a) { ... } and else { ... }; this is what keeps the next one from being written the old way.");
  ("Measured against what the lessons already said rather than against none, because the comment lessons say that line right after the line they mean, and whether that is clear enough is a judgement about each screen, not something this can settle. The list only shrinks: a line it does not hold fails, and a line it holds that no longer matches fails too.");
  ("The words are a narrow list on purpose, kept in ",
    fn_name("app_code_above_vague_pattern"),
    " with the reasons for each one left out. A check that fails on clear writing teaches whoever reads it to read past the one line that is real.");
  let told = app_code_lessons_above_vague();
  let walked = property_get(told, "walked");
  let offenders = property_get(told, "offenders");
  let path = app_code_above_vague_baseline_path();
  let r = await baseline_names_gate_walked_generic(
    walked,
    offenders,
    path,
    "these lesson lines point at code with a word and did not before - show the code instead: if (a) { ... }, else { ... }, or the whole statement",
    fn_name("app_code_above_vague_baseline_write"),
  );
  return r;
}
