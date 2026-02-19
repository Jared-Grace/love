import { property_exists_if_async } from "../../../love/public/src/property_exists_if_async.mjs";
import { data_identifiers_get } from "../../../love/public/src/data_identifiers_get.mjs";
export async function data_identifier_exists_if(f_name_before, on_exist) {
  let identifiers = await data_identifiers_get();
  await property_exists_if_async(identifiers, f_name_before, on_exist);
}
