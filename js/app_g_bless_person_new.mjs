import { arguments_assert } from "./arguments_assert.mjs";
import { list_get_property } from "./list_get_property.mjs";
import { list_random_item } from "./list_random_item.mjs";
import { list_size } from "./list_size.mjs";
import { mod } from "./mod.mjs";
import { random } from "./random.mjs";
import { bless_headings } from "./bless_headings.mjs";
import { bless_pace_ms } from "./bless_pace_ms.mjs";
import { bless_walker_is } from "./bless_walker_is.mjs";
export function app_g_bless_person_new(index, genders) {
  arguments_assert(arguments, 2);
  ("One person, made from their place in the line and nothing else - a picture, a way they");
  ("are facing, a speed of their own, whether they are out walking, and a way they are");
  ("trying to go.");
  ("Nowhere to stand yet, and that is deliberate. Where somebody is set down depends on");
  ("which building they belong to, which depends on their address, which depends on this");
  ("line being finished - so a person is made first and put somewhere afterwards.");
  ("Gender is taken by turns rather than drawn, so the crowd is evenly split however the");
  ("draws happen to fall. The picture within it IS drawn, so two people of the same gender");
  ("standing beside each other are not twins.");
  ("A speed and a kind are drawn ONCE and kept, because both are facts about the person");
  ("rather than about this moment - somebody who changed their mind every step about how");
  ("fast they walk, or about whether they live here, would be nobody in particular.");
  ("Everybody is set facing south, which is where the player is. Where each of them is");
  ("going is their own business from their first step.");
  let gender_count = list_size(genders);
  let turn = mod(index, gender_count);
  let imgs = list_get_property(genders, turn, "imgs");
  let img = list_random_item(imgs);
  let fraction_pace = random();
  let pace = bless_pace_ms(fraction_pace);
  let fraction_kind = random();
  let walker = bless_walker_is(fraction_kind);
  let headings = bless_headings(walker);
  let heading = list_random_item(headings);
  let person = {
    img: img,
    direction: "south",
    pace: pace,
    walker: walker,
    heading: heading,
  };
  return person;
}
