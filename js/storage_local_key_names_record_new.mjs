import { storage_local_key_record_new_generic } from "./storage_local_key_record_new_generic.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { storage_local_key_names_found } from "./storage_local_key_names_found.mjs";
import { storage_local_key_names } from "./storage_local_key_names.mjs";
import { storage_local_key_names_path } from "./storage_local_key_names_path.mjs";
export async function storage_local_key_names_record_new() {
  "Records the names that have newly reached a browser storage key, and drops nothing the record already holds.";
  "This is the safe half of writing the record, and it is safe because of what it refuses to do rather than what it does. A name arriving for the first time carries no danger at all - nobody has data under it yet to lose - so stopping to ask a human about it spends attention on the one case that cannot be wrong.";
  "A name leaving is the whole reason the record exists, and this cannot clear one even by mistake: it only ever adds. So a name that has gone is still missing from the source afterwards and still fails the gate, and the heavy command stays the only way to say that losing the data was meant.";
  arguments_assert(arguments, 0);
  let path = storage_local_key_names_path();
  let done = await storage_local_key_record_new_generic(
    storage_local_key_names_found,
    storage_local_key_names,
    path,
  );
  return done;
}
