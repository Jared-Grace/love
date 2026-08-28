import { arguments_assert } from "./arguments_assert.mjs";
import { null_is } from "./null_is.mjs";
import { property_get } from "./property_get.mjs";
export function bible_version_credit_from_version(version, bible_folder) {
  "$plain version";
  "$plain bible_folder";
  "Everything needed to credit one translation the way its own licence asks, read off a version record that has already been found, and nothing at all when no record was found.";
  "The shape is the same whichever catalogue the record came out of, and that sameness is the point rather than a coincidence. The page that credits translations should not have to know where any of them came from, and the gate that reads the terms should not either - a source is a way of getting a text, not a different kind of duty owed for it.";
  "Finding the record is what each source does for itself, because that is the only part that differs. Everything after it was written out once per source, which is a duty owed to readers kept in two places where one of them would go on being the copy nobody updates.";
  arguments_assert(arguments, 2);
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
