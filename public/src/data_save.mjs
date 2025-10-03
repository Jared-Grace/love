import { data_all } from "../../../love/public/src/data_all.mjs";
import { global_function_property_async } from "../../../love/public/src/global_function_property_async.mjs";
import { data_generate } from "../../../karate_code/public/src/data_generate.mjs";
import { equal } from "../../../love/public/src/equal.mjs";
import { file_overwrite_json } from "../../../love/public/src/file_overwrite_json.mjs";
import { data_path } from "./data_path.mjs";
export async function data_save(a) {
  let d_path = data_path();
  if (equal(file_path, d_path)) {
    async function lambda2() {
      await data_generate(data);
      return data;
    }
    let data = await global_function_property_async(data_all, d_path, lambda2);
  }
  let { file_path, data } = a;
  await file_overwrite_json(file_path, data);
}
