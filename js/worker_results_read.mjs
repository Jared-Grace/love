import { worker_reply_take } from "./worker_reply_take.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
export function worker_results_read(worker, chunk) {
  worker.pending = text_combine_multiple([worker.pending, chunk.toString()]);
  let lines = worker.pending.split("\n");
  worker.pending = lines.pop();
  function lambda(line) {
    let blank = equal(line.trim(), "");
    if (not(blank)) {
      worker_reply_take(worker, line);
    }
  }
  lines.forEach(lambda);
}
