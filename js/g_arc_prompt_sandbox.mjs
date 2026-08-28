import { fn_name } from "./fn_name.mjs";
import { g_arc_prompt_sandbox_chapter } from "./g_arc_prompt_sandbox_chapter.mjs";
import { g_npc_nickname } from "./g_npc_nickname.mjs";
import { g_arc_prompt_chapter } from "./g_arc_prompt_chapter.mjs";
export async function g_arc_prompt_sandbox() {
  "The arc prompt for the first written chapter, with nothing to type - the one to run to see what a prompt currently looks like.";
  "Takes no argument on purpose. A sandbox is run to LOOK at something, and a sandbox that needs a chapter code hands back a stack trace to anybody who ran it to find out what it does. The chapter is picked for it instead, and any chapter can still be asked for by name.";
  ("The work is ",
    fn_name("g_arc_prompt_chapter"),
    ", the choosing is ",
    fn_name("g_arc_prompt_sandbox_chapter"),
    ", and this is a convert prompt - the elder twin is ",
    fn_name("g_arc_prompt_sandbox_leader"),
    ".");
  ("The first person of the pool is the one shown, for the same reason the first chapter is - a sandbox picks so that nothing has to be typed, and any other person can still be asked for by name.");
  ("THE NUMBER IS TURNED INTO A NAME HERE RATHER THAN HANDED ON AS ONE. ",
    fn_name("g_arc_prompt_chapter"),
    " took a pool number once and takes a name now, and this went on passing the number - which reads as a name nobody in the pool answers to, so the one command whose whole job is to be run for a look threw instead. A sandbox is the last place a stale argument shows up, because nothing else calls it.");
  let chapter = await g_arc_prompt_sandbox_chapter();
  let nickname = await g_npc_nickname(0);
  let r = await g_arc_prompt_chapter(chapter, nickname);
  return r;
}
