import { greater_than } from "./greater_than.mjs";
import { not_equal } from "./not_equal.mjs";
import { equal } from "./equal.mjs";
import { subtract } from "./subtract.mjs";
import { not } from "./not.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
export function youtube_browse_lockups(answer) {
  "The videos youtube named anywhere inside one of its answers, each as its watch code and its title, together with the token that asks for the page after them.";
  "The answer is searched all the way through rather than read down a path, because youtube moves where a list of videos sits between one of its own releases and the next, and a path written today is a silent empty answer after that move. What a video is called in the answer has changed too; what has not changed is that the video's own record carries the watch code, so the record is what is looked for.";
  "The token comes back beside the videos rather than from a second search, because a page and the way to ask for the next one are one fact: read apart, a caller can hold the videos of one page and the token of another and never notice.";
  arguments_assert(arguments, 1);
  let videos = [];
  let continuation = null;
  let waiting = [answer];
  while (greater_than(waiting.length, 0)) {
    let node = waiting.pop();
    let is_object = not_equal(node, null) && equal(typeof node, "object");
    if (not(is_object)) {
      continue;
    }
    let lockup = node.lockupViewModel;
    if (lockup) {
      let title = lockup?.metadata?.lockupMetadataViewModel?.title?.content;
      videos.push({
        video_id: lockup.contentId,
        title: title || "",
      });
    }
    let shorts = node.shortsLockupViewModel;
    if (shorts) {
      let reel = shorts?.onTap?.innertubeCommand?.reelWatchEndpoint?.videoId;
      let watch = shorts?.onTap?.innertubeCommand?.watchEndpoint?.videoId;
      let spoken = shorts?.accessibilityText || "";
      let title = spoken.replace(/, [\d,.KM]+ views? - play Short$/, "");
      videos.push({
        video_id: reel || watch || "",
        title: title,
      });
    }
    let next = node.continuationItemViewModel;
    if (next) {
      let token =
        next?.continuationCommand?.innertubeCommand?.continuationCommand?.token;
      if (token) {
        continuation = token;
      }
    }
    let older = node.continuationItemRenderer;
    if (older) {
      let token = older?.continuationEndpoint?.continuationCommand?.token;
      if (token) {
        continuation = token;
      }
    }
    let values = Object.values(node);
    let at = values.length;
    while (greater_than(at, 0)) {
      at = subtract(at, 1);
      waiting.push(values[at]);
    }
  }
  let r = {
    videos: videos,
    continuation: continuation,
  };
  return r;
}
