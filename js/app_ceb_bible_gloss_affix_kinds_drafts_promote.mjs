import { app_ceb_bible_gloss_generate } from "./app_ceb_bible_gloss_generate.mjs";
import { gloss_affix_kinds_drafts_promote_generic } from "./gloss_affix_kinds_drafts_promote_generic.mjs";
export async function app_ceb_bible_gloss_affix_kinds_drafts_promote() {
  "The read Cebuano affix drafts moved into the repairs file, ready for the repair step that puts them in the store.";
  "Delete the drafts that are wrong before running this. Everything left in the drafts file is taken as read, and that is the whole of the reading this loop asks for.";
  let fn = app_ceb_bible_gloss_generate;
  let r = await gloss_affix_kinds_drafts_promote_generic(fn);
  return r;
}
