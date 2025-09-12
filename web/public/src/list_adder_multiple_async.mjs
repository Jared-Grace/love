import { list_adder_generic_async } from "./list_adder_generic_async.mjs";
import { marker } from "./marker.mjs";
import { list_add_multiple } from "./list_add_multiple.mjs";
export async function list_adder_multiple_async(lambda$la) {
  marker("1");
  let fn = list_add_multiple;
  let list = await list_adder_generic_async(lambda$la, fn);
  return list;
}
