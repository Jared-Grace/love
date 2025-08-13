import {string_slice} from './string_slice.mjs';
import {string_size} from './string_size.mjs';
export function string_skip(s, skipped) {
  let b = string_size(s);
  const skipped = string_slice(s, skipped, b);
  return skipped;
}
