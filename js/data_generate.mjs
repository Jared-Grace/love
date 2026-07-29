import { data_facts_all } from "./data_facts_all.mjs";
import { data_facts_merge } from "./data_facts_merge.mjs";
import { each } from "./each.mjs";
export async function data_generate(data) {
  "Build the index everything is looked up in, out of what each file says about itself.";
  "Reading those facts is where the whole cost was, and it is now asked for rather than done here - a file nobody has touched since the last question is not opened again. Folding them together is cheap and is still done every time, because the index is held in memory only and each run starts without one.";
  let all = await data_facts_all();
  function merge(facts) {
    data_facts_merge(facts, data);
  }
  each(all, merge);
  return;
}
