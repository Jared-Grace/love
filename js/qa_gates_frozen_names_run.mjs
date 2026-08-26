import { arguments_assert } from "./arguments_assert.mjs";
import { catch_message_async } from "./catch_message_async.mjs";
import { qa_gate_frozen_named_run } from "./qa_gate_frozen_named_run.mjs";
import { list_add } from "./list_add.mjs";
import { not } from "./not.mjs";
import { list_size } from "./list_size.mjs";
export async function qa_gates_frozen_names_run(gate_names) {
  "$plain gate_names";
  "A named set of gates run one after another inside the frozen copy the whole judging stands in, answering with the ones that complained and what they said.";
  "IT IS THE SINGLE GATE RUNNER ASKED MANY TIMES, and asking it many times by hand is what this replaces. A gate that passes in the working folder and throws in the frozen copy holds every app out of every deployment, and the way that was being found was by spending a quarter of an hour judging a commit in order to be told the name of one offender - one name per quarter hour, with the next one still hidden behind it.";
  "ONE GATE COMPLAINING IS AN ORDINARY FACT ABOUT THAT GATE AND NOT THE END OF THE RUN, so each is caught and its reason carried back out. Letting the first refusal travel would answer with one name and hide the rest, which is the exact failing this was built to end.";
  "IT IS SLOW ON PURPOSE AND SEQUENTIAL. Every gate is a whole node started up in the copy, because that is the only way to watch a gate reach for something that is not there rather than to reason about whether it would.";
  arguments_assert(arguments, 1);
  let ran = [];
  let complained = [];
  for (let gate_name of gate_names) {
    async function lambda() {
      let said = await qa_gate_frozen_named_run(gate_name);
      return said;
    }
    let outcome = await catch_message_async(lambda);
    list_add(ran, gate_name);
    let refused = not(outcome.ok);
    if (refused) {
      list_add(complained, {
        gate_name,
        message: outcome.message,
      });
    }
  }
  let r = {
    ran: list_size(ran),
    complained,
  };
  return r;
}
