import { noop } from "../../../love/public/src/noop.mjs";
import { each_object_values_generic_async } from "../../../love/public/src/each_object_values_generic_async.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function each_object_values_async(object, lambda$value$key) {
  marker("1");
  let v = await each_object_values_generic_async(
    object,
    lambda$value$key,
    noop,
  );
  return v;
}
