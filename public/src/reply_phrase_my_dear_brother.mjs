import { reply_choice } from "../../../love/public/src/reply_choice.mjs";
import { reply_sequence } from "../../../love/public/src/reply_sequence.mjs";
import { reply_either_both } from "../../../love/public/src/reply_either_both.mjs";
import { reply_word_brother } from "../../../love/public/src/reply_word_brother.mjs";
import { reply_word_in } from "../../../love/public/src/reply_word_in.mjs";
import { reply_phrase_jesus } from "../../../love/public/src/reply_phrase_jesus.mjs";
import { reply_sequence_optional } from "../../../love/public/src/reply_sequence_optional.mjs";
import { reply_optional } from "../../../love/public/src/reply_optional.mjs";
export function reply_phrase_my_dear_brother() {
  let fn15 = reply_optional("y");
  let my = reply_sequence_optional(["m", fn15]);
  let phrase_jesus2 = reply_phrase_jesus();
  let n2 = reply_word_in();
  let in_christ = reply_sequence_optional([n2, phrase_jesus2]);
  const brother = reply_word_brother();
  const dear = "dear";
  let db = reply_either_both(dear, brother);
  let fn16 = reply_sequence([my, db, in_christ]);
  const choices = [fn16, my];
  let c = reply_choice(choices);
  let my_dear_brother = reply_optional(c);
  return my_dear_brother;
}
