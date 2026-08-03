import { fn_name } from "./fn_name.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { list_empty_is_assert_json } from "./list_empty_is_assert_json.mjs";
import { processes_sleep_loop_stopped } from "./processes_sleep_loop_stopped.mjs";
export async function processes_sleep_loop_stopped_gate_run() {
  "QA gate: no session on this machine is sitting in a loop that waits by sleeping and can never finish.";
  "This one is about the machine and not about the commit standing in front of it, the same as the runaway gate beside it, and for the same reason: seeing a gate fail sends you to read your own work first, and there is nothing there to find.";
  "It is asked here because the failure is invisible from every side. A loop that sleeps uses no processor, so it is not stuck work and no net built for stuck work can see it. It prints nothing, so nothing looks wrong. And the session behind it is simply waiting for the command to return, so it cannot notice either - which is why twelve of them were found alive at once on 2026-08-03, every one between eighteen and twenty-three hours old, together about two hundred and fifty session-hours that nobody had missed.";
  "Ending one is deliberately left to a person. A shell belongs to a session that is still there behind it, and whether that session's waiting is over is a judgment about their work rather than about this machine.";
  let stopped = await processes_sleep_loop_stopped();
  let f_name = fn_name("processes_sleep_loop_waiting");
  let f_name2 = fn_name("process_end");
  list_empty_is_assert_json(stopped, {
    hint: text_combine_multiple([
      "these are loops waiting by sleeping for something that looks as though it is not coming, and each one is a session that has stopped rather than anything the change in front of you did. ",
      f_name,
      " shows every waiter with how long it has been at it, and ",
      f_name2,
      " ends one by number once you are satisfied its waiting is over. Please do not write another one - a command run in the background says when it has finished on its own, which is the whole of what a waiting loop was for",
    ]),
  });
  ("Says that the question was asked. A gate that answers nothing cannot be told apart from one that did nothing, and a machine full of stopped sessions looks exactly like a machine that is fine.");
  let r = {
    stopped: 0,
  };
  return r;
}
