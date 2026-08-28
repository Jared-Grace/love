import { property_get } from "./property_get.mjs";
import { list_size } from "./list_size.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { list_empty_is_assert_json } from "./list_empty_is_assert_json.mjs";
export function gloss_chapters_offenders_assert(walked, store, fault) {
  "Throw if a walk over a gloss store came back with any offending chapter, naming the store, the fault, how many chapters offended, how many were reached, and the offenders themselves. Hand back the clean verdict otherwise.";
  "Every gate over one of these stores ends the same way, because the shape of the answer is the same: a count of what was walked and a list of what was wrong with it. Only the store's name and the sentence describing the fault differ, so those are the two things asked for and the rest is written once.";
  "$plain store";
  "$plain fault";
  "both are words for a human reading a failure, and neither names anything that runs.";
  "The wording of the fault comes from the caller because only the caller knows what it went looking for. A message assembled here out of a gate's own name would say what the gate is called rather than what is wrong with the chapter.";
  "How many chapters were reached travels out with the verdict, red or green. These stores are folders read at the moment of asking, so an empty answer would otherwise read the same whether every chapter came back clean or the folder had moved and none was opened at all.";
  "THE COMPLAINT IS A RECORD AND NOT A SENTENCE, AND EVERY WORD OF IT EXCEPT THE OFFENDING CHAPTERS GOES UNDER THE HINT. What a red gate says is read back afterwards for the function names in it, and an app whose bundle carries one of those names is held out of its deployment. The fault sentence these gates hand over names the command that fixes the chapter - which is exactly the wrong thing to blame, because it is the cure rather than the disease, and every one of these apps ships it. Under the hint it reaches the person reading and nobody else: the hint is dropped before the names are read. The chapters stay outside it because they are the ones actually at fault, and a chapter is not a function, so naming them accuses nothing.";
  let chapters = property_get(walked, "chapters");
  let offenders = property_get(walked, "offenders");
  let count = list_size(offenders);
  let hint = text_combine_multiple([
    store,
    ": ",
    count,
    " of ",
    chapters,
    " authored chapters ",
    fault,
  ]);
  list_empty_is_assert_json(offenders, {
    hint,
  });
  let r = {
    chapters,
    offenders: 0,
  };
  return r;
}
