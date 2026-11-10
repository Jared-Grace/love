import { reply_optional } from "./reply_optional.mjs";
import { reply_phrase_my_dear_brother } from "./reply_phrase_my_dear_brother.mjs";
import { emoji_pray } from "./emoji_pray.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { reply_sequence_outputs } from "./reply_sequence_outputs.mjs";
export function reply_friend_list_full() {
  "Somebody saying my friend list is full. It gets back that it has been full before, and that if God wills we can talk here.";
  "★ THESE ARE THE WORDS A REAL MESSAGE USED AND NO OTHERS. Other ways of saying this are added when somebody really says them, not guessed at here.";
  let oh = reply_optional("oh");
  let brother = reply_phrase_my_dear_brother();
  let pray = emoji_pray();
  let answer = text_combine_multiple([
    "My friend list has gotten full before, yes, but if God wills we can talk here ",
    pray,
  ]);
  let said = reply_sequence_outputs(
    [oh, brother, "your", "friend", "list", "is", "full"],
    [answer],
  );
  return said;
}
