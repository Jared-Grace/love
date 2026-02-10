import { log } from "../../../love/public/src/log.mjs";
export function text_starts_with(t, prefix) {
  let sw = t.startsWith(prefix);
  return sw;
  log({
    t,
    prefix,
  });
}
