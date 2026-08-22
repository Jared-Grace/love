import { arguments_assert } from "./arguments_assert.mjs";
import { multiply } from "./multiply.mjs";
import { positive_is } from "./positive_is.mjs";
import { property_get } from "./property_get.mjs";
import { property_set } from "./property_set.mjs";
import { property_subtract_1 } from "./property_subtract_1.mjs";
import { random } from "./random.mjs";
import { bless_pause_is } from "./bless_pause_is.mjs";
import { bless_still_turns } from "./bless_still_turns.mjs";
import { bless_still_wait_ms } from "./bless_still_wait_ms.mjs";
import { app_g_bless_person_step } from "./app_g_bless_person_step.mjs";
import { app_g_bless_person_turn } from "./app_g_bless_person_turn.mjs";
export function app_g_bless_person_walk(world, person) {
  arguments_assert(arguments, 2);
  ("One person goes about their business for as long as the game is open - walking, or");
  ("standing about looking around, and turn about between the two.");
  ("The wait is THEIRS. One clock ticking for everybody moves the whole crowd at the same");
  ("instant, and that reads as a formation however randomly each of them picks a");
  ("direction; the giveaway is not where they go, it is that they all go at once. A person");
  ("with their own timer is walking at their own speed, which is what a street looks like.");
  ("They start after a fraction of one of their own waits rather than straight away, so");
  ("even two people who happen to walk at exactly the same speed are out of step with each");
  ("other for good. Started together they would stay together for the rest of the game,");
  ("because nothing afterwards would ever pull them apart.");
  ("There are two things a person can be doing, and standing still is now one of them");
  ("rather than the absence of the other. A skipped step made a person hold their pose for");
  ("one wait and then carry on, which reads as a walk that caught; a stretch of standing");
  ("and looking about reads as somebody who stopped. It is the same behaviour a person at");
  ("their own front door does all day, so the neighbours and the walkers are running the");
  ("one loop and differ only in how often the draw sends them into it.");
  ("How many turns and how long each is held are asked for as they happen, so a stretch is");
  ("uneven inside itself and no two stretches are alike. The count is kept ON the person");
  ("rather than in this run, because it is a fact about them at this moment - what they are");
  ("doing - and anything asking who is standing about can read it.");
  ("Beginning a stretch takes no wait of its own. The stop is decided and the first turn is");
  ("taken in the same breath, so the moment somebody stops walking is the moment the player");
  ("sees them look somewhere else; a wait in between would have shown a person frozen");
  ("mid-pavement first and explained it afterwards. That call always lands in the standing");
  ("half, because a stretch is never shorter than two turns, so it goes exactly one deep.");
  ("Each wait is asked for as the one before it ends, rather than by a loop that waits.");
  ("Written as a loop this would be a run that never finishes, and every caller of it");
  ("would either have to wait for a person to stop walking - which they never do - or");
  ("leave a promise hanging that nothing will ever answer. Asking for the next step from");
  ("inside the last one hands control back each time, so starting somebody walking is a");
  ("thing that finishes.");
  let pace = property_get(person, "pace");
  let walker = property_get(person, "walker");
  function stepped() {
    let standing = property_get(person, "standing");
    let still = positive_is(standing);
    if (still) {
      app_g_bless_person_turn(person);
      property_subtract_1(person, "standing");
      let held = random();
      let wait = bless_still_wait_ms(pace, held);
      setTimeout(stepped, wait);
      return;
    }
    let fraction = random();
    let pausing = bless_pause_is(fraction, walker);
    if (pausing) {
      let many = random();
      let turns = bless_still_turns(many);
      property_set(person, "standing", turns);
      stepped();
      return;
    }
    app_g_bless_person_step(world, person);
    setTimeout(stepped, pace);
  }
  let left = random();
  let first = multiply(left, pace);
  setTimeout(stepped, first);
}
