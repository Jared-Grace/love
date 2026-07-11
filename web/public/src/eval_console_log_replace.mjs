import { log } from "../../../love/public/src/log.mjs";
export function eval_console_log_replace(code, console_log_replacement) {
  const console_replacement = {
    log: console_log_replacement,
  };
  let r = new Function("console", code)(console_replacement);
  return r;
}
