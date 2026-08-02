import { compile_cache_enable } from '../js/compile_cache_enable.mjs';
Error.stackTraceLimit = Infinity;
(async () => {
  'r run - the seam the human types at, as opposed to ai.mjs for Claude'
  'the two imports below are asked for here rather than at the top on purpose, and moving them back up quietly undoes the line above them'
  'a static import is fetched and compiled before any of this file runs, so the keeping would be switched on after the several hundred files it was meant to save had already been compiled'
  compile_cache_enable()
  let { function_run_from_process_argv } = await import('../js/function_run_from_process_argv.mjs')
  let { log_keep } = await import('../js/log_keep.mjs')
  let result = await function_run_from_process_argv()
  log_keep('r.mjs result:', result)
})();
