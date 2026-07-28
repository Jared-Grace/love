import { literals_frozen_values } from "./literals_frozen_values.mjs";
import { literals_frozen_path } from "./literals_frozen_path.mjs";
import { file_read_json } from "./file_read_json.mjs";
import { property_exists } from "./property_exists.mjs";
import { property_get } from "./property_get.mjs";
import { property_set } from "./property_set.mjs";
import { list_add } from "./list_add.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { file_overwrite_json } from "./file_overwrite_json.mjs";
export async function literals_frozen_record_new() {
  "Records the frozen constants the record has never heard of, and touches nothing";
  "it already holds.";
  "This is the safe half of writing the record, split out because the two halves";
  "deserve opposite answers. A name arriving for the first time carries no danger";
  "at all - there is no earlier value for it to disagree with - so asking a human";
  "about it spends attention on the one case that cannot be wrong. A name already";
  "in the record whose value has moved is the whole reason the record exists, and";
  "that one still goes through the heavy command that leaves the change standing";
  "in the commit.";
  "It cannot silence the dangerous case even by mistake, and that is what makes it";
  "safe to run without asking: it only ever writes a key the record is missing, so";
  "a value that moved is still missing from nothing and still fails the gate";
  "afterwards.";
  let values = await literals_frozen_values();
  let path = literals_frozen_path();
  let recorded = await file_read_json(path);
  let added = [];
  let names = Object.keys(values);
  for (let f_name of names) {
    let known = property_exists(recorded, f_name);
    if (known) {
      continue;
    }
    let value = property_get(values, f_name);
    property_set(recorded, f_name, value);
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
  await file_overwrite_json(path, recorded);
  let done = {
    added,
    wrote: true,
  };
  return done;
}
