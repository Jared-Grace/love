import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { null_is } from "./null_is.mjs";
export function app_g_hero_killer(hero) {
  arguments_assert(arguments, 1);
  ("The evil person, but only once they have killed somebody - otherwise nothing.");
  ("Before their first killing they are one of the crowd in every way the player can see: no mark, no arrow pointing at them, no fire for a tap on them and no dark power. The hunt has already begun, but the evil is not theirs to be known by until they have done it.");
  let evil = property_get(hero, "evil");
  if (null_is(evil)) {
    return null;
  }
  let killed = property_get(evil, "killed");
  if (killed) {
    return evil;
  }
  return null;
}
