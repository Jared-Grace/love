import { list_filter } from "./list_filter.mjs";
import { property_get } from "./property_get.mjs";
import { bless_cone_holds } from "./bless_cone_holds.mjs";
import { bless_view_of_people } from "./bless_view_of_people.mjs";
export function bless_cone_view(cone, people) {
  "The 2-D renderer's answer to who the player can see - the people standing on a tile the";
  "cone holds, handed back as a view the game's brain can read without ever learning that a";
  "cone was involved.";
  "This is one implementation of that question, not the question itself. A 3-D renderer";
  "will answer it from a camera frustum and audio will answer it from a spoken count, and";
  "all three hand back the same shape, which is what keeps one game from becoming two.";
  function lambda$person(person) {
    let x = property_get(person, "x");
    let y = property_get(person, "y");
    let held = bless_cone_holds(cone, x, y);
    return held;
  }
  let seen = list_filter(people, lambda$person);
  let view = bless_view_of_people(seen);
  return view;
}
