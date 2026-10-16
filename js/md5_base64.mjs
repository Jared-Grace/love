import crypto from "crypto";
import { arguments_assert } from "./arguments_assert.mjs";
export function md5_base64(value) {
  arguments_assert(arguments, 1);
  ("$plain value");
  ("The checksum storage keeps beside every file it holds, worked out here for bytes on this disk, so the two can be compared without downloading anything.");
  ("IT IS WRITTEN THE WAY STORAGE WRITES IT, as base64 and not as hex. Storage hands its md5 back in base64, and the same digest spelled in hex never equals it, so a comparison made in the wrong spelling says every file differs and nothing is ever skipped.");
  let maker = crypto.createHash("md5");
  maker.update(value);
  let r = maker.digest("base64");
  return r;
}
