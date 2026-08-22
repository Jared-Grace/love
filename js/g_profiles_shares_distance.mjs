import { g_profile_target_shares } from "./g_profile_target_shares.mjs";
import { g_profiles_shares } from "./g_profiles_shares.mjs";
import { object_property_names } from "./object_property_names.mjs";
import { property_get } from "./property_get.mjs";
import { property_get_or } from "./property_get_or.mjs";
import { number_distance } from "./number_distance.mjs";
import { add } from "./add.mjs";
export function g_profiles_shares_distance(profiles) {
  "How far a set of dealt people is from the spread the cast is supposed to have: every value on every axis, its share of this set against its share in the target, added up.";
  "ADDED UP ACROSS ALL AXES INTO ONE NUMBER, because the thing that has to be decided is which of two candidate sets is better and that is a single comparison. Seven numbers would leave whoever asked to weigh an axis against another axis, and every caller would weigh them differently.";
  "A GAP RATHER THAN A DIFFERENCE at each value, so being over on one value cannot pay for being under on another. Signed, a cast that was half again too male and half again too female at once would score as perfect.";
  "IT WALKS THE TARGET'S AXES AND NOT THE SET'S. The target is what is being missed, so a value the target names and nobody in the set holds has to count its whole share against the set - and it is exactly that value the picker is looking for. Walking the set instead would never see it, because it is the one not there.";
  "AN AXIS WEIGHS AS MUCH AS ITS TARGET IS SPREAD, which is not obvious and was got wrong by hand while the cases beside the picker were being written. Compare two people who differ on one axis alone, with nobody else taken, and the total moves by twice the gap between the target shares of the two values: gender's are forty-five and fifty-five, ten apart, so gender can shift that comparison by twenty and never more, while marriage runs sixty against fourteen and can shift it by ninety-two. So somebody watching a run and seeing the picker pass a man over can be right that men are short and still wrong about the answer - what it mends first is whichever axis has the furthest to move.";
  "SMALLER IS BETTER AND NOUGHT IS EXACT, and no set of ordinary size reaches nought - a share of two per cent cannot be held exactly by nine people. So this is for ordering candidates against each other and never for asking whether a cast is good enough.";
  let target = g_profile_target_shares();
  let held = g_profiles_shares(profiles);
  let names = object_property_names(target);
  let total = 0;
  for (let name of names) {
    let wanted = property_get(target, name);
    let actual = property_get_or(held, name, {});
    let values = object_property_names(wanted);
    for (let value of values) {
      let share_wanted = property_get(wanted, value);
      let share_actual = property_get_or(actual, value, 0);
      let gap = number_distance(share_actual, share_wanted);
      total = add(total, gap);
    }
  }
  return total;
}
