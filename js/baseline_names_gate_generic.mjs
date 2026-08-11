import { arguments_assert } from "./arguments_assert.mjs";
import { baseline_known_read } from "./baseline_known_read.mjs";
import { names_versus_baseline } from "./names_versus_baseline.mjs";
import { property_get } from "./property_get.mjs";
import { list_empty_is_assert_json } from "./list_empty_is_assert_json.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export async function baseline_names_gate_generic(
  offenders,
  path,
  hint,
  name_write,
) {
  arguments_assert(arguments, 4);
  ("Run a gate that measures a flat list of offending names against what the repo");
  ("already carried, and refuse both of the ways that can go wrong.");
  ("A name offending now that the baseline does not hold fails, because that is the");
  ("rule binding what is written today. A name the baseline holds that no longer");
  ("offends fails too - that is the ratchet's other tooth, because an entry left");
  ("behind after a cleanup quietly lets the same offense come back under cover of");
  ("being already known.");
  ("Five gates had written this out separately, alike to the character but for the");
  ("sweep, the file, and the two sentences. Those three are what stays at the call,");
  ("and nothing else about how a ratchet reads may differ between one gate and the");
  ("next - a gate that checked only for growth would be a ratchet with one tooth,");
  ("and it is exactly the sort of half that gets copied without being noticed.");
  ("A gate that can work out something particular to say about the names that newly offend hands over the way of working it out instead of the sentence, and that is the sibling this one now stands on. Saying the same thing every time is the ordinary case and stays the shorter thing to write, so it is kept as the sentence it always was and turned into a way of making one here.");
  function hint_get() {
    return hint;
  }
  let r = await baseline_names_gate_advice_generic(
    offenders,
    path,
    hint_get,
    name_write,
  );
  return r;
}
