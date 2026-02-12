import { functions_search_call } from "../../../love/public/src/functions_search_call.mjs";
import { ternary } from "../../../love/public/src/ternary.mjs";
export async function sandbox() {
  const search = ternary.name;
  let r = await functions_search_call(search);
  return r;
}
