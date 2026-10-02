import { arguments_assert } from "./arguments_assert.mjs";
import { g_generate_upload_drifted } from "./g_generate_upload_drifted.mjs";
import { app_ceb_bible_gloss_generate } from "./app_ceb_bible_gloss_generate.mjs";
export async function app_ceb_bible_gloss_chapters_drifted() {
  "Which chapters of the Cebuano gloss have been changed since they were last carried up to readers, and which chapters nothing has accounted for - asked of the disk alone, reaching nothing over the network.";
  "ASK THIS BEFORE CARRYING THE WHOLE STORE UP AGAIN. Sending all of it took the better part of an hour and could say nothing afterwards about whether any of it had been needed. This answers the same question in a walk of two folders, so a send becomes something decided rather than something hoped.";
  "EVERY CHAPTER READS AS UNACCOUNTED-FOR UNTIL IT HAS BEEN SENT ONCE SINCE THE RECORDING EXISTED, AND THAT IS THE TRUTH RATHER THAN A FAULT. Nothing was written down before, so nothing here can claim to know what readers were given. The first answer worth acting on is the one after the next full send, and until then a long list of unaccounted-for chapters is this saying honestly that it does not know.";
  arguments_assert(arguments, 0);
  let r = await g_generate_upload_drifted(app_ceb_bible_gloss_generate);
  return r;
}
