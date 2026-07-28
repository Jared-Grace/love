import { function_auto } from "./function_auto.mjs";
import { text_split_comma_each_async } from "./text_split_comma_each_async.mjs";
export async function function_auto_multiple(names_comma) {
  ("Hands back each function as it now stands, one answer per name asked about.");
  ("The single pass was silent until the same reading was made of it: a command");
  ("that answers nothing leaves the caller nothing to do but ask again, and over");
  ("a list that is a second command per name.");
  ("Mapping rather than visiting is the whole change. Visiting runs the pass and");
  ("drops what it returned, which is the one thing the caller asked for.");
  let outputs = await text_split_comma_map_async(names_comma, function_auto);
  return outputs;
}
