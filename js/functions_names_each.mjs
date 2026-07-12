import { each_async } from "./each_async.mjs";
import { functions_names } from "./functions_names.mjs";
export async function functions_names_each(lambda$f_name) {
  let f_names = await functions_names();
  await each_async(f_names, lambda$f_name);
}
