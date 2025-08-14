import { list_adder } from "./list_adder.mjs";
import { list_adder_async } from "./list_adder_async.mjs";
import { list_unique } from "./list_unique.mjs";
export async function list_adder_unique_async(lambda) {
  let items = await list_adder_async(lambda);
  return list_unique(items);
}
