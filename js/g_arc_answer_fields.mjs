export function g_arc_answer_fields() {
  "Every field a written arc has to fill, grouped by the level it belongs to - what it is called, what it means, and what it looks like.";
  "ONE SOURCE, because there are two readers and they were drifting. The arc prompt lists these fields with their meanings, and the answer example shows the same fields with their shapes; a rename used to have to land in both, by hand, and a rename that landed in only one would hand the writing call a field described in one place and absent from the other - with nothing going red, because a prompt cannot fail.";
  "That is not a hypothetical. Renaming opener to catch_up needed exactly two edits in two files, which is the shape of the mistake somebody makes next time.";
  "The GROUPS are the nesting. person holds conversations, a conversation holds turns - so the level a field sits at is what says whether it is chosen once, once a conversation, or once a turn. That used to be prose stating the tree twice and was still silent on it.";
  "EXAMPLES is a list rather than one value, and its length is how many rows of that level the example shows. Turns get two so that verse_numbers can be shown holding one verse AND holding several - a list of one written [1] is the case somebody writes as 1 instead, and it is the only case an example can settle without saying a word about types.";
  let r = {
    person: [
      {
        name: "occupation",
        description: "their work, consistent with the JSON above.",
        examples: [""],
      },
      {
        name: "trouble",
        description: "what is wrong, briefly, in their own words.",
        examples: [""],
      },
      {
        name: "summary",
        description:
          "the whole arc in a sentence: who they are and where they end up.",
        examples: [""],
      },
    ],
    conversation: [
      {
        name: "catch_up",
        description:
          "on conversations after the first, the first thing the person says, before the player has opened. It catches the player up on where this person has got to since, said the way somebody greets a friend they are glad to see again rather than as a report. Leave it empty on the first conversation.",
        examples: [""],
      },
    ],
    turn: [
      {
        name: "before",
        description: "what the person says at the beginning of a turn.",
        examples: ["", ""],
      },
      {
        name: "chapter",
        description:
          "the chapter the answering passage came from, exactly as it is written first inside that passage brackets above.",
        examples: ["", ""],
      },
      {
        name: "verse_numbers",
        description:
          "the verse numbers of the passage that answer the before, each one its own word, exactly as they are written after the chapter inside that passage brackets above.",
        examples: [["1"], ["2", "3"]],
      },
      {
        name: "after",
        description:
          "what the person says after the player chooses the correct passage.",
        examples: ["", ""],
      },
    ],
  };
  return r;
}
