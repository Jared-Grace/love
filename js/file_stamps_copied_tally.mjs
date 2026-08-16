import { arguments_assert } from "./arguments_assert.mjs";
import { path_join } from "./path_join.mjs";
import { property_get } from "./property_get.mjs";
import { undefined_not_is_assert_json } from "./undefined_not_is_assert_json.mjs";
import { add } from "./add.mjs";
import { path_modified_ms } from "./path_modified_ms.mjs";
import { round } from "./round.mjs";
import { greater_than } from "./greater_than.mjs";
import { json_equal } from "./json_equal.mjs";
export async function file_stamps_copied_tally(
  names,
  source,
  target,
  before,
  copied,
) {
  arguments_assert(arguments, 5);
  let differing_so_far = [];
  let rounding_up_so_far = 0;
  let checked_so_far = 0;
  for (let name of names) {
    let source_path = path_join([source, name]);
    let copy_path = path_join([target, name]);
    let stamp_before = property_get(before, source_path);
    let stamp_copied = property_get(copied, copy_path);
    undefined_not_is_assert_json(stamp_before, {
      source_path,
    });
    undefined_not_is_assert_json(stamp_copied, {
      copy_path,
    });
    checked_so_far = add(checked_so_far, 1);
    let exact = await path_modified_ms(source_path);
    let whole = round(exact);
    if (greater_than(whole, exact)) {
      rounding_up_so_far = add(rounding_up_so_far, 1);
    }
    let same = json_equal(stamp_before, stamp_copied);
    if (same) {
      continue;
    }
    differing_so_far.push({
      name,
      source: stamp_before,
      copy: stamp_copied,
    });
  }
  let r = {
    differing_so_far,
    rounding_up_so_far,
    checked_so_far,
  };
  return r;
}
