import { property_get } from "./property_get.mjs";
import { file_stamps_copied_tally } from "./file_stamps_copied_tally.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { path_join } from "./path_join.mjs";
import { folder_exists_ensure } from "./folder_exists_ensure.mjs";
import { less_than } from "./less_than.mjs";
import { divide } from "./divide.mjs";
import { add } from "./add.mjs";
import { list_map_path_join_left } from "./list_map_path_join_left.mjs";
import { file_stamps_by_path } from "./file_stamps_by_path.mjs";
import { folder_copy_fresh } from "./folder_copy_fresh.mjs";
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
  let r = await file_stamps_copied_tally(names, source, target, before, copied);
  let checked_so_far = property_get(r, "checked_so_far");
  let rounding_up_so_far = property_get(r, "rounding_up_so_far");
  let differing_so_far = property_get(r, "differing_so_far");
  let result = {
    checked: checked_so_far,
    rounding_up: rounding_up_so_far,
    differing: differing_so_far,
  };
  return result;
}
