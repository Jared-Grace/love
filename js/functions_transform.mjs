import { functions_transform_list } from "./functions_transform_list.mjs";
import { functions_names } from "./functions_names.mjs";
export async function functions_transform(lambda$ast) {
  let list = await functions_names();
  let waited = await functions_transform_list(list, lambda$ast);
  return waited;
}
