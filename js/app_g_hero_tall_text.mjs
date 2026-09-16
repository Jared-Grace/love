import { number_part_way } from "./number_part_way.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function app_g_hero_tall_text(tall) {
  arguments_assert(arguments, 1);
  ("The player drawn at the height she has grown to, written as the one line of style that");
  ("says it.");
  ("She grows WIDER as well, at half the rate, and the half is the whole of what stops this");
  ("looking wrong. A picture of a person stretched upward alone is not a taller person, it is");
  ("the same person pulled out of shape, and everybody can see it even when they could not");
  ("say what was done. Growing her evenly would have been the other mistake - even growth is");
  ("just a bigger picture, and what is being said here is that she is rising over the street.");
  ("Half is high enough for her to be plainly taller and low enough that she never reads as");
  ("stretched.");
  ("It grows from the GROUND, so her feet stay in the square she is standing in and the");
  ("height is added above her. Grown about the middle she would sink into the pavement by");
  ("half of everything she gained, which reads as the map being wrong rather than as her");
  ("being tall.");
  let wide = number_part_way(1, tall, 0.5);
  let text = text_combine_multiple(["scaleY(", tall, ") scaleX(", wide, ")"]);
  return text;
}
