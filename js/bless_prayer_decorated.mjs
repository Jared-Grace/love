import { arguments_assert } from "./arguments_assert.mjs";
import { list_reduce } from "./list_reduce.mjs";
import { property_get } from "./property_get.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { text_replace_once } from "./text_replace_once.mjs";
export function bless_prayer_decorated(prayer, decorations) {
  arguments_assert(arguments, 2);
  ("A prayer as it is SHOWN, with little pictures standing all the way through it rather");
  ("than only at its two ends.");
  ("A picture either side holds a sentence; pictures inside it ILLUSTRATE one. The door");
  ("prayer names five or six things a player can see at a glance - God, praying, people, a");
  ("video game, the world they live in - and a picture beside each of those is the sentence");
  ("said a second way, so somebody who reads none of the words has still followed what is");
  ("being asked. That is worth doing exactly where a player has not yet agreed to read");
  ("anything, which is the one screen this is for.");
  ("Each picture is put AFTER the words it belongs to and never in place of them. The");
  ("replacement is the anchor with the pictures added to it, so what was there before is");
  ("still there afterwards by construction - there is no wording of a decoration that could");
  ("quietly change what is prayed, which is the promise every prayer in this game is");
  ("written in one place to keep.");
  ("An anchor that is not found, or that is found twice, THROWS rather than being skipped.");
  ("Skipping is the failure that hides: a prayer reworded by a hand that did not know about");
  ("this list would simply lose a picture, and lose it silently, and nobody would meet the");
  ("mistake until they were reading the screen wondering why it looked thinner than it");
  ("used to. Throwing makes the prayer and its pictures fall out of step LOUDLY, at the");
  ("first attempt, in the one place that can say which anchor is the stale one.");
  ("The anchors are read in the order they stand in the sentence, but nothing here depends");
  ("on that order, because a picture is never itself a word - so no insertion can create or");
  ("destroy an anchor for a later one. The order is for whoever is reading the list beside");
  ("the prayer.");
  function lambda(text, decoration) {
    let anchor = property_get(decoration, "anchor");
    let emojis = property_get(decoration, "emojis");
    let to = text_combine_multiple([anchor, " ", emojis]);
    let replaced = text_replace_once(text, anchor, to);
    return replaced;
  }
  let decorated = list_reduce(decorations, lambda, prayer);
  return decorated;
}
