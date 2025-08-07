import {function_name_to_path} from './function_name_to_path.mjs';
import {function_name_unalias} from './function_name_unalias.mjs';
import {function_name_to_base} from './function_name_to_base.mjs';
import {functions_path} from './functions_path.mjs';
import path from 'path';
export async function function_name_to_path_unalias(funcName) {
  funcName = await function_name_unalias(funcName);
  return function_name_to_path(funcName);
}
