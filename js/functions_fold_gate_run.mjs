import { functions_duplicates_groups_unmarked } from "./functions_duplicates_groups_unmarked.mjs";
import { subtract } from "./subtract.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { list_empty_is_assert_json } from "./list_empty_is_assert_json.mjs";
import { functions_fold_sites } from "./functions_fold_sites.mjs";
import { fold_pairs_split } from "./fold_pairs_split.mjs";
import { property_get } from "./property_get.mjs";
import { list_join_comma } from "./list_join_comma.mjs";
import { fn_name } from "./fn_name.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export async function functions_fold_gate_run() {
  "Gate: nothing in the repo writes out by hand what a function here already does, and nothing here is two functions writing out each other. Throws so the dispatcher seam exits nonzero.";
  "It holds at none rather than at a baseline, and it can, because the first kind has a mechanical repair that preserves behaviour and the second was cleared before this was written - so the answer is never a wider list.";
  "A one-time sweep was tried first and did not hold. Forty-two sites were folded flat, and a single afternoon of ordinary work by other hands put one back - which is the argument for a gate rather than a habit: nobody can remember to re-ask, and whoever writes a new site is exactly the person who does not know the function already exists.";
  "One walk of every function answers both, so both are asked here rather than in a gate each. The walk is the whole cost; splitting what it found is free.";
  "Only the function that wrote the body out is accused. The function whose body was copied did nothing at all, and it is usually a small atom every app ships - so spelling its name in the complaint read as an accusation against every app at once. One list atom named that way held a whole app out of a deployment for a hand-written body in another app entirely.";
  "So the copied-from names travel in the hint, where the reader of a complaint already knows not to look for offenders, and nothing about them is lost to whoever is fixing it.";
  "A pair every member of which is marked as alike on purpose is not accused. The mark already means that in the reading that groups same-shaped functions, and a mark meaning one thing there and nothing here would leave a person who wrote it down with no way to make this gate green except the collapse the mark exists to refuse.";
  "How many pairs the mark excused travels out with the verdict, because none found and every one of them meant would otherwise read the same, and only the count tells a reader which they are looking at.";
  let sites = await functions_fold_sites();
  let split = fold_pairs_split(sites);
  let soundable = property_get(split, "soundable");
  let mutual = property_get(split, "mutual");
  let unmarked = await functions_duplicates_groups_unmarked(mutual);
  let meant = subtract(mutual.length, unmarked.length);
  let inside = list_map_property(soundable, "f");
  let copied = list_map_property(soundable, "x");
  for (let f of inside) {
    console.log("hand-written body  inside  " + f);
  }
  for (let pair of unmarked) {
    console.log("each other's definition  " + list_join_comma(pair));
  }
  console.log("hand-written bodies: " + soundable.length);
  console.log("pairs defining each other: " + unmarked.length);
  console.log("pairs meant to be alike: " + meant);
  let f_name = fn_name("function_replace");
  let f_name3 = fn_name("function_duplicate_kind_parallel");
  list_empty_is_assert_json(unmarked, {
    hint: text_combine_multiple([
      "each pair here is two functions written as each other's definition - keep whichever name reads better, move any assert or prose the other carried onto it, and point everything at it with ",
      f_name,
      ", or if the two are one arithmetic asked of different arguments, mark every one of them with ",
      f_name3,
    ]),
  });
  let f_name2 = fn_name("functions_fold_repair");
  let result = list_join_comma(copied);
  list_empty_is_assert_json(inside, {
    hint: text_combine_multiple([
      "each of these writes out a function's body instead of calling it - ",
      f_name2,
      " folds every one of them and commits each under its own name. The bodies written out, in the same order, are ",
      result,
    ]),
  });
  let r = {
    soundable: 0,
    mutual: 0,
    meant,
  };
  return r;
}
