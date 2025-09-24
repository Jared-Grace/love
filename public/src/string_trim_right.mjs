import { marker } from "./marker.mjs";
import { string_skip } from "./string_skip.mjs";
import { not } from "./not.mjs";
export function string_trim_right(lambda$s, s) {
  marker("1");
  while (true) {
    let any = lambda$s(s);
    if (not(any)) {
      break;
    }
    s = string_skip(s, 1);
  }
  return s;
}
