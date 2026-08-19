import { worker_results_read } from "./worker_results_read.mjs";
import { function_worker_exited } from "./function_worker_exited.mjs";
import { property_get } from "./property_get.mjs";
import { fn_name } from "./fn_name.mjs";
export async function function_worker_child_start(worker) {
  let r3 = await import("child_process");
  let spawn = property_get(r3, "spawn");
  ("fd 3 = jobs in, fd 4 = results out. stdout/stderr stay inherited so a called");
  ("function's own logging reaches the journal without corrupting the protocol.");
  let started = spawn(
    "node",
    ["scripts/r.mjs", fn_name("function_worker_serve")],
    {
      stdio: ["ignore", "inherit", "inherit", "pipe", "pipe"],
    },
  );
  worker.child = started;
  ("Start unref'd and ref only while a job is in flight (see worker_job_run).");
  ("Otherwise idle worker pipes hold the event loop open forever, and a one-shot");
  ("CLI run of a pooled function would never exit. The server is unaffected — it");
  ("keeps its own HTTP listener ref'd.");
  started.unref();
  started.stdio[3].unref();
  started.stdio[4].unref();
  function lambda(chunk) {
    worker_results_read(worker, chunk);
  }
  started.stdio[4].on("data", lambda);
  function lambda2(code) {
    function_worker_exited(worker, code);
  }
  started.on("exit", lambda2);
  return started;
}
