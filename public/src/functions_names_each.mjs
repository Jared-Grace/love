import { each_async } from "../../../love/public/src/each_async.mjs";
import { functions_names } from "../../../love/public/src/functions_names.mjs";
export async function functions_names_each(lambda$f_name) {
  let f_names = await functions_names();
  await each_async(f_names, lambda$f_name);
}
