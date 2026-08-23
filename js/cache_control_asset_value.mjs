export function cache_control_asset_value() {
  "How long a browser may keep a picture, and what it does with the copy it kept.";
  "IT ANSWERS FROM THE KEPT COPY AT ONCE AND ASKS AFTERWARDS. A reload draws instantly instead of queueing hundreds of pictures through the handful of connections a browser will open at a time, and an edited picture still arrives, on the load after the one that noticed it - so nothing needs a hard reload and nothing waits.";
  "The same words are said to the dev server and to storage, because a picture served from either should behave the same way; that is why they are said here rather than twice.";
  let value = "public, max-age=0, stale-while-revalidate=31536000";
  return value;
}
