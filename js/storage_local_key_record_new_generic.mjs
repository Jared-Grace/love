import { arguments_assert } from "./arguments_assert.mjs";
import { list_includes } from "./list_includes.mjs";
import { list_add } from "./list_add.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { file_overwrite_json } from "./file_overwrite_json.mjs";
export async function storage_local_key_record_new_generic(
  fn_found,
  fn_recorded,
  f_path,
) {
  arguments_assert(arguments, 3);
  ("Adds to a record every entry that has newly reached a browser storage key, and drops nothing the record already holds - the reader that finds them and the reader that holds them are given, so the same care serves whichever kind of entry is being watched.");
  ("This is the safe half of writing a record, and it is safe because of what it refuses to do rather than what it does. An entry arriving for the first time carries no danger at all - nobody has data under it yet to lose - so stopping to ask a human about it spends attention on the one case that cannot be wrong.");
  ("An entry leaving is the whole reason a record exists, and this cannot clear one even by mistake: it only ever adds. So an entry that has gone is still missing from the source afterwards and still fails the gate, and the heavy command stays the only way to say that losing the data was meant.");
  ("Nothing is written when nothing is new, which is what lets this be run at any time without putting a file in front of a peer's sweep for no reason.");
  let found = await fn_found();
  let recorded = await fn_recorded();
  let added = [];
  for (let entry of found) {
    let known = list_includes(recorded, entry);
    if (known) {
      continue;
    }
    list_add(recorded, entry);
    list_add(added, entry);
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
  await file_overwrite_json(f_path, recorded);
  let done = {
    added,
    wrote: true,
  };
  return done;
}
