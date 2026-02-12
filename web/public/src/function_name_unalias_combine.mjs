import { function_name_combine } from "../../../love/public/src/function_name_combine.mjs";
import { function_name_unalias_only } from "../../../love/public/src/function_name_unalias_only.mjs";
export async function function_name_unalias_combine(f_name_existing, suffix) {
  let unaliased = await function_name_unalias_only(f_name_existing);
  let combined = function_name_combine(unaliased, suffix);
  return combined;
}
