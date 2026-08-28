import { divide_floor } from "./divide_floor.mjs";
import { fn_name } from "./fn_name.mjs";
import { modulo } from "./modulo.mjs";
import { divide } from "./divide.mjs";
import { greater_than } from "./greater_than.mjs";
import { floor } from "./floor.mjs";
export function midi_number_variable_length(value) {
  "writes one number the way midi writes a delta time as seven bits per byte with the top bit set on every byte but the last";
  ("this is the mirror of ",
    fn_name("midi_bytes_variable_length"),
    " which reads the same shape back");
  let remainder = modulo(value, 128);
  let parts = [remainder];
  let rest = divide_floor(value, 128);
  while (greater_than(rest, 0)) {
    parts.unshift(modulo(rest, 128) + 128);
    let p2 = divide(rest, 128);
    rest = floor(p2);
  }
  return parts;
}
