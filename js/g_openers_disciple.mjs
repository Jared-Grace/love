import { fn_name } from "./fn_name.mjs";
import { g_opener_bible_question } from "./g_opener_bible_question.mjs";
export function g_openers_disciple() {
  "Everything the player may open with when approaching somebody who already believes - the four discipleship doors.";
  "A Bible question is the one the DISCIPLE leads with rather than the player, and it is the door without a limit: the disciple asks and Scripture answers, so it never runs out the way a fixed repertoire does.";
  "What these mark is WHEN somebody came to faith, not WHETHER. Every conversable person converts - there is no rejecting outcome - so belief is not a per-person fact to store or to read off anything. Openers before the turn where they believe are drawn from the unbeliever list and openers after it from this one, and the switch is the whole of what a reader can tell from them.";
  ("It USED to say that no disciple opener anywhere in an arc meant an unbeliever throughout, and that was wrong twice over. It contradicted the one-conversation arc, which ",
    fn_name("g_arc_lengths"),
    " wants and describes as somebody who hears and believes with their discipling happening off screen - such a person has no disciple opener and believes anyway. And under a single outcome it describes a person the game never contains.");
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
