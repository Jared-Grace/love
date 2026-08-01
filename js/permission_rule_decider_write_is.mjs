import { permission_decider_paths } from "./permission_decider_paths.mjs";
import { permission_file_tools_writing } from "./permission_file_tools_writing.mjs";
import { permission_rule_tool_name } from "./permission_rule_tool_name.mjs";
import { permission_rule_inner } from "./permission_rule_inner.mjs";
import { path_pattern_covers_is } from "./path_pattern_covers_is.mjs";
import { path_resolve } from "./path_resolve.mjs";
import { list_includes } from "./list_includes.mjs";
import { text_empty_is } from "./text_empty_is.mjs";
import { not } from "./not.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
export async function permission_rule_decider_write_is(rule) {
  arguments_assert(arguments, 1);
  ("whether one allow rule would let a tool CHANGE a file that decides what happens without asking - the rules themselves, or a hook that runs before them");
  ("this is the one grant that can widen itself. Everything else a rule approves is a thing that gets done; this one approves deciding what else gets done without asking, and any rule at all can be written into the rules file, including one granting a shell outright, which answers to nothing on the deny floor because that floor names particular commands rather than shapes. Two such rules once stood.");
  ("a hook is the same grant by another road, and the wider one. It runs before the permission engine, its deny outranks everything and its allow skips the engine altogether, so the hook covering the write tools can be made to approve a write to the rules file - which is why the settings files alone were never the whole set. Two rules granting hook files stood as well, on a hook that abstains outside the memory folder and does not guard itself.");
  ("two gates read the settings files afterwards and would have said so on the next run, and neither reads the hook files at all. Both are a reading taken later, and nothing whatever stood in the way at the moment of the edit, so this is here to make the rule unwritable rather than merely noticed.");
  ("reading is untouched. A rule granting Read on one of these files is a live grant that widens nothing, and failing it would cost a real convenience for no safety at all.");
  ("kept apart from the sweep over the settings files, because a rule is a plain string and this is a plain yes or no, which can be asked about a rule nobody has written down. What it turns on is which files a pattern reaches, and that question is written out in a corpus of its own next door - here there is only the tool name to check and the deciding files to try.");
  let tools = permission_file_tools_writing();
  let tool = permission_rule_tool_name(rule);
  let writes = list_includes(tools, tool);
  if (not(writes)) {
    return false;
  }
  let inner = permission_rule_inner(rule);
  let shapeless = text_empty_is(inner);
  if (shapeless) {
    return false;
  }
  let pattern = await path_resolve(inner);
  for (let path of await permission_decider_paths()) {
    let covers = path_pattern_covers_is(pattern, path);
    if (covers) {
      return true;
    }
  }
  return false;
}
