
import { lock_generic_force_release } from '../public/src/lock_generic_force_release.mjs';
import { function_run_prompt } from '../public/src/function_run_prompt.mjs';
(async () => {
  await lock_generic_force_release(function_run_prompt.name)
})();
