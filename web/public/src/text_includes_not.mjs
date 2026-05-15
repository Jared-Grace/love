import { log } from "../../../love/public/src/log.mjs";
import { not } from "../../../love/public/src/not.mjs";
import { text_includes } from "../../../love/public/src/text_includes.mjs";
export function text_includes_not(item, part) {
  log(text_includes_not.name, {
    part,
  });
  let v = text_includes(item, part);
  let n = not(v);
  return n;
}
