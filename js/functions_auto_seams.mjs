import { list_concat_multiple } from "./list_concat_multiple.mjs";
import { functions_outside_irreversible_seams } from "./functions_outside_irreversible_seams.mjs";
import { functions_permission_seams } from "./functions_permission_seams.mjs";
import { functions_command_seams } from "./functions_command_seams.mjs";
import { functions_dispatch_seams } from "./functions_dispatch_seams.mjs";
export function functions_auto_seams() {
  "Every function a grant nobody read must not reach: what git cannot hand back, what writes permission rules, what runs a command, and what runs a function by its name.";
  let names = functions_outside_irreversible_seams();
  let names2 = functions_permission_seams();
  let names3 = functions_command_seams();
  let names4 = functions_dispatch_seams();
  let seams = list_concat_multiple([names, names2, names3, names4]);
  return seams;
}
