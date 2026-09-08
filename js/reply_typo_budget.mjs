import { floor } from "./floor.mjs";
import { divide } from "./divide.mjs";
export function reply_typo_budget(word) {
  "How many mistakes one written-out word will forgive: one for every five letters, counted down.";
  "★ THIS COUNTS MISTAKES, NOT WHAT THEY COST. The costs beside it only rank two readings that are both allowed; this is what decides whether a reading is allowed at all. Keeping the two apart is what lets a cost be re-argued without quietly widening what matches.";
  "The rule is length-proportional because a short word has no room to be wrong in. `usa` and `uk` forgive nothing, which is right: every one-letter change to `usa` is another word. `from` forgives nothing either, so `form` is not read as `from` - a real word that a real sentence could mean. `philippines` forgives two, and needs to, because it is the word in this whole rule set that people most often spell differently.";
  let p = divide(word.length, 5);
  let allowed = floor(p);
  return allowed;
}
