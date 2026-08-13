import { app_shared_prod_snapshot } from "../../js/app_shared_prod_snapshot.mjs";
export const example = {
  fn: app_shared_prod_snapshot.name,
  args: ["replace", "2026_05_03"],
  kind: "files",
  refuses: true,
  title: "Refuse to keep an app that is built in more than one piece",
  note: [
    { fn: app_shared_prod_snapshot.name },
    " refuses an app whose script sends for further scripts of its own. Those extra pieces are named by number inside the script itself, and a number cannot be pointed anywhere from outside — so the kept copy would still send for the pieces the next build replaces.",
    " That failure is invisible in the worst way: the kept page loads, and the part of it that was split out is whatever the app has become. Refusing is the only honest answer, because a copy that only half keeps something is worse than no copy at all.",
  ],
  expectText: "refused — the built app sends for pieces a copy cannot follow",
  before: [
    {
      name: "replace.html",
      source: `<!doctype html><html><head><title>replace</title></head><body><script src="replace.js"></script></body></html>`,
    },
    {
      name: "replace.js",
      source: `__webpack_require__.e(792).then(function () {
  console.log("the rest of replace arrives separately");
});`,
    },
  ],
};
