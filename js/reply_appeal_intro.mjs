import { arguments_assert } from "./arguments_assert.mjs";
import { reply_word_god } from "./reply_word_god.mjs";
import { reply_sequence } from "./reply_sequence.mjs";
import { reply_phrase_my_dear_brother } from "./reply_phrase_my_dear_brother.mjs";
import { reply_choice } from "./reply_choice.mjs";
import { reply_optional } from "./reply_optional.mjs";
export function reply_appeal_intro() {
  arguments_assert(arguments, 0);
  ("One opening line of an appeal for help, said before the need itself: that something was asked for before, or that something is about to be shared.");
  ("★ AN OPENING SAYS NOTHING BACK ON ITS OWN. It only leads into an appeal, so it counts only in front of one of the needs the appeal is about.");
  let god = reply_word_god();
  let great_man_of_god = reply_sequence(["great", "man", "of", god]);
  let my_dear_brother = reply_phrase_my_dear_brother();
  let address = reply_choice(["sir", great_man_of_god, my_dear_brother]);
  let o_and = reply_optional("and");
  let requested = reply_sequence([
    o_and,
    address,
    "i",
    "requested",
    "you",
    "something",
  ]);
  let share = reply_sequence([
    address,
    "i",
    "want",
    "to",
    "share",
    "something",
    "with",
    "you",
  ]);
  let intro = reply_choice([requested, share]);
  return intro;
}
