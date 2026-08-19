import { arguments_assert } from "./arguments_assert.mjs";
import { g_directions } from "./g_directions.mjs";
import { bless_sidewalk_headings } from "./bless_sidewalk_headings.mjs";
export function bless_headings(walker) {
  arguments_assert(arguments, 1);
  ("The ways this kind of person might set off - along the pavement for somebody out");
  ("walking, and any way at all for somebody pottering about outside their own house.");
  ("A walker is given one of the two ways along the street and nothing else, because a");
  ("walker's whole home is the pavement: handed north, they would try it, be refused for");
  ("being off the pavement, and turn round - so a quarter of the street would spend its");
  ("first moments facing a wall for no reason the player could see.");
  ("Somebody at home is given any of the four, because there is no line for them to be on.");
  ("They are turning about in front of their own door, and a doorstep has no direction of");
  ("travel.");
  if (walker) {
    let along = bless_sidewalk_headings();
    return along;
  }
  let anywhere = g_directions();
  return anywhere;
}
