import { property_get } from "./property_get.mjs";
import { worker_child_ensure } from "./worker_child_ensure.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { json_to } from "./json_to.mjs";
export async function worker_job_run(worker, f_name, args) {
  let id = property_get(worker, "next_id");
  worker.next_id = id + 1;
  ("Register BEFORE awaiting the spawn. A retiring pool decides a worker is");
  ("drained by seeing an empty waiting map, so a job registered only after the");
  ("await lets its own worker be closed out from under it — and the caller then");
  ("waits forever for a reply that can never come.");
  let answered = new Promise(function lambda(resolve, reject) {
    worker.waiting[id] = {
      resolve,
      reject,
    };
  });
  let child = await worker_child_ensure(worker);
  ("A reply is now genuinely pending, so the loop must stay alive to receive it.");
  child.stdio[4].ref();
  let job = {
    id,
    f_name,
    args,
  };
  child.stdio[3].write(text_combine_multiple([json_to(job), "\n"]));
  let r = await answered;
  return r;
}
