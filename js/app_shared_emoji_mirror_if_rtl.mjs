import { app_shared_rtl_is } from "./app_shared_rtl_is.mjs";
import { emoji_mirror_or_same } from "./emoji_mirror_or_same.mjs";
import { ternary } from "./ternary.mjs";
export function app_shared_emoji_mirror_if_rtl(emoji) {
  "This little picture as the reader of this app should see it: turned round when they read from the right, left alone when they read from the left.";
  "Where a picture stands is one question and which way it faces is another, and the page answers only the first. A row told to run from the right moves the back button to the right-hand end by itself; the arrow drawn on it goes on pointing left until somebody says otherwise, and a back button pointing away from where it goes is worse than either arrangement whole.";
  "Asked for every picture on a button, not only the ones anybody expects to change. Which pictures have a meaning that reverses is written down in one place, and a button that asks here every time cannot fall behind that list.";
  let rtl = app_shared_rtl_is();
  let mirrored = emoji_mirror_or_same(emoji);
  let v = ternary(rtl, mirrored, emoji);
  return v;
}
