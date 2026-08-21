import { g_arc_prompt_chapter_role } from "./g_arc_prompt_chapter_role.mjs";
export async function g_arc_prompt_chapter_leader(chapter) {
  "The arc prompt for one written chapter, written for the elder the plant is left with - the whole prompt as one string.";
  "NO NUMBER IS ASKED FOR, because there is one elder and asking which would be asking to choose among a cast of one. The convert twin takes a number; this one hands over nought and the deal underneath is built to hold exactly that.";
  let r = await g_arc_prompt_chapter_role(chapter, true, 0);
  return r;
}
