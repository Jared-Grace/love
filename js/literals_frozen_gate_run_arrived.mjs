import { arguments_assert } from "./arguments_assert.mjs";
import { literals_frozen_values } from "./literals_frozen_values.mjs";
import { literals_frozen_path } from "./literals_frozen_path.mjs";
import { file_read_json } from "./file_read_json.mjs";
import { object_property_names } from "./object_property_names.mjs";
import { list_concat_unique } from "./list_concat_unique.mjs";
import { property_or_null } from "./property_or_null.mjs";
import { not_equal } from "./not_equal.mjs";
import { property_exists_not } from "./property_exists_not.mjs";
import { list_add } from "./list_add.mjs";
import { property_get } from "./property_get.mjs";
import { list_map } from "./list_map.mjs";
export async function literals_frozen_gate_run_arrived() {
  arguments_assert(arguments, 0);
  let now = await literals_frozen_values();
  let path = literals_frozen_path();
  let recorded = await file_read_json(path);
  let a = object_property_names(now);
  let b = object_property_names(recorded);
  let names = list_concat_unique(a, b);
  ("A name the record has never held is told apart from one whose value has moved, because only the second is the thing described above. Counting them together made adding a frozen constant fail as though a published value had changed under it - the case this says in its own words it is not watching - and the repair offered was the heavy command, so a rare and deliberate act was being asked for every time somebody named a new one.");
  let fresh = [];
  let gone = [];
  let moved = [];
  for (let f_name of names) {
    let was = property_or_null(recorded, f_name);
    let is = property_or_null(now, f_name);
    let different = not_equal(was, is);
    if (different) {
      let unheard = property_exists_not(recorded, f_name);
      if (unheard) {
        list_add(fresh, f_name);
        continue;
      }
      ("A name the code no longer has is the mirror of the one above and just as harmless on its own: the name moved and the value stood still, where the danger is the value moving and the name standing still. Renaming a frozen constant makes BOTH at once - the old name leaves and the new one arrives carrying the same value - and until this the leaving half was read as a value that had vanished, which is the loud branch. So renaming two of them cost the heavy command twice for a change that published nothing new.");
      let departed = property_exists_not(now, f_name);
      if (departed) {
        list_add(gone, f_name);
        continue;
      }
      list_add(moved, {
        f_name,
        was,
        is,
      });
    }
  }
  ("What keeps that from becoming a hole: a name may only leave quietly if the value it held has ARRIVED somewhere else in the same breath. Renamed and changed at once - the old name gone, the new one carrying a different value - would otherwise be two harmless-looking halves adding up to exactly the edit this exists to catch, so a departure whose value is nowhere among the arrivals stays loud.");
  function lambda(f_name) {
    let value = property_get(now, f_name);
    return value;
  }
  let arrived = list_map(fresh, lambda);
  let r = {
    recorded,
    names,
    fresh,
    gone,
    moved,
    arrived,
  };
  return r;
}
