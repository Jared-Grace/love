import { list_unique } from "./list_unique.mjs";
import { list_adder_multiple_async } from "./list_adder_multiple_async.mjs";
export async function list_adder_multiple_unique_async(lambda$la) {
  let items = await list_adder_multiple_async(lambda$la);
  let unique = list_unique(items);
  return unique;
}
