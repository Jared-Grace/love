
import { lock_generic_force_release } from '../public/src/lock_generic_force_release.mjs';
import { function_run_prompt } from '../public/src/function_run_prompt.mjs';
(async () => {
  const [, , lock_name] = process.argv;
  await lock_generic_force_release(lock_name || function_run_prompt.name)
})();
