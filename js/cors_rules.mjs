import { cors_origins } from "./cors_origins.mjs";
export function cors_rules() {
  "What the file store is told about who may read from it: the addresses this repo's pages are opened at, that they may only read and never write, and how long a browser may remember the answer.";
  "Reading is the only thing granted, because every page here only ever downloads. Nothing that runs in a browser needs to put anything into the store, and a permission nobody uses is one somebody else can.";
  let origin = cors_origins();
  let rule = {
    origin,
    method: ["GET"],
    maxAgeSeconds: 3600,
  };
  let r = [rule];
  return r;
}
