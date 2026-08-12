export function page_boot_wait_ms() {
  "how long to give a page to arrive before calling it dead, when the page is being opened COLD - nothing cached, a browser built a moment ago, on a machine that usually has several agents working on it at once.";
  "it is long because the thing being waited for is not a repaint but a whole first arrival: fetch the page, fetch and parse a bundle that can be hundreds of kilobytes, then fetch whatever the app needs before it can draw. the settle used for measuring an already-open page is a tenth of this and reading a cold arrival with it called six healthy apps dead.";
  "waiting long costs nothing when the page is well, because the wait stops the moment anything is on the screen. it is only ever paid in full by a page that really is not coming.";
  let v = 20000;
  return v;
}
