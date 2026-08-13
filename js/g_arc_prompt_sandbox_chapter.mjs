import { g_sermon_chapters_written } from "./g_sermon_chapters_written.mjs";
export async function g_arc_prompt_sandbox_chapter() {
  "the chapter a sandbox builds its prompt for - the first one written, chosen here so no sandbox has to be given one";
  "SHARED BY EVERY SANDBOX, because there is one a convert is written from and one a leader is, and the choosing is the only thing they have in common. Left in both, a later decision to sandbox a different chapter would have to be made twice and would silently be made once.";
  let chapters = await g_sermon_chapters_written();
  let chapter = chapters[0];
  return chapter;
}
