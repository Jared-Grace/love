import { app_shared_prod_snapshot } from "../../js/app_shared_prod_snapshot.mjs";
export const example = {
  fn: app_shared_prod_snapshot.name,
  args: ["replace", "2026_05_03"],
  kind: "files",
  title: "Keep the copy of an app that is out on the internet under a name of its own",
  note: [
    { fn: app_shared_prod_snapshot.name },
    " copies the page and the script that are being served right now to a second pair of names, so the next build can take the live names without the version somebody was already sent going off the internet. The copy is the point: an app settles some of what it shows at the moment it is built, so building the same source again gives a different page wearing the same name.",
    " The kept page is then pointed at the kept script. Without that one edit the copy still says ",
    { code: "replace.js" },
    ", and the next build writes over exactly that file — leaving a page that looks kept and quietly shows whatever the app has become.",
  ],
  before: [
    {
      name: "replace.html",
      source: `<!doctype html><html><head><title>replace</title></head><body><script src="replace.js"></script></body></html>`,
    },
    {
      name: "replace.js",
      source: `console.log("replace, as it was built");`,
    },
  ],
  after: [
    {
      name: "replace.html",
      source: `<!doctype html><html><head><title>replace</title></head><body><script src="replace.js"></script></body></html>`,
    },
    {
      name: "replace.js",
      source: `console.log("replace, as it was built");`,
    },
    {
      name: "replace_2026_05_03.html",
      source: `<!doctype html><html><head><title>replace</title></head><body><script src="replace_2026_05_03.js"></script></body></html>`,
    },
    {
      name: "replace_2026_05_03.js",
      source: `console.log("replace, as it was built");`,
    },
  ],
};
