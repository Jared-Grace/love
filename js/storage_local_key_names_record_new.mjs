import { arguments_assert } from "./arguments_assert.mjs";
import { storage_local_key_names_found } from "./storage_local_key_names_found.mjs";
import { storage_local_key_names } from "./storage_local_key_names.mjs";
import { list_includes } from "./list_includes.mjs";
import { list_add } from "./list_add.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { storage_local_key_names_path } from "./storage_local_key_names_path.mjs";
import { file_overwrite_json } from "./file_overwrite_json.mjs";
export async function storage_local_key_names_record_new() {
  "Records the names that have newly reached a browser storage key, and drops nothing the record already holds.";
  "This is the safe half of writing the record, and it is safe because of what it refuses to do rather than what it does. A name arriving for the first time carries no danger at all - nobody has data under it yet to lose - so stopping to ask a human about it spends attention on the one case that cannot be wrong.";
  "A name leaving is the whole reason the record exists, and this cannot clear one even by mistake: it only ever adds. So a name that has gone is still missing from the source afterwards and still fails the gate, and the heavy command stays the only way to say that losing the data was meant.";
  arguments_assert(arguments, 0);
  let found = await storage_local_key_names_found();
  let recorded = await storage_local_key_names();
  let added = [];
  for (let f_name of found) {
    let known = list_includes(recorded, f_name);
    if (known) {
      continue;
    }
    list_add(recorded, f_name);
    list_add(added, f_name);
  }
  let none = list_empty_is(added);
  if (none) {
    let nothing = {
      added,
      wrote: false,
    };
    return nothing;
  }
  recorded.sort();
  let path = storage_local_key_names_path();
  await file_overwrite_json(path, recorded);
  let done = {
    added,
    wrote: true,
  };
  return done;
}
