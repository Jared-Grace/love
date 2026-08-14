import { list_add_multiple } from "./list_add_multiple.mjs";
import { fn_name } from "./fn_name.mjs";
import { g_opener_explanations } from "./g_opener_explanations.mjs";
import { property_get } from "./property_get.mjs";
import { list_join_space } from "./list_join_space.mjs";
export function g_openers_lines(opener_names) {
  "The prompt block for a set of openers - each one its name on a line, then indented under it what the player says with it and what kind of thing the person says back.";
  "ONE LINE PER OPENER rather than a comma-joined run. Comma-joined, `how are you, what do you believe, the gospel` reads as three items of one kind, and the third is not one - it is an act where the others are questions. A line each also leaves somewhere for the sentence and the shape of the reply to go, which is the whole reason this exists.";
  "THE NAME GETS A LINE TO ITSELF, and what it means is indented under it. The written arc marks every turn with that name, so it is copied verbatim into the answer - and it used to be defined as whatever stood before a colon, in a line that also carried two sentences of prose. That made a punctuation mark load-bearing for the one field a turn is filed under. Standing alone on its own line, the name is the line, which is a rule that cannot be misread.";
  ("An opener with no explanation THROWS here, by way of ",
    fn_name("property_get"),
    ", rather than rendering a bare word. A door added to a list and not explained would otherwise reach the prompt as a name with nothing behind it, and a prompt cannot fail - so the only place it could ever show up is in the arcs, already wrong.");
  let explanations = g_opener_explanations();
  let lines = [];
  for (let name of opener_names) {
    let explanation = property_get(explanations, name);
    let said = property_get(explanation, "said");
    let draws = property_get(explanation, "draws");
    let named = list_join_space(["  -", name]);
    let said_line = list_join_space(["    -", said]);
    let draws_line = list_join_space(["    -", draws]);
    list_add_multiple(lines, [named, said_line, draws_line]);
  }
  return lines;
}
