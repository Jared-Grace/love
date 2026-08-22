import { arguments_assert } from "./arguments_assert.mjs";
import { qa_gates } from "./qa_gates.mjs";
import { function_reachable_names } from "./function_reachable_names.mjs";
import { list_map_unordered_async } from "./list_map_unordered_async.mjs";
import { list_includes } from "./list_includes.mjs";
import { list_filter_property } from "./list_filter_property.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { fn_name } from "./fn_name.mjs";
export async function qa_gates_sweep_reach() {
  arguments_assert(arguments, 0);
  ("How many of the gates can reach the three ways of reading the whole repository, and which ones.");
  ("The whole-repo run divides its gates into seven shares and each share spends about ten minutes on gates that add up to about forty seconds when each is asked on its own. That gap is not the dividing, which was measured and is even to within a factor of two. It has to be work being done again, and the only work large enough to account for it is reading and parsing every file, because nothing on that path remembers anything: asking for a function's shape reads the file and parses it afresh every single time it is asked, so fifty gates in one process that each want every function pay for every function fifty times.");
  ("So the number worth having is how many of a share's gates are on that path at all, and it is a question about reach rather than about time. A gate that never reaches the parser cannot be paying that cost however slow it looks, and a gate that reaches it is paying the cost once per gate rather than once per run. Reach is also the honest way to ask it, because a clock tells you what a gate cost while standing in a crowd of fifty others and this does not.");
  ("Three names are asked about and not one, because they are three different sizes of the same mistake. Listing a folder is cheap. Reading every file's text is dearer. Parsing is dearest, and asking for every function by name is what turns one parse into thousands. A gate reaching the last two is re-reading the entire repository from disk and rebuilding every syntax tree in it, and that is the one the count is really about.");
  ("Nothing here runs a gate. It walks imports, so it is safe on a red repository and safe while peers are editing, and it answers the same way twice on the same commit.");
  let gates = qa_gates();
  async function gate_reach(gate) {
    let reachable = await function_reachable_names(gate.name);
    let item = fn_name("folder_read_files");
    let folder_listed = list_includes(reachable, item);
    let item2 = fn_name("js_files_texts");
    let texts_read = list_includes(reachable, item2);
    let item3 = fn_name("function_parse");
    let parsed = list_includes(reachable, item3);
    let item4 = fn_name("functions_names");
    let every_function = list_includes(reachable, item4);
    let record = {
      name: gate.name,
      folder_listed,
      texts_read,
      parsed,
      every_function,
      reaches: reachable.length,
    };
    return record;
  }
  let records = await list_map_unordered_async(gates, gate_reach);
  let parsing = list_filter_property(records, "parsed", true);
  let sweeping = list_filter_property(parsing, "every_function", true);
  let reading = list_filter_property(records, "texts_read", true);
  let listing = list_filter_property(records, "folder_listed", true);
  let answer = {
    gates: records.length,
    listing_a_folder: listing.length,
    reading_every_text: reading.length,
    parsing_anything: parsing.length,
    parsing_every_function: sweeping.length,
    parsing_every_function_names: list_map_property(sweeping, "name"),
  };
  return answer;
}
