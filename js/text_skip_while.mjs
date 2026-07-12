import { text_skip } from "./text_skip.mjs";
import { not } from "./not.mjs";
export function text_skip_while(lambda$s, s) {
  while (true) {
    let any = lambda$s(s);
    if (not(any)) {
      break;
    }
    s = text_skip(s, 1);
  }
  return s;
}
