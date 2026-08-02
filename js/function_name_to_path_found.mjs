import { function_name_to_path_search } from "./function_name_to_path_search.mjs";
import { property_get } from "./property_get.mjs";
import { true_is_assert_json } from "./true_is_assert_json.mjs";
export async function function_name_to_path_found(f_name) {
  "The path of the file holding a function, refusing by name when no repo has such a file.";
  "Standing in front of every read of a function's source, so that the one thing that can go wrong there says what went wrong. Asking for the path of a name nothing answers to used to come back as a missing property on an object the reader never saw, which names neither the function asked for nor the fact that it is the file that is absent.";
  "Two quite different things arrive here the same way, so the refusal names both. A misspelt or long-gone name is a mistake in whatever asked. A name read off the folder moments ago whose file is now gone is nobody's mistake at all - everybody works in this one folder at once, and a sweep that listed the folder and then read it a minute later is reading a folder that has moved on.";
  let search = await function_name_to_path_search(f_name);
  let exists = property_get(search, "exists");
  true_is_assert_json(exists, {
    search,
    hint: "no repo holds a file for this function - so either the name is spelt differently to the one that is there, or the file was written and removed while this was running, which is ordinary while everybody shares the one folder and means the answer is simply to ask again",
  });
  let f_path = property_get(search, "f_path");
  return f_path;
}
