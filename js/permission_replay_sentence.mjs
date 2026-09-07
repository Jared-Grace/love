import { permission_replay_reading } from "./permission_replay_reading.mjs";
import { property_get } from "./property_get.mjs";
import { not } from "./not.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { list_join_comma_space } from "./list_join_comma_space.mjs";
import { fn_name } from "./fn_name.mjs";
export async function permission_replay_sentence() {
  "The daily prompt reading in one line, for a thing that speaks at the start of a session rather than a reader who came asking.";
  "One line, because it is said to somebody who did not ask for it. A reading nobody wanted is an interruption at whatever length it arrives, and the number and the names are the whole of what a person would act on - the ranking underneath is there when they want it.";
  "It says the granting command. A line that reports a chance and leaves the reader to work out how to take it has spent their attention and handed back nothing, and the command is the only part of this they cannot write from memory.";
  "★ THE COMMAND CARRIES NO NAMES, BECAUSE A HANDED LINE THAT IS LONG ARRIVES BROKEN. It once spelled every grantable name into its own arguments, which made the one part meant to be pasted the longest thing in the sentence - long enough that pasting it can land a real newline in the middle and run half a command. The names are still said, in the sentence, which is where a human reads them; the command asks the same record for them again.";
  "Nothing here writes a rule and this line is not a request for one. It is a sentence; the human reads it and decides, which is the same hand-on-a-key the daemon leaves the granting to.";
  let r = await permission_replay_reading();
  let written = property_get(r, "written");
  ("a machine the daemon has not written on yet says nothing at all, because the start of a session is the worst moment to explain a piece of tooling nobody asked about");
  let missing = not(written);
  if (missing) {
    let r2 = "";
    return r2;
  }
  let live = property_get(r, "proved_live");
  let days = property_get(r, "days");
  let counted = `${live} prompts in the last ${days} days are still live`;
  let grantable = property_get(r, "grantable");
  let none = list_empty_is(grantable);
  if (none) {
    let r3 = `${counted}, and no rule reaches any of them today.`;
    return r3;
  }
  let named = list_join_comma_space(grantable);
  let f_name = fn_name("permission_grant_add_grantable");
  let command = `node scripts/ai.mjs ${f_name}`;
  ("the line is spoken into a session rather than to the human, so it says who to pass it to. A finding that reaches a reader who is not the one who decides has travelled the whole way and stopped one step short.");
  let relayed =
    "Say this line to the human in your first reply, because the grant is theirs to approve.";
  let r4 = `${counted}. These can safely stop asking: ${named}. To grant them: ${command} - ${relayed}`;
  return r4;
}
