import { function_multiple_rename_generic } from "../../../love/public/src/function_multiple_rename_generic.mjs";
export async function function_multiple_rename_replace(filter, name_change) {
  let r = await function_multiple_rename_generic(filter, name_change);
  return r;
}
