import { each_object_generic_async } from "../../../love/public/src/each_object_generic_async.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
import { each_async } from "./each_async.mjs";
export async function each_object_unordered_async(object, lambda) {
  marker("1");
  let each_lambda = each_async;
  await each_object_generic_async(object, lambda, each_lambda);
}
