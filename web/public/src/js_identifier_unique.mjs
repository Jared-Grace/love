import {list_add} from './list_add.mjs';
import {list_includes} from './list_includes.mjs';
export function js_identifier_unique(existing, name) {
  let result = null;
  let attempt = 1;
  do {
    const suffix = attempt === 1 ? "" : attempt;
    result = name + suffix;
    attempt++;
  } while (list_includes(existing, result));
  list_add(existing, result);
  return result;
}
