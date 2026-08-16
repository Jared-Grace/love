import { arguments_assert } from "./arguments_assert.mjs";
import { path_join } from "./path_join.mjs";
import { folder_exists_ensure } from "./folder_exists_ensure.mjs";
import { less_than } from "./less_than.mjs";
import { divide } from "./divide.mjs";
import { add } from "./add.mjs";
import { list_map_path_join_left } from "./list_map_path_join_left.mjs";
import { file_stamps_by_path } from "./file_stamps_by_path.mjs";
import { folder_copy_fresh } from "./folder_copy_fresh.mjs";
import { property_get } from "./property_get.mjs";
import { undefined_not_is_assert_json } from "./undefined_not_is_assert_json.mjs";
import { path_modified_ms } from "./path_modified_ms.mjs";
import { round } from "./round.mjs";
import { greater_than } from "./greater_than.mjs";
import { json_equal } from "./json_equal.mjs";
export async function file_stamps_copied_written_compare(folder_path, wanted) {
  arguments_assert(arguments, 2);
  let fs = await import("fs");
  let source = path_join([folder_path, "written"]);
  let target = path_join([folder_path, "copied"]);
  await folder_exists_ensure(source);
  let names = [];
  let index = 0;
  while (less_than(index, wanted)) {
    let name = "stamp_" + index + ".txt";
    let written_path = path_join([source, name]);
    await fs.promises.writeFile(written_path, name);
    let apart = divide(index, wanted);
    let right = divide(apart, 1000);
    let moment = add(1700000000, right);
    await fs.promises.utimes(written_path, moment, moment);
    names.push(name);
    index = add(index, 1);
  }
  let sources = list_map_path_join_left(names, source);
  let before = await file_stamps_by_path(sources);
  await folder_copy_fresh(source, target, []);
  let copies = list_map_path_join_left(names, target);
  let copied = await file_stamps_by_path(copies);
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
  let result = {
    checked: checked_so_far,
    rounding_up: rounding_up_so_far,
    differing: differing_so_far,
  };
  return result;
}
