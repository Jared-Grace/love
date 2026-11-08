export function html_viewport_height_always_visible() {
  "the height a person can see even while the browser's own bar is showing, as a CSS length - what a frame spends when the last thing in it is held at its bottom and has to stay on the screen";
  "the height a person can see right now is supposed to follow the bar as it comes and goes, but Firefox on a phone answered it with the tall height while its bar was still showing, and the two buttons held at the foot of a bible verse were cut in half by the bottom of the screen, 2026-11-08. The smallest height is the one no bar can ever sit over, so a frame built to it always ends on the screen";
  "on a desktop no bar slides, so this is the same number as every other height and changes nothing there";
  let v = "100svh";
  return v;
}
