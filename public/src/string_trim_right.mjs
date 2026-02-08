import { text_size } from "../../../love/public/src/text_size.mjs";
import { text_take } from "../../../love/public/src/text_take.mjs";
import { not } from "../../../love/public/src/not.mjs";
export function string_trim_right(lambda$s, s) {
  let trimmed = s;
  while (true) {
    let any = lambda$s(trimmed);
    if (not(any)) {
      break;
    }
    let z = text_size(trimmed);
    trimmed = text_take(trimmed, z - 1);
  }
  return trimmed;
}
