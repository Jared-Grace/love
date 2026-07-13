import { not } from "./not.mjs";
import { file_overwrite_uncached } from "./file_overwrite_uncached.mjs";
import { global_function_property_set } from "./global_function_property_set.mjs";
import { file_read_cached_initialize } from "./file_read_cached_initialize.mjs";
import { global_function_property_exists } from "./global_function_property_exists.mjs";
import { text_is_assert_json } from "./text_is_assert_json.mjs";
export async function file_overwrite(file_path, contents) {
  text_is_assert_json(contents, {
    hint: "the file contents should be text before writing — did a non-text value arrive?",
    file_path,
  });
  let exists = global_function_property_exists(
    file_read_cached_initialize,
    file_path,
  );
  if (exists) {
    global_function_property_set(
      file_read_cached_initialize,
      file_path,
      contents,
    );
  }
  if (not(exists)) {
    await file_overwrite_uncached(file_path, contents);
  }
}
