import { arguments_assert } from "./arguments_assert.mjs";
import { gloss_store_stored_is } from "./gloss_store_stored_is.mjs";
import { app_ceb_bible_gloss_generate } from "./app_ceb_bible_gloss_generate.mjs";
export async function app_ceb_bible_gloss_stored_is() {
  "Whether the Cebuano gloss store is on the disk to be read at all.";
  "The store sits on a drive that is not always mounted. A sweep over a folder that is not there finds no chapters, and so finds nothing wrong inside them - which is the same answer it gives for a store somebody has finished repairing. Never looked at and nothing wrong must not share one answer, and a ratchet handed the second where the first was true would drop every offence it was holding and call that a repair.";
  "Which store is asked about is all this holds now. Asking is the same two steps whichever store it is, so the steps are next door and this says only which one.";
  arguments_assert(arguments, 0);
  let stored = await gloss_store_stored_is(app_ceb_bible_gloss_generate);
  return stored;
}
