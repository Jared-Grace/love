import { function_name_to_path_relative } from "./function_name_to_path_relative.mjs";
import { function_reachable_names } from "./function_reachable_names.mjs";
import { list_map } from "./list_map.mjs";
export async function daemon_reachable_paths(f_name) {
  "Every file this daemon's running code is made of, spelled the way git spells them.";
  "A daemon is one long-lived program, so what it is made of is everything its imports reach, however far down - the same set a bundle built from that name would carry. Naming only the daemon's own file would ask about the one file least likely to be the one that changed.";
  let names = await function_reachable_names(f_name);
  let paths = list_map(names, function_name_to_path_relative);
  return paths;
}
