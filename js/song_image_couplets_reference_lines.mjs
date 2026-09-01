import { arguments_assert } from "./arguments_assert.mjs";
import { song_image_couplets } from "./song_image_couplets.mjs";
import { not_equal } from "./not_equal.mjs";
import { song_image_couplet_references } from "./song_image_couplet_references.mjs";
import { list_includes } from "./list_includes.mjs";
import { list_join_space } from "./list_join_space.mjs";
import { list_add_multiple } from "./list_add_multiple.mjs";
export function song_image_couplets_reference_lines(reference) {
  arguments_assert(arguments, 1);
  ("$plain reference");
  ("The sung lines of this hymn that rest on one passage of scripture, in the order the hymn sings them, each couplet given both as its two halves and as the two joined.");
  ("IT IS THE OTHER DIRECTION OF WHAT IS ALREADY WRITTEN DOWN, AND NOTHING MORE THAN THAT. The hymn is glossed couplet by couplet, each naming the passages its couplet leans on, which answers what a couplet rests on. Choosing which translation to quote at a passage asks the opposite question - which lines are listening at it - and there was no way to ask it. Both readings come off the same glosses, so neither can drift from the other.");
  ("A COUPLET IS HANDED BACK THREE WAYS - FIRST HALF, SECOND HALF, AND THE TWO JOINED - BECAUSE THE HALVES ALONE ARE TOO SHORT TO TELL TRANSLATIONS APART. What is counted at the far end is the longest run of words a line and a verse say the same way. Measured 2026-09-01 this hymn sings sixty four halves and every one of them is two, three or four words, ten of them two - so against twenty two English translations a half line can only ever sort them into three or five heaps, and nearly all of them tie. A tie leaves the passage on the usual translation, so counting halves alone would have chosen almost nothing.");
  ("THE JOINED LINE IS ADDED RATHER THAN PUT IN THEIR PLACE, and that is what keeps it honest. The counting keeps whichever line it hears loudest and never averages them, so a joined line can only ever raise a score, and only where the verse really does say those words one after another. What it buys is a run of up to eight words where a half offered four. What it costs is that such a run crosses the turn between the halves, which the ear hears as a small break - so the joined reading claims a little more closeness than is really sung. That is worth paying here because a couplet is sung as one thought, and because the alternative is a count that cannot separate anything.");
  ("A REPEATED COUPLET IS PASSED OVER, because it sings words already on this list and the passage behind them does not change on the second hearing. Carrying it again would put the same words in twice, and the counting keeps whichever line it hears loudest - so a duplicate can only ever tie with itself.");
  ("A passage nothing rests on is answered with an empty list rather than a refusal, which is the ordinary state while a hymn is still being glossed and is not a fault worth stopping for.");
  let couplets = song_image_couplets();
  let resting = [];
  for (let couplet of couplets) {
    let repeated = not_equal(couplet.same_as, 0);
    if (repeated) {
      continue;
    }
    let named = song_image_couplet_references(couplet.n);
    let rests = list_includes(named, reference);
    if (rests) {
      let joined = list_join_space([couplet.first, couplet.second]);
      list_add_multiple(resting, [couplet.first, couplet.second, joined]);
    }
  }
  return resting;
}
