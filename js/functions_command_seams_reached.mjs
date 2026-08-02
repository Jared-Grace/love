import { list_map_async_record_try } from "./list_map_async_record_try.mjs";
import { text_split_comma_dot_trim } from "./text_split_comma_dot_trim.mjs";
import { function_command_seams_reached_memo } from "./function_command_seams_reached_memo.mjs";
export async function functions_command_seams_reached(names_comma) {
  "Which of the command-running functions each of several functions can reach through its imports asked in one command - one answer per name under the name it belongs to";
  "An empty answer is the useful one - nothing that name calls however deep ends at a shell or an eval - and a name nothing answers to is reported as nothing at all instead so the two never read alike";
  "The walk over the import graph is the same walk whichever name starts it so what each one reads is remembered and handed to the next - the single-name form says exactly this when it hands over an empty memory and until now nobody had built the caller that fills one";
  let names = text_split_comma_dot_trim(names_comma);
  let remembered = {};
  async function reached_one(f_name) {
    let reached_found = await function_command_seams_reached_memo(
      f_name,
      remembered,
    );
    return reached_found;
  }
  let found = await list_map_async_record_try(names, reached_one);
  return found;
}
