import {each} from './each.mjs';
import {function_transform} from './function_transform.mjs';
import {js_identifiers} from './js_identifiers.mjs';
import {marker} from './marker.mjs';
export async function function_identifier_replace() {
  await function_transform(f_name, ast => {
    let identifiers = js_identifiers(ast);
    marker();
    each(identifiers, lambda);
  });
}
