import { arguments_assert } from "./arguments_assert.mjs";
import { text_starts_with } from "./text_starts_with.mjs";
import { qa_gates } from "./qa_gates.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_empty_not_is_assert } from "./list_empty_not_is_assert.mjs";
import { list_map } from "./list_map.mjs";
import { qa_gates_run } from "./qa_gates_run.mjs";
export async function qa_gates_prefix_run(prefix) {
  arguments_assert(arguments, 1);
  ("$plain prefix");
  ("Asks every gate of the repo-wide list whose name begins with a word, and says which ones it asked.");
  ("★ IT EXISTS BECAUSE CHANGING ONE AREA AND THEN CHECKING IT COST ONE COMMAND PER GATE. Fourteen gates have names beginning giveaway_, and asking them one after another is fourteen commands whose only common thought is the word the caller already had in mind. The whole suite is the other way to get there and it takes about a quarter of an hour, most of it spent on gates no edit went anywhere near - and it comes back red for whatever a peer is in the middle of, which is a worse answer than no answer because somebody has to read it before they learn it was not theirs.");
  ("★ THE GATES COME FROM THE ONE REPO-WIDE LIST AND NOT FROM THE NAMES OF THE FUNCTIONS ON THE DISK, SO A GATE DELIBERATELY LEFT OUT OF THE SUITE STAYS LEFT OUT HERE TOO. Finding them by name instead would have been easy and would have quietly answered a different question - whether every gate that exists is wired into the suite - which already has a gate of its own asking it. Two answers to one question drift, and this is the one that would have drifted silently, because a gate found by its name and run here looks exactly like a gate the suite knows about.");
  ("★ THE NAMES ASKED COME BACK, BECAUSE A PREFIX IS A GUESS ABOUT WHAT THINGS ARE CALLED AND NOT A SET. Fourteen gates matching a word is a different answer from two, and a reader handed nothing but green cannot tell which of those they got. An empty choice is refused rather than returned green for the same reason and harder: a prefix that matches nothing is a word somebody typed meaning something, and a run of no gates is the most convincing green there is.");
  ("The word is matched against the start of a name rather than anywhere inside it, because the repo's names are built prefix first and a prefix is how an area is spelled here. A word matched anywhere would pull in a gate from another area that happens to mention this one, which is a relation worth knowing about and not what somebody checking their own edit asked for.");
  function gate_chosen_is(gate) {
    let chosen_is = text_starts_with(gate.name, prefix);
    return chosen_is;
  }
  function gate_name(gate) {
    let name = gate.name;
    return name;
  }
  let gates = qa_gates();
  let chosen = list_filter(gates, gate_chosen_is);
  list_empty_not_is_assert(chosen);
  let asked = list_map(chosen, gate_name);
  let told = await qa_gates_run(chosen);
  let r = {
    prefix: prefix,
    asked: asked,
    told: told,
  };
  return r;
}
