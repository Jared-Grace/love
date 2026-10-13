import { equal } from "./equal.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { text_includes } from "./text_includes.mjs";
import { text_starts_with } from "./text_starts_with.mjs";
import { error_json } from "./error_json.mjs";
export function file_name_bare_assert(name) {
  "$plain name";
  "Refuses a name that could reach outside the folder it is joined onto: one holding a slash or a backslash, one starting with a dot, or an empty one.";
  "WHY IT EXISTS: a command whose parameter is a name rather than a path can hold a standing approval, because nothing handed in can choose a folder. That only stays true while the name really is bare, so the check sits at the top of every such command.";
  arguments_assert(arguments, 1);
  let refused =
    equal(name, "") ||
    text_includes(name, "/") ||
    text_includes(name, "\\") ||
    text_starts_with(name, ".");
  if (refused) {
    error_json({
      hint: "name a file or folder directly, with no folder in front of it and no leading dot",
      name,
    });
  }
}
