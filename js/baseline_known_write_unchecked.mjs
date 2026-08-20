import { arguments_assert } from "./arguments_assert.mjs";
import { json_format_to } from "./json_format_to.mjs";
import { file_overwrite } from "./file_overwrite.mjs";
import { list_size } from "./list_size.mjs";
export async function baseline_known_write_unchecked(known, path) {
  arguments_assert(arguments, 2);
  ("Put what a ratchet knows on disk without asking whether it should, and answer how many that is.");
  ("Every gate that measures against what the repo already carried keeps its list under the same key in the same shape, so writing one is the same act whichever gate is asking, and the name of the file is the only thing that stays at the call.");
  ("The refusals live one level up rather than here, because the two callers disagree about exactly one of them: the ordinary writer will not empty a record that was holding names, and the command for emptying one on purpose has to be able to. A check inside the act itself could not tell those two apart, and the way round it would have been a second spelling of the write - which is how two copies of the same four lines start.");
  ("The key is what matters most here. A reader looking for known and a writer spelling it something else would leave a file that reads back empty, and an empty baseline refuses nothing.");
  let baseline = {
    known,
  };
  let json = json_format_to(baseline);
  await file_overwrite(path, json);
  let r = list_size(known);
  return r;
}
