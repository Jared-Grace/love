import { string_size } from "../../../love/public/src/string_size.mjs";
import { string_take } from "../../../love/public/src/string_take.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
import { not } from "../../../love/public/src/not.mjs";
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
