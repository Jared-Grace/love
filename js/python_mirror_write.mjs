import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { python_code_mirror } from "./python_code_mirror.mjs";
import { file_overwrite } from "./file_write.mjs";
export async function python_mirror_write(mirror) {
  arguments_assert(arguments, 1);
  ("Writes one mirrored list to the file the guard imports it from.");
  let path = property_get(mirror, "path");
  let code = python_code_mirror(mirror);
  await file_overwrite(path, code);
  let written = {
    written: path,
  };
  return written;
}
