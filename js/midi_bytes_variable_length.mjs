import { multiply } from "./multiply.mjs";
import { modulo } from "./modulo.mjs";
import { greater_than_equal } from "./greater_than_equal.mjs";
export function midi_bytes_variable_length(bytes, offset) {
  "reads one midi variable length number starting at the given offset";
  "every byte carries seven bits of the number and its top bit says whether another byte follows";
  let value = 0;
  let at = offset;
  let more = true;
  while (more) {
    let byte_one = bytes[at];
    at = at + 1;
    value = multiply(value, 128) + modulo(byte_one, 128);
    more = greater_than_equal(byte_one, 128);
  }
  let r = {
    value,
    offset_next: at,
  };
  return r;
}
