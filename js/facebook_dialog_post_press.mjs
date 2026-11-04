import { json_to } from "./json_to.mjs";
import { equal } from "./equal.mjs";
import { less_than } from "./less_than.mjs";
import { not_equal } from "./not_equal.mjs";
import { facebook_dialog_click } from "./facebook_dialog_click.mjs";
import { sleep } from "./sleep.mjs";
import { facebook_dialog_labels } from "./facebook_dialog_labels.mjs";
export async function facebook_dialog_post_press(page, picture_take) {
  "$plain page";
  "$plain picture_take";
  "Presses Post in the open box for a new post, pressing Next first as many as five times when Post is not showing yet. picture_take is called after each Next, so a run with no window leaves something to look at.";
  "BROWSER-SERIALIZED - do NOT auto-canonicalize";
  let posted = null;
  let presses = 0;
  while (equal(posted, null) && less_than(presses, 5)) {
    posted = await facebook_dialog_click(page, "Post");
    if (equal(posted, null)) {
      let next = await facebook_dialog_click(page, "Next");
      if (not_equal(next, "clicked")) {
        throw new Error("neither Post nor Next: Next was " + next);
      }
      presses = presses + 1;
      await sleep(5000);
      await picture_take();
    }
  }
  if (not_equal(posted, "clicked")) {
    let v = await facebook_dialog_labels(page);
    throw new Error("Post was " + posted + "; buttons: " + json_to(v));
  }
}
