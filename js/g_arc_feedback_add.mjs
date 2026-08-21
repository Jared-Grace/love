import { g_arc_feedback_note_add } from "./g_arc_feedback_note_add.mjs";
export async function g_arc_feedback_add(
  chapter_code,
  index,
  turn,
  field,
  note,
) {
  "$plain field";
  "$plain note";
  "Put one note against one line of one person's arc - what is wrong with it, not what it should say - keeping every note already standing.";
  "$plain chapter_code";
  "the code is a chapter's name, like 1JN01, chosen from the Bible's own book and chapter numbering. It names a store entry and nothing that runs.";
  "THE TURN NUMBER IS THE ADDRESS, and it is the one the reviewer already has. An arc laid out for reading numbers its turns straight through, so a reader who has spotted something can say where it is with a number they are looking at, and nothing has to be quoted back. A note against the person rather than against a turn - their occupation, their summary - carries a turn of zero, because no turn is where those live.";
  "THAT ADDRESS HOLDS ONLY WHILE THE TURN COUNT DOES, which is a constraint on revising rather than a weakness here. A revision changes the words in a turn and never how many turns there are; add one and every note filed after it points at the wrong line, silently, because a number cannot tell that the thing it counted to has moved. It is also what keeps a revision small enough to read.";
  "IT APPENDS AND NEVER REPLACES. Two readers may fault the same line for two different things, and a store keeping one note a line would let the second silently erase the first - which is the reading that took longest to arrive.";
  "IT MARKS ITS NOTES AS A PERSON'S, and the check beside it marks its own, because the two are worth undoing on completely different terms. A check's finding can be thrown away at no cost - running it again reproduces every note exactly, so nothing is lost that a second is cannot restore. A person's finding cannot be reproduced by anything; it took a reading, and the reading is gone. A clear that could not tell them apart could therefore only be safe by refusing to drop either, which is what left thirty-seven notes standing that a reviser was about to act on.";
  "THE ADDRESS IS MADE A NUMBER HERE, at the one door into the store, and that is a repair rather than a tidying. A person files a note from a command line, which hands every argument over as text; a check files one from inside, where a turn number is already counted. Both were being written down as they arrived, so the same line was addressed two different ways and neither could find the other - a clear asked for person one dropped nothing, because the note standing there said the person was the WORD one. Nothing goes red for that: the store took both happily and every reader answered honestly about the half it could see.";
  let path = await g_arc_feedback_note_add(
    chapter_code,
    index,
    turn,
    field,
    note,
    false,
  );
  return path;
}
