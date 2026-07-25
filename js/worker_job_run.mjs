import { property_get } from "./property_get.mjs";
import { worker_child_ensure } from "./worker_child_ensure.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export async function worker_job_run(worker, f_name, args) {
  let id = property_get(worker, "next_id");
  worker.next_id = id + 1;
  let answered = new Promise(function lambda(resolve, reject) {
    worker.waiting[id] = {
      resolve,
      reject,
    };
  });
  let child = await worker_child_ensure(worker);
  child.stdio[4].ref();
  let job = {
    id,
    f_name,
    args,
  };
  child.stdio[3].write(text_combine_multiple([JSON.stringify(job), "\n"]));
  let r = await answered;
  return r;
}
