import { data_identifiers_get } from "../../../love/public/src/data_identifiers_get.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function data_identifiers_get_run() {
  marker("1");
  let v = await data_identifiers_get();
  return v;
}
