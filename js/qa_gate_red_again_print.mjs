import { arguments_assert } from "./arguments_assert.mjs";
import { fn_name } from "./fn_name.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
export function qa_gate_red_again_print(failed) {
  "$plain failed";
  "The line that tells a red run's reader how to ask the same gates again without naming one of them.";
  "It is printed because a command nobody knows about buys nothing. The gates that failed are written down under the commit as this run ends, so asking them again needs no list from the reader - but the only way to find that out was to go looking through the names for a command whose whole point is that it saves you from looking.";
  "It says the command rather than the names on purpose. Handing a name back to be typed in is what makes the named runner impossible to approve once and for all: a gate name on a command line could steer at a shell, so every re-ask costs the human an approval at the exact moment they are trying to fix something. The command that finds its own set has no name to hand over and so needs approving only once.";
  "Nothing is said when no gate was named. A run that came back unhappy without naming one has nothing written down to ask again, and pointing at a command that would find an empty list reads as an answer where there is none.";
  arguments_assert(arguments, 1);
  let none = list_empty_is(failed);
  if (none) {
    return false;
  }
  let f_name = fn_name("qa_gates_red_results");
  let line = text_combine_multiple([
    "\nTO ASK THESE AGAIN  node scripts/ai.mjs ",
    f_name,
    "\n  It reads the gates just written down against this commit, so nothing has to be named. What it answers is about the folder as it stands now, which is how a gate a neighbour has since put right comes back green.",
  ]);
  console.log(line);
  return true;
}
