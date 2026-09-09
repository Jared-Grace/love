import { arguments_assert } from "./arguments_assert.mjs";
import { app_ceb_bible_gloss_roots_disagreeing } from "./app_ceb_bible_gloss_roots_disagreeing.mjs";
import { property_get } from "./property_get.mjs";
export async function app_ceb_bible_gloss_roots_disagreeing_offenders() {
  arguments_assert(arguments, 0);
  ("Just the offending explanations out of the disagreeing-roots reading, for a caller that wants nothing else it carries.");
  ("The reading hands back the offenders together with how much of the vocabulary was consulted to find them, because a count of faults means nothing without the size of what was read. Most callers want only the offenders, and each of them was writing the two lines that ask for the reading and then take that one field out of it. A caller that also reads the consulted count keeps both lines, and this cannot serve it - a call hands back one thing.");
  let disagreeing = await app_ceb_bible_gloss_roots_disagreeing();
  let offenders = property_get(disagreeing, "offenders");
  return offenders;
}
