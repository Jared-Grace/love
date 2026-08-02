import { fn_name } from "./fn_name.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { list_empty_is_assert_json } from "./list_empty_is_assert_json.mjs";
import { processes_runaway } from "./processes_runaway.mjs";
export async function processes_runaway_gate_run() {
  "QA gate: nothing this repo started is stuck - alive for hours and using a processor for nearly all of them.";
  "This one is about the machine, not about the commit standing in front of it. A red answer here is almost never caused by whatever was just changed, and the message says so, because the first instinct on seeing a gate fail is to look at your own work and there is nothing there to find.";
  "It is here rather than in a note because the failure it catches is invisible by construction. One of these ran for four days at seven tenths of a processor, tripling how long every command took for everybody on the machine, and it was found by somebody wondering out loud why things felt slow. Nothing was broken; nothing failed; the only symptom was that everything was worse. A checklist that a person has to remember to run does not catch that a second time, and this list is asked on every gate run at the cost of one read of what is running.";
  "Ending one is deliberately left to a person. The work being done may be worth waiting for, and that judgment is not the gate's to make.";
  let stuck = await processes_runaway();
  let f_name = fn_name("processes_dispatcher_report");
  let f_name2 = fn_name("process_end");
  list_empty_is_assert_json(stuck, {
    hint: text_combine_multiple([
      "these processes have been alive for hours and using a processor for most of them, which means stuck rather than busy — this is the state of the machine and almost certainly not caused by the change in front of you. ",
      f_name,
      " shows everything this repo has running, and ",
      f_name2,
      " ends one by number once you are satisfied its work is not worth waiting for",
    ]),
  });
  ("Says that the question was asked. A gate that answers nothing cannot be told apart from one that did nothing, and this gate exists exactly because a machine quietly grinding looks the same as a machine that is fine.");
  let r = {
    stuck: 0,
  };
  return r;
}
