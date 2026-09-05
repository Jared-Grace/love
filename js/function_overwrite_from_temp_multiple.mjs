import { arguments_assert } from "./arguments_assert.mjs";
import { text_split_comma_map_async } from "./text_split_comma_map_async.mjs";
import { function_overwrite_from_temp } from "./function_overwrite_from_temp.mjs";
export async function function_overwrite_from_temp_multiple(names_comma) {
  "Several functions drafted in the throwaway folder written over the functions of those names already in the repo, answered for one by one in the order they were named.";
  "$plain names_comma";
  "the names of the drafts to promote, joined by commas. Each one names a file in the throwaway folder and a function the repo already answers to; none of them is run.";
  "THE HALF THAT WAS MISSING. Promoting a set of new drafts in one call was built because doing it one call at a time is the loop this repo makes a command out of rather than performs, and every word of that applies just as much to rewriting a set - more so, because a change that reaches several functions at once is usually one piece of work rather than several, and one piece of work wants one commit.";
  "The order given is the order taken, and nothing here reorders it. A draft that calls its neighbour wants that neighbour already standing when the canonicalising pass looks for an import to add, and only the caller knows which way round that is.";
  "A name the repo does not answer to stops the run, leaving the drafts before it written and the rest still in the folder. That is the honest end - a second run then sees exactly what is left to do.";
  arguments_assert(arguments, 1);
  let outputs = await text_split_comma_map_async(
    names_comma,
    function_overwrite_from_temp,
  );
  return outputs;
}
