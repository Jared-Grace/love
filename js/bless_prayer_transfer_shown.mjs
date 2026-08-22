import { arguments_assert } from "./arguments_assert.mjs";
import { bless_prayer_transfer_decorations } from "./bless_prayer_transfer_decorations.mjs";
import { bless_prayer_decorated } from "./bless_prayer_decorated.mjs";
export function bless_prayer_transfer_shown(prayer) {
  arguments_assert(arguments, 1);
  ("The prayer at the door as the player sees it - the words, with a run of little pictures");
  ("beside nearly every thing the sentence names.");
  ("Pictures ALL THE WAY THROUGH, where the prayer over a person gets one at either end.");
  ("The two screens are asking different things of a picture. Over a person, a pair holds a");
  ("sentence and keeps a panel that will be seen a thousand times from going stale; at the");
  ("door, the sentence itself is the obstacle - it is the longest run of words in the game,");
  ("shown to somebody who has not agreed to play yet, before anything has moved. Pictures");
  ("through it tell the same thing a second way, so a player who skims it has still");
  ("followed it.");
  ("And they are FIXED here, where the other screen draws. A picture chosen at random earns");
  ("its keep by being different next time, and nothing read once has a next time - so the");
  ("one screen that can choose its pictures for what they MEAN chooses them.");
  ("Which pictures go where is said next door, where each choice can be written down beside");
  ("the words it is for. This is only the joining of the two.");
  let decorations = bless_prayer_transfer_decorations();
  let text = bless_prayer_decorated(prayer, decorations);
  return text;
}
