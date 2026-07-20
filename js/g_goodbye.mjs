import { list_random_item } from "./list_random_item.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { emoji_heart } from "./emoji_heart.mjs";
import { emoji_pray } from "./emoji_pray.mjs";
import { emoji_smile } from "./emoji_smile.mjs";
import { emoji_wave } from "./emoji_wave.mjs";
import { emoji_dove } from "./emoji_dove.mjs";
import { emoji_sunrise } from "./emoji_sunrise.mjs";
export function g_goodbye() {
  "a randomized, WARM parting line the player SAYS to end a conversation (their own person-neutral words, wrapped in gentle emojis) — so leaving reads as one of the warm things you choose to say, not a mechanical 'end' action";
  let line = list_random_item([
    text_combine_multiple([emoji_heart(), " God bless you and keep you. Goodbye for now! ", emoji_wave()]),
    text_combine_multiple([emoji_pray(), " I'll be praying for you. God bless you! ", emoji_heart()]),
    text_combine_multiple([emoji_smile(), " It was so good to talk with you. God bless you! ", emoji_pray()]),
    text_combine_multiple([emoji_dove(), " May the Lord's peace go with you. Goodbye for now! ", emoji_heart()]),
    text_combine_multiple([emoji_sunrise(), " God bless you. I have to go for now, but take heart! ", emoji_wave()]),
    text_combine_multiple([emoji_heart(), " Take good care of yourself. God bless you! ", emoji_pray()]),
    text_combine_multiple([emoji_smile(), " Thank you for talking with me. God bless you, and goodbye! ", emoji_wave()]),
  ]);
  return line;
}
