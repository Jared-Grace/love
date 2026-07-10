import { log } from "../../../love/public/src/log.mjs";
export function eval_console_log_replace(console_log_replacement, code) {
  const console_replacement = {
    log: console_log_replacement,
  };
  let r3 = new Function("console", code)(console_replacement);
  return r3;
}
