export function window_go(url) {
  "Go to another page in the tab that is already open, the way pressing an ordinary link does. BESPOKE (window.location) - do NOT auto-canonicalize.";
  "Beside the twin that opens a second tab: somebody carrying on from one page to the next wants the page they came from behind them, where the browser's own back button reaches it, rather than left open in a tab they now have to close - which on a phone is the more expensive of the two by a long way.";
  window.location.assign(url);
}
