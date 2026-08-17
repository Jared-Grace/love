import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { file_overwrite } from "./file_overwrite.mjs";
export async function memory_index_hooks_compress_r(r2, path) {
  arguments_assert(arguments, 2);
  let rebuilt = property_get(r2, "rebuilt");
  let shortened = property_get(r2, "shortened");
  await file_overwrite(path, rebuilt);
  let r = {
    lines: shortened.length,
    shortened,
  };
  return r;
}
