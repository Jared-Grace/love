import { arguments_assert } from "./arguments_assert.mjs";
export function ebible_verse_gaps_critical_text_omitted() {
  "The verses a translation may leave out on purpose because the manuscripts its editors follow do not carry them.";
  arguments_assert(arguments, 0);
  ("A page skipping a number is not by itself a fault, and this is the largest reason why. These sixteen verses are in the later Greek manuscripts the King James was made from and not in the earlier ones the modern critical editions are made from, so a translation following the earlier ones prints the number before and the number after and nothing between. That is the translation's own decision about its text, not something its publisher did to it.");
  ("Named rather than counted, which is the whole point of the list existing. The obvious way to tell a tradition from a fault is to ask how many translations share it and call the widely shared ones deliberate, but that needs a number nobody can defend - a real fault shared by seven translations is excused and a real tradition held by two is reported. These sixteen were found by counting and then recognised: laying the corpus out by how many translations share each gap, everything shared by eight or more was one of these and nothing else was. So the count found the list, and the list replaced the count.");
  ("The list holds what has actually been seen in the translations we carry, so it is not the whole of what could belong here. Luke 22:43-44, John 7:53-8:11 and the long ending of Mark are omitted on the same grounds elsewhere, and are absent from this list only because no translation in the corpus renumbers around them. A new gap that looks like a member of this class is a question to ask, never a reason to widen the list from memory - a name added without having been measured excuses a fault nobody looked at.");
  let omitted = [
    "MAT17:21",
    "MAT18:11",
    "MAT23:14",
    "MRK07:16",
    "MRK09:44",
    "MRK09:46",
    "MRK11:26",
    "MRK15:28",
    "LUK17:36",
    "LUK23:17",
    "JHN05:4",
    "ACT08:37",
    "ACT15:34",
    "ACT24:7",
    "ACT28:29",
    "ROM16:24",
  ];
  return omitted;
}
