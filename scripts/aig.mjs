import { function_run_from_process_argv_full_name_commit } from '../js/function_run_from_process_argv_full_name_commit.mjs';
import { log_console_json } from '../js/log_console_json.mjs';
Error.stackTraceLimit = Infinity;
(async () => {
  'ai run and commit - the same seam as ai.mjs, except the work is committed under the name of the command that did it'
  'the folder is swept first, so anything edited by hand is filed under the bare word before the command runs and cannot end up filed under a command that never touched it'
  'full function names only (no alias, no acronym), so a permission rule naming the function grants exactly that function'
  'result as JSON, so nothing is abbreviated away by console.log the way r.mjs and rl.mjs allow'
  let result = await function_run_from_process_argv_full_name_commit()
  log_console_json(result)
})();
