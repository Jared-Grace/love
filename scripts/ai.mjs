import { function_run_from_process_argv_full_name } from '../js/function_run_from_process_argv_full_name.mjs';
import { log_console_json } from '../js/log_console_json.mjs';
Error.stackTraceLimit = Infinity;
(async () => {
  'ai run - the seam Claude runs functions through, as opposed to r.mjs for the human at the keyboard'
  'full function names only (no alias, no acronym), so a permission rule naming the function grants exactly that function'
  'result as JSON, so nothing is abbreviated away by console.log the way r.mjs and rl.mjs allow'
  let result = await function_run_from_process_argv_full_name()
  log_console_json(result)
})();
