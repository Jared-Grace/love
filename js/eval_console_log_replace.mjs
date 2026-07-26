export function eval_console_log_replace(code, console_log_replacement) {
  let console_replacement = {
    log: console_log_replacement,
  };
  let r = new Function("console", code)(console_replacement);
  return r;
}
