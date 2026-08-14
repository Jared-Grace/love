import { g_profile_target_shares } from "./g_profile_target_shares.mjs";
import { object_property_names } from "./object_property_names.mjs";
import { property_get } from "./property_get.mjs";
import { property_set } from "./property_set.mjs";
import { less_than } from "./less_than.mjs";
import { list_add } from "./list_add.mjs";
import { list_sum } from "./list_sum.mjs";
import { add } from "./add.mjs";
import { equal } from "./equal.mjs";
import { divide } from "./divide.mjs";
import { multiply } from "./multiply.mjs";
export function g_profiles_deal_weights(remaining, owed, left) {
  "One weight per person still in the deck, fitted so that the next card drawn moves every axis at once toward what the cast is still owed.";
  "Fitted rather than calculated, because the axes are NOT independent. A share can be written for gender and a share for age, but the deck holds no row for every pairing of them - the sieve withholds Roman office from women, and marriage and children from the young - so a weight worked out one axis at a time lands right on that axis and wrong on the next. Rescaling each axis in turn, over and over, is what lets all seven come out near their share together.";
  "Rescaling one axis unsettles the ones already done, which is why it repeats rather than passing once. Four passes was measured: the spread stops moving after about that, and at four every one of the forty-seven values landed within two points of its share.";
  "OWED is counted down as cards leave, so this is asked afresh for every draw. That is the whole reason the deal hits its target where a single fitting did not - a group that is running short pulls harder as it empties, and one already satisfied stops pulling. Fitted once against the whole deck instead, the scarce groups were drained early and came out five to nine points light.";
  "A group owed nobody is floored rather than zeroed. Zero would multiply that person's weight away for good, and the same person is still wanted by the six other axes - so it has to become unlikely without becoming impossible.";
  let shares = g_profile_target_shares();
  let names = object_property_names(shares);
  let groups = {};
  for (let name of names) {
    let table = property_get(shares, name);
    let values = object_property_names(table);
    let by_value = {};
    for (let value of values) {
      property_set(by_value, value, []);
    }
    for (let index = 0; less_than(index, remaining.length); index++) {
      let person = remaining[index];
      let held = property_get(person, name);
      let bucket = property_get(by_value, held);
      list_add(bucket, index);
    }
    property_set(groups, name, by_value);
  }
  let weights = [];
  for (let index = 0; less_than(index, remaining.length); index++) {
    list_add(weights, 1);
  }
  let passes = 4;
  let smallest = 0.000000000001;
  for (let pass = 0; less_than(pass, passes); pass++) {
    for (let name of names) {
      let by_value = property_get(groups, name);
      let axis_owed = property_get(owed, name);
      let values = object_property_names(by_value);
      let total = list_sum(weights);
      for (let value of values) {
        let bucket = property_get(by_value, value);
        let current = 0;
        for (let index of bucket) {
          current = add(current, weights[index]);
        }
        let gone = equal(current, 0);
        if (gone) {
          continue;
        }
        let still = property_get(axis_owed, value);
        let overdrawn = less_than(still, 0);
        if (overdrawn) {
          still = 0;
        }
        let share = divide(still, left);
        let wanted = multiply(share, total);
        let scale = divide(wanted, current);
        let satisfied = equal(scale, 0);
        if (satisfied) {
          scale = smallest;
        }
        for (let index of bucket) {
          weights[index] = multiply(weights[index], scale);
        }
      }
    }
  }
  return weights;
}
