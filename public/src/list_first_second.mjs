import { list_first_second_generic } from "../../../love/public/src/list_first_second_generic.mjs";
import { list_second } from "../../../love/public/src/list_second.mjs";
export function list_first_second(list) {
  const property_name = "second";
  let value_get = list_second;
  let result = list_first_second_generic(list, value_get, property_name);
  return result;
}
