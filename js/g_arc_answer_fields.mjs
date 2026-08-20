export function g_arc_answer_fields() {
  "Every field a written arc has to fill, grouped by the level it belongs to - what it is called, what it means, and what it looks like.";
  "ONE SOURCE, because there are two readers and they were drifting. The arc prompt lists these fields with their meanings, and the answer example shows the same fields with their shapes; a rename used to have to land in both, by hand, and a rename that landed in only one would hand the writing call a field described in one place and absent from the other - with nothing going red, because a prompt cannot fail.";
  "That is not a hypothetical. Renaming opener to catch_up needed exactly two edits in two files, which is the shape of the mistake somebody makes next time.";
  "The GROUPS are the nesting. person holds conversations, a conversation holds turns - so the level a field sits at is what says whether it is chosen once, once a conversation, or once a turn. That used to be prose stating the tree twice and was still silent on it.";
  "EXAMPLES is a list rather than one value, and its length is how many rows of that level the example shows. Turns get two because a list of one reads as a field that happens to be wrapped rather than as a list the writer keeps adding to.";
  "EVERY VALUE IS EMPTY, and there used to be one exception. The turn named its passage as a book_chapter plus a verse_numbers LIST OF STRINGS, and neither the bracketing nor the quoting of that list could be inferred, so it had to carry real numbers - one row holding a single verse and one holding several, because a list of one is the case somebody writes as a bare 1 instead. The turn now names its passage by copying the whole reference out of the brackets it is already shown in, which is one plain string and teaches its own shape. So the exception went with the field, and the rule that an example shows structure and never content holds everywhere again.";
  "COPYING RATHER THAN SPLITTING is the point of that field, not brevity. Asked for the book and chapter without the colon, and then for the verses after it, the writer has to take a citation apart and label the halves - and each half can come back correct while the pair names a passage nobody offered, verse 5 where the passage was 5 and 6 together. Copied whole, the citation either matches a passage that was handed over or matches none.";
  let r = {
    person: [
      {
        name: "occupation",
        description: "their work.",
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
          "the whole arc, briefly in up to a few sentences: who they are and where they end up.",
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
        name: "opener",
        description:
          "which opener the player chose to reach this turn, copied exactly as it is written on its own line in the opener lines above.",
        examples: ["", ""],
      },
      {
        name: "before",
        description: "what the person says at the beginning of a turn.",
        examples: ["", ""],
      },
      {
        name: "reference",
        description:
          "the passage that answers the before, copied exactly as it stands inside that passage's square brackets above - the book, the chapter, the colon and the verse numbers all together, and without the brackets themselves.",
        examples: ["", ""],
      },
      {
        name: "after",
        description:
          "what the person says after the player chooses the correct passage. Leave it empty when the person carries straight on to what they say next, because then their next before is their answer to the passage and an after in front of it would only delay them. Write one when the passage changed something for them: they soften, they grant a point, or they are given something to think about. Never let them grant more than the passage earned.",
        examples: ["", ""],
      },
    ],
  };
  return r;
}
