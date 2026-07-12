import { text_size } from "./text_size.mjs";
import { text_take } from "./text_take.mjs";
import { not } from "./not.mjs";
import { subtract } from "./subtract.mjs";
export function text_trim_right(lambda$s, s) {
  let trimmed = s;
  while (true) {
    let any = lambda$s(trimmed);
    if (not(any)) {
      break;
    }
    let z = text_size(trimmed);
    trimmed = text_take(trimmed, subtract(z, 1));
  }
  return trimmed;
}
