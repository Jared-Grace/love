import { list_adder } from "../../../love/public/src/list_adder.mjs";
import { eval_console_log_replace } from "../../../love/public/src/eval_console_log_replace.mjs";
export function eval_console_log_to_list(code) {
  function lambda(la) {
    function console_log_replacement(...args) {
      let r = la(args);
      return r;
    }
    let r3 = eval_console_log_replace(code, console_log_replacement);
    return r3;
  }
  let logs = list_adder(lambda);
  return logs;
}
