import { arguments_assert } from "./arguments_assert.mjs";
import { sword_version_or_null } from "./sword_version_or_null.mjs";
import { bible_version_credit_from_version } from "./bible_version_credit_from_version.mjs";
export function sword_version_credit(bible_folder) {
  "$plain bible_folder";
  "Everything needed to credit one Sword-module translation the way its own licence asks, in the same shape a translation from eBible is credited in.";
  "The same shape on purpose. The page that credits translations should not have to know where any of them came from, and the gate that reads the terms should not either - a source is a way of getting a text, not a different kind of duty owed for it. Reading the record into that shape is said once next door, so the sameness is now literal rather than two copies that agree today.";
  "Nothing is answered for a folder that is not a Sword one, so this can be asked of any folder at all and the answer says which it was.";
  arguments_assert(arguments, 1);
  let version = sword_version_or_null(bible_folder);
  let v = bible_version_credit_from_version(version, bible_folder);
  return v;
}
