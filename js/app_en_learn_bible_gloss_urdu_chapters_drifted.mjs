import { arguments_assert } from "./arguments_assert.mjs";
import { g_generate_upload_drifted } from "./g_generate_upload_drifted.mjs";
import { app_en_learn_bible_gloss_urdu_generate } from "./app_en_learn_bible_gloss_urdu_generate.mjs";
export async function app_en_learn_bible_gloss_urdu_chapters_drifted() {
  "Which chapters of the English words explained in Urdu have been changed since they were last carried up to readers, and which chapters nothing has accounted for - asked of the disk alone, reaching nothing over the network.";
  "THIS STORE IS THE ONE WHERE THE DIVERGENCE KEEPS HAPPENING, BECAUSE ITS WORDINGS GET RETIRED. A wording settled on later is applied to the store, and until now the only way to carry that to a reader was to send every chapter again. This names the chapters a settling actually changed, so the sending can be as small as the change was.";
  "EVERY CHAPTER READS AS UNACCOUNTED-FOR UNTIL IT HAS BEEN SENT ONCE SINCE THE RECORDING EXISTED, AND THAT IS THE TRUTH RATHER THAN A FAULT. Nothing was written down before, so nothing here can claim to know what readers were given.";
  arguments_assert(arguments, 0);
  let r = await g_generate_upload_drifted(
    app_en_learn_bible_gloss_urdu_generate,
  );
  return r;
}
