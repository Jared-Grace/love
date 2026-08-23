import { arguments_assert } from "./arguments_assert.mjs";
import { app_shared_api } from "./app_shared_api.mjs";
export async function app_shared_api_named(f_name, args) {
  arguments_assert(arguments, 2);
  let a = {
    f_name,
    args,
  };
  let result = await app_shared_api(a);
  return result;
}
