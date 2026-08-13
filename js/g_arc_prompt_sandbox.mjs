import { g_arc_prompt_sandbox_chapter } from "./g_arc_prompt_sandbox_chapter.mjs";
import { fn_name } from "./fn_name.mjs";
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
  let chapter = await g_arc_prompt_sandbox_chapter();
  let r = await g_arc_prompt_chapter(chapter);
  return r;
}
