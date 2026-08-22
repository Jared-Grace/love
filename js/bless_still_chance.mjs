import { arguments_assert } from "./arguments_assert.mjs";
export function bless_still_chance(walker) {
  arguments_assert(arguments, 1);
  ("How likely this kind of person is to stop and stand about instead of taking their next");
  ("step.");
  ("The two kinds want opposite answers, which is why it is asked of the kind rather than");
  ("of the street. Somebody out walking who kept stopping is not out walking; somebody");
  ("outside their own front door who kept stepping is not outside their own front door.");
  ("One number for both would have made the walkers dawdle to say that the neighbours were");
  ("standing about, or made the neighbours pace to say that the walkers were getting");
  ("somewhere.");
  ("A walker stops about one tick in ten, which is enough that no two walkers stay in step");
  ("and few enough that they plainly have somewhere to be.");
  ("Somebody at home stops about one tick in three, so they are MOSTLY moving even though");
  ("standing there is their whole business. That is not a contradiction: a person on their");
  ("own doorstep still shifts about constantly, and it is the size of what they do rather");
  ("than the frequency of it that says they are at home - they move a pace and come back,");
  ("while a walker's paces add up and take them out of sight.");
  ("It used to be the other way round, stopping more often than not, and the street was");
  ("wrong for it. Three people in four live at a door, so their answer is very nearly the");
  ("street's answer, and at better than even odds each of them was standing through most of");
  ("a stretch of turns - which read as a crowd waiting for something rather than a crowd");
  ("going about its day. A pavement is only still when everybody on it has stopped to");
  ("listen to somebody, and nobody here is speaking.");
  if (walker) {
    let going = 0.1;
    return going;
  }
  let home = 0.3;
  return home;
}
