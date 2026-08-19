import { greater_than } from "./greater_than.mjs";
import { not_equal } from "./not_equal.mjs";
import { equal } from "./equal.mjs";
import { subtract } from "./subtract.mjs";
import { not } from "./not.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
export function youtube_browse_lockups(answer) {
  "Everything youtube named anywhere inside one of its answers, each as the word youtube knows that thing by and the title it wears, together with the token that asks for the page after them.";
  "A video and a playlist are written down the same way in an answer, so both are read the same way here and the caller says which it asked for. Making one reader for each would have been two copies of the same walk, differing only in the word they put on what they found.";
  "The answer is searched all the way through rather than read down a path, because youtube moves where a list sits between one of its own releases and the next, and a path written today is a silent empty answer after that move. What the entries are called in the answer has changed too; what has not changed is that an entry's own record carries the word it is known by, so the record is what is looked for.";
  "The token comes back beside the entries rather than from a second search, because a page and the way to ask for the next one are one fact: read apart, a caller can hold the entries of one page and the token of another and never notice.";
  "The first token met is the one kept. An answer can carry more than one - a channel's playlists page carries a second belonging to a strip further down that this never read - and the one belonging to the list that was asked for stands first, where the list itself ends. Keeping the last instead read thirty playlists and then asked for the strip's next page, which had none, and stopped: a hundred and four playlists answered as thirty, with nothing anywhere saying so.";
  arguments_assert(arguments, 1);
  let items = [];
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
      items.push({
        content_id: lockup.contentId,
        title: title || "",
      });
    }
    let shorts = node.shortsLockupViewModel;
    if (shorts) {
      let reel = shorts?.onTap?.innertubeCommand?.reelWatchEndpoint?.videoId;
      let watch = shorts?.onTap?.innertubeCommand?.watchEndpoint?.videoId;
      let spoken = shorts?.accessibilityText || "";
      let title = spoken.replace(/, [\d,.KM]+ views? - play Short$/, "");
      items.push({
        content_id: reel || watch || "",
        title: title,
      });
    }
    let next = node.continuationItemViewModel;
    if (next) {
      let token =
        next?.continuationCommand?.innertubeCommand?.continuationCommand?.token;
      if (token && continuation === null) {
        continuation = token;
      }
    }
    let older = node.continuationItemRenderer;
    if (older) {
      let token = older?.continuationEndpoint?.continuationCommand?.token;
      if (token && continuation === null) {
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
    items: items,
    continuation: continuation,
  };
  return r;
}
