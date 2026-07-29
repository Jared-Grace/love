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
  let recorded = await baseline_known_read(path);
  let change = names_versus_baseline(offenders, recorded);
  let added = property_get(change, "added");
  let stale = property_get(change, "stale");
  list_empty_is_assert_json(added, {
    hint,
    added,
  });
  list_empty_is_assert_json(stale, {
    hint: text_combine_multiple([
      "these no longer offend - shrink the record with ",
      name_write,
      " so the same name cannot come back unnoticed",
    ]),
    stale,
  });
  let r = {
    added: 0,
    stale: 0,
  };
  return r;
}
