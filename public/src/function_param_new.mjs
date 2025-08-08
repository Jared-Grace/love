import {function_transform} from './function_transform.mjs';
import {marker} from './marker.mjs';
export function function_param_new(f_name) {
  marker();
  function_transform(f_name, lambda);
}
