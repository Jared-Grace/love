import { arguments_assert } from "./arguments_assert.mjs";
import { gloss_gate_told_chapters } from "./gloss_gate_told_chapters.mjs";
import { app_ceb_bible_gloss_generate } from "./app_ceb_bible_gloss_generate.mjs";
export async function app_ceb_bible_gloss_gate_told_chapters(told) {
  arguments_assert(arguments, 1);
  ("What a Cebuano gloss gate hands back once its record has been checked: whatever the check said, with how many chapters of this store were walked to reach it standing beside it.");
  ("The count travels out because finding nothing and reaching nothing are the same word otherwise. A gate that walked four hundred and forty-nine chapters and met no offender is clean; a gate that walked none because the drive was not mounted has said nothing at all, and both of them would otherwise answer nought.");
  ("The reading underneath is told which store to count, because there is more than one gloss store and it belongs to none of them. Which one a Cebuano gate counts has one answer, and the nine gates that ask this were each naming it on the same line as the question. Saying it here leaves each of them about its own record.");
  let r = await gloss_gate_told_chapters(app_ceb_bible_gloss_generate, told);
  return r;
}
