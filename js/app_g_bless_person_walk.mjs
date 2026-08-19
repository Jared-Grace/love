import { arguments_assert } from "./arguments_assert.mjs";
import { multiply } from "./multiply.mjs";
import { not } from "./not.mjs";
import { property_get } from "./property_get.mjs";
import { random } from "./random.mjs";
import { bless_pause_is } from "./bless_pause_is.mjs";
import { app_g_bless_person_step } from "./app_g_bless_person_step.mjs";
export function app_g_bless_person_walk(world, person) {
  arguments_assert(arguments, 2);
  ("One person goes about their business for as long as the game is open - a step, their");
  ("own wait, and a step again.");
  ("The wait is THEIRS. One clock ticking for everybody moves the whole crowd at the same");
  ("instant, and that reads as a formation however randomly each of them picks a");
  ("direction; the giveaway is not where they go, it is that they all go at once. A person");
  ("with their own timer is walking at their own speed, which is what a street looks like.");
  ("They start after a fraction of one of their own waits rather than straight away, so");
  ("even two people who happen to walk at exactly the same speed are out of step with each");
  ("other for good. Started together they would stay together for the rest of the game,");
  ("because nothing afterwards would ever pull them apart.");
  ("A pause is asked for at every step and is not a thing a person IS, so the person who");
  ("stood still just now is as likely as anybody to walk next. See the question itself for");
  ("why that matters.");
  ("Each wait is asked for as the one before it ends, rather than by a loop that waits.");
  ("Written as a loop this would be a run that never finishes, and every caller of it");
  ("would either have to wait for a person to stop walking - which they never do - or");
  ("leave a promise hanging that nothing will ever answer. Asking for the next step from");
  ("inside the last one hands control back each time, so starting somebody walking is a");
  ("thing that finishes.");
  let pace = property_get(person, "pace");
  function stepped() {
    let fraction = random();
    let pausing = bless_pause_is(fraction);
    let walking = not(pausing);
    if (walking) {
      app_g_bless_person_step(world, person);
    }
    setTimeout(stepped, pace);
  }
  let left = random();
  let first = multiply(left, pace);
  setTimeout(stepped, first);
}
