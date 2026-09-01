import crypto from "crypto";
import { arguments_assert } from "./arguments_assert.mjs";
export function sha256_hash(value) {
  arguments_assert(arguments, 1);
  ("$plain value");
  ("One short fixed word standing for the whole of whatever is handed in - a run of bytes or a piece of writing - so a record of what something was can be kept and checked later without keeping the thing itself.");
  ("THE SAME FOUR LINES STOOD AT THE END OF BOTH THE FILE READER AND THE WRITING READER, and the two of them differ only in what they hand in: one opens a file as bytes, the other is given the writing already. Neither difference is here, so the ending is one thing said twice, which is what the reading of shared endings is for.");
  ("IT IS NOT THE PLACE TO CHOOSE WHAT IS HASHED, only how. Whether a thing should be read as bytes or as writing is the whole of the difference between the two that call this, and it is decided by them before anything reaches here - a file opened as writing is a file quietly altered on the way in by whatever its bytes were assumed to spell.");
  ("THE NAME OF THE METHOD IS WRITTEN ONCE NOW. It stood in two files, which is two places to change the day it stops being good enough, and no way for either to know the other had moved.");
  let maker = crypto.createHash("sha256");
  maker.update(value);
  let r = maker.digest("hex");
  return r;
}
