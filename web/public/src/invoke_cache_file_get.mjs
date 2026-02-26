import { property_get } from "../../../love/public/src/property_get.mjs";
import { file_read_json } from "../../../love/public/src/file_read_json.mjs";
export function invoke_cache_file_get() {
  let r2 = async function lambda2(key) {
    let data = await file_read_json(key);
    let r = property_get(data, "result");
    return r;
  };
  return r2;
}
