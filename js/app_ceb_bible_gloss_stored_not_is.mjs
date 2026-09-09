import { arguments_assert } from "./arguments_assert.mjs";
import { app_ceb_bible_gloss_stored_is } from "./app_ceb_bible_gloss_stored_is.mjs";
import { not } from "./not.mjs";
export async function app_ceb_bible_gloss_stored_not_is() {
  arguments_assert(arguments, 0);
  ("Whether the Cebuano gloss store is missing from the disk rather than there to be read.");
  ("The drive the store sits on is not always mounted, so every gate over it opens by asking whether it is there and then acting on the answer turned round: a store that is not there is passed over, and only a store that is there is judged. Ten of them asked it the first way and turned it round on the next line, which is one question asked twice over. This is the question they were each about to ask.");
  let stored = await app_ceb_bible_gloss_stored_is();
  let unread = not(stored);
  return unread;
}
