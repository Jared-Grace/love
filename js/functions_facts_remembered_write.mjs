import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { null_is } from "./null_is.mjs";
import { property_set } from "./property_set.mjs";
import { each } from "./each.mjs";
import { properties_size } from "./properties_size.mjs";
import { not_equal } from "./not_equal.mjs";
import { file_overwrite_json } from "./file_overwrite_json.mjs";
import { catch_null_async } from "./catch_null_async.mjs";
export async function functions_facts_remembered_write(
  entries,
  remembered,
  cache_path,
) {
  arguments_assert(arguments, 3);
  let keeping = {};
  let read_again_count = 0;
  function record(entry) {
    let stamp = property_get(entry, "stamp");
    let facts = property_get(entry, "facts");
    if (null_is(stamp)) {
      return;
    }
    let kept = {
      written: property_get(stamp, "written"),
      size: property_get(stamp, "size"),
      facts,
    };
    let property_name = property_get(entry, "f_path");
    property_set(keeping, property_name, kept);
    let read_again = property_get(entry, "read_again");
    if (read_again) {
      read_again_count = read_again_count + 1;
    }
  }
  each(entries, record);
  let counted_before = properties_size(remembered);
  let counted_now = properties_size(keeping);
  let count_changed = not_equal(counted_before, counted_now);
  let any_read_again = not_equal(read_again_count, 0);
  let write_wanted = any_read_again || count_changed;
  if (write_wanted) {
    async function remembered_write() {
      await file_overwrite_json(cache_path, keeping);
    }
    await catch_null_async(remembered_write);
  }
  return write_wanted;
}
