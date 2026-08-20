import { arguments_assert } from "./arguments_assert.mjs";
import { function_source_formatted_write } from "./function_source_formatted_write.mjs";
import { function_unalias_exists_not_assert_json } from "./function_unalias_exists_not_assert_json.mjs";
export async function function_source_new(f_name, contents) {
  "$plain f_name";
  "$plain contents";
  arguments_assert(arguments, 2);
  ("Makes the file for a function that does not exist yet and puts the given source text into it, placed by the function's own name rather than by a path.");
  ("The other half of the pair beside the overwriter, which could only reach a file that was already there. A generator that builds a whole function's text had nowhere to put it, so each one was working the path out for itself.");
  ("IT REFUSES A NAME THE REPO ALREADY ANSWERS TO. A generator handed an existing name would replace something a person wrote by hand and nothing would go red, which is the one failure a writer of files must not be able to make quietly.");
  ("The refusal is the whole of what this adds. Laying the text down formatted, at the place the name asks for, and telling the index of files about it is the same run of work its neighbour that starts from a shape does, and is named beside it.");
  await function_unalias_exists_not_assert_json(f_name, {
    hint: "a function with this name already exists — a generator must not overwrite a hand-written one, so pick another name or delete the old file first",
  });
  let combined = await function_source_formatted_write(f_name, contents);
  return combined;
}
