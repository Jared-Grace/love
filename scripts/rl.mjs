import { compile_cache_enable } from '../js/compile_cache_enable.mjs';
Error.stackTraceLimit = Infinity;
(async () => {
  'rl run log - regular log without "log header", compared to r.mjs'
  'the two imports below are asked for here rather than at the top on purpose, and moving them back up quietly undoes the line above them'
  'a static import is fetched and compiled before any of this file runs, so the keeping would be switched on after the several hundred files it was meant to save had already been compiled'
  'this is the seam the sermon loop polls, and that one line is 115,333 of the 147,080 commands the log holds, so it is where the keeping is worth most'
  compile_cache_enable()
  let { function_run_from_process_argv } = await import('../js/function_run_from_process_argv.mjs')
  let { log_console } = await import('../js/log_console.mjs')
  let result = await function_run_from_process_argv()
  log_console(result)
})();
