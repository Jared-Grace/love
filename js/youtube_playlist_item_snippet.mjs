import { arguments_assert } from "./arguments_assert.mjs";
export function youtube_playlist_item_snippet(playlist_id, video_id, position) {
  "$plain playlist_id";
  "$plain video_id";
  "$plain position";
  "The description of one video sitting at one place in one playlist, in the shape YouTube's own door expects to be handed.";
  "Putting a video into a playlist and moving one already in it are told apart only by whether a name for the place is sent alongside. What describes the sitting itself is the same either way, so it is written once here rather than twice in two near-identical shapes that could drift apart.";
  "The video is named inside a wrapper saying what kind of thing it is, because a playlist can hold other kinds - a whole other playlist, a channel - and the kind is how the far end knows which of those was meant.";
  arguments_assert(arguments, 3);
  let r = {
    playlistId: playlist_id,
    resourceId: {
      kind: "youtube#video",
      videoId: video_id,
    },
    position: position,
  };
  return r;
}
