import { function_name_to_path } from "../../../love/public/src/function_name_to_path.mjs";
import { file_transform } from "../../../love/public/src/file_transform.mjs";
export async function function_source_replace() {
  let f_path2 = function_name_to_path(f_name);
  async function lambda2() {}
  let r = await file_transform(f_path, lambda2);
}
