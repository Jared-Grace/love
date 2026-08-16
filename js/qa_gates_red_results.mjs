import { arguments_assert } from "./arguments_assert.mjs";
import { qa_commit_named_red_report } from "./qa_commit_named_red_report.mjs";
import { qa_gates_named } from "./qa_gates_named.mjs";
import { qa_gate_result } from "./qa_gate_result.mjs";
import { list_map_unordered_async } from "./list_map_unordered_async.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { property_get } from "./property_get.mjs";
import { null_is } from "./null_is.mjs";
export async function qa_gates_red_results() {
  "Ask again exactly the gates that were red as of the last judged commit, one record each, without any of them stopping the rest.";
  "It takes nothing, and that is the whole point of it rather than a convenience. A gate name handed in on a command line is what makes the named runner impossible to hand a standing approval: one rule covers every argument a function is ever given, some gate on the list runs a shell, and so nothing can rule out an argument steering there. This one names its own set, so there is no argument to steer and the same check that refuses the named runner passes this. The prompt goes away because the argument became unnecessary, not because the check was loosened.";
  "It is also the question actually being asked. A red whole-repo run names the gates that failed and the next thing anybody does is ask those gates again - so the set was never a free choice, it was already written down, and typing it back out was the only reason a name had to travel.";
  "What comes back is about the folder as it stands right now, while the set of names is about a commit that may be well behind it. Both are carried back for that reason: a gate that has since been repaired answers green here and is right to, and a red list from several hundred commits ago is about code nobody is running. The reader needs the age to know which of those they are holding.";
  "Nothing red is an answer rather than an error, and it is the ordinary answer on a sound folder. A machine whose record has been cleared says the same thing, which is why the commit is handed back beside the count rather than left to be assumed.";
  arguments_assert(arguments, 0);
  let report = await qa_commit_named_red_report();
  let commit = property_get(report, "commit");
  let behind = property_get(report, "behind");
  let red = property_get(report, "red");
  let missing = null_is(red);
  if (missing) {
    let unjudged = {
      commit,
      behind,
      asked: [],
      results: [],
    };
    return unjudged;
  }
  let none = list_empty_is(red);
  if (none) {
    let clean = {
      commit,
      behind,
      asked: [],
      results: [],
    };
    return clean;
  }
  let gates = qa_gates_named(red);
  let results = await list_map_unordered_async(gates, qa_gate_result);
  let r = {
    commit,
    behind,
    asked: red,
    results,
  };
  return r;
}
