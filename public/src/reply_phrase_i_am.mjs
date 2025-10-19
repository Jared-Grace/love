import { reply_choice } from "../../../love/public/src/reply_choice.mjs";
import { reply_sequence } from "../../../love/public/src/reply_sequence.mjs";
import { reply_optional } from "../../../love/public/src/reply_optional.mjs";
export function reply_phrase_i_am() {
  let o_i = reply_optional("i");
  let i_am = reply_sequence([o_i, "am"]);
  let iam = reply_choice(["i'm", i_am]);
  return iam;
}
