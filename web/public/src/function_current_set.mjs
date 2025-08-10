import {data_transform} from './data_transform.mjs';
export async function function_current_set(f_name) {
  await data_transform("function_current", null, previous => f_name);
}
