import {file_open} from './file_open.mjs';
import {function_name_to_path} from './function_name_to_path.mjs';
export function function_open(f_name) {
  const f_path = function_name_to_path(f_name);
  file_open(f_path);
}
