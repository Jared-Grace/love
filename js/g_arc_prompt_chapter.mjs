import { g_arc_prompt_chapter_role } from "./g_arc_prompt_chapter_role.mjs";
export async function g_arc_prompt_chapter(chapter) {
  "The arc prompt for one written chapter, written for an ordinary convert - the whole prompt as one string.";
  let r = await g_arc_prompt_chapter_role(chapter, false);
  return r;
}
