import { app_shared_prod_snapshot } from "../../js/app_shared_prod_snapshot.mjs";
export const example = {
  fn: app_shared_prod_snapshot.name,
  args: ["replace", "2026_05_03"],
  kind: "files",
  refuses: true,
  title: "Refuse a label that a kept copy already answers to",
  note: [
    { fn: app_shared_prod_snapshot.name },
    " refuses a label already in use. What sits under that name is an earlier keeping, and an earlier keeping is the one thing here that cannot be made again — the build it came from is gone, so writing over it loses the very page somebody was sent.",
    " Everything else the command touches can be redone from what is on disk; this cannot, so it is the one case that stops rather than overwrites.",
  ],
  expectText: "refused — a kept copy already answers to replace_2026_05_03",
  before: [
    {
      name: "replace.html",
      source: `<!doctype html><html><head><title>replace</title></head><body><script src="replace.js"></script></body></html>`,
    },
    {
      name: "replace.js",
      source: `console.log("replace, as it is built today");`,
    },
    {
      name: "replace_2026_05_03.html",
      source: `<!doctype html><html><head><title>replace</title></head><body><script src="replace_2026_05_03.js"></script></body></html>`,
    },
    {
      name: "replace_2026_05_03.js",
      source: `console.log("replace, as it was built in May");`,
    },
  ],
};
