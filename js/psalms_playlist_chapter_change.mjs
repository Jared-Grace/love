import { list_order_moves_to_end } from "./list_order_moves_to_end.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { not } from "./not.mjs";
import { not_equal } from "./not_equal.mjs";
import { subtract } from "./subtract.mjs";
export function psalms_playlist_chapter_change(
  chapter,
  playlist_id,
  holds,
  songs,
) {
  "What one chapter's playlist would have to change to hold every sung passage of that chapter in the order of the Psalm: which songs belong in it, how many it already holds, which of them are still missing, how many strangers are sitting in it, and whether the ones already there stand in the wrong order.";
  "The songs already in the playlist are handed in rather than asked for here, because asking the channel is the one slow part of the judgement and every chapter is asked at the same time. What is left is a comparison of two lists, which needs nothing outside itself and can be checked by reading it.";
  "A chapter with no playlist at all is handed an empty list of songs held, so it comes out asking for every song to be added rather than needing a case of its own.";
  arguments_assert(arguments, 4);
  let songs_to_add = [];
  let order_wanted = [];
  for (let song of songs) {
    order_wanted.push(song.video_id);
    let held_is = holds.includes(song.video_id);
    if (not(held_is)) {
      songs_to_add.push({
        video_id: song.video_id,
        title: song.title,
      });
    }
  }
  ("Two readings of the same songs, one in the order the playlist has them and one in the order the Psalm wants them, with everything that belongs to neither dropped from both. They can only differ by order, so comparing them says whether the order is wrong without saying anything about what is missing.");
  let kept = [];
  for (let video_id of holds) {
    if (order_wanted.includes(video_id)) {
      kept.push(video_id);
    }
  }
  let ordered = [];
  for (let video_id of order_wanted) {
    if (holds.includes(video_id)) {
      ordered.push(video_id);
    }
  }
  let left = kept.join(",");
  let right = ordered.join(",");
  let out_of_order = not_equal(left, right);
  ("Which of the songs already there would have to be taken out and put back at the end for the playlist to read in the order of the Psalm. A playlist offers no other move, so this is the whole of what fixing the order costs, and it is empty exactly when the order is already right.");
  let move_to_end = list_order_moves_to_end(kept, ordered);
  let r = {
    chapter: chapter,
    playlist_id: playlist_id,
    songs_wanted: order_wanted,
    songs_held: holds.length,
    add: songs_to_add,
    strangers: subtract(holds.length, kept.length),
    out_of_order: out_of_order,
    move_to_end: move_to_end,
  };
  return r;
}
