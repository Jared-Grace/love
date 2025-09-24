import { string_size } from "./string_size.mjs";
import { string_take } from "./string_take.mjs";
import { marker } from "./marker.mjs";
import { not } from "./not.mjs";
export function string_trim_right(lambda$s, s) {
  marker("1");
  while (true) {
    let any = lambda$s(s);
    if (not(any)) {
      break;
    }
    let z = string_size(s);
    s = string_take(s, z - 1);
  }
  return s;
}
