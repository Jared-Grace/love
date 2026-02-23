import { process_env_trim } from "../../../love/public/src/process_env_trim.mjs";
export function process_env_args_get() {
  let r = function process_env_args_getter(property_fn) {
    let property_name = property_fn();
    let entry = process_env_trim(property_name);
  };
  return r;
}
