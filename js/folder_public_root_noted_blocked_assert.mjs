import { arguments_assert } from "./arguments_assert.mjs";
import { folder_public_root_repo_is } from "./folder_public_root_repo_is.mjs";
import { not } from "./not.mjs";
import { qa_promoted_piece_app } from "./qa_promoted_piece_app.mjs";
import { null_is } from "./null_is.mjs";
import { folder_public_root_noting } from "./folder_public_root_noting.mjs";
import { equal } from "./equal.mjs";
import { assert_json } from "./assert_json.mjs";
export async function folder_public_root_noted_blocked_assert(file_path) {
  "$plain file_path";
  "Refuses to let this run change a piece at the top of the published folder that a note vouches for, unless it is the run rebuilding that very app";
  "A note says which commit an app's waiting pieces were built out of and what they came out as, and a sending refuses a folder holding anything no note can account for. So a write landing on a vouched piece breaks nothing it can see - it quietly turns a true note into a false one, and the next sending is refused for an app whose owner did nothing at all.";
  "Three times before this was written, on three different days, that refusal named apps that were innocent and never once named the write that caused it. Finding out cost a quarter of an hour of judging each time.";
  "Whoever is rebuilding the app is let through by that app's name rather than by any plain yes, so promoting one app is not thereby permission to overwrite another's pieces.";
  "A run holding the block on that folder is turned back before ever reaching here, which is deliberate: the older way of promoting writes there under that block and keeps a record of its own, and refusing it here would stop it.";
  "Whether the path is even at the top of that folder is asked again rather than taken from whoever called, so this is safe to ask anywhere. It costs no reading to answer.";
  arguments_assert(arguments, 1);
  let root = await folder_public_root_repo_is(file_path);
  if (not(root)) {
    return;
  }
  let app_name = await qa_promoted_piece_app(file_path);
  let unvouched = null_is(app_name);
  if (unvouched) {
    return;
  }
  let noting = folder_public_root_noting();
  let entitled = equal(noting, app_name);
  assert_json(entitled, {
    file_path,
    app: app_name,
    hint: "a note says this app's waiting pieces were built out of a commit that was judged, and writing here would leave that note describing something that is gone - which refuses the next sending for every app waiting beside it, and names none of them as the cause. Rebuild the app through its own promoting, or put it back to what is already being served",
  });
}
