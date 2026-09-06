import { file_delivered_path } from "./file_delivered_path.mjs";
import { file_exists } from "./file_exists.mjs";
import { file_parent_exists_ensure } from "./file_parent_exists_ensure.mjs";
import { file_copy } from "./file_copy.mjs";
export async function image_delivered_keep(path) {
  "put a copy of a picture aside, exactly as it arrived, before anything is allowed to rewrite it";
  "IT EXISTS BECAUSE A REWRITE HAD ALREADY DESTROYED SOMETHING NOBODY COULD SEE. Cropping a picture writes a new file and deletes the old one, and the tool doing the cropping keeps no chunk it has no use for - so the content credentials the drawing arrived with went with the file that was deleted. Measured on 2026-09-06: of thirty-six published song pictures, twenty-seven carried none, and neither the folder of attempts nor the history held a copy that did. The pixels were all still there. The only copy of the file as delivered was not.";
  "IT IS CALLED BY THE REWRITER AND NOT BY THE REWRITER'S CALLER, for the reason the credential carrying is: a caller that has to remember is a caller that forgets, and every caller of these writers had.";
  "A PICTURE ALREADY PUT ASIDE IS LEFT ALONE. The copy is of the file as it arrived, so a second copy taken after a rewrite would be of something later and would quietly replace the very thing this is for. That is also what makes running it twice the same as running it once.";
  let path_delivered = await file_delivered_path(path);
  let already = await file_exists(path_delivered);
  if (already) {
    let kept_before = {
      path_delivered,
      kept: false,
    };
    return kept_before;
  }
  await file_parent_exists_ensure(path_delivered);
  await file_copy(path, path_delivered);
  let kept = {
    path_delivered,
    kept: true,
  };
  return kept;
}
