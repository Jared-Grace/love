import { function_name_unalias_only } from "./function_name_unalias_only.mjs";
import { function_parse_unaliased } from "./function_parse_unaliased.mjs";
import { property_get } from "./property_get.mjs";
import { js_auto_generic } from "./js_auto_generic.mjs";
import { js_auto_transforms_dry } from "./js_auto_transforms_dry.mjs";
export async function function_auto_check(f_name) {
  "Ask whether the normalize pipeline can process a function, and answer without touching the file. The pipeline itself only ever rewrites the tree it was handed and an index held in memory; the single step that reaches the disk is the unparse that writes the file back, and this skips it. So the question becomes askable: until now the only way to learn whether the pipeline could handle a file was to run it for real and let it rewrite the file, which also strips any slash comments the file still carries - the measurement destroyed part of what it measured.";
  "A refusal is reported rather than thrown, because the caller sweeping a list wants the whole list, not the first failure. The message is carried out with it: a name alone says something is wrong, and the message says which step gave up, which is the difference between a list to fix and a list to stare at.";
  "Skipping the final write is not enough on its own. One step of the pipeline lifts each function declared beside the exported one out into a file of its own, and that step creates those files as it goes - so running the whole pipeline and merely declining to save the result still litters the repo with new files. The dry list swaps that one step for the version that changes the tree the same way and creates nothing. This was learned the hard way: an earlier version of this check ran the real list and created fourteen files across two sweeps, which then had to be found and deleted.";
  "finding and reading the file is inside the attempt along with the pipeline, so that a name that names nothing is reported the same way a name whose file the pipeline chokes on is - one entry saying no, with the reason. It used to sit outside, which meant a single dead name in a list of sixty threw past the sweep and discarded the fifty-nine answers already paid for";
  let unaliased = await function_name_unalias_only(f_name);
  ("the local is not named error, because that is the name of a function in this repo and the import-repair pass would bind it and add an import for it");
  let ok = true;
  let error_message = "";
  let transforms = js_auto_transforms_dry();
  try {
    let parsed = await function_parse_unaliased(unaliased);
    let ast = property_get(parsed, "ast");
    await js_auto_generic(ast, transforms);
    js_unparse_parse(ast);
  } catch (e) {
    ok = false;
    error_message = e.message;
  }
  let r = {
    name: unaliased,
    ok,
    error_message,
  };
  return r;
}
