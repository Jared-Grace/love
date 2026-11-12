import { reply_response_blessing_thanks } from "./reply_response_blessing_thanks.mjs";
import { reply_sequence_outputs } from "./reply_sequence_outputs.mjs";
import { reply_on_match_blessings } from "./reply_on_match_blessings.mjs";
export function reply_great_day_thanked() {
  "Somebody wishing us a great day. It is a blessing, so it gets thanks for the blessing back, and their day goes on the list of blessings in the prayer that closes the reply.";
  "★ THESE ARE THE WORDS A REAL MESSAGE USED AND NO OTHERS: have a great day. Other wishes are added when somebody really sends them, not guessed at here.";
  let thanks = reply_response_blessing_thanks();
  let thanked = reply_sequence_outputs(["have", "a", "great", "day"], [thanks]);
  let blessed = ["your day"];
  let said = reply_on_match_blessings(thanked, blessed);
  return said;
}
