import { object_property_names } from "./object_property_names.mjs";
import { property_in_list } from "./property_in_list.mjs";
import { list_map } from "./list_map.mjs";
import { property_delete } from "./property_delete.mjs";
import { and } from "./and.mjs";
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
  let names = object_property_names(values);
  for (let f_name of names) {
    let known = property_exists(recorded, f_name);
    if (known) {
      continue;
    }
    let value = property_get(values, f_name);
    property_set(recorded, f_name, value);
    list_add(added, f_name);
  }
  ("A name the code no longer has is dropped only when the value it held is one of the ones just recorded under a new name. That is what a rename looks like from here, and dropping it then keeps nothing from being watched: the published value still has a live owner in the record.");
  ("A departure whose value did NOT arrive anywhere is left exactly where it is, so it goes on failing the gate. Renamed-and-changed-at-once is the edit that would otherwise slip through as two innocent halves, and refusing to touch it here is what makes this half unable to hide the thing the loud half exists for.");
  function lambda(f_name) {
    let value = property_get(values, f_name);
    return value;
  }
  let arrived = list_map(added, lambda);
  let dropped = [];
  let known_names = object_property_names(recorded);
  for (let f_name of known_names) {
    let live = property_exists(values, f_name);
    if (live) {
      continue;
    }
    let carried = property_in_list(recorded, f_name, arrived);
    if (carried) {
      property_delete(recorded, f_name);
      list_add(dropped, f_name);
    }
  }
  let nothing_added = list_empty_is(added);
  let nothing_dropped = list_empty_is(dropped);
  let none = and(nothing_added, nothing_dropped);
  if (none) {
    let nothing = {
      added,
      dropped,
      wrote: false,
    };
    return nothing;
  }
  await file_overwrite_json(path, recorded);
  let done = {
    added,
    dropped,
    wrote: true,
  };
  return done;
}
