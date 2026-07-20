import { list_empty_is_assert_json } from "./list_empty_is_assert_json.mjs";
import { daemons_unhealthy } from "./daemons_unhealthy.mjs";
export async function daemons_gate_run() {
  ("QA gate: every daemon the repo depends on is actually running");
  ("a daemon that quietly died stays invisible until someone wonders why the server is down, so the gate that already runs asks the question nobody remembers to ask");
  let unhealthy = await daemons_unhealthy();
  list_empty_is_assert_json(unhealthy, {
    hint: "these daemons are not running — run daemons_ensure to install and start them",
  });
}
