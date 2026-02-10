import { property_set } from "../../../love/public/src/property_set.mjs";
export function list_to_dictionary_generic_async(lambda$item) {
  let dictionary = {};
  let lambda = async function lambda2(item) {
    let value = await lambda$item(item);
    property_set(dictionary, item, value);
  };
  let v = {
    lambda,
    dictionary,
  };
  return v;
}
