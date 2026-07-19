import { function_run_from_process_argv } from '../js/function_run_from_process_argv.mjs';
import { log_console } from '../js/log_console.mjs';
Error.stackTraceLimit = Infinity;
(async () => {
  'rl run log - regular log without "log header", compared to r.mjs'
 let result=await function_run_from_process_argv()
  log_console(result)
})();