import { reply_sequence } from "../../../love/public/src/reply_sequence.mjs";
import { reply_phrase_my_dear_brother } from "../../../love/public/src/reply_phrase_my_dear_brother.mjs";
export function reply_phrase_you() {
  let my_dear_brother = reply_phrase_my_dear_brother();
  let you = reply_sequence(["you", my_dear_brother]);
  return you;
}
