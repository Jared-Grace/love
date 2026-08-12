import { not } from "./not.mjs";
import { equal } from "./equal.mjs";
export function g_profile_leader_valid_is(profile) {
  "Whether somebody with this profile could be the one convert a plant is left with as its elder.";
  "The leader is not a longer arc of the same kind. They are the person the room is handed to, so 1 Timothy 3 and Titus 1 say who they may be, and this is that sieve.";
  "Each rule says WHY, because a rule with no reason cannot be corrected by somebody who knows better. Almost nothing survives as a rule, and that is the finding: the qualifications are about CHARACTER PROVEN OVER TIME, and a deck of circumstances holds neither character nor time. What the deck cannot say belongs in the prompt, which is where it now is.";
  "MARRIAGE was a rule here and was wrong. It rested on the husband of one wife (1 Timothy 3 verse 2), but the Greek is mias gynaikos andra - a ONE-WOMAN MAN - and 1 Timothy 5 verse 9 pays the same phrase back to a widow, enrolled as a one-man woman, who by definition has no husband now. So the phrase asks for faithfulness to one rather than for a marriage in hand. The household argument is the next verses instead (1 Timothy 3 verses 4 and 5), and marital_status cannot carry it: somebody may marry and be widowed inside a week, which the deck records as widowed and which proves nothing at all.";
  "Nothing rules out a bondservant, an official or a soldier either. Galatians 3 verse 28 puts slave and free in one body, Cornelius was a centurion, and no passage withholds this from either.";
  let gender = profile.gender;
  let age = profile.age;
  ("The husband of one wife - 1 Timothy 3 verse 2 and Titus 1 verse 6 both name the overseer that way, and 1 Timothy 2 verse 12 stands immediately before it.");
  let b = equal(gender, "male");
  if (not(b)) {
    return false;
  }
  ("An elder is an ELDER - presbuteros is an older man, and not a recent convert (1 Timothy 3 verse 6) wants somebody already proven. This is the only thing in the deck that measures time at all, so it is the only place the proving can be asked for.");
  if (equal(age, "teenager")) {
    return false;
  }
  return true;
}
