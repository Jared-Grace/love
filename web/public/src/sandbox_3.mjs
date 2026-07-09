import { properties_get } from "../../../love/public/src/properties_get.mjs";
import { data_identifiers_search } from "../../../love/public/src/data_identifiers_search.mjs";
export async function sandbox_3() {
  let result = await data_identifiers_search("id,name");
  let properties = properties_get(obj);
  return result;
}
