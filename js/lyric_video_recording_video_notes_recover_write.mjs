import { greater_than_equal } from "./greater_than_equal.mjs";
import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { number_from_text } from "./number_from_text.mjs";
import { lyric_video_recording_video_recovered } from "./lyric_video_recording_video_recovered.mjs";
import { subtract } from "./subtract.mjs";
import { null_is } from "./null_is.mjs";
import { list_add } from "./list_add.mjs";
import { lyric_video_recording_video_write } from "./lyric_video_recording_video_write.mjs";
export async function lyric_video_recording_video_notes_recover_write(
  folder_audio,
  fit_least,
  margin_least,
) {
  arguments_assert(arguments, 3);
  ("$plain folder_audio");
  ("$plain fit_least");
  ("$plain margin_least");
  ("Writes down which video each recording the giveaway's walk cannot reach was made from, for every one whose best answer is both close enough and far enough ahead of the next best, and hands back what it refused and why.");
  ("★ THE TWO BARS ARE ARGUMENTS AND NOT NUMBERS KEPT IN HERE, BECAUSE THEY ARE THE WHOLE OF THE JUDGMENT AND A REPLAYABLE COMMAND HAS TO SAY WHAT IT JUDGED BY. The function finding the answers refuses to draw a line, saying a threshold belongs to whoever is answerable for the answer; that is this, and passing them in is what makes the commit message name them. Read back later, the record says a note was written because a fit of this much beat its runner-up by that much - which is checkable - rather than that a function once thought so.");
  ("★ A VIDEO TWO RECORDINGS BOTH WANT IS REFUSED FOR BOTH OF THEM, however well either scored. A note says this video is of this recording, and two notes naming one file would hand the same video out twice under two different songs - a listener would download what looks like two singings and hear one. One of the two is wrong and nothing here can say which, so the right answer is to write neither and name the clash, which a person can settle by listening.");
  ("★ WHAT IS REFUSED IS NAMED WITH ITS NUMBERS RATHER THAN COUNTED, because the numbers are the only thing that can tell a near miss from a recording whose video is simply not in the folder. A refusal that scored close under the bar is an invitation to listen to one pair; a refusal far under it is nothing at all, and a count of refusals makes both look the same.");
  ("Writing the same pair again changes nothing, so this is safe to re-run after the bars are moved.");
  let fit_bar = number_from_text(fit_least);
  let margin_bar = number_from_text(margin_least);
  let recovered = await lyric_video_recording_video_recovered(folder_audio);
  let refused = [];
  let passed = [];
  for (let one of recovered.found) {
    let margin = subtract(one.fit, one.runner_up);
    let absent_is = null_is(one.video);
    if (absent_is) {
      list_add(refused, {
        recording: one.recording,
        why: "no video in the folder came out ahead at all",
        fit: one.fit,
        runner_up: one.runner_up,
      });
      continue;
    }
    let close_is = greater_than_equal(one.fit, fit_bar);
    if (not(close_is)) {
      list_add(refused, {
        recording: one.recording,
        video: one.video,
        why: "the best answer is not close enough",
        fit: one.fit,
        runner_up: one.runner_up,
      });
      continue;
    }
    let clear_is = greater_than_equal(margin, margin_bar);
    if (not(clear_is)) {
      list_add(refused, {
        recording: one.recording,
        video: one.video,
        why: "the next best answer is too close behind",
        fit: one.fit,
        runner_up: one.runner_up,
      });
      continue;
    }
    list_add(passed, {
      recording: one.recording,
      video: one.video,
      margin: margin,
    });
  }
  let wrote = [];
  for (let one of passed) {
    let shared = [];
    for (let other of passed) {
      let same_is = equal(other.video, one.video);
      if (same_is) {
        list_add(shared, other.recording);
      }
    }
    let alone_is = equal(shared.length, 1);
    if (not(alone_is)) {
      list_add(refused, {
        recording: one.recording,
        video: one.video,
        why: "more than one recording claims this video",
        claimed_by: shared,
      });
      continue;
    }
    let note = await lyric_video_recording_video_write(
      one.recording,
      one.video,
    );
    list_add(wrote, note);
  }
  let answer = {
    wrote: wrote,
    refused: refused,
  };
  return answer;
}
