import { arguments_assert } from "./arguments_assert.mjs";
import { bless_view_people } from "./bless_view_people.mjs";
import { bless_person_blessed_is } from "./bless_person_blessed_is.mjs";
import { not } from "./not.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { bless_view_of_people } from "./bless_view_of_people.mjs";
import { list_random_item } from "./list_random_item.mjs";
export function bless_view_discerned(blessed, everyone) {
  arguments_assert(arguments, 2);
  ("One person on the street who has not been prayed for, drawn from all of them - the");
  ("answer to the prayer asking God who to go to next.");
  ("It is the one question this game refuses to answer for free. Who is left in a house the");
  ("player has already opened is pointed at, because finding the FIRST person in a house is");
  ("meant to be the discovery and the rest are meant to be aimed at. So a player who has");
  ("finished everything they started has no arrow anywhere and no way to be told where to");
  ("begin again except by walking until somebody dark walks past.");
  ("Praying is how they find out, which is the whole reason it may be answered here at all.");
  ("The player does not pick who is next and neither does the game hand it over for");
  ("nothing: they ask, and the answer comes. That is the day walk of the gospel game acted");
  ("out on a street, and it is the same prayer said in the same words.");
  ("DRAWN rather than reasoned out. Nearest would make the prayer a compass and the answer");
  ("would change every time the player took a step; furthest along would make it a second");
  ("opinion about the question the arrow already answers. A person the player would not");
  ("have chosen is the point - it is the one place in this game where somebody else picks.");
  ("Asked of the WHOLE street and not of what the player can see, because a prayer is not");
  ("limited by where somebody happens to be facing. The answer is then often somebody out");
  ("of sight, which is exactly what the arrow at the edge of the screen is for.");
  ("Anybody covered by a prayer over their house or their block is left out along with");
  ("anybody prayed for by name. They have been prayed for; sending the player back to them");
  ("would be answering the prayer with work already done.");
  ("An empty answer when everybody has been prayed for, rather than a person picked anyway.");
  ("There is nothing left to discern, and a street that is finished should say so by having");
  ("no arrow on it.");
  let people = bless_view_people(everyone);
  function person_left_is(person) {
    let prayed = bless_person_blessed_is(blessed, person);
    let left = not(prayed);
    return left;
  }
  let left = list_filter(people, person_left_is);
  let none = list_empty_is(left);
  if (none) {
    let empty = bless_view_of_people(left);
    return empty;
  }
  let chosen = list_random_item(left);
  let view = bless_view_of_people([chosen]);
  return view;
}
