import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { daemons_ensure } from "./daemons_ensure.mjs";
import { assert_json } from "./assert_json.mjs";
import { linger_is } from "./linger_is.mjs";
import { list_empty_is_assert_json } from "./list_empty_is_assert_json.mjs";
import { daemons_unhealthy } from "./daemons_unhealthy.mjs";
export async function daemons_gate_run() {
  "QA gate: every daemon the repo depends on is running, will come back on its own, and is allowed to outlive the session that started it";
  "a daemon that quietly died stays invisible until someone wonders why the server is down, so the gate that already runs asks the question nobody remembers to ask";
  let linger = await linger_is();
  assert_json(linger, {
    hint: text_combine_multiple([
      "services are set to stop when you log out — run ",
      daemons_ensure.name,
      " to turn linger back on",
    ]),
  });
  let unhealthy = await daemons_unhealthy();
  list_empty_is_assert_json(unhealthy, {
    hint: text_combine_multiple([
      "these daemons are not running — run ",
      daemons_ensure.name,
      " to install and start them",
    ]),
  });
  ("Says that both questions were asked, because a gate that answers nothing");
  ("cannot be told apart from one that did nothing. That matters most here: this");
  ("gate exists precisely because a thing which quietly stopped looks exactly");
  ("like a thing which is fine, and a silent pass reproduces that same doubt one");
  ("level up.");
  let r = {
    linger: true,
    unhealthy: 0,
  };
  return r;
}
