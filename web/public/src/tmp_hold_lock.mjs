import { lock_wait } from "../../../love/public/src/lock_wait.mjs";
import { function_run_prompt } from "../../../love/public/src/function_run_prompt.mjs";
import { sleep } from "../../../love/public/src/sleep.mjs";

async function lambda() {
  console.log("lock held");
  await sleep(6000);
  console.log("releasing");
}
await lock_wait(function_run_prompt.name, lambda);
