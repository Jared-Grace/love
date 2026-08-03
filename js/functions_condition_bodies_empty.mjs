import { js_condition_bodies_empty } from "./js_condition_bodies_empty.mjs";
import { functions_ast_offenders_generic } from "./functions_ast_offenders_generic.mjs";
export async function functions_condition_bodies_empty() {
  "Audit: every function in this repo that asks a question and opens an empty block for the answer.";
  "The judgment itself is next door, asked of one file at a time, so the same question can be asked of a single file without walking the folder.";
  "A file that will not parse is skipped rather than reported - a broken file is a different complaint with its own gate, and failing here would report the same breakage twice under a name that explains nothing. The sweep below does the skipping, and says out loud how many it looked at and how many it passed over, so a run that reached nothing cannot read as a repo with nothing wrong in it.";
  let offenders = await functions_ast_offenders_generic(
    js_condition_bodies_empty,
    "kinds",
  );
  return offenders;
}
