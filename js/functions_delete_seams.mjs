import { fn_name } from "./fn_name.mjs";
export function functions_delete_seams() {
  "The functions that erase whatever their argument names — a file, a folder and everything under it, or a name in the frozen copy. Reaching one of these is what makes calling a function by name from the command line able to take something away that nothing can hand back.";
  "This is the fourth set the reachability walk is asked against, and it is here because the other three could not see it. Reaching a shell means the arguments could become a command line; reaching a rule writer means the call can hand out further calls; reaching one of these means the call destroys, and the thing destroyed is chosen by the caller rather than by the code.";
  "The gap it closes was found rather than reasoned about. Asking whether the folder copier may be granted came back clean - no refusal at all - and that function removes its target folder, everything under it, before it copies. Pointed at this repo it would erase the repo. It passed because every other reading is about names: its parameters are called source and target, which carry no word that reads as a path, and nothing it reaches runs a command or writes a rule. So the one tool standing in front of a new grant said yes to a function that deletes a folder you name.";
  "Overwriting a file is deliberately not in here, and the division is worth keeping. A function that replaces a file's contents is destructive too, but every one of them takes the path as a parameter, and a parameter spelled that way is already refused by name. So the parameter reading covers the overwriting family exactly, and this covers what it cannot see: a function that deletes something its parameters do not admit to naming.";
  "The names are spelled rather than imported, for the same reason the rule-writing roster spells its own. An import here would give this function an edge to the very seams it names, and every checker consulting the roster would inherit that edge and be reported as a deleter itself. Spelling a name follows a rename just as well, because the rename pass rewrites these marked strings.";
  let f_name = fn_name("file_delete");
  let f_name2 = fn_name("folder_delete");
  let f_name3 = fn_name("folder_copy_fresh");
  let f_name4 = fn_name("qa_snapshot_link");
  let names = [f_name, f_name2, f_name3, f_name4];
  return names;
}
