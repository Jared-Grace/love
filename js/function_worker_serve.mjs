import { fn_name } from "./fn_name.mjs";
import { equal } from "./equal.mjs";
import { json_from } from "./json_from.mjs";
import { json_to } from "./json_to.mjs";
import { function_run } from "./function_run.mjs";
import { property_get } from "./property_get.mjs";
import { undefined_is } from "./undefined_is.mjs";
import { not } from "./not.mjs";
import { text_combine } from "./text_combine.mjs";
("Long-lived job server: one node boot serves many API calls, so the dev server");
("stops paying a full node startup (measured ~1.3 CPU-seconds) per request.");
("Jobs arrive as one JSON line per request on fd 3; results go back as one JSON");
("line per request on fd 4. Dedicated fds rather than stdout because a called");
("function's own console output would otherwise corrupt the protocol stream.");
("Staleness is deliberately NOT this process's problem: a worker only ever");
("serves the code it booted with, and ",
  fn_name("function_worker_pool_run"),
  " retires it as");
("soon as a watched file changes. That is what keeps dev hot reload honest.");
export async function function_worker_serve() {
  let fs = await import("fs");
  let jobs = fs.createReadStream(null, {
    fd: 3,
  });
  let results = fs.createWriteStream(null, {
    fd: 4,
  });
  let pending = "";
  async function job_run(line) {
    let job = json_from(line);
    let id = property_get(job, "id");
    let reply = null;
    try {
      let f_name = property_get(job, "f_name");
      let args = property_get(job, "args");
      let result = await function_run(f_name, args);
      let u = undefined_is(result);
      if (u) {
        result = null;
      }
      reply = {
        id,
        result,
        failed: null,
      };
    } catch (caught) {
      ("A worker outlives any single job, so one thrown function must not take");
      ("the process down with it — report the failure, stay up for the next call.");
      reply = {
        id,
        result: null,
        failed: error_text(caught),
      };
    }
    let left = json_to(reply);
    let combined = text_combine(left, "\n");
    results.write(combined);
  }
  function lambda(chunk) {
    let right = chunk.toString();
    pending = text_combine(pending, right);
    let lines = pending.split("\n");
    ("A chunk boundary can land mid-line, so the trailing fragment waits for more.");
    pending = lines.pop();
    function line_run(line) {
      let left2 = line.trim();
      let blank = equal(left2, "");
      if (not(blank)) {
        job_run(line);
      }
    }
    lines.forEach(line_run);
  }
  jobs.on("data", lambda);
  let closed = new Promise(function lambda2(resolve) {
    function lambda3() {
      resolve(null);
    }
    jobs.on("end", lambda3);
  });
  let r = await closed;
  return r;
  function error_text(caught) {
    let stacked = caught && caught.stack;
    if (stacked) {
      let r2 = caught.stack;
      return r2;
    }
    let r3 = String(caught);
    return r3;
  }
}
