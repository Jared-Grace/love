import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { fn_name } from "./fn_name.mjs";
import { error } from "./error.mjs";
export function openai_disabled() {
  "Refuses a call that would spend money at OpenAI, and says what writes the content now instead.";
  "Content here is written by Claude Code - the agent already in this repo, reading these files and running these commands. The API was a second way of doing the same thing, paid for separately and by the word, and nothing it wrote could not be written by the agent that is reading this sentence.";
  "The refusal sits at the one place every paid path runs through rather than at each of the callers, so a caller added later is refused without anybody remembering to add it here. Every call above this one is left exactly as it was, because the shape of the work is worth keeping - the prompts, the passage grouping, the caching, and the measures that grade what came back are all about the content and not about who wrote it.";
  "An answer already paid for still comes back. The cache is asked before this is reached, so a chapter that was written before the money ran out reads out of the store as it always did, and only a genuinely new question is refused.";
  "To turn it on again is to take out the one call to this. Nothing else was changed to switch it off, so nothing else has to be put back.";
  error(
    text_combine_multiple([
      "Calls to the OpenAI API are switched off here, so this one was not made and nothing was charged. Content in this repo is written by Claude Code instead - the agent reading these files can write what this call was going to ask for, and it costs nothing extra. An answer that was already paid for is still served from the cache, so only a new question reaches this point. If the paid API is genuinely wanted again, the single call to ",
      fn_name("openai_disabled"),
      " is what to remove.",
    ]),
  );
}
