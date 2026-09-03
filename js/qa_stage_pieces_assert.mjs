import { arguments_assert } from "./arguments_assert.mjs";
import { list_empty_not_is_assert_json } from "./list_empty_not_is_assert_json.mjs";
import { qa_stage_bundles_short } from "./qa_stage_bundles_short.mjs";
import { list_empty_is_assert_json } from "./list_empty_is_assert_json.mjs";
import { qa_stage_pages_unsettled } from "./qa_stage_pages_unsettled.mjs";
import { list_size } from "./list_size.mjs";
export async function qa_stage_pieces_assert(folder, file_names) {
  "$plain folder";
  "$plain file_names";
  "Refuses the pieces one build has just put in a stage folder if a built file among them calls a name of this repo's own that it does not carry, or a generated page among them would not settle when it was written out again.";
  "IT STANDS WHERE TWO CHECKS USED TO STAND, AND IT STANDS HERE BECAUSE THIS IS THE ONLY PLACE A BUILD IS CERTAIN TO EXIST. Both of them read the folder people work in, and both of them ran in the frozen copy a commit is judged in - which is a copy of what a commit tracks, and a build is tracked by nothing. From the day the working folder moved out of the served one they threw on a folder that was not there, and had measured nothing since. A check about a build cannot live where builds do not.";
  "It reads the pieces themselves rather than the sources they were built from, and that is the whole of what it adds. Every other check reads code, and a source can be perfectly correct while the bundle standing on it is short a whole module. Measured 2026-08-17, a bundle calling a language list it did not carry killed a page on boot with every source check green.";
  "It is asked BEFORE the walk rather than after. The walk takes about half an hour, and a bundle short of a name fails it in a way that reads as a broken lesson rather than as a broken build - so asking first turns half an hour of misreading into a sentence naming the file and the name.";
  "Being handed no piece at all is refused rather than passed. A check given nothing to read answers with the same silent word as a check that found nothing wrong, and this one is reached only after a build claimed to have made something, so an empty list is a build that made nothing rather than a build that came out clean.";
  arguments_assert(arguments, 2);
  list_empty_not_is_assert_json(file_names, {
    folder,
    hint: "this build put no piece at all in the stage folder, so there is nothing here to read back - a check handed nothing says the same word as a check that found nothing wrong, and the two mean opposite things",
  });
  let short = await qa_stage_bundles_short(folder, file_names);
  list_empty_is_assert_json(short, {
    hint: "a file this build just wrote calls a function of this repo's own that it does not carry, so a reader would meet a reference error the first time that line ran - build the app again, and if the names do not come back then the function it asks for has gone and its caller still names it",
    short,
  });
  let unsettled = await qa_stage_pages_unsettled(folder, file_names);
  list_empty_is_assert_json(unsettled, {
    hint: "writing one of these pages out again would change it, and writing that result out again would change it again - so the page never settles and every pass drifts further from what the app wrote",
    unsettled,
  });
  let counted = {
    pieces: list_size(file_names),
  };
  return counted;
}
