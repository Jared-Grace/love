import { arguments_assert } from "./arguments_assert.mjs";
export function youtube_video_address(video_id) {
  "$plain video_id";
  "Where a video is on the web, given its id - the address a person can be handed, or tap.";
  "It is written down once because an address handed to a reader is the thing that saves them the search, and a description that spells one out by hand somewhere else will spell it slightly differently one day.";
  arguments_assert(arguments, 1);
  let r = "https://www.youtube.com/watch?v=" + video_id;
  return r;
}
