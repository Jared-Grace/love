import { greater_than } from "./greater_than.mjs";
import { json_format_to } from "./json_format_to.mjs";
import { list_size } from "./list_size.mjs";
import { property_get } from "./property_get.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function gloss_chapters_offenders_assert(walked, store, fault) {
  "Throw if a walk over a gloss store came back with any offending chapter, naming the store, the fault, how many chapters offended, how many were reached, and the offenders themselves. Hand back the clean verdict otherwise.";
  "Every gate over one of these stores ends the same way, because the shape of the answer is the same: a count of what was walked and a list of what was wrong with it. Only the store's name and the sentence describing the fault differ, so those are the two things asked for and the rest is written once.";
  "$plain store";
  "$plain fault";
  "both are words for a human reading a failure, and neither names anything that runs.";
  "The wording of the fault comes from the caller because only the caller knows what it went looking for. A message assembled here out of a gate's own name would say what the gate is called rather than what is wrong with the chapter.";
  "How many chapters were reached travels out with the verdict, red or green. These stores are folders read at the moment of asking, so an empty answer would otherwise read the same whether every chapter came back clean or the folder had moved and none was opened at all.";
  let chapters = property_get(walked, "chapters");
  let offenders = property_get(walked, "offenders");
  let count = list_size(offenders);
  let any = greater_than(count, 0);
  if (any) {
    let shown = json_format_to(offenders);
    let message = text_combine_multiple([
      store,
      ": ",
      count,
      " of ",
      chapters,
      " authored chapters ",
      fault,
      " - ",
      shown,
    ]);
    throw new Error(message);
  }
  let r = {
    chapters,
    offenders: 0,
  };
  return r;
}
