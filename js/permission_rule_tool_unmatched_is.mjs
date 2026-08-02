import { permission_file_edit_tools_unmatched } from "./permission_file_edit_tools_unmatched.mjs";
import { permission_rule_tool_name } from "./permission_rule_tool_name.mjs";
import { list_includes } from "./list_includes.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
export function permission_rule_tool_unmatched_is(rule) {
  "whether one allow rule names a file-editing tool the permission engine never matches against, so the grant can never fire whatever path it goes on to name";
  "the engine consults Edit rules alone when it decides a file edit, and an Edit rule already covers every file-editing tool. so a rule naming one of the others is not a narrower grant than its Edit twin, it is a dead one, and the human keeps getting asked for a thing they already granted";
  "kept apart from the sweep that reads the settings files, for the same reason its neighbour is: those files hold no offending rule today and should never hold one, so a sweep coming back empty cannot tell a working judgment from a broken one. handed a rule as a plain string, this answers yes or no, and the corpus can hand it rules nobody has written down";
  "the tool name is the whole question, so no path is read. a rule spelling a tool with no path at all parses to an empty name and answers no, which is right: that shape grants nothing to audit";
  "Read is deliberately absent from the list next door. a Read rule is matched and does grant reading; it is the editing tools alone that collapse onto Edit";
  arguments_assert(arguments, 1);
  let tools = permission_file_edit_tools_unmatched();
  let tool = permission_rule_tool_name(rule);
  let b = list_includes(tools, tool);
  return b;
}
