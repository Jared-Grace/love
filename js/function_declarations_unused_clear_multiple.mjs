import { text_split_comma_map_async } from "./text_split_comma_map_async.mjs";
import { function_declarations_unused_clear } from "./function_declarations_unused_clear.mjs";
export async function function_declarations_unused_clear_multiple(names_comma) {
  "Drops the dead-named lines in each of the functions asked about, one answer per name.";
  "The clearing could only ever be aimed at one function, and the driver next door takes a COUNT rather than a set - so it repairs whichever few it happens to reach and then shrinks the record, which is the wrong shape when the set is a real choice. A deploy is held by the names one app ships, and those are the names to clear.";
  "Named after what it clears rather than after the gate that asks for it, because a caller with three dead lines and no gate in front of them wants this too.";
  let outputs = await text_split_comma_map_async(
    names_comma,
    function_declarations_unused_clear,
  );
  return outputs;
}
