import { text_replace_each } from "./text_replace_each.mjs";
import { emoji_cross } from "./emoji_cross.mjs";
import { emoji_star_of_david } from "./emoji_star_of_david.mjs";
import { emoji_church } from "./emoji_church.mjs";
import { emoji_synagogue } from "./emoji_synagogue.mjs";
export function text_emojis_jewish(text) {
  "The text with each Christian emoji put in place of by its Jewish counterpart - the cross by the star of David, the church by the synagogue - for a reply going to a Jewish reader. The words are left alone: only the pictures are swapped.";
  "The dove stays, because it is Noah's dove as much as the Spirit's.";
  let replaced = text_replace_each(text, {
    [emoji_cross()]: emoji_star_of_david(),
    [emoji_church()]: emoji_synagogue(),
  });
  return replaced;
}
