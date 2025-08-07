import {function_format} from './function_format.mjs';
import {functions_names} from './functions_names.mjs';
import {list_map} from './list_map.mjs';
export async function functions_format() {
  list_map(await functions_names(), function_format);
}
