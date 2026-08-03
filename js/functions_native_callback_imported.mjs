import { js_native_callback_imported } from "./js_native_callback_imported.mjs";
import { functions_ast_offenders_generic } from "./functions_ast_offenders_generic.mjs";
export async function functions_native_callback_imported() {
  "audit: every function in this repo that hands an imported name straight to a native array method as its callback, each named beside the places inside it that do so";
  "the judgement itself is next door, asked of one file at a time; this only walks the repo, so the same question can be asked of a single file without a sweep";
  "a file that will not parse is skipped rather than reported - a broken file is a different complaint with its own gate, and letting it fail here would report the same breakage twice under a name that explains nothing. The sweep below does that skipping and says how many it looked at, so a run that read nothing cannot pass for a repo with nothing wrong in it";
  "the places are grouped under the function holding them rather than listed one by one, because that is the shape every sweep here hands back and the one the shared walk can give. Whatever wants them one by one joins the groups end to end, which is a line";
  let offenders = await functions_ast_offenders_generic(
    js_native_callback_imported,
    "sites",
  );
  return offenders;
}
