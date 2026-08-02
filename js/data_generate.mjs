import { fn_name } from "./fn_name.mjs";
import { functions_facts_all } from "./functions_facts_all.mjs";
import { functions_facts_merge_all } from "./functions_facts_merge_all.mjs";
import { property_get } from "./property_get.mjs";
export async function data_generate(data) {
  "Build the index everything is looked up in, out of what each file says about itself.";
  "Reading those facts is where the whole cost was, and it is now asked for rather than done here - a file nobody has touched since the last question is not opened again.";
  ("The fold used to be described as cheap and done every time. It is not cheap - a hundred and forty thousand names go into lookups, and it measured at more than half of what asking for the index costs at all. Whoever wants it done once per process asks ",
    fn_name("data_index_get"),
    " instead; this one always folds, for the caller that wants a fresh object of its own.");
  let asked = await functions_facts_all();
  let facts = property_get(asked, "facts");
  functions_facts_merge_all(facts, data);
}
