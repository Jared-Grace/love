import crypto from "crypto";
export function text_hash(text) {
  "$plain text";
  "one short fixed word standing for the whole of a piece of writing, so a record of what something was can be kept and compared without keeping the thing itself";
  "the same writing always gives the same word and different writing practically never gives the same one, which is the only property anything reading this record relies on";
  let maker = crypto.createHash("sha256");
  maker.update(text);
  let r = maker.digest("hex");
  return r;
}
