
import { function_run_git } from '../public/src/function_run_git.mjs';
(async () => {
  const [, , f_name, ...args] = process.argv;
  await function_run_git(f_name, args)
})();