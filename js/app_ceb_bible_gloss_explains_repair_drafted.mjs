import { gloss_explains_repair_drafted_generic } from "./gloss_explains_repair_drafted_generic.mjs";
import { app_ceb_bible_gloss_generate } from "./app_ceb_bible_gloss_generate.mjs";
export async function app_ceb_bible_gloss_explains_repair_drafted() {
  "The Cebuano word explanations put right for the words standing in the drafts file and for no others, so a batch just authored can be applied without spending the rest of the standing handover.";
  "It takes nothing, because the batch is a file and the store is this app's - the same reason the writer that spreads the batch takes nothing.";
  let r = await gloss_explains_repair_drafted_generic(
    app_ceb_bible_gloss_generate,
  );
  return r;
}
