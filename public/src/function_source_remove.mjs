import { function_source_replace } from "../../../love/public/src/function_source_replace.mjs";
export async function function_source_remove(f_name, from) {
  let r2 = await function_source_replace(f_name, from, "");
  return r2;
}
