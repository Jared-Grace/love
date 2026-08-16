import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { list_join } from "./list_join.mjs";
import { list_map } from "./list_map.mjs";
import { object_property_names } from "./object_property_names.mjs";
export function permission_grant_seam_chains_text(paths) {
  "The chains of calls behind a refusal, written out as one line a person can read - each one starting at the function being judged and ending at the thing that runs commands.";
  "A refusal used to name only what was reached, and a name on its own cannot be judged. Whether a reach is the whole point of the function or an accident four names down changes the answer completely, and the reader had no way to tell which without opening files. The chain is the difference between being told and being shown.";
  "The last name in each chain is the thing reached, so it is not repeated in front of its own chain. Saying it twice reads as two facts when it is one.";
  arguments_assert(arguments, 1);
  let names = object_property_names(paths);
  function chain_text(name) {
    let chain = property_get(paths, name);
    let text = list_join(chain, " -> ");
    return text;
  }
  let texts = list_map(names, chain_text);
  let r = list_join(texts, "; ");
  return r;
}
