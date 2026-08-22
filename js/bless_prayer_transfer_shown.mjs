import { arguments_assert } from "./arguments_assert.mjs";
import { emoji_pray } from "./emoji_pray.mjs";
import { emoji_globe_americas } from "./emoji_globe_americas.mjs";
import { bless_prayer_flanked } from "./bless_prayer_flanked.mjs";
export function bless_prayer_transfer_shown(prayer) {
  arguments_assert(arguments, 1);
  ("The prayer at the door as the player sees it - praying hands in front of it and the");
  ("world behind it.");
  ("These two are FIXED, where the prayer over a person takes whatever the draw gives it.");
  ("The reason is that this prayer is read once and the other is read a thousand times: a");
  ("picture drawn at random earns its keep by keeping a panel from going stale, and");
  ("nothing seen once can go stale. So the one screen that gets to choose its pictures for");
  ("what they MEAN chooses them.");
  ("And they say exactly what the sentence between them says. The player is asking, which");
  ("is the hands; and what they are asking is that this reach everyone in the world they");
  ("live in, which is the world. Somebody who reads nothing but the two pictures has still");
  ("been told what the door is for.");
  ("The globe is kept for this screen alone and is not in the pool the other prayers draw");
  ("from, so it goes on meaning the whole world rather than becoming one more picture the");
  ("game shows sometimes.");
  let before = emoji_pray();
  let after = emoji_globe_americas();
  let text = bless_prayer_flanked(prayer, before, after);
  return text;
}
