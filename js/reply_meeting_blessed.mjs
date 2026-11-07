import { prayer_end } from "./prayer_end.mjs";
import { reply_choices_praise } from "./reply_choices_praise.mjs";
import { reply_choices_glory } from "./reply_choices_glory.mjs";
import { prayer_blessing } from "./prayer_blessing.mjs";
import { reply_sequence_outputs } from "./reply_sequence_outputs.mjs";
export function reply_meeting_blessed() {
  "Somebody saying a meeting today was blessed. It gets Amen, praise to the LORD and glory to God back, and a blessing on them and everyone who was at the meeting.";
  "★ THESE ARE THE WORDS A REAL MESSAGE USED AND NO OTHERS. Other ways of saying this are added when somebody really says them, not guessed at here.";
  let words = ["today", "meeting", "is", "very", "blessed"];
  let amen = prayer_end();
  let praise = reply_choices_praise();
  let glory = reply_choices_glory();
  let blessing = prayer_blessing("you and everyone at the meeting");
  let said = reply_sequence_outputs(words, [amen, praise, glory, blessing]);
  return said;
}
