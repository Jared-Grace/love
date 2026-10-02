import { arguments_assert } from "./arguments_assert.mjs";
import { g_generate_upload_drifted } from "./g_generate_upload_drifted.mjs";
import { app_original_bible_gloss_generate } from "./app_original_bible_gloss_generate.mjs";
export async function app_original_bible_gloss_chapters_drifted() {
  "Which chapters of the Hebrew and Greek gloss have been changed since they were last carried up to readers, and which chapters nothing has accounted for - asked of the disk alone, reaching nothing over the network.";
  "THIS IS THE CHECK THAT WAS MISSING WHEN A MENDING OF THE STORE REACHED NOBODY. The letters of several chapters were put right in the store after those chapters had been published; the gates that ask whether a chapter is sound read the store, and the gate that asks whether anything is waiting to go up reads which chapters the bucket lacks, so a chapter sound in the store and stale on the screen satisfied all of them. Nothing could name those chapters, so all 476 were sent again.";
  "EVERY CHAPTER READS AS UNACCOUNTED-FOR UNTIL IT HAS BEEN SENT ONCE SINCE THE RECORDING EXISTED, AND THAT IS THE TRUTH RATHER THAN A FAULT. Nothing was written down before, so nothing here can claim to know what readers were given.";
  arguments_assert(arguments, 0);
  let r = await g_generate_upload_drifted(app_original_bible_gloss_generate);
  return r;
}
