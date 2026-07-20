import { list_random_item } from "./list_random_item.mjs";
import { text_random_or_empty } from "./text_random_or_empty.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { emoji_heart } from "./emoji_heart.mjs";
import { emoji_pray } from "./emoji_pray.mjs";
import { emoji_smile } from "./emoji_smile.mjs";
import { emoji_wave } from "./emoji_wave.mjs";
import { emoji_dove } from "./emoji_dove.mjs";
import { emoji_sunrise } from "./emoji_sunrise.mjs";
export function g_goodbye() {
  "a randomized, WARM, STRUCTURED parting line the player SAYS to end a conversation (their own person-neutral words) — composed from interchangeable parts (opening emoji / blessing / optional care / parting / closing emoji) so the space is large (~1500 combos) and repeats aren't recognizable. leaving thus reads as one of the warm things you choose to say, not a mechanical 'end'";
  let emoji_open = list_random_item([
    emoji_heart(),
    emoji_pray(),
    emoji_smile(),
    emoji_dove(),
    emoji_sunrise(),
  ]);
  let blessing = list_random_item([
    "God bless you",
    "God bless you and keep you",
    "May the Lord bless you",
    "May God's peace be with you",
    "May the Lord watch over you",
  ]);
  let care = text_random_or_empty(
    list_random_item([
      " I'll be praying for you.",
      " It was so good to talk with you.",
      " Take heart.",
      " You're in my prayers.",
    ]),
  );
  let parting = list_random_item([
    " Goodbye for now!",
    " I have to go for now.",
    " Take good care!",
    " Until next time!",
  ]);
  let emoji_close = list_random_item([emoji_wave(), emoji_heart(), emoji_pray()]);
  let line = text_combine_multiple([
    emoji_open,
    " ",
    blessing,
    ".",
    care,
    parting,
    " ",
    emoji_close,
  ]);
  return line;
}
