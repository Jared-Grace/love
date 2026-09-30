import { equal } from "./equal.mjs";
export function browser_automated_is() {
  "Whether this page is being driven by a program rather than a person - the flag every browser raises when a test harness is in control of it.";
  "It is the browser's own answer, not a guess from the window's size or speed: the standard says a browser under remote control must set it, so a test run cannot forget to.";
  let r = equal(navigator.webdriver, true);
  return r;
}
