import { text_size } from "../../../love/public/src/text_size.mjs";
import { string_take } from "../../../love/public/src/string_take.mjs";
import { not } from "../../../love/public/src/not.mjs";
export function string_trim_right(lambda$s, s) {
  let trimmed = s;
  while (true) {
    let any = lambda$s(trimmed);
    if (not(any)) {
      break;
    }
    let z = text_size(trimmed);
    trimmed = string_take(trimmed, z - 1);
  }
  return trimmed;
}
