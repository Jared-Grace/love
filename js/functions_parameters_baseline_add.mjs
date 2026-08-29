import { arguments_assert } from "./arguments_assert.mjs";
import { text_split_comma } from "./text_split_comma.mjs";
import { functions_parameters_baseline_path } from "./functions_parameters_baseline_path.mjs";
import { functions_parameters_oversize_names } from "./functions_parameters_oversize_names.mjs";
import { baseline_known_add } from "./baseline_known_add.mjs";
export async function functions_parameters_baseline_add(names_comma) {
  arguments_assert(arguments, 1);
  ("$plain names_comma");
  ("the names of functions to record, joined by commas. They name functions to look up and nothing that runs.");
  ("Record NAMED functions as allowed to ask a caller for more than the ceiling allows, and leave every other long row still failing.");
  ("Its whole-file twin takes everything standing above the ceiling right now, which is the wrong shape whenever what stands there is a mixture - and here it always is. Several people work this repo at once, so at any moment the list holds rows nobody should collapse and rows somebody is halfway through collapsing. One run of the whole-file writer blesses both, and afterwards nothing tells the one that was never going to clear from the one that was about to.");
  let names = text_split_comma(names_comma);
  let path = functions_parameters_baseline_path();
  let named = await functions_parameters_oversize_names();
  let r = await baseline_known_add(names, path, named);
  return r;
}
