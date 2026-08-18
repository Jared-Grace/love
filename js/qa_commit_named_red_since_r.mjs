import { arguments_assert } from "./arguments_assert.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { list_empty_is_or_null } from "./list_empty_is_or_null.mjs";
import { list_includes } from "./list_includes.mjs";
import { not } from "./not.mjs";
import { property_get } from "./property_get.mjs";
import { list_add } from "./list_add.mjs";
import { list_map } from "./list_map.mjs";
import { list_sort_number_mapper } from "./list_sort_number_mapper.mjs";
import { list_size } from "./list_size.mjs";
export function qa_commit_named_red_since_r(newest, placed, red, head) {
  arguments_assert(arguments, 4);
  function red_is(one, gate) {
    let failed = property_get_or_null(one, "failed");
    let none = list_empty_is_or_null(failed);
    if (none) {
      return false;
    }
    let inside = list_includes(failed, gate);
    return inside;
  }
  function gate_since(gate) {
    let judged = 0;
    let oldest = newest;
    let running = true;
    for (let one of placed) {
      let still = red_is(one, gate);
      let stopped = not(still);
      if (stopped) {
        running = false;
      }
      if (running) {
        judged = judged + 1;
        oldest = one;
      }
    }
    let since = {
      gate,
      judged,
      commit: property_get(oldest, "commit"),
      behind: property_get(oldest, "behind"),
    };
    return since;
  }
  let unnamed = list_empty_is_or_null(red);
  let names = [];
  if (not(unnamed)) {
    for (let gate of red) {
      list_add(names, gate);
    }
  }
  let gates = list_map(names, gate_since);
  function judged_of(one) {
    let judged = property_get(one, "judged");
    return judged;
  }
  list_sort_number_mapper(gates, judged_of);
  let r = {
    head,
    commit: property_get(newest, "commit"),
    judged: list_size(placed),
    gates,
  };
  return r;
}
