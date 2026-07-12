import { noop } from "./noop.mjs";
import { each_object_values_generic_async } from "./each_object_values_generic_async.mjs";
export async function each_object_values_async(object, lambda$value$key) {
  let v = await each_object_values_generic_async(
    object,
    lambda$value$key,
    noop,
  );
  return v;
}
