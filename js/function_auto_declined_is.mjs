import { fn_name } from "./fn_name.mjs";
import { function_auto_declined_phrase } from "./function_auto_declined_phrase.mjs";
import { function_read } from "./function_read.mjs";
import { text_includes } from "./text_includes.mjs";
export async function function_auto_declined_is(f_name) {
  "Whether a function has asked in its own words to be left out of the canonicalizing pass";
  ("Fourteen functions were carrying that request as prose and nothing was reading it, so every one of them was swept anyway - eleven had already been canonicalized before anyone noticed, and ",
    fn_name("app_g_day_guide_tile"),
    " was canonicalized and then folded in the same afternoon by a sweep that walked straight past the sentence telling it not to. The note was true and simply had no reader");
  ("This is that reader. It answers about one function so that anything choosing a set can leave the declining ones out of it, and it is deliberately not part of the pass itself - a function named on purpose should still be canonicalized on purpose, because the request is about sweeps picking files nobody chose");
  ("Whether the request is still a good one is not asked here. Some of those notes may be stale advice about a pass that has since learned the shape they were afraid of, and reading a body to find out is a judgment somebody has to make one function at a time");
  let phrase = function_auto_declined_phrase();
  let text = await function_read(f_name);
  let declined = text_includes(text, phrase);
  return declined;
}
