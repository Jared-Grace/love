import { list_adder } from "./list_adder.mjs";
import { eval_console_log_replace } from "./eval_console_log_replace.mjs";
export function eval_console_log_to_list(code) {
  function lambda3(la) {
    function console_log_replacement(...args) {
      let r2 = la(args);
      return r2;
    }
    let r3 = eval_console_log_replace(code, console_log_replacement);
    return r3;
  }
  let logs = list_adder(lambda3);
  return logs;
}
