
import { function_run_git } from './public/src/function_run_git.mjs';
(async () => {
  const [, , funcName, ...args] = process.argv;
  await function_run_git(funcName, args)
})();