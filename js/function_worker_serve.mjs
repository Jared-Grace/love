import { function_run } from "./function_run.mjs";
import { property_get } from "./property_get.mjs";
import { undefined_is } from "./undefined_is.mjs";
import { not } from "./not.mjs";
import { text_combine } from "./text_combine.mjs";
// Long-lived job server: one node boot serves many API calls, so the dev server
// stops paying a full node startup (measured ~1.3 CPU-seconds) per request.
// Jobs arrive as one JSON line per request on fd 3; results go back as one JSON
// line per request on fd 4. Dedicated fds rather than stdout because a called
// function's own console output would otherwise corrupt the protocol stream.
// Staleness is deliberately NOT this process's problem: a worker only ever
// serves the code it booted with, and function_worker_pool_run retires it as
// soon as a watched file changes. That is what keeps dev hot reload honest.
export async function function_worker_serve() {
  let fs = await import("fs");
  let jobs = fs.createReadStream(null, { fd: 3 });
  let results = fs.createWriteStream(null, { fd: 4 });
  let pending = "";
  async function job_run(line) {
    let job = JSON.parse(line);
    let id = property_get(job, "id");
    let reply;
    try {
      let f_name = property_get(job, "f_name");
      let args = property_get(job, "args");
      let result = await function_run(f_name, args);
      let u = undefined_is(result);
      if (u) {
        result = null;
      }
      reply = { id, result, failed: null };
    } catch (caught) {
      // A worker outlives any single job, so one thrown function must not take
      // the process down with it — report the failure, stay up for the next call.
      reply = { id, result: null, failed: error_text(caught) };
    }
    results.write(text_combine(JSON.stringify(reply), "\n"));
  }
  function lambda(chunk) {
    pending = text_combine(pending, chunk.toString());
    let lines = pending.split("\n");
    // A chunk boundary can land mid-line, so the trailing fragment waits for more.
    pending = lines.pop();
    lines.forEach(function line_run(line) {
      let blank = line.trim() === "";
      if (not(blank)) {
        job_run(line);
      }
    });
  }
  jobs.on("data", lambda);
  let closed = new Promise(function lambda2(resolve) {
    function lambda3() {
      resolve(null);
    }
    jobs.on("end", lambda3);
  });
  return await closed;
  function error_text(caught) {
    let stacked = caught && caught.stack;
    if (stacked) {
      return caught.stack;
    }
    return String(caught);
  }
}
