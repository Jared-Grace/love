import { string_skip } from "../../../love/public/src/string_skip.mjs";
import { not } from "../../../love/public/src/not.mjs";
export function string_skip_while(lambda$s, s) {
  while (true) {
    let any = lambda$s(s);
    if (not(any)) {
      break;
    }
    s = string_skip(s, 1);
  }
  return s;
}
