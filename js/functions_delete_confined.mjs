import { fn_name } from "./fn_name.mjs";
export function functions_delete_confined() {
  "The functions that reach a deleter but choose for themselves which folder the deletion lands in, so no argument handed to them can point it anywhere else. The destructive walk stops at each of these rather than going through, because what lies beyond has already been fenced.";
  "Each name here carries a proof, and the proof is the price of the entry. The throwaway deleter takes only the last part of whatever name it is handed - every folder in front is stripped off - and joins that onto the throwaway folder, and the step at the bottom is unlink, which refuses a folder outright. So the worst any argument can do is take away one file sitting directly in the throwaway folder: two dots name the folder above, and unlink refuses it; an empty name names the throwaway folder itself, and unlink refuses that too.";
  "Without this, every function that promotes a draft out of the throwaway folder was refused a grant as though its caller could choose what gets erased, because the walk saw a deleter at the end of the chain and could not see the fence in front of it. The singular promoter held its grant from before the check existed; its plural twin, which does exactly the same thing twice, could never be granted at all.";
  "Spelled rather than imported, for the reason the deleter roster gives: an import would give every checker consulting this list an edge to the deleters themselves.";
  let names = [fn_name("scripts_temp_delete")];
  return names;
}
