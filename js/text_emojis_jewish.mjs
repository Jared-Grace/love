import { property_set } from "./property_set.mjs";
import { emoji_cross } from "./emoji_cross.mjs";
import { emoji_star_of_david } from "./emoji_star_of_david.mjs";
import { emoji_church } from "./emoji_church.mjs";
import { emoji_synagogue } from "./emoji_synagogue.mjs";
import { text_replace_each } from "./text_replace_each.mjs";
export function text_emojis_jewish(text) {
  "The text with each Christian emoji put in place of by its Jewish counterpart - the cross by the star of David, the church by the synagogue - for a reply going to a Jewish reader. The words are left alone: only the pictures are swapped.";
  "The dove stays, because it is Noah's dove as much as the Spirit's.";
  let pairs = {};
  let property_name = emoji_cross();
  let value = emoji_star_of_david();
  property_set(pairs, property_name, value);
  let property_name2 = emoji_church();
  let value2 = emoji_synagogue();
  property_set(pairs, property_name2, value2);
  let replaced = text_replace_each(text, pairs);
  return replaced;
}
