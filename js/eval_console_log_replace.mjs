import { log } from "./log.mjs";
export function eval_console_log_replace(code, console_log_replacement) {
  let console_replacement = {
    log: console_log_replacement,
  };
  let r3 = new Function("console", code)(console_replacement);
  return r3;
}
