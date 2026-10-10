import { equal } from "./equal.mjs";
import { file_stamps_by_path } from "./file_stamps_by_path.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { global_function_property_exists } from "./global_function_property_exists.mjs";
import { null_not_is } from "./null_not_is.mjs";
import { global_function_property_get } from "./global_function_property_get.mjs";
import { property_get } from "./property_get.mjs";
import { file_read } from "./file_read.mjs";
import { global_function_property_set } from "./global_function_property_set.mjs";
export async function file_read_held(file_path) {
  "What is in a file, as text, read from the disk only when the file has been written since this process last read it.";
  "The disk is still asked every time when the file was last written and how long it is, so a peer rewriting it is seen on the very next read. What is skipped is reading the whole of a file that answers the same as last time - the function facts record is thirty-nine megabytes and was read in full several times in every pass that tidies one file, a quarter of a second each time.";
  "Text is held rather than what it spells, so every caller still gets things of its own to change, exactly as a fresh read gave them.";
  "Asked about before it is read, so a file rewritten in between is held under the older mark and read again next time - the mistake this can make is one read too many, never one too few.";
  let stamps = await file_stamps_by_path([file_path]);
  let stamp = property_get_or_null(stamps, file_path);
  let held_is = global_function_property_exists(file_read_held, file_path);
  if (null_not_is(stamp) && held_is) {
    let held = global_function_property_get(file_read_held, file_path);
    let left = property_get(held, "written");
    let right = property_get(stamp, "written");
    let written_same = equal(left, right);
    let left2 = property_get(held, "size");
    let right2 = property_get(stamp, "size");
    let size_same = equal(left2, right2);
    if (written_same && size_same) {
      let text_held = property_get(held, "text");
      return text_held;
    }
  }
  let text = await file_read(file_path);
  if (null_not_is(stamp)) {
    let record = {
      written: property_get(stamp, "written"),
      size: property_get(stamp, "size"),
      text,
    };
    global_function_property_set(file_read_held, file_path, record);
  }
  return text;
}
