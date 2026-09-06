import { gloss_repairs_words_write_generic } from "./gloss_repairs_words_write_generic.mjs";
import { app_ceb_bible_gloss_generate } from "./app_ceb_bible_gloss_generate.mjs";
export async function app_ceb_bible_gloss_repairs_words_write() {
  "The batch of newly written Cebuano word explanations waiting in the drafts file spread over every chapter of the gloss store that holds any of them, and added to the handover the repair reads.";
  "It takes nothing, because the batch is a file and the store is this app's. That is what lets it be reached for from the command line at all: an explanation carries commas and full stops, so it could never have been handed over as an argument.";
  let r = await gloss_repairs_words_write_generic(app_ceb_bible_gloss_generate);
  return r;
}
