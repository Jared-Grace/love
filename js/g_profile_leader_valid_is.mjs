import { not } from "./not.mjs";
import { equal } from "./equal.mjs";
import { list_includes } from "./list_includes.mjs";
export function g_profile_leader_valid_is(profile) {
  "Whether somebody with this profile could be the one convert a plant is left with as its elder.";
  "The leader is not a longer arc of the same kind. They are the person the room is handed to, so 1 Timothy 3 and Titus 1 say who they may be, and this is that sieve.";
  "Each rule says WHY, because a rule with no reason cannot be corrected by somebody who knows better. What is NOT here matters as much: nothing rules out a bondservant, an official or a soldier. Galatians 3 verse 28 puts slave and free in one body, Cornelius was a centurion, and no passage withholds this from either - so no rule was written for them.";
  "Not a recent convert (1 Timothy 3 verse 6) is not a rule here either, because it is not a fact about the person. It is time, and the arc already spends it - the leader is discipled over three quarters of the plant's days.";
  let gender = profile.gender;
  let age = profile.age;
  let marriage = profile.marital_status;
  ("The husband of one wife - 1 Timothy 3 verse 2 and Titus 1 verse 6 both name the overseer that way, and 1 Timothy 2 verse 12 stands immediately before it.");
  let b = equal(gender, "male");
  if (not(b)) {
    return false;
  }
  ("He manages his own household well (1 Timothy 3 verses 4 and 5), which is the trust the room is handed on. Single and betrothed keep no household yet, so the qualification has nothing to look at.");
  ("Widowed is kept. He kept one, and the phrase is about being faithful to one wife rather than about having one now - a widower has not stopped being the husband of one.");
  let household = ["married", "widowed"];
  let b2 = list_includes(household, marriage);
  if (not(b2)) {
    return false;
  }
  ("An elder is an ELDER - presbuteros is an older man, and the same verses want somebody already proven rather than somebody starting.");
  if (equal(age, "teenager")) {
    return false;
  }
  return true;
}
