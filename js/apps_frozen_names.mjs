import { apps_frozen } from "./apps_frozen.mjs";
export function apps_frozen_names() {
  "The name of every app that must not be changed in prod or deleted, for a check that has a name in hand.";
  "It used to turn entry points into names and now has nothing left to turn, because the list is spelled as names. Kept all the same: six callers ask for it by this name, and what it means to them - give me the frozen ones as names - stays true whichever way the list happens to be written. Should the list ever go back to holding entry points, this is again the one place that knows it.";
  let names = apps_frozen();
  return names;
}
