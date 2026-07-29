import { arguments_assert } from "./arguments_assert.mjs";
import { json_format_to } from "./json_format_to.mjs";
import { file_overwrite } from "./file_overwrite.mjs";
export async function baseline_known_write(known, path) {
  arguments_assert(arguments, 2);
  ("Put what a ratchet knows on disk, and answer how many that is.");
  ("The twin of the shared reader. Every gate that measures against what the repo");
  ("already carried keeps its list under the same key in the same shape, so writing");
  ("one is the same act whichever gate is asking, and the name of the file is the");
  ("only thing that stays at the call.");
  ("Eight writers had spelled this out separately, alike to the character. The one");
  ("that matters is the key: a reader looking for known and a writer spelling it");
  ("something else would leave a file that reads back empty, and an empty baseline");
  ("refuses nothing.");
  let baseline = {
    known,
  };
  let json = json_format_to(baseline);
  await file_overwrite(path, json);
  let r = known.length;
  return r;
}
