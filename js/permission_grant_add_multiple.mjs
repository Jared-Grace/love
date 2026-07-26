import { list_map_async } from "./list_map_async.mjs";
import { permission_grant_add } from "./permission_grant_add.mjs";
import { text_split_comma } from "./text_split_comma.mjs";
export async function permission_grant_add_multiple(names_comma) {
  "grant a whole set of functions in one command, so a batch of grants costs the human one approval that names every function rather than one approval each";
  "each name still goes through the single-name adder, so the refusal check runs per name and an unsafe grant stays unwritable";
  ("serial on purpose: every added name rewrites the names file and the settings file, so two of them running at once would race");
  let names = text_split_comma(names_comma);
  let reports = await list_map_async(names, permission_grant_add);
  return reports;
}
