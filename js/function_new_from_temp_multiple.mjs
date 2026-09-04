import { text_split_comma_map_async } from "./text_split_comma_map_async.mjs";
import { function_new_from_temp } from "./function_new_from_temp.mjs";
export async function function_new_from_temp_multiple(names_comma) {
  "Several functions drafted in the throwaway folder promoted into the repo, answered for one by one in the order they were named.";
  "$plain names_comma";
  "the names of the drafts to promote, joined by commas. Each one names a file in the throwaway folder; none of them is run.";
  "A unit worth building is rarely one function, and promoting a set of them one call at a time was the loop this repo builds a command out of rather than performs - it also spent one commit per function on what is a single piece of work.";
  "The order given is the order taken, because a draft that calls its neighbour wants that neighbour already standing when the canonicalising pass looks for the import to add. So the caller names them from the bottom up, and nothing here reorders that.";
  "A name that is already taken stops the run, leaving the drafts before it promoted and the rest still in the folder. That is the honest end - a second run then sees exactly what is left to do.";
  let outputs = await text_split_comma_map_async(
    names_comma,
    function_new_from_temp,
  );
  return outputs;
}
