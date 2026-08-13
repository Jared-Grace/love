import { fn_name } from "./fn_name.mjs";
import { g_opener_bible_question } from "./g_opener_bible_question.mjs";
export function g_openers_disciple() {
  "Everything the player may open with when approaching somebody who already believes - the four discipleship doors.";
  "A Bible question is the one the DISCIPLE leads with rather than the player, and it is the door without a limit: the disciple asks and Scripture answers, so it never runs out the way a fixed repertoire does.";
  "Belief state is read off these rather than stored twice. No disciple opener anywhere in an arc means the person is an unbeliever throughout.";
  ("The question door is spelled in ",
    fn_name("g_opener_bible_question"),
    " because the arc prompt is handed the list WITHOUT it - a question is filler taken off the turn budget before arcs are sized, so it is not written per person.");
  let question = g_opener_bible_question();
  let v = [
    question,
    "how are you",
    "how is your walk with God",
    "how is ministering to your neighbour going",
  ];
  return v;
}
