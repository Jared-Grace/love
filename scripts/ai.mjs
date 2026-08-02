import { compile_cache_enable } from '../js/compile_cache_enable.mjs';
Error.stackTraceLimit = Infinity;
(async () => {
  'ai run - the seam Claude runs functions through, as opposed to r.mjs for the human at the keyboard'
  'full function names only (no alias, no acronym), so a permission rule naming the function grants exactly that function'
  'result as JSON, so nothing is abbreviated away by console.log the way r.mjs and rl.mjs allow'
  'the two imports below are asked for here rather than at the top on purpose, and moving them back up quietly undoes the line above them'
  'a static import is fetched and compiled before any of this file runs, so the keeping would be switched on after the several hundred files it was meant to save had already been compiled'
  compile_cache_enable()
  let { function_run_from_process_argv_full_name } = await import('../js/function_run_from_process_argv_full_name.mjs')
  let { log_console_json } = await import('../js/log_console_json.mjs')
  let result = await function_run_from_process_argv_full_name()
  log_console_json(result)
})();
