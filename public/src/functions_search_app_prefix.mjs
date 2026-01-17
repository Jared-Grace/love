import { functions_search } from "../../../love/public/src/functions_search.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function functions_search_app_prefix(search) {
  marker("1");
  let v = await functions_search(search);
  return v;
}
