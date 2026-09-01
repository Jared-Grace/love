import { property_get } from "./property_get.mjs";
import { list_size } from "./list_size.mjs";
import { list_empty_not_is } from "./list_empty_not_is.mjs";
import { app_shared_name_prefixed } from "./app_shared_name_prefixed.mjs";
import { log_console } from "./log_console.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { list_empty_is_assert_json } from "./list_empty_is_assert_json.mjs";
export function gloss_chapters_offenders_assert(walked, store, fault) {
  "Throw if a walk over a gloss store came back with any offending chapter, naming the app it belongs to, the store, the fault, how many chapters offended, how many were reached, and the offenders themselves. Hand back the clean verdict otherwise.";
  "Every gate over one of these stores ends the same way, because the shape of the answer is the same: a count of what was walked and a list of what was wrong with it. Only the store's name and the sentence describing the fault differ, so those are the two things asked for and the rest is written once.";
  "$plain store";
  "$plain fault";
  "both are words for a human reading a failure, and the fault sentence names nothing that runs.";
  "The wording of the fault comes from the caller because only the caller knows what it went looking for. A message assembled here out of a gate's own name would say what the gate is called rather than what is wrong with the chapter.";
  "How many chapters were reached travels out with the verdict, red or green. These stores are folders read at the moment of asking, so an empty answer would otherwise read the same whether every chapter came back clean or the folder had moved and none was opened at all.";
  "THE COMPLAINT IS A RECORD AND NOT A SENTENCE, AND EVERY WORD OF IT EXCEPT THE OFFENDING CHAPTERS GOES UNDER THE HINT. What a red gate says is read back afterwards for the function names in it, and an app whose bundle carries one of those names is held out of its deployment. The fault sentence these gates hand over names the command that fixes the chapter - which is exactly the wrong thing to blame, because it is the cure rather than the disease, and every one of these apps ships it. Under the hint it reaches the person reading and nobody else: the hint is dropped before the names are read. The chapters stay outside it because they are the ones actually at fault, and a chapter is not a function, so naming them accuses nothing.";
  "ACCUSING NOTHING IS NOT THE SAME AS ACCUSING NOBODY, AND THAT IS WHY THE APP IS NAMED HERE. A chapter kept out of the hint blames no innocent command, which was the whole point of putting the rest under it - but it also leaves the complaint with no function name in it at all, and a red gate naming no function cannot be placed against any one app, so a deployment holds back every app there is rather than the one at fault. Six gates stand on this, each of them about a single app, and all six were stopping all thirty four. The store is that app's own short name, so the name to say was already in hand.";
  "The app is spelled as its function rather than as the short name, because the list it is matched against is a list of function names. It is said only when something is wrong, so a gate that passes still costs nothing but its walk, and it is said apart from the hint so that the one word meant as an accusation survives the dropping that the rest is there to receive.";
  let chapters = property_get(walked, "chapters");
  let offenders = property_get(walked, "offenders");
  let count = list_size(offenders);
  let any = list_empty_not_is(offenders);
  if (any) {
    let f_name = app_shared_name_prefixed(store);
    log_console(f_name);
  }
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
