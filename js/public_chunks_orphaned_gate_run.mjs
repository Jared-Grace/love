import { arguments_assert } from "./arguments_assert.mjs";
import { baseline_names_gate_generic } from "./baseline_names_gate_generic.mjs";
import { fn_name } from "./fn_name.mjs";
import { public_chunks_orphaned_baseline_path } from "./public_chunks_orphaned_baseline_path.mjs";
import { public_chunks_orphaned_names } from "./public_chunks_orphaned_names.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export async function public_chunks_orphaned_gate_run() {
  "Gate: no folder a build writes into starts keeping a script that nothing there sends for.";
  "A compiler never takes back what it has stopped writing. A fix that stopped a three and a half megabyte piece of a server library being put into pages landed weeks before anyone looked at the folder, and fifteen copies of it were still sitting there, committed and dated and looking exactly like living output. Every gate was green, because no gate was reading the folder - they read what an entry point reaches, and a leftover is precisely the file no entry point reaches.";
  "Measured against what the folders already carried rather than against zero, because the two folders that are being served still hold theirs and clearing those is a question about what people have in front of them. The development folder holds none, and a ratchet on none is a zero, so the half that churns daily is pinned without being named.";
  "A leftover is found by walking out from each whole script rather than by asking whether any neighbour mentions it. A cluster of dead files references itself, so the neighbour question called two hundred and forty-three files alive that the walk called dead.";
  arguments_assert(arguments, 0);
  let offenders = await public_chunks_orphaned_names();
  let path = public_chunks_orphaned_baseline_path();
  let name_write = fn_name("public_chunks_orphaned_baseline_write");
  let f_name = fn_name("public_chunks_orphaned");
  let f_name2 = fn_name("folder_chunks_orphaned_delete");
  let hint = text_combine_multiple([
    "a folder is now keeping a script nothing there sends for - ask ",
    f_name,
    " for what each one weighs, then clear that folder with ",
    f_name2,
  ]);
  let r = await baseline_names_gate_generic(offenders, path, hint, name_write);
  return r;
}
