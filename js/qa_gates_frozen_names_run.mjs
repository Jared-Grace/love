import { arguments_assert } from "./arguments_assert.mjs";
import { list_is_assert } from "./list_is_assert.mjs";
import { qa_gate_frozen_ensure } from "./qa_gate_frozen_ensure.mjs";
import { property_get } from "./property_get.mjs";
import { qa_gate_frozen_folder_run } from "./qa_gate_frozen_folder_run.mjs";
import { catch_message_async } from "./catch_message_async.mjs";
import { list_add } from "./list_add.mjs";
import { not } from "./not.mjs";
import { list_size } from "./list_size.mjs";
export async function qa_gates_frozen_names_run(gate_names) {
  "$plain gate_names";
  "A named set of gates run one after another inside the frozen copy the whole judging stands in, answering with the ones that complained and what they said.";
  "IT IS THE SINGLE GATE RUNNER ASKED MANY TIMES, and asking it many times by hand is what this replaces. It is for a chosen few gates - the ones a piece of work happened to touch - because the whole judging asks about all four hundred of them and takes between six and nineteen minutes doing it.";
  "IT IS NOT A SMALLER JUDGING AND MUST NOT BE GROWN INTO ONE. The judging already asks every gate of this same frozen copy, already divides them across the processors, already names every single one that complained in the one sentence it throws rather than stopping at the first, and files what it found under the commit so that the next person asking about that commit pays nothing. Asked the whole set, this would ask them one at a time, each in a program of its own, and would spend far longer arriving at what the judging already knows.";
  "ONE GATE COMPLAINING IS AN ORDINARY FACT ABOUT THAT GATE AND NOT THE END OF THE RUN, so each is caught and its reason carried back out. Letting the first refusal travel would answer with one name and hide the rest, which for a set asked on purpose is the whole of what was wanted.";
  "IT IS SLOW ON PURPOSE AND SEQUENTIAL. Every gate is a whole node started up in the copy, because that is the only way to watch a gate reach for something that is not there rather than to reason about whether it would.";
  "THE COPY IS PUT ONCE AND EVERY GATE IN THE SET IS ASKED OF THAT ONE COPY. Putting the copy reads afresh which commit this folder is at, so a set that put one copy per gate would be a set of answers about several different commits - and with ten of us committing into the one folder that is what happens rather than a corner case. The commit is carried back out beside the answer, so the answer says which state of the code it is about.";
  "THE SET IS A LIST AND NOT A LINE OF TEXT, which is asserted rather than assumed. A run of words joined by commas is one string, and a string walked one at a time hands back its letters - so asking for two gates from the command line quietly ran seventy-five one-letter names and answered about none of them. A letter is a name nothing answers to, so every one of them complained, and a wall of complaints reads exactly like a wall of findings.";
  arguments_assert(arguments, 1);
  list_is_assert(gate_names);
  let frozen = await qa_gate_frozen_ensure();
  let folder = property_get(frozen, "folder");
  let commit = property_get(frozen, "commit");
  let ran = [];
  let complained = [];
  for (let gate_name of gate_names) {
    async function lambda() {
      let said = await qa_gate_frozen_folder_run(folder, gate_name);
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
    commit,
    folder,
    ran: list_size(ran),
    complained,
  };
  return r;
}
