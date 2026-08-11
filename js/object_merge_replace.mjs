import { object_merge_generic } from "./object_merge_generic.mjs";
export function object_merge_replace(to, from) {
  "Puts every property of the second object onto the first, over the top of whatever was there before";
  "The third of the three ways of merging, and the one for a value that is rebuilt rather than remembered - a list made fresh each time is a different thing from the identical list made a moment ago, so neither refusing an existing property nor insisting the two are the same can be asked of it.";
  "Its two neighbours are the ones to reach for first. Refusing outright catches two different owners writing the same name; insisting they match catches the same owner changing its mind. This one catches nothing, so it is the right choice only where being written again is the ordinary course of things.";
  object_merge_generic("replace", to, from);
}
