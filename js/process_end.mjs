import { equal } from "./equal.mjs";
import { catch_null } from "./catch_null.mjs";
export function process_end(pid) {
  "Ends a running process, and says whether it was there to end.";
  "One that has already gone is not a failure and does not throw. The caller is working from a list read a moment ago, and a process ending on its own between the reading and the ending is the ordinary case, not a problem.";
  function ended() {
    process.kill(pid, "SIGKILL");
    return true;
  }
  let answer = catch_null(ended);
  let gone = equal(answer, true);
  return gone;
}
