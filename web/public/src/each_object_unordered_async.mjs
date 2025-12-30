import { each_unordered_async } from "../../../love/public/src/each_unordered_async.mjs";
import { each_object_generic_async } from "../../../love/public/src/each_object_generic_async.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function each_object_unordered_async(object, lambda) {
  marker("1");
  let each_lambda = each_unordered_async;
  await each_object_generic_async(object, lambda, each_lambda);
}
