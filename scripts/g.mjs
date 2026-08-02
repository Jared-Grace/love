import { compile_cache_enable } from '../js/compile_cache_enable.mjs';
(async () => {
  'the import below is asked for here rather than at the top on purpose, and moving it back up quietly undoes the line above it'
  'a static import is fetched and compiled before any of this file runs, so the keeping would be switched on after the several hundred files it was meant to save had already been compiled'
  compile_cache_enable()
  let { function_run_git } = await import('../js/function_run_git.mjs')
  const [, , f_name, ...args] = process.argv;
  await function_run_git(f_name, args)
})();
