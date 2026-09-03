import { arguments_assert } from "./arguments_assert.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { function_import_line_add } from "./function_import_line_add.mjs";
export async function function_import_node_add(f_name, module_name) {
  "$plain f_name";
  "$plain module_name";
  "Puts a default import of a module that is not a file in this repo back at the top of a function's file, and says whether it had to.";
  "IT EXISTS BECAUSE THE AUTO PASS TAKES SUCH AN IMPORT OUT AND REPORTS SUCCESS. Every import the pass writes is a relative one it worked out from a name this repo answers to, and an import of something the repo has never heard of is not a name it can work out, so the line is dropped rather than kept. The file it leaves behind parses, canonicalizes, commits, and throws the moment it is run. Nothing goes red, because nothing here runs a server to find out.";
  "So this is the repair, and it is a command rather than a hand edit for the ordinary reason: a hand edit cannot be run again after the next promote takes the line out again.";
  "It used to say that it is the next promote that will, and that is no longer so - the promote now carries a draft's outside imports over itself, so the line survives the step that used to lose it. This stays as the repair for a file that already went through before that, and for the day something else works a file back from its tree.";
  "Only the line is built here. Writing it is the other one's work, and it is written over the file's text rather than through the tree on purpose: the tree is what dropped the line, so asking the tree to put it back is asking the thing that cannot hold it to hold it.";
  "Asking twice changes nothing the second time, so it is safe to run over a file that is already right.";
  arguments_assert(arguments, 2);
  let line = text_combine_multiple([
    "import ",
    module_name,
    ' from "',
    module_name,
    '";',
  ]);
  let r = await function_import_line_add(f_name, line);
  return r;
}
