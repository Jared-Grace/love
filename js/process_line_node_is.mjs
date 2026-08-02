import { arguments_assert } from "./arguments_assert.mjs";
import { text_split_space } from "./text_split_space.mjs";
import { list_first } from "./list_first.mjs";
import { text_ends_with } from "./text_ends_with.mjs";
export function process_line_node_is(line) {
  "$plain line";
  arguments_assert(arguments, 1);
  ("Whether the process a command line describes is node itself, rather than");
  ("something that merely mentions it.");
  ("The first word of a line is the program, and everything after it is what the");
  ("program was told - so a shell handed a node command carries that command in its");
  ("own line and is not node. Asked of the first word alone, that confusion cannot");
  ("happen.");
  ("Written once because two askers divide the world by this answer and take");
  ("opposite halves. If each spelled it out, a change to one would quietly put a");
  ("process in both halves or in neither, and neither asker could see that from");
  ("where it stands.");
  let words = text_split_space(line);
  let program = list_first(words);
  let node_is = text_ends_with(program, "node");
  return node_is;
}
