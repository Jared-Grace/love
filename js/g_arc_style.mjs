export function g_arc_style() {
  "How every arc is to be written, said once here so that a fault found in one is answered for all the ones nobody has written yet.";
  "THIS EXISTS BECAUSE A REVIEW NOTE WAS BEING SPENT TWICE AND BANKED NEVER. A note names one line, the line is mended, the note is cleared, and the next batch is written by somebody who never saw it - so a fault that was systematic comes back at full strength and is found again, by a person, one line at a time. Every rule below was paid for by a reader already; the point of writing them down is that nobody pays for them a second time.";
  "WHICH IS WHY MORE ARCS WAIT ON THE REVIEW OF THE ONES THAT EXIST. Generating ahead of the reading is not neutral - it multiplies whatever the reading has not caught yet, and every copy of the fault has to be found and mended by hand afterwards. The reading is the thing that makes the next batch cheaper, so it goes first.";
  "A RULE HERE MUST HAVE COME FROM A READER, never from taste. The test for promoting a note is whether it RECURS - the same defect in more than one line, or found by more than one person. One line that came out wrong is a line to mend; the same wrongness three times is a rule that was missing. Nothing may be added here on the grounds that it sounds right.";
  "WHAT IS WRONG, NEVER WHAT TO SAY INSTEAD - the same shape the note store itself is built on, and for the same reason it gives there: a rule saying what a line should say has done the writing, and the writer is then needed again for every line after. A rule saying what goes wrong fires on lines nobody has looked at yet.";
  let rules = [
    {
      rule: "The player quotes the eyewitness and never speaks as one. A character may long to have seen Him; the player may not be written as having seen, heard or touched Him.",
      why: "1 John opens on a claim only John can make - heard, seen, gazed upon, touched with our hands. A player line that borrows it turns the reader into a witness of something they were not at, and the whole weight of the letter is that the witness is somebody else and the reader is trusting them.",
      from: "raised by the human on 1JN01 while reading the arcs, with the verse quoted back",
    },
    {
      rule: "A word most readers know as an ADJECTIVE may not be used as a bare noun. Say the thing plainly: 'the sin I have hidden', never 'the wrong that is mine'. Adjective uses are fine - 'she has done nothing wrong' is clear.",
      why: "the reader has to work out which sense is meant, and a reader whose first language is not English often cannot. Vagueness here is not gentleness: the game is about sin and forgiveness, and somebody who cannot tell what the word refers to cannot connect the line to the verse that answers it.",
      from: "six notes across three people on 1JN01. The same arcs already said 'sin' plainly elsewhere, so the vague half was drift rather than a choice - which is what made it a rule instead of a fix.",
    },
    {
      rule: "The English is written toward people who read English, and carries nothing that only works for one country. What a line assumes about money, weather, food, schooling or law has to hold wherever it is read, or be part of the Bible's own setting.",
      why: "the arcs are translated, and a line resting on something local either goes wrong in translation or has to be rewritten per language. The Bible's own setting travels because it is ancient and shared; a modern local detail does not.",
      from: "given by the human as a standing instruction while reviewing word pictures and definitions",
    },
    {
      rule: "Where the passage answers the person in a DIFFERENT WORD than the one they used, the after may not be left empty. The after is where the person picks the passage's own word up and sets it beside theirs. A turn whose before says death and whose passage says blood, ending on an empty after, has left the join for the reader to make silently.",
      why: "the player never explains, and is not meant to - their whole utterance is the passage they chose. So the after is the only place a join can be said aloud, and an empty one on a turn that needed it is the join going missing rather than the person carrying straight on. It also keeps the connecting to somebody who is entitled to do it: a person granting a point has been changed by the passage, whereas a player explaining the passage has done that person's thinking for them.",
      from: "raised by the human on 1JN01, on the turn asking why a death of His would do anything about my sin, answered by 1 John 1:7 and its blood that cleanses - with an empty after. The two turns of the same arc that DO carry an after both already work this way: Confess. Not pay. off 1 John 1:9, and No darkness at all. off 1 John 1:5. So the shape was there and the turn had simply skipped it.",
    },
  ];
  return rules;
}
