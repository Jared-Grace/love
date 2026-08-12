export function html_viewport_height_visible() {
  "the height a person can actually SEE right now, as a CSS length - what a screen spends when everything inside it has to be reachable rather than merely covered";
  "on a desktop it is the same number as the full height. on a phone it is not: the full height is the tallest the window ever gets, counting the strip the browser's own bar is sitting over, so a screen built to the full height hangs its last stretch underneath that bar. an overlay may do that harmlessly - it is only covering things - but anything a person has to see or tap may not";
  let v = "100dvh";
  return v;
}
