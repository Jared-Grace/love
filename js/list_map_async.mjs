import { list_adder_async } from "./list_adder_async.mjs";
import { each_async } from "./each_async.mjs";
import { list_is_assert_json } from "./list_is_assert_json.mjs";
export async function list_map_async(list, lambda$item) {
  list_is_assert_json(list, {
    hint: "list_map_async expects a list to map over",
  });
  async function list_adder_lambda(la) {
    async function list_map_async_each(item) {
      let m = await lambda$item(item);
      la(m);
    }
    await each_async(list, list_map_async_each);
  }
  let mapped = await list_adder_async(list_adder_lambda);
  return mapped;
}
