export function g_arc_answer_fields() {
  "Every field a written arc has to fill, grouped by the level it belongs to - what it is called, what it means, and what it looks like.";
  "ONE SOURCE, because there are two readers and they were drifting. The arc prompt lists these fields with their meanings, and the answer example shows the same fields with their shapes; a rename used to have to land in both, by hand, and a rename that landed in only one would hand the writing call a field described in one place and absent from the other - with nothing going red, because a prompt cannot fail.";
  "That is not a hypothetical. Renaming opener to catch_up needed exactly two edits in two files, which is the shape of the mistake somebody makes next time.";
  "The GROUPS are the nesting. person holds conversations, a conversation holds turns - so the level a field sits at is what says whether it is chosen once, once a conversation, or once a turn. That used to be prose stating the tree twice and was still silent on it.";
  "EXAMPLES is a list rather than one value, and its length is how many rows of that level the example shows. Turns get two because a list of one reads as a field that happens to be wrapped rather than as a list the writer keeps adding to.";
  "EVERY VALUE IS EMPTY, and there used to be one exception. The turn named its passage as a book_chapter plus a verse_numbers LIST OF STRINGS, and neither the bracketing nor the quoting of that list could be inferred, so it had to carry real numbers - one row holding a single verse and one holding several, because a list of one is the case somebody writes as a bare 1 instead. The turn now names its passage by copying the whole reference out of the brackets it is already shown in, which is one plain string and teaches its own shape. So the exception went with the field, and the rule that an example shows structure and never content holds everywhere again.";
  "WHEN THEY BELIEVE IS WRITTEN DOWN RATHER THAN WORKED OUT, and that is the one thing about an arc that reading it could not recover. Which openers are offered says a person has believed by the time a disciple door is used, and says nothing about when - the turn they said it in and every turn between it and the next disciple door look alike. In one written arc the gap was five turns wide, and the turn itself was the one where she said I believe Him.";
  "COPYING RATHER THAN SPLITTING is the point of that field, not brevity. Asked for the book and chapter without the colon, and then for the verses after it, the writer has to take a citation apart and label the halves - and each half can come back correct while the pair names a passage nobody offered, verse 5 where the passage was 5 and 6 together. Copied whole, the citation either matches a passage that was handed over or matches none.";
  "SHAPE IS WHAT KIND OF THING THE FILLED FIELD IS, and it is here rather than in the screen that draws it because it is a fact about the field and not a taste about the page. A reviewer looking at three lines reading occupation, trouble and summary set one under another in the same type has to read all three to find out that the first is a settled fact, the second is the person's own voice and the third is somebody describing them - which is work the page can do instead, and does, by drawing each in the shape of what it is.";
  "IT IS NOT A STYLE. Nothing here names a colour, a size or a border; a shape is a word for a kind, and the one screen that draws arcs decides what each kind looks like. A second screen may draw them differently and still be drawing the same kinds.";
  "FIVE KINDS COVER EVERY FIELD. A fact is a settled short thing. Spoken is somebody's own words. Prose is a description of somebody, written about them rather than by them. A verdict is the one turning point, written down because it could not be worked out. An aside is what the field is answering rather than the answer - context a reviewer reads past, and the only kind meant to recede.";
  let r = {
    person: [
      {
        name: "occupation",
        description: "their work.",
        shape: "fact",
        examples: [""],
      },
      {
        name: "trouble",
        description: "what is wrong, briefly, in their own words.",
        shape: "spoken",
        examples: [""],
      },
      {
        name: "summary",
        description:
          "the whole arc, briefly in up to a few sentences: who they are and where they end up.",
        shape: "prose",
        examples: [""],
      },
    ],
    conversation: [
      {
        name: "catch_up",
        description:
          "on conversations after the first, the first thing the person says, before the player has opened. It catches the player up on where this person has got to since, said the way somebody greets a friend they are glad to see again rather than as a report. Leave it empty on the first conversation.",
        shape: "spoken",
        examples: [""],
      },
    ],
    turn: [
      {
        name: "opener",
        description:
          "which opener the player chose this turn, written exactly as it is written on its own line in the opener lines above.",
        shape: "aside",
        examples: ["", ""],
      },
      {
        name: "before",
        description: "what the person says at the beginning of a turn.",
        shape: "spoken",
        examples: ["", ""],
      },
      {
        name: "reference",
        description:
          "the reference for the passage that answers the before, copied exactly as it is written inside that passage's square brackets above - the book, the chapter, the colon and the verse numbers all together, and without the brackets themselves.",
        shape: "fact",
        examples: ["", ""],
      },
      {
        name: "after",
        description:
          "what the person says after the player chooses the correct passage. Leave it empty when the person carries straight on to what they say next, because then their next before is their answer to the passage and an after in front of it would only delay them. Write one when the passage changed something for them: they soften, they grant a point, or they are given something to think about. The grant should follow from God changing their heart.",
        shape: "spoken",
        examples: ["", ""],
      },
      {
        name: "believes",
        description:
          "write yes on the one turn where the person comes to believe, and leave it empty on every other turn. It is the turn where they say so themselves, not the turn that persuaded them. Leave it empty on every turn of an arc where they never come to believe. From that turn onwards they are a disciple, so the openers change: the openers for somebody who does not yet believe belong up to and including that turn, and the openers for a disciple belong only after it.",
        shape: "verdict",
        examples: ["", ""],
      },
    ],
  };
  return r;
}
