import { arguments_assert } from "./arguments_assert.mjs";
import { door43_version_or_null } from "./door43_version_or_null.mjs";
import { null_is } from "./null_is.mjs";
import { property_get } from "./property_get.mjs";
export function door43_version_credit(bible_folder) {
  arguments_assert(arguments, 1);
  ("$plain bible_folder");
  ("Everything needed to credit one Door43 translation the way its own licence asks, in the same shape a translation from eBible is credited in.");
  ("The same shape on purpose. The page that credits translations should not have to know where any of them came from, and the gate that reads the terms should not either - a source is a way of getting a text, not a different kind of duty owed for it.");
  ("Nothing is answered for a folder that is not a Door43 one, so this can be asked of any folder at all and the answer says which it was.");
  let version = door43_version_or_null(bible_folder);
  let elsewhere = null_is(version);
  if (elsewhere) {
    return null;
  }
  let name = property_get(version, "name");
  let description = property_get(version, "description");
  let credit = property_get(version, "credit");
  let licence = property_get(version, "licence");
  let url = property_get(version, "url");
  let v = {
    bible_folder,
    name,
    description,
    credit,
    licence,
    url,
  };
  return v;
}
