import { property_get } from "./property_get.mjs";
import { function_worker_serve } from "./function_worker_serve.mjs";
export async function worker_child_start(worker) {
  let r3 = await import("child_process");
  let spawn = property_get(r3, "spawn");
  let started = spawn("node", ["scripts/r.mjs", function_worker_serve.name], {
    stdio: ["ignore", "inherit", "inherit", "pipe", "pipe"],
  });
  worker.child = started;
  started.unref();
  started.stdio[3].unref();
  started.stdio[4].unref();
  function lambda(chunk) {
    worker_results_read(worker, chunk);
  }
  started.stdio[4].on("data", lambda);
  function lambda2(code) {
    worker_exited(worker, code);
  }
  started.on("exit", lambda2);
  return started;
}
