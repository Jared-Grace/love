import { data_get } from "./data_get.mjs";
export async function function_alias_rename() {
  var { value: aliases, file_path, data } = await data_get("aliases", {});
  return aliases;
}
