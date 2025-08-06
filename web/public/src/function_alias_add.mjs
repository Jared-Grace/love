import { file_read } from "./file_read.mjs";
export async function function_alias_add(alias, f_name) {
  let data = await file_read('data.json');

  Object.hasOwn(data, 'aliases')
}
