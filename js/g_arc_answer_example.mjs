import { g_arc_answer_fields } from "./g_arc_answer_fields.mjs";
import { property_get } from "./property_get.mjs";
import { g_arc_answer_rows } from "./g_arc_answer_rows.mjs";
import { property_set } from "./property_set.mjs";
import { json_format_to } from "./json_format_to.mjs";
export function g_arc_answer_example() {
  "The shape one written arc comes back in, as a worked example ready to sit at the end of the arc prompt.";
  "AN EXAMPLE RATHER THAN A DESCRIPTION, and the shape is why. A person holds conversations, a conversation holds turns, and a turn holds three fields - prose saying that has to be read and built back into a tree before it can be obeyed, while an example already IS the tree. It replaced a sentence that described the nesting twice and still never said what any field's type was.";
  "The types are the part only an example can carry. verse_numbers is a LIST OF STRINGS and nothing was telling anyone so - the passages arrive with their numbers written [1,2] on one line, which reads as neither a list nor strings, so both the bracketing and the quoting had to be inferred with nothing to check against. Here they are shown once, and the correspondence with the bracket in the chapter above is exact.";
  "The VALUES are deliberately empty and the structure is deliberately full. An example's content becomes a template - written utterances here would come back rephrased in every arc - while its structure is the entire thing being taught. So it shows two turns rather than one, because a list of one reads as a field that happens to be wrapped.";
  "It shows the FIRST conversation with an empty catch_up, which is the one rule the field list states and no example could otherwise carry: there is nothing to catch the player up on before there is anything to catch up on.";
  "CATCH_UP was called opener, and that word was already taken. The player chooses an opener from a fixed list WHILE PLAYING, so a field of that name read as the person's answer to it - which one written utterance cannot be, because the player picks the door. Named for what it does instead, it is opener-agnostic by construction: catching somebody up on where you have got to works whichever question they were about to ask.";
  "RECAP was the other candidate and lost to the prompt's own words. The answer already holds a SUMMARY field, and the instruction on this very line says it is to be said RATHER THAN as a forced summary - so recap would have sat beside a near-synonym and named the field after the failure its own sentence warns about.";
  "It is built as an object and printed by the same reader the profile goes through, so it cannot be valid-looking and invalid, and it cannot drift from the width the rest of the prompt's JSON is written at.";
  let fields = g_arc_answer_fields();
  let fields2 = property_get(fields, "person");
  let person = g_arc_answer_rows(fields2);
  let fields3 = property_get(fields, "conversation");
  let conversation = g_arc_answer_rows(fields3);
  let fields4 = property_get(fields, "turn");
  let turns = g_arc_answer_rows(fields4);
  let answer = person[0];
  let held = conversation[0];
  property_set(held, "turns", turns);
  property_set(answer, "conversations", [held]);
  let r = json_format_to(answer);
  return r;
}
