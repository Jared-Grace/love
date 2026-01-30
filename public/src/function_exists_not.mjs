import { not } from "../../../love/public/src/not.mjs";
import { function_exists_unalias } from "../../../love/public/src/function_exists_unalias.mjs";
export async function function_exists_not(f_name) {
  let { exists } = await function_exists_unalias(f_name);
  let n = not(exists);
  return n;
}
