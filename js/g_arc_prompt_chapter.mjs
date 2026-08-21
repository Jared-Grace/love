import { number_from_text } from "./number_from_text.mjs";
import { g_arc_prompt_chapter_role } from "./g_arc_prompt_chapter_role.mjs";
export async function g_arc_prompt_chapter(chapter, index_text) {
  "The arc prompt for one written chapter, written for one named person of the convert pool - the whole prompt as one string.";
  "WHICH PERSON HAS TO BE ASKED FOR, because the pool holds many and each is dealt their own length and their own profile. It was not asked for once, and the answer was the first person of the pool every single time - which reads as a working prompt, since one person is all there is to see in it.";
  "The number arrives as text because a command line has nothing else to hand over, and is turned into a number before it is used as a position - text would index nothing and read as a pool that came back empty.";
  let index = number_from_text(index_text);
  let r = await g_arc_prompt_chapter_role(chapter, false, index);
  return r;
}
