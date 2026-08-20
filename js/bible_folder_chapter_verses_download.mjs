import { arguments_assert } from "./arguments_assert.mjs";
import { bible_folder_chapter_verses_outcome } from "./bible_folder_chapter_verses_outcome.mjs";
import { property_get } from "./property_get.mjs";
export async function bible_folder_chapter_verses_download(
  bible_folder,
  chapter_code,
  count,
) {
  "$plain chapter_code";
  "$plain bible_folder";
  "The opening verses of one chapter of one bible, fetched together, in order, with null standing where a verse could not be fetched.";
  "A verse that will not come is kept as a hole rather than dropped, because dropping it closes the gap and the verses either side of it become neighbours that never were. Anything measured across a run of verses would then be measured across a join that is not in the bible.";
  "That also means a chapter shorter than the count asked for simply ends in nulls, which is the honest answer: nothing was read there because there is nothing there.";
  "A chapter that will not come leaves every verse null, which is what asking for each of them separately did when none of them would come. So a bible without this chapter still measures as nothing read rather than stopping whatever asked.";
  "WHICH OF THOSE TWO IT WAS is known one name along and dropped here, because a caller reading a run of verses has nothing to do with the answer and every caller of this reads a run of verses. A caller that is writing down what it found needs it and should ask there instead - counting nulls without it is how a record of how a run went came to be kept as a record of what bibles hold.";
  arguments_assert(arguments, 3);
  let outcome = await bible_folder_chapter_verses_outcome(
    bible_folder,
    chapter_code,
    count,
  );
  let verses = property_get(outcome, "verses");
  return verses;
}
