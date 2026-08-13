import { fn_name } from "./fn_name.mjs";
import { g_opener_explanations } from "./g_opener_explanations.mjs";
import { property_get } from "./property_get.mjs";
import { list_join_empty } from "./list_join_empty.mjs";
import { list_join_space } from "./list_join_space.mjs";
import { list_add } from "./list_add.mjs";
export function g_openers_lines(opener_names) {
  "The prompt block for a set of openers - one line each, saying the opener's word, what the player says with it, and what kind of thing the person says back.";
  "ONE LINE PER OPENER rather than a comma-joined run. Comma-joined, `how are you, what do you believe, the gospel` reads as three items of one kind, and the third is not one - it is an act where the others are questions. A line each also leaves somewhere for the sentence and the shape of the reply to go, which is the whole reason this exists.";
  "THE TAG IS SPELLED FIRST because the written arc marks every turn with it. What follows the colon is for the writer to understand; what comes before it is the word to copy.";
  ("An opener with no explanation THROWS here, by way of ",
    fn_name("property_get"),
    ", rather than rendering a bare word. A door added to a list and not explained would otherwise reach the prompt as a name with nothing behind it, and a prompt cannot fail - so the only place it could ever show up is in the arcs, already wrong.");
  let explanations = g_opener_explanations();
  let lines = [];
  for (let name of opener_names) {
    let explanation = property_get(explanations, name);
    let said = property_get(explanation, "said");
    let draws = property_get(explanation, "draws");
    let tagged = list_join_empty([name, ":"]);
    let named = list_join_space(["  -", tagged, said, draws]);
    list_add(lines, named);
  }
  return lines;
}
