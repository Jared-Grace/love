import { process_env_trim } from "../../../love/public/src/process_env_trim.mjs";
export function process_env_args_get(props) {
  let r = function lambda(property_fn) {
    let property_name = property_fn();
    let entry = process_env_trim(property_name);
  };
  return r;
}
