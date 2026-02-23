import { process_env_trim } from "../../../love/public/src/process_env_trim.mjs";
export function process_env_args_get() {
  let process_env_get = function process_env_args_getter(property_fn) {
    let property_name = property_fn();
    let value = process_env_trim(property_name);
    return value;
  };
  return process_env_get;
}
