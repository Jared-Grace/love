import { json_format_to } from "./json_format_to.mjs";
export function g_arc_answer_example() {
  "The shape one written arc comes back in, as a worked example ready to sit at the end of the arc prompt.";
  "AN EXAMPLE RATHER THAN A DESCRIPTION, and the shape is why. A person holds conversations, a conversation holds turns, and a turn holds three fields - prose saying that has to be read and built back into a tree before it can be obeyed, while an example already IS the tree. It replaced a sentence that described the nesting twice and still never said what any field's type was.";
  "The types are the part only an example can carry. verse_numbers is a LIST OF STRINGS and nothing was telling anyone so - the passages arrive with their numbers written [1,2] on one line, which reads as neither a list nor strings, so both the bracketing and the quoting had to be inferred with nothing to check against. Here they are shown once, and the correspondence with the bracket in the chapter above is exact.";
  "The VALUES are deliberately empty and the structure is deliberately full. An example's content becomes a template - written utterances here would come back rephrased in every arc - while its structure is the entire thing being taught. So it shows two turns rather than one, because a list of one reads as a field that happens to be wrapped.";
  ("It shows the FIRST conversation with an empty opener, which is the one rule the field list states and no example could otherwise carry: the person opens conversations after the first, and has nothing to catch the player up on before there is anything to catch up on.");
  "It is built as an object and printed by the same reader the profile goes through, so it cannot be valid-looking and invalid, and it cannot drift from the width the rest of the prompt's JSON is written at.";
  let answer = {
    occupation: "",
    trouble: "",
    summary: "",
    conversations: [
      {
        opener: "",
        turns: [
          { before: "", verse_numbers: ["1"], after: "" },
          { before: "", verse_numbers: ["2", "3"], after: "" },
        ],
      },
    ],
  };
  let r = json_format_to(answer);
  return r;
}
