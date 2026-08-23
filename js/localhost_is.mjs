import { equal } from "./equal.mjs";
export function localhost_is() {
  "Whether the page being read was served by the very machine the browser is running on.";
  "OUTSIDE A BROWSER IT ANSWERS NO RATHER THAN THROWING, and the two are not the same kind of answer even though both stop a localhost-only thing from being offered. There is no page and no address to read where there is no browser, so the honest reading is that nothing here was served from anywhere - and a reader that cannot tell has to say no, because the things gated on this are gated for being unfit to leave the developer's own machine. Throwing was never a decision to keep that gate shut; it was the question being asked somewhere it had no answer, and it stopped anything outside a browser from so much as building the list the gate sits on.";
  let unread = not(browser_is());
  if (unread) {
    return false;
  }
  let li =
    equal(location.hostname, "localhost") ||
    equal(location.hostname, "127.0.0.1") ||
    equal(location.hostname, "::1");
  return li;
}
