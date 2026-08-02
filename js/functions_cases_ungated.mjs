import { functions_names_ending_found_assert } from "./functions_names_ending_found_assert.mjs";
import { function_ast } from "./function_ast.mjs";
import { js_identifiers_referenced_names } from "./js_identifiers_referenced_names.mjs";
import { list_add_multiple } from "./list_add_multiple.mjs";
import { functions_names_ending_unused } from "./functions_names_ending_unused.mjs";
export async function functions_cases_ungated() {
  "The written-down corpora no gate reads, so the cases sit in the repo and are never put to anything.";
  "A corpus is written for one reason: the sweep it belongs to passes by finding nothing, and only a set of files somebody wrote on purpose can tell that apart from a reader that has stopped looking. So a corpus nothing reads is not spare material - it is the one thing standing between a broken reader and a green build, left out of the run.";
  "It catches the way that actually happens, which is not somebody writing a corpus and forgetting it. A new gate gets written by copying the nearest one, and the copy keeps the corpus it was copied from - so the new corpus is never read, the old one is read twice, and both gates print a full row of ticks.";
  "Which gate reads which corpus is asked rather than worked out from the names, because the naming does not hold: some corpora are read by a gate named after the corpus and some by a gate named after the sweep, and a rule built on the spelling would report the second kind as a fault forever.";
  "Both sides are refused when they come back empty, and that is the whole of what keeps this from being answered right by accident. What it hands back is a subtraction, so no corpora found and no gates found each make the answer nothing - the same nothing a repo in good order gives, printed the same way. The one side is refused here because it is asked for here; the other is refused by the shape this shares with its neighbour, along with the passing over of names somebody is still writing.";
  let gates = await functions_names_ending_found_assert(
    "_gate_run",
    "no gate was found in this repo at all - nothing would then be read by anything and every corpus would be reported, so look at what spells the ending being looked for",
  );
  let read = [];
  for (let gate of gates) {
    let ast = await function_ast(gate);
    let names = js_identifiers_referenced_names(ast);
    list_add_multiple(read, names);
  }
  let ungated = await functions_names_ending_unused(
    "_cases",
    "no written-down corpus was found in this repo at all - the answer below would be nothing whatever the gates read, so look at what spells the ending being looked for rather than at any gate",
    read,
  );
  return ungated;
}
