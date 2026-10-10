import { list_adder } from "./list_adder.mjs";
import { eval_console_log_confined } from "./eval_console_log_confined.mjs";
export function eval_console_log_to_list(code) {
  function lambda3(la) {
    function console_log_replacement(...args) {
      let r = la(args);
      return r;
    }
    let r3 = eval_console_log_confined(code, console_log_replacement);
    return r3;
  }
  let logs = list_adder(lambda3);
  return logs;
}
