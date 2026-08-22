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
  ("Somebody at home stops more often than not, because their whole business IS standing");
  ("there. They are still given the odd step, which is what keeps them from being scenery -");
  ("shifting a pace along your own doorstep is a thing a person does, and a person who has");
  ("not moved a tile in ten minutes has become part of the building.");
  if (walker) {
    let going = 0.1;
    return going;
  }
  let home = 0.55;
  return home;
}
