import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { list_includes } from "./list_includes.mjs";
import { list_add } from "./list_add.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
export function red_proof_cases_idle_redundant(
  cases,
  wrong_names,
  refused,
  described_key,
) {
  "Walks the cases and picks out the two kinds that earn nothing: one that refuses no wrong version at all, and one that refuses only versions some other case also refuses.";
  arguments_assert(arguments, 4);
  let idle = [];
  let redundant = [];
  let case_index = 0;
  for (let one of cases) {
    let caught = [];
    for (let wrong_name of wrong_names) {
      let indices = property_get(refused, wrong_name);
      if (list_includes(indices, case_index)) {
        list_add(caught, wrong_name);
      }
    }
    let described = property_get(one, described_key);
    let row = {
      index: case_index,
      described,
    };
    if (list_empty_is(caught)) {
      list_add(idle, row);
    } else {
      let alone = false;
      for (let wrong_name of caught) {
        let indices = property_get(refused, wrong_name);
        if (equal(indices.length, 1)) {
          alone = true;
        }
      }
      if (not(alone)) {
        list_add(redundant, row);
      }
    }
    case_index = case_index + 1;
  }
  let r = {
    idle,
    redundant,
  };
  return r;
}
