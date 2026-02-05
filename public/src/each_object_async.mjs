import { each_object_generic_async } from "../../../love/public/src/each_object_generic_async.mjs";
import { each_async } from "./each_async.mjs";
export async function each_object_async(object, lambda$value$key) {
  let each_lambda = each_async;
  await each_object_generic_async(object, lambda$value$key, each_lambda);
}
