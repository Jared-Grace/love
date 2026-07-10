import { functions_expand_all } from "../../../love/public/src/functions_expand_all.mjs";
export async function functions_expand_all_delete(f_name_expand) {
  let r = await functions_expand_all(f_name_expand);
  return r;
}
