import { g_sermon_chapter_passages_chaptered } from "./g_sermon_chapter_passages_chaptered.mjs";
import { g_leader_chapter_codes } from "./g_leader_chapter_codes.mjs";
import { list_add_multiple } from "./list_add_multiple.mjs";
export async function g_arc_chapter_passages_role(chapter, leader) {
  "the passages an arc for this chapter stands on, which is not the same question for a convert and for a leader";
  "A CONVERT MEETS THE PLAYER ONCE and answers a handful of times, so one chapter is more than enough and standing anywhere else would only blur which text the plant is about.";
  "A LEADER ANSWERS 216 TIMES over the same plant. One chapter cannot carry that: the smallest written chapter is three passages and even Romans 1 is twenty-five, which is nine turns apiece. So a leader stands on everything written that the player has already met - its book's reach, capped at this chapter.";
  "THE CAP IS WHAT KEEPS IT HONEST, and it is why this is asked per chapter rather than per book. An elder may draw on what came before, never on what the plant has not reached.";
  if (leader) {
    let codes = await g_leader_chapter_codes(chapter);
    let gathered = [];
    for (let code of codes) {
      let its = await g_sermon_chapter_passages_chaptered(code);
      list_add_multiple(gathered, its);
    }
    return gathered;
  }
  let alone = await g_sermon_chapter_passages_chaptered(chapter);
  return alone;
}
