import { arguments_assert } from "./arguments_assert.mjs";
import { folder_public_root_queue_is } from "./folder_public_root_queue_is.mjs";
import { qa_promoted_piece_app } from "./qa_promoted_piece_app.mjs";
import { not } from "./not.mjs";
import { null_is } from "./null_is.mjs";
import { list_add } from "./list_add.mjs";
export async function public_chunks_orphaned_noted_not(f_paths) {
  arguments_assert(arguments, 1);
  ("Of a list of leftover script files, the ones no promoting note accounts for - the ones that can actually be cleared away.");
  ("A PIECE AT THE TOP OF THE PUBLISHED FOLDER THAT A NOTE VOUCHES FOR IS NOT A LEFTOVER ANYBODY MAY ACT ON. The note says which commit that app's waiting pieces were built out of and what they came out as, so taking one away leaves the note describing a file that is gone, and the next sending is refused for every app waiting beside it while naming none of them. The refusal is made elsewhere and is right; this is the reading that stops such a file being counted as a fault in the first place.");
  ("COUNTING IT WAS STOPPING THE ONE THING THAT CLEARS IT. The only sanctioned way past such a file is to build its app again through that app's own promoting - the refusal says so in its own words. Counted as a leftover, the file names its app, the deployment reads that name as this app being at fault, and the promoting is refused. So the fault could never be cleared by anybody: the cure was the one act the record of it forbade. Measured on the fourth of September, one file of a few hundred bytes had held its app out of a sending all day on exactly those grounds.");
  ("THE LET-OFF PROVES ITS OWN PREMISE AND EXPIRES BY ITSELF, which is the whole reason it is safe to write. Being vouched for is asked of the note as it stands now, not assumed: the next promoting of that app rewrites the note, and a piece the new note does not account for stops being vouched for the moment it is written. So a piece that really has been abandoned comes back as a fault on its own, with nobody having to remember to take it off a list.");
  ("Only the top of the published folder is asked about. Everywhere else a leftover is simply deleted, so there is nothing for a note to protect and no reason to look one up.");
  let kept = [];
  for (let f_path of f_paths) {
    let root = await folder_public_root_queue_is(f_path);
    if (root) {
      let a_name = await qa_promoted_piece_app(f_path);
      let b = null_is(a_name);
      let noted = not(b);
      if (noted) {
        continue;
      }
    }
    list_add(kept, f_path);
  }
  return kept;
}
