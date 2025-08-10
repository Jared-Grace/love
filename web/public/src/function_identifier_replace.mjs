import {function_transform} from './function_transform.mjs';
import {js_identifiers} from './js_identifiers.mjs';
import {marker} from './marker.mjs';
export async function function_identifier_replace() {
  marker();
  await function_transform(f_name, lambda);
  js_identifiers(ast);
}
