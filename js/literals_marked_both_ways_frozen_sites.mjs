import { arguments_assert } from "./arguments_assert.mjs";
import { repo_functions_code } from "./repo_functions_code.mjs";
import { fn_name } from "./fn_name.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export async function literals_marked_both_ways_frozen_sites(repo_name) {
  arguments_assert(arguments, 1);
  let entries = await repo_functions_code(repo_name);
  let frozen_marker = fn_name("text_frozen");
  let reference_marker = fn_name("fn_name");
  let frozen_needle = text_combine_multiple([frozen_marker, "("]);
  let reference_prefix = text_combine_multiple([reference_marker, '("']);
  let frozen_sites = [];
  let r = {
    entries,
    frozen_marker,
    reference_marker,
    frozen_needle,
    reference_prefix,
    frozen_sites,
  };
  return r;
}
