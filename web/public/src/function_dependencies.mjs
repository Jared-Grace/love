import {function_parse} from './function_parse.mjs';
import {marker} from './marker.mjs';
export async function function_dependencies() {
  let parsed = await function_parse(f_name);
  let {ast} = parsed;
}
