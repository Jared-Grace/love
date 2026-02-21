import { not } from "../../../love/public/src/not.mjs";
import { file_overwrite_uncached } from "../../../love/public/src/file_overwrite_uncached.mjs";
import { global_function_property_set } from "../../../love/public/src/global_function_property_set.mjs";
import { file_read_cached } from "../../../love/public/src/file_read_cached.mjs";
import { global_function_property_exists } from "../../../love/public/src/global_function_property_exists.mjs";
import { text_is_assert } from "../../../love/public/src/text_is_assert.mjs";
export async function file_overwrite(file_path, contents) {
  text_is_assert(contents);
  let exists = global_function_property_exists(file_read_cached, file_path);
  if (exists) {
    global_function_property_set(file_read_cached, file_path, contents);
  }
  if (not(exists)) {
    await file_overwrite_uncached(file_path, contents);
  }
}
