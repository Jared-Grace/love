import { arguments_assert } from "./arguments_assert.mjs";
import { public_chunks_orphaned_names_walked } from "./public_chunks_orphaned_names_walked.mjs";
import { property_get } from "./property_get.mjs";
import { public_chunks_orphaned_baseline_path } from "./public_chunks_orphaned_baseline_path.mjs";
import { fn_name } from "./fn_name.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { baseline_names_gate_walked_generic } from "./baseline_names_gate_walked_generic.mjs";
export async function public_chunks_orphaned_gate_run() {
  "Gate: no folder a build writes into starts keeping a script that nothing there sends for.";
  "A compiler never takes back what it has stopped writing. A fix that stopped a three and a half megabyte piece of a server library being put into pages landed weeks before anyone looked at the folder, and fifteen copies of it were still sitting there, committed and dated and looking exactly like living output. Every gate was green, because no gate was reading the folder - they read what an entry point reaches, and a leftover is precisely the file no entry point reaches.";
  "Measured against what the folders already carried rather than against zero, because the two folders that are being served still hold theirs and clearing those is a question about what people have in front of them. The development folder holds none, and a ratchet on none is a zero, so the half that churns daily is pinned without being named.";
  "A leftover is found by walking out from each whole script rather than by asking whether any neighbour mentions it. A cluster of dead files references itself, so the neighbour question called two hundred and forty-three files alive that the walk called dead.";
  "HOW MANY SCRIPTS WERE OPENED TRAVELS OUT WITH THE VERDICT. No new leftovers is what three swept folders say and also what three folders nobody is reading any more say, and a build settings edit is all it takes to move one; the count of what was walked is the only part of this answer that falls on the second.";
  arguments_assert(arguments, 0);
  let told = await public_chunks_orphaned_names_walked();
  let walked = property_get(told, "walked");
  let offenders = property_get(told, "names");
  let path = public_chunks_orphaned_baseline_path();
  let name_write = fn_name("public_chunks_orphaned_baseline_write");
  let f_name = fn_name("public_chunks_orphaned");
  let f_name2 = fn_name("folder_chunks_orphaned_delete");
  let f_name3 = fn_name("folder_public_root_noted_blocked_assert");
  let hint = text_combine_multiple([
    "a folder is now keeping a script nothing there sends for - ask ",
    f_name,
    " for what each one weighs, then clear that folder with ",
    f_name2,
    ". A LEFTOVER AT THE TOP OF THE PUBLISHED FOLDER ITSELF IS REFUSED RATHER THAN REMOVED, and that refusal is right. A note says which commit each waiting app was built out of and what it came out as, so taking one of its pieces away leaves the note describing a file that is gone - which refuses the next sending for every app waiting beside it and names none of them as the cause. ",
    f_name3,
    " is where that refusal is made, and the way past it is to build that app again through its own promoting, never to delete the file. Measured on the twenty eighth of August: three such files stood at the top of that folder and weighed five hundred and eleven bytes between them, while the two folders no note vouches for held one and a tenth megabytes and cleared without argument.",
  ]);
  let r = await baseline_names_gate_walked_generic(
    walked,
    offenders,
    path,
    hint,
    name_write,
  );
  return r;
}
