import { firebase_name } from "../../../love/public/src/firebase_name.mjs";
import { global_function_get } from "../../../love/public/src/global_function_get.mjs";
export function firebase_name_browser() {
  let value = global_function_get(firebase_name);
  return value;
}
