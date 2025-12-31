import { noop } from "../../../love/public/src/noop.mjs";
import { object_values_each_generic_async } from "../../../love/public/src/object_values_each_generic_async.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function object_values_each_async(object, lambda$value$key) {
  marker("1");
  let v = await object_values_each_generic_async(
    object,
    lambda$value$key,
    noop,
  );
  return v;
}
