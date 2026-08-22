import { g_npc_nickname_index } from "./g_npc_nickname_index.mjs";
import { g_arc_prompt_chapter_role } from "./g_arc_prompt_chapter_role.mjs";
export async function g_arc_prompt_chapter(chapter, nickname) {
  "The arc prompt for one written chapter, written for one named person of the convert pool - the whole prompt as one string.";
  "WHICH PERSON HAS TO BE ASKED FOR, because the pool holds many and each is dealt their own length and their own profile. It was not asked for once, and the answer was the first person of the pool every single time - which reads as a working prompt, since one person is all there is to see in it.";
  "$plain nickname";
  "THE PERSON IS ASKED FOR BY NAME and turned into their pool number here. A caller writing an arc holds a name - a reader can carry ABI and JAEL through a conversation and cannot carry PERSON 0 and PERSON 2 - and the pool underneath is filed by number, so the joining belongs at the door rather than in the caller's head.";
  let index = await g_npc_nickname_index(nickname);
  let r = await g_arc_prompt_chapter_role(chapter, false, index);
  return r;
}
