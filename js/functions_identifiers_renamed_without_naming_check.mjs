import { js_identifiers_renamed_without_naming_check } from "./js_identifiers_renamed_without_naming_check.mjs";
import { functions_ast_offenders_generic } from "./functions_ast_offenders_generic.mjs";
export async function functions_identifiers_renamed_without_naming_check() {
  "Every function that walks all of a piece of code's words and writes over one of them without ever asking which of those words merely names something.";
  "The harm is silent, which is why it is worth a sweep rather than a reading. A word after a dot that is written over asks its object for a name it does not have, and nothing is thrown - so the file keeps running and every gate stays green while the work it does is wrong.";
  "A file the parser cannot read is passed over and counted as skipped by the sweep below, so a run that read nothing cannot pass for a repo with nothing wrong in it.";
  let offenders = await functions_ast_offenders_generic(
    js_identifiers_renamed_without_naming_check,
    "walked",
  );
  return offenders;
}
