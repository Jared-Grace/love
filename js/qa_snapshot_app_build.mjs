import { fn_name } from "./fn_name.mjs";
import { node_run } from "./node_run.mjs";
export async function qa_snapshot_app_build(folder, search) {
  "$plain search";
  "Builds one app inside the frozen copy and brings back what the build said";
  "The build is asked for from inside the copy, so every path it follows - to find a function, to write what it made - stays inside the copy. Nothing is handed a folder to build into, because nothing needs to be: a path here is worked out from where the run happens to be, and the run happens to be in the copy";
  "That is what ties what is sent to what was examined. A build made from the working tree is made from something everybody is editing at once, so nobody could say the pieces that went up came from the commit that was found sound. Built here they came from that commit and from nothing else";
  "The build is asked for as a list of words rather than as a line of text, so nothing carried in a word can turn into a second word";
  let f_name = fn_name("app_shared_build");
  let words = ["scripts/ai.mjs", f_name, search];
  let said = await node_run(folder, words);
  return said;
}
