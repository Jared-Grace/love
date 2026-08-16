import { list_map_async_record_try } from "./list_map_async_record_try.mjs";
import { text_split_comma_dot_trim } from "./text_split_comma_dot_trim.mjs";
import { functions_write_seams } from "./functions_write_seams.mjs";
import { function_seams_reached_memo } from "./function_seams_reached_memo.mjs";
export async function functions_write_seams_reached(names_comma) {
  "Which of the disk-changing functions each of several functions can reach through its imports, asked in one command - one answer per name under the name it belongs to";
  "An empty answer is the useful one: nothing that name calls however deep changes anything on disk, so running it costs nothing that cannot be taken back. A name nothing answers to is reported as nothing at all instead, so the two never read alike";
  "The walk over the import graph is the same walk whichever name starts it, so what each one reads is remembered and handed to the next. The single-name form hands over an empty memory every time, which pays for the same walk once per name asked; the twin that asks the same question about command-running rather than disk-changing was built this way for exactly that reason, and this is that shape over the other list";
  "It is the reading wanted before a batch of standing approvals is written. Whether an argument can steer a command is already asked in one sweep; whether the thing being approved can change anything at all was still being asked one name at a time";
  let names = text_split_comma_dot_trim(names_comma);
  let seams = functions_write_seams();
  let remembered = {};
  async function reached_one(f_name) {
    let reached_found = await function_seams_reached_memo(
      f_name,
      seams,
      remembered,
    );
    return reached_found;
  }
  let found = await list_map_async_record_try(names, reached_one);
  return found;
}
