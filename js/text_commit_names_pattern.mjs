import { arguments_assert } from "./arguments_assert.mjs";
export function text_commit_names_pattern() {
  "A fresh matcher for a run of hex digits shaped like a commit name - seven to forty of them standing on their own rather than inside a longer word - with the run captured, so the same matcher can both list the names in a text and cut that text into the pieces between them.";
  "★ THE FINDER AND THE REWRITER ARE GIVEN NO WAY TO DISAGREE, which is the whole reason this is a function rather than a short pattern written twice. A rewriter matching even slightly wider than the finder changes a run the finder never reported; one matching narrower reports a rename and then quietly fails to make it. Neither shows up as an error - the answer simply stops describing the file - so the two read the shape from one place.";
  "★ A NEW MATCHER COMES BACK EVERY TIME, NEVER ONE SHARED ONE. A matcher that walks a whole text keeps its place inside itself, so a shared one answers its second caller from wherever the first caller left off, and the second answer is a fragment of the truth rather than an error.";
  "The run is captured because cutting a text on an uncaptured matcher throws away the very pieces the rewriter exists to look at. Listing is unaffected by the capture, so one shape serves both.";
  arguments_assert(arguments, 0);
  let pattern = /(\b[0-9a-f]{7,40}\b)/g;
  return pattern;
}
