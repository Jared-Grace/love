import { bible_interlinear_chapters_words } from "./bible_interlinear_chapters_words.mjs";
import { invoke_cache_file_global } from "./invoke_cache_file_global.mjs";
("The per-word interlinear, read once and kept. The source table is a 237 MB JSON, so the");
("uncached walk is far too slow to sit inside a loop over a chapter's passages - authoring");
("one chapter would otherwise read the whole file once per passage.");
("KEPT IN THE RUN AS WELL AS ON THE DISK SINCE 2026-08-20, and the second layer is worth as much as the first. The disk layer already stopped the walk being done again; what was left was the READING, and the answer is seventy-seven megabytes, so a command that asks about many chapters paid that reading once per chapter. Measured on five chapters it was five seconds and nearly all of it was the same file being read five times.");
("THE CASE THAT FOUND IT WAS ASKING ABOUT A WHOLE TESTAMENT. Five chapters is slow enough to shrug at and two hundred and sixty is not, so a reading meant to survey every candidate chapter at once was the first caller that could not afford it. Nothing about what is answered changed - only how often the same answer is fetched.");
export async function bible_interlinear_chapters_words_cache() {
  let v = await invoke_cache_file_global(bible_interlinear_chapters_words, []);
  return v;
}
