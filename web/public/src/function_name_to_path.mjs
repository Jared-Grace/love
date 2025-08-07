import {function_name_to_base} from './function_name_to_base.mjs';
import {functions_path} from './functions_path.mjs';
import path from 'path';
export async function function_name_to_path(funcName) {
  let second = [functions_path(), function_name_to_base(funcName)];
  let joined = path.join(...second);
  return joined;
}
