import { arguments_assert } from "./arguments_assert.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { list_includes } from "./list_includes.mjs";
export function giveaway_psalms_item_withheld_why_or_null(item) {
  arguments_assert(arguments, 1);
  ("$plain item");
  ("Why one box of the psalms giveaway is being kept off the shelf for now, said in the words a reader would be owed - and nothing, when there is no reason to keep it back.");
  ("★ SEVEN BOXES HOLD A PSALM'S PAINTINGS AND A PSALM'S WORDS AND NO SINGING, AND THE DECISION ON 2026-10-14 WAS TO WAIT. Psalms 61 to 67 were in exactly that state, with eleven to twenty-five pictures each. Nothing about such a box is broken - its title names its psalm, which stays true, and the sentence underneath counts only the files that are really in it - so no check would ever have caught it and no check should. It is a judgment about what a box ought to promise somebody who opens it, and the judgment was that a psalm with no psalm sung in it is thinner than this shelf should offer.");
  ("★ THE DECISION IS WRITTEN HERE RATHER THAN REMEMBERED, BECAUSE THE THING IT HAS TO SURVIVE IS AN UPLOAD WRITTEN LATER BY SOMEBODY WHO WAS NOT ASKED. The boxes are assembled, named, described and checked from three directions; the only step missing is the handing over, and it will walk the whole shelf. A held-back box that is only held back in somebody's head goes up with the rest, under a name the host will never let anybody change. So the hold lives one call away from the walk.");
  ("★ IT SAYS WHY RATHER THAN YES OR NO, BECAUSE WAITING IS NOT THE SAME AS BEING UNFIT AND THE DIFFERENCE IS THE WHOLE OF IT. The word for now is doing real work: the day Psalm 61 is sung, this box stops being held back by itself, with nothing to remember and nothing to clear. A caller that is told why can say so, print it, or decide the reason does not apply to what it is doing; a caller handed a bare refusal can only obey it.");
  ("It is handed a built box rather than reading the record, so a box can be made up and the hold shown to fire, and so the one thing it asks about - what is actually in the box - is asked of the box itself.");
  let kinds = list_map_property(item.files, "kind");
  let sung = list_includes(kinds, "song");
  if (sung) {
    return null;
  }
  let why = "nothing in it is sung yet";
  return why;
}
