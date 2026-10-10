import { arguments_assert } from "./arguments_assert.mjs";
import { text_split_comma_map_async } from "./text_split_comma_map_async.mjs";
import { function_temp_write } from "./function_temp_write.mjs";
export async function function_temp_write_multiple(names_comma) {
  "Several functions already in the repo copied out into the throwaway folder, each under its own name, ready to be worked on and put back together.";
  "$plain names_comma";
  "the names of the functions to copy out, joined by commas.";
  "The way back already took a set in one call, so a change reaching several functions was put back as one piece of work but had to be fetched one call at a time. This is the matching half.";
  arguments_assert(arguments, 1);
  let paths = await text_split_comma_map_async(
    names_comma,
    function_temp_write,
  );
  return paths;
}
