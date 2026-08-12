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
  let marriage = profile.marital_status;
  let sons = profile.sons;
  let daughters = profile.daughters;
  let servitude = profile.servitude;
  let government = profile.government_role;
  let childless = equal(sons, "none") && equal(daughters, "none");
  ("No woman held a Roman office or served in a legion.");
  if (equal(gender, "female") && not_equal(government, "none")) {
    return false;
  }
  ("A slave held no office and served in no legion.");
  if (equal(servitude, "servant") && not_equal(government, "none")) {
    return false;
  }
  ("Children come of a marriage, and a widow keeps the ones she bore.");
  let bearing = ["married", "widowed"];
  if (not(childless) && not(list_includes(bearing, marriage))) {
    return false;
  }
  ("A girl married in her teens and a young man did not - Roman and Jewish men married in their twenties - so a married teenager is a wife rather than a husband.");
  ("She may be widowed there too. 1 Timothy 5 verses 11 to 14 speaks straight to widows young enough to marry again, so a teenage widow is somebody a book addresses rather than an oddity.");
  ("Nothing here says she is childless. The rule above already withholds children from anyone unmarried, so a married teenager may have borne and an unmarried one cannot.");
  let unwed = ["single", "betrothed"];
  if (
    equal(age, "teenager") &&
    equal(gender, "male") &&
    not(list_includes(unwed, marriage))
  ) {
    return false;
  }
  ("A teenager owns no household, and manumission under thirty gave a lesser standing than this axis means by freed.");
  let settled = ["master", "freed"];
  if (equal(age, "teenager") && list_includes(settled, servitude)) {
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
