import { qa_gates_names_generic } from "./qa_gates_names_generic.mjs";
import { fn_name } from "./fn_name.mjs";
export async function qa_gates_names() {
  "The gates the whole-repo gate lists, read off the file it is written in rather than off the list a running program is holding.";
  "The two answers are the same everywhere except in the one place it matters. A program loads that file once, at its start, and keeps what it read; so a command that adds a gate to the list and then asks what the list holds is answered from before its own edit. It reads as the edit having silently done nothing, which is the worst way for a repair to be wrong - it hands work back as undone at the moment it was done.";
  "Reading the source instead costs a parse and answers about the file as it now stands, which is what every caller here actually means by the list.";
  "The reading itself lives one name along, because the half asked of this machine is a second list written exactly this way and wanted exactly this reading. This names which list; that one knows how to read one.";
  let f_name = fn_name("qa_gates");
  let names = await qa_gates_names_generic(f_name);
  return names;
}
