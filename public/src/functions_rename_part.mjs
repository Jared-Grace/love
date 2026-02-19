import { functions_rename_generic } from "../../../love/public/src/functions_rename_generic.mjs";
export async function functions_rename_part(from, to) {
  function lambda() {}
  let r = await functions_rename_generic(lambda, name_change);
}
