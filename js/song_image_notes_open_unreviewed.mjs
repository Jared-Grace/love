import { arguments_assert } from "./arguments_assert.mjs";
import { song_image_couplets } from "./song_image_couplets.mjs";
import { song_image_review_couplets } from "./song_image_review_couplets.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { list_includes } from "./list_includes.mjs";
import { song_image_couplet_key } from "./song_image_couplet_key.mjs";
import { song_image_notes } from "./song_image_notes.mjs";
import { list_filter_property_not } from "./list_filter_property_not.mjs";
import { list_empty_not_is } from "./list_empty_not_is.mjs";
export async function song_image_notes_open_unreviewed() {
  "every couplet carrying a note nobody has answered that is no longer on the review bench - the feedback that has fallen out of sight";
  "A COUPLET TAKEN OFF THE BENCH STOPS HAVING ITS NOTES CLOSED, WHICH IS THE HOLE THIS LOOKS THROUGH. Closing a round walks the bench list and marks every note on every couplet standing in it. A couplet lifted off while one of its notes was still open keeps that note open for ever, and nothing ever looks at it again - it is not shown on the bench, because it left, and it is not closed, because closing only sees the bench.";
  "IT WAS FOUND WITH EIGHTEEN NOTES ALREADY LOST ACROSS FIVE COUPLETS, and one whole couplet whose note file had never had a single note marked answered. Nothing had gone red at any point; the notes were filed, stored and simply never read again.";
  "IT REPORTS AND DOES NOT CLOSE, WHICH IS THE WHOLE POINT. Marking the lost notes answered would clear the count and destroy the one record that they were never replied to, which is the failure itself rather than the symptom of it. What is wanted is the list, so that a person can answer them.";
  arguments_assert(arguments, 0);
  let couplets = song_image_couplets();
  let reviewing = song_image_review_couplets();
  let listed = list_map_property(reviewing, "n");
  let lost = [];
  for (let couplet of couplets) {
    let n = couplet.n;
    let benched = list_includes(listed, n);
    if (benched) {
      continue;
    }
    let key = song_image_couplet_key(n);
    let notes = await song_image_notes(key);
    let unanswered = list_filter_property_not(notes, "done");
    let any = list_empty_not_is(unanswered);
    if (any) {
      lost.push({
        n,
        key,
        unanswered,
      });
    }
  }
  return lost;
}
