import { object_adder_async } from "../../../love/public/src/object_adder_async.mjs";
import { each_object_unordered_async } from "../../../love/public/src/each_object_unordered_async.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function object_values_map_async(object, lambda$value) {
  marker("1");
  async function lambda(oad) {
    async function lambda2(value, key) {
      let mapped = await lambda$value(value);
      oad(key, mapped);
    }
    await each_object_unordered_async(object, lambda2);
  }
  let result = await object_adder_async(lambda);
}
