import { list_adder_async } from "../../../love/public/src/list_adder_async.mjs";
import { list_unique } from "../../../love/public/src/list_unique.mjs";
export async function list_adder_unique_async(lambda) {
  let items = await list_adder_async(lambda);
  let unique = list_unique(items);
  return unique;
}
