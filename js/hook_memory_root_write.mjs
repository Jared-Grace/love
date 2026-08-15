import { hook_memory_root_path } from "./hook_memory_root_path.mjs";
import { hook_memory_root_code } from "./hook_memory_root_code.mjs";
import { file_overwrite } from "./file_overwrite.mjs";
export async function hook_memory_root_write() {
  "Writes the file the memory hook reads the memory folder out of, so the hook and the repo cannot come to say different things.";
  "This is the one command to run when the memory folder moves. Nothing else has to be touched by hand, and the hook is never edited at all.";
  let p = hook_memory_root_path();
  let code = hook_memory_root_code();
  await file_overwrite(p, code);
  let written = {
    written: p,
  };
  return written;
}
