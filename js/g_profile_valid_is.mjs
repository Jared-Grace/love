import { equal } from "./equal.mjs";
import { not_equal } from "./not_equal.mjs";
import { not } from "./not.mjs";
import { list_includes } from "./list_includes.mjs";
export function g_profile_valid_is(profile) {
  "Whether a combination of the profile axes describes somebody who could actually have lived in the first century.";
  "The axes multiply out to every combination there is, and most of them are nobody. This is the sieve, kept apart from the axes so a rule can be argued with on its own.";
  "Each rule below says WHY, because a rule with no reason cannot be corrected by somebody who knows better.";
  let gender = profile.gender;
  let age = profile.age;
  let marriage = profile.marriage;
  let children = profile.children;
  let household = profile.household;
  let government = profile.government;
  ("No woman held a Roman office or served in a legion.");
  if (equal(gender, "female") && not_equal(government, "civilian")) {
    return false;
  }
  ("A slave held no office and served in no legion.");
  if (equal(household, "servant") && not_equal(government, "civilian")) {
    return false;
  }
  ("Children come of a marriage, and a widow keeps the ones she bore.");
  let bearing = ["married", "widowed"];
  if (equal(children, true) && not(list_includes(bearing, marriage))) {
    return false;
  }
  ("A teenager has not married yet and has nobody of their own.");
  let unwed = ["single", "betrothed"];
  if (equal(age, "teenager") && not(list_includes(unwed, marriage))) {
    return false;
  }
  if (equal(age, "teenager") && equal(children, true)) {
    return false;
  }
  ("A teenager owns no household, and manumission under thirty gave a lesser standing than this axis means by freed.");
  let settled = ["master", "freed"];
  if (equal(age, "teenager") && list_includes(settled, household)) {
    return false;
  }
  ("Roman office carried a legal minimum age well above the teens.");
  if (equal(age, "teenager") && equal(government, "official")) {
    return false;
  }
  ("A legionary served twenty-five years from about eighteen, so he is discharged long before he is elderly.");
  if (equal(age, "elderly") && equal(government, "soldier")) {
    return false;
  }
  ("Betrothal is the year before a first marriage, so it belongs to the young.");
  let young = ["teenager", "young adult"];
  if (equal(marriage, "betrothed") && not(list_includes(young, age))) {
    return false;
  }
  return true;
}
