import { reply_optional } from "./reply_optional.mjs";
import { reply_phrase_i_am } from "./reply_phrase_i_am.mjs";
import { reply_digits_exactly } from "./reply_digits_exactly.mjs";
import { reply_choice } from "./reply_choice.mjs";
import { reply_choices_age } from "./reply_choices_age.mjs";
import { reply_sequence_output } from "./reply_sequence_output.mjs";
export function reply_age_said() {
  "Somebody saying how old they are the way a real message put it, as a number with an ending and then year old: and I'm 40th year old. It gets the age of the servant of God back.";
  "★ ANY TWO DIGITS ARE READ, BECAUSE THE NUMBER IS THE ONE PART THAT DIFFERS FROM PERSON TO PERSON. The number is not used in the reply. Other ways of saying an age are added when somebody really says them.";
  let and_said = reply_optional("and");
  let iam = reply_phrase_i_am();
  let number = reply_digits_exactly(2);
  let ending = reply_choice(["st", "nd", "rd", "th"]);
  let line = reply_choices_age();
  let said = reply_sequence_output(
    [and_said, iam, number, ending, "year", "old"],
    line,
  );
  return said;
}
