import { function_name_to_path_found } from "./function_name_to_path_found.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { repo_functions_names } from "./repo_functions_names.mjs";
import { function_parse_declaration } from "./function_parse_declaration.mjs";
import { js_free_names_scoped } from "./js_free_names_scoped.mjs";
import { date_now_milliseconds } from "./date_now_milliseconds.mjs";
import { date_milliseconds_since } from "./date_milliseconds_since.mjs";
import { property_get } from "./property_get.mjs";
export async function functions_free_names_scoped_timed() {
  arguments_assert(arguments, 0);
  ("How long it takes to read every love function and work out which names it reads that nothing around them binds, with the reading and the working out counted apart. That pair is the whole floor under both gates that ask about free names, so it says what either of them could cost at best.");
  ("Both halves are counted in the one pass on purpose. Wall time on this machine is unusable for comparing two runs - the same gate measured five times over ten minutes came back between ten and twenty-six seconds, with the fastest run at a higher load than one of the slowest - so a number is only worth having beside another number taken in the same run. What survives that is the share, never the seconds.");
  ("Finding each function's file by name is counted too, by asking for it a second time rather than by taking the reading apart. Asking again is the honest way round: the reading below would have to be rewritten here to be split, and a rewritten copy of it stops being what the gate actually runs the moment somebody improves one of the two. What the second asking costs is what the first one cost, so the number is a fair share of the reading even though it is not a part of it.");
  ("It says the folders cannot change, which is what the suite says before asking any gate, so that asking this from inside the frozen copy measures what a gate there actually pays. Saying it costs nothing anywhere else: it is looked at where it lands and refused unless the folder is one that can honestly promise it, so from the folder people are editing this is simply the slow reading it always was.");
  ("It is not the gate. There is no baseline here and nothing is compared to anything, so it can be asked freely without a red answer meaning anything. It is also not a copy of the gate's loop for the same reason - what it leaves out is exactly what makes the gate a gate.");
  function_paths_frozen_enable();
  let love = await repo_functions_names("love");
  let path_ms = 0;
  let parse_ms = 0;
  let free_ms = 0;
  let free_total = 0;
  for (let name of love) {
    let path_at = date_now_milliseconds();
    await function_name_to_path_found(name);
    let path_taken = date_milliseconds_since(path_at);
    path_ms = path_ms + path_taken;
    let parse_at = date_now_milliseconds();
    let parsed = await function_parse_declaration(name);
    let parse_taken = date_milliseconds_since(parse_at);
    parse_ms = parse_ms + parse_taken;
    let ast = property_get(parsed, "ast");
    let free_at = date_now_milliseconds();
    let free = js_free_names_scoped(ast);
    let free_taken = date_milliseconds_since(free_at);
    free_ms = free_ms + free_taken;
    free_total = free_total + free.length;
  }
  let r = {
    functions: love.length,
    path_ms,
    parse_ms,
    free_ms,
    free_total,
  };
  return r;
}
