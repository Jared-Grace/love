import { reply_on_match_blessings } from "./reply_on_match_blessings.mjs";
import { reply_choices_praise } from "./reply_choices_praise.mjs";
import { reply_choices_glory } from "./reply_choices_glory.mjs";
import { reply_sequence_outputs } from "./reply_sequence_outputs.mjs";
export function reply_meeting_blessed() {
  "Somebody saying a meeting today was blessed. It gets praise to the LORD and glory to God back, and a blessing on them and everyone who was at the meeting.";
  "★ THESE ARE THE WORDS A REAL MESSAGE USED AND NO OTHERS. Other ways of saying this are added when somebody really says them, not guessed at here.";
  "★ NO AMEN IS SAID TO THE MESSAGE ITSELF. Amen agrees that what was said is so, and nobody who answers under this name saw the meeting. An Amen goes only where its object is on the page: a verse quoted back, a praise of God, or the end of a prayer the reply itself prays - which is why the blessing still ends in one.";
  let words = ["today", "meeting", "is", "very", "blessed"];
  let praise = reply_choices_praise();
  let glory = reply_choices_glory();
  let praised = reply_sequence_outputs(words, [praise, glory]);
  let blessed = ["you", "everyone at the meeting"];
  let said = reply_on_match_blessings(praised, blessed);
  return said;
}
