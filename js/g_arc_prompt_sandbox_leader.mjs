import { g_arc_prompt_sandbox_chapter } from "./g_arc_prompt_sandbox_chapter.mjs";
import { g_arc_prompt_chapter_leader } from "./g_arc_prompt_chapter_leader.mjs";
export async function g_arc_prompt_sandbox_leader() {
  "The leader arc prompt for the first written chapter, with nothing to type - the one to run to see what an elder's prompt currently looks like.";
  "THE LEADER PROMPT IS THE ONE THAT CANNOT BE READ OFF THE CONVERT ONE. A convert answers from the chapter it stands in; a leader is handed the nearest written chapters until the passages are wide enough, so its passage block spans books the convert prompt never shows and every citation carries a chapter. Sandboxing only the convert prompt left that whole half unseen.";
  let chapter = await g_arc_prompt_sandbox_chapter();
  let r = await g_arc_prompt_chapter_leader(chapter);
  return r;
}
