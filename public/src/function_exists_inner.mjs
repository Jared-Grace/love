import { object_merge } from "./object_merge.mjs";
import { file_exists } from "./file_exists.mjs";
export async function function_exists_inner(u) {
  let { f_path } = u;
  const exists = await file_exists(f_path);
  let to = {
    exists,
  };
  let e = object_merge(to, u);
  return e;
}
