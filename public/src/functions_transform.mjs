import { functions_transform_list } from "../../../karate_code/public/src/functions_transform_list.mjs";
import { functions_names } from "../../../love/public/src/functions_names.mjs";
export async function functions_transform(lambda) {
  const list = await functions_names();
  let waited = await functions_transform_list(lambda, list);
  return waited;
}
