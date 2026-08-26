import { arguments_assert } from "./arguments_assert.mjs";
import { file_overwrite } from "./file_overwrite.mjs";
import { function_source_formatted_write_generic } from "./function_source_formatted_write_generic.mjs";
export async function function_source_formatted_overwrite(f_name, contents) {
  "$plain f_name";
  "$plain contents";
  arguments_assert(arguments, 2);
  ("Lays a function's source down at the place its own name asks for, formatted on the way in, over whatever file was already there. Hands back where it landed.");
  ("The overwriting writer the maker of new files next door tells its callers to reach for, which until now did not exist. That paragraph named a thing that was not there, so a caller with a rewrite in hand read the advice, went looking, and found only the raw text writer - which does no formatting and so lands a file looking unlike every other file here.");
  ("It asks nothing at all about what is already at that path. A caller wanting a name to be free has to ask that itself, and the maker of new files next door is the one that does.");
  let write = file_overwrite;
  let combined = await function_source_formatted_write_generic(
    f_name,
    contents,
    write,
  );
  return combined;
}
