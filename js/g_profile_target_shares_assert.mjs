import { list_map } from "./list_map.mjs";
import { not } from "./not.mjs";
import { g_profile_axes } from "./g_profile_axes.mjs";
import { g_profile_target_shares } from "./g_profile_target_shares.mjs";
import { object_property_names } from "./object_property_names.mjs";
import { property_get } from "./property_get.mjs";
import { list_sort_text } from "./list_sort_text.mjs";
import { list_add } from "./list_add.mjs";
import { each } from "./each.mjs";
import { lists_equal_pair } from "./lists_equal_pair.mjs";
import { list_sum } from "./list_sum.mjs";
import { equal } from "./equal.mjs";
import { assert_json } from "./assert_json.mjs";
export function g_profile_target_shares_assert() {
  "QA gate: prove the wanted share of every axis value is written down, names only values that exist, and comes to a hundred on each axis - so an axis value added, dropped or renamed cannot leave a share table that silently no longer covers it.";
  "The table is TYPED and the axes are DERIVED, which is the pairing that goes stale without a word of warning. A value added with no share would simply never be dealt; a share left behind after a rename would aim at nobody. Both read as a working table right up until somebody counts.";
  "Summing to a hundred is checked because a share is only meaningful against the others on its axis. A table adding to ninety is not wrong by a tenth in one place - it is wrong everywhere, by an amount nobody chose.";
  let axes = g_profile_axes();
  let shares = g_profile_target_shares();
  let list = object_property_names(axes);
  let axis_names = list_sort_text(list);
  let list2 = object_property_names(shares);
  let share_names = list_sort_text(list2);
  let axes_same = lists_equal_pair(axis_names, share_names);
  assert_json(axes_same, {
    axis_names,
    share_names,
    hint: "every axis needs a share table and every share table needs an axis; a mismatch means an axis was added or renamed without its shares",
  });
  let faults = [];
  function check_axis(axis_name) {
    let list3 = property_get(axes, axis_name);
    let values = list_sort_text(list3);
    let table = property_get(shares, axis_name);
    let list4 = object_property_names(table);
    let shared = list_sort_text(list4);
    let values_same = lists_equal_pair(values, shared);
    if (not(values_same)) {
      list_add(faults, {
        axis: axis_name,
        values,
        shared,
        hint: "the shares must name exactly the values this axis holds",
      });
      return;
    }
    function share_of(value) {
      let share = property_get(table, value);
      return share;
    }
    let numbers = list_map(shared, share_of);
    let total = list_sum(numbers);
    let b = equal(total, 100);
    if (not(b)) {
      list_add(faults, {
        axis: axis_name,
        total,
        hint: "the shares on one axis must come to a hundred",
      });
    }
  }
  each(axis_names, check_axis);
  let b2 = equal(faults.length, 0);
  assert_json(b2, {
    faults,
    hint: "each axis needs a share for exactly its own values, summing to a hundred",
  });
}
