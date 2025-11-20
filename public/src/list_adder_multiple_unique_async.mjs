import { list_adder_multiple_async } from "../../../love/public/src/list_adder_multiple_async.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function list_adder_multiple_unique_async(lambda$la) {
  marker("1");
  return await list_adder_multiple_async(lambda$la);
}
