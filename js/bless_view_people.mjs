import { property_get } from "./property_get.mjs";
export function bless_view_people(view) {
  "Who the player can see right now - the one seam between the prayer game's brain and";
  "whatever is drawing it. Sight is this game's cost: a blessing may only cover people";
  "the player can actually see, so every rung of the prayer ladder is gated on this";
  "answer and on nothing else.";
  "What counts as visible differs by renderer - 3-D first person sees a deep narrow cone,";
  "2-D from above sees a shallow rectangle of tiles, and audio hears a spoken count - so";
  "each renderer works out its own visible set and the brain never learns which one it";
  "was handed. That is what keeps one game from forking into two.";
  let people = property_get(view, "people");
  return people;
}
