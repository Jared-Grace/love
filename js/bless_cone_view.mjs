import { list_filter } from "./list_filter.mjs";
import { bless_cone_holds_person } from "./bless_cone_holds_person.mjs";
import { bless_view_of_people } from "./bless_view_of_people.mjs";
export function bless_cone_view(cone, people) {
  "The 2-D renderer's answer to who the player can see - the people standing on a tile the";
  "cone holds, handed back as a view the game's brain can read without ever learning that a";
  "cone was involved.";
  "This is one implementation of that question, not the question itself. A 3-D renderer";
  "will answer it from a camera frustum and audio will answer it from a spoken count, and";
  "all three hand back the same shape, which is what keeps one game from becoming two.";
  "A person is seen if the cone holds either square they are on, and a walking person is";
  "on two - the one they are crossing to and the one they have not finished leaving. Read";
  "from the square they are walking to alone, somebody stepping over the edge of the cone";
  "went out of sight the instant their step began, while their picture was still inside it.";
  function lambda$person(person) {
    let held = bless_cone_holds_person(cone, person);
    return held;
  }
  let seen = list_filter(people, lambda$person);
  let view = bless_view_of_people(seen);
  return view;
}
