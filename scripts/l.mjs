
import { lock_force_release } from '../js/lock_force_release.mjs';
import { function_run_prompt } from '../js/function_run_prompt.mjs';
(async () => {
  await lock_force_release(function_run_prompt.name)
})();
