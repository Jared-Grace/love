import { process_env_trim } from "../../../love/public/src/process_env_trim.mjs";
import { list_to_dictionary_value } from "../../../love/public/src/list_to_dictionary_value.mjs";
import { list_invoke } from "../../../love/public/src/list_invoke.mjs";
export function process_env_args_get(props) {
  let r = function lambda(property_name) {};
  return r;
  let mapped = list_invoke(props);
  let dictionary = list_to_dictionary_value(mapped, process_env_trim);
  return dictionary;
}
