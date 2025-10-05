import { not } from "../../../love/public/src/not.mjs";
import { function_exists } from "../../../love/public/src/function_exists.mjs";
export async function function_exists_not(f_name) {
  let { exists } = await function_exists(f_name);
  let n = not(exists);
  return n;
}
