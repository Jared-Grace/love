import { arguments_assert } from "./arguments_assert.mjs";
import { smart_unit_name } from "./smart_unit_name.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { command_line_code_ignore_stdout } from "./command_line_code_ignore_stdout.mjs";
import { text_split_newline } from "./text_split_newline.mjs";
import { list_filter_text_empty_not_is } from "./list_filter_text_empty_not_is.mjs";
import { list_map } from "./list_map.mjs";
import { smart_device_key_from_line } from "./smart_device_key_from_line.mjs";
import { list_unique } from "./list_unique.mjs";
import { list_map_async_filter_null_not_is } from "./list_map_async_filter_null_not_is.mjs";
import { smart_device_key_present } from "./smart_device_key_present.mjs";
export async function smart_devices_monitored() {
  arguments_assert(arguments, 0);
  ("The drives the watching daemon has taken charge of and which are still plugged into this machine, named the way the daemon names them.");
  ("Asked of the daemon's own log rather than of the disks, for the same reason everything else about these drives is: reading a drive directly needs to be root, and a check that needs a password is a check that gets skipped. The daemon writes one line per drive as it starts, saying it found the drive and is adding it to what it watches, and those lines are the only place the list is written down anywhere a person without the password can read it.");
  ("Every start the log still holds is read, not just the most recent one, and then what is no longer plugged in is dropped. Reading only the most recent start would be the tidier idea and it is the wrong one: it says nothing about a drive that was there and has gone, and it is exactly as long as whatever the log happens to still hold, so the answer would quietly change with the log's age rather than with the machine.");
  ("The filtering out is what makes the list safe to demand things of. Without it this is a list of drives the daemon has ever watched, and a removable drive that is sitting in a drawer would be held against the machine forever.");
  ("The daemon is asked to hand back only the lines that say it added something, because the whole log runs to thousands of lines about temperatures and almost none of it is about this question.");
  let unit = smart_unit_name();
  let command = text_combine_multiple([
    "journalctl -u ",
    unit,
    ' --no-pager -g "Adding to"',
  ]);
  let text = await command_line_code_ignore_stdout(command);
  let lines = text_split_newline(text);
  let filled = list_filter_text_empty_not_is(lines);
  let keys = list_map(filled, smart_device_key_from_line);
  let unique = list_unique(keys);
  let present = await list_map_async_filter_null_not_is(
    unique,
    smart_device_key_present,
  );
  return present;
}
