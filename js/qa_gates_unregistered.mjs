import { arguments_assert } from "./arguments_assert.mjs";
import { repo_love_functions_names } from "./repo_love_functions_names.mjs";
import { text_ends_with } from "./text_ends_with.mjs";
import { list_filter } from "./list_filter.mjs";
import { qa_gates } from "./qa_gates.mjs";
import { list_add } from "./list_add.mjs";
import { qa_gates_unregistered_known } from "./qa_gates_unregistered_known.mjs";
import { list_concat } from "./list_concat.mjs";
import { list_includes_not } from "./list_includes_not.mjs";
import { list_includes } from "./list_includes.mjs";
import { list_size } from "./list_size.mjs";
export async function qa_gates_unregistered() {
  arguments_assert(arguments, 0);
  ("Every gate this repo holds that the whole-repo run does not ask and that nothing has said it means not to ask - beside how many gates were found at all, and which of the deliberate absences no longer name anything.");
  ("A check that is never run answers clean forever, and it answers clean in exactly the words a check that runs and passes uses. That is the same silence a reading keyed on how something is spelled gives about everything spelled the other way, and it is worse here, because the whole point of a gate is to be the thing that speaks up.");
  ("So the gates are counted off the repo rather than off any list. Whether a name is in the run is a fact the code can answer; whether being out of the run was meant is a judgement, and the judgement lives in one place beside the reasons rather than being inferred from anything.");
  ("Which names to count is a rule about spelling, and that is worth admitting rather than hiding. Every gate here ends in the same two words, so ending in them is what is asked - and the cost of that rule is that a gate named some other way is invisible to this exactly as a fixed-target writer was invisible to the reading of rewrites. The rule is kept because it is also what the whole repo relies on to find a gate at all, so a gate named otherwise is already lost to more than this; what makes it bearable is that the naming is the one convention here that nothing may quietly opt out of.");
  ("How many were found comes back with what was found, because reaching no gates and finding nothing wrong say the identical word. The names are read off an index of the whole repo, so a change to how that index is built could leave this walking an empty set, and every gate in the repo would then be unwatched while the answer stayed exactly as it was on the day it was clean.");
  ("A deliberate absence that names nothing comes back too. A list keeping entries for gates that are gone stops being readable as a description of the code, and worse, an entry left behind after a rename goes on excusing a name nothing answers to while the renamed gate walks back in unlisted.");
  let f_names = await repo_love_functions_names();
  let suffix = "_gate_run";
  function gate_named_is(f_name) {
    let ends = text_ends_with(f_name, suffix);
    return ends;
  }
  let named = list_filter(f_names, gate_named_is);
  let gates = qa_gates();
  let asked = [];
  for (let gate of gates) {
    list_add(asked, gate.name);
  }
  let known = qa_gates_unregistered_known();
  let accounted = list_concat(asked, known);
  function accounted_not_is(f_name) {
    let n = list_includes_not(accounted, f_name);
    return n;
  }
  let unregistered = list_filter(named, accounted_not_is);
  function named_not_is(f_name) {
    let n2 = list_includes_not(named, f_name);
    return n2;
  }
  let stale = list_filter(known, named_not_is);
  function asked_is(f_name) {
    let both = list_includes(asked, f_name);
    return both;
  }
  ("A name said to be outside the run while the run asks for it is a contradiction rather than an oversight, so it is carried apart from the two lists above and can be said in its own sentence.");
  let contradicted = list_filter(known, asked_is);
  let walked = {
    named: list_size(named),
    asked: list_size(asked),
    unregistered,
    stale,
    contradicted,
  };
  return walked;
}
