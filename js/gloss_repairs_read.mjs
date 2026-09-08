import { fn_name } from "./fn_name.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { gloss_repairs_file_path } from "./gloss_repairs_file_path.mjs";
import { file_read_json } from "./file_read_json.mjs";
export async function gloss_repairs_read(fn) {
  "The corrections waiting in one gloss store's handover file, as they were handed in: the chapters to put right and, within each, the words and the sentence wanted for them.";
  ("Three readings and repairs asked for this and each of them spelled out the same three steps - where the file sits, read it as json, take its chapter names. Only the third step differs between them, so naming the first two leaves each one saying what it does with the file rather than how to find it. Where the file sits is already ",
    fn_name("gloss_repairs_file_path"),
    "; this is that plus the reading.");
  ("★ IT THROWS WHERE THERE IS NO FILE, AND THAT IS THE OPPOSITE OF WHAT THE WRITERS DO. A writer opens the handover to add to it and must cope with there being nothing yet, so it starts from an empty pile. A reader is asked because somebody means to act on corrections, and an empty pile there is not an answer of nothing to do - it is the file having been moved, spelled wrongly or never written, and a repair reporting nothing changed says none of that. So the two are deliberately different and neither should be made to behave like the other.");
  ("Nothing is written and the file is read whole each time it is asked for, because a peer authoring corrections is adding to it while this runs and a copy held over from earlier would quietly repair the wrong list.");
  arguments_assert(arguments, 1);
  let path = gloss_repairs_file_path(fn);
  let repairs = await file_read_json(path);
  return repairs;
}
