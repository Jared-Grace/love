import { list_concat_multiple } from "./list_concat_multiple.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { cors_bucket_rules } from "./cors_bucket_rules.mjs";
export async function cors_bucket_origins() {
  "Every address the file store will presently let a page read from, gathered out of its rules into one flat list.";
  "The rules arrive grouped by what each group of addresses is allowed to do, and that grouping answers a question nobody here asks. What is wanted is whether one address is in there at all, so the groups are opened out and joined, and the question becomes a plain look in a list.";
  let rules = await cors_bucket_rules();
  let listed = list_map_property(rules, "origin");
  let origins = list_concat_multiple(listed);
  return origins;
}
