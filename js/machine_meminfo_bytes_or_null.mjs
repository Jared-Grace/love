import { arguments_assert } from "./arguments_assert.mjs";
import { machine_file_figure_bytes_or_null } from "./machine_file_figure_bytes_or_null.mjs";
export async function machine_meminfo_bytes_or_null(line_start) {
  "$plain line_start";
  "the whole beginning of the line wanted, colon and all.";
  "Whichever of the memory figures this machine keeps about itself is asked for, in bytes, or nothing at all if this machine will not say.";
  "It names one file and hands everything else on, so what it is for is the naming: every caller here wants a memory figure, and none of them should have to spell out where the machine keeps them. The reading itself, the unit, why the whole beginning of the line is asked for rather than the bare word, and why this has to be waited for, are all in the reader it calls.";
  arguments_assert(arguments, 1);
  let bytes = await machine_file_figure_bytes_or_null(
    "/proc/meminfo",
    line_start,
  );
  return bytes;
}
