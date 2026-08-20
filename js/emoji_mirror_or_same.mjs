import { emoji_mirrors } from "./emoji_mirrors.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { null_is } from "./null_is.mjs";
export function emoji_mirror_or_same(emoji) {
  "The twin of this little picture facing the other way, or the picture itself when it has no twin.";
  "Handing back the same picture is the ordinary answer here and not a failure. Almost nothing has a meaning that reverses, so almost everything comes back exactly as it went in, and a caller can hand every picture it has through this without first knowing which of them are the interesting ones.";
  let mirrors = emoji_mirrors();
  let mirror = property_get_or_null(mirrors, emoji);
  let missing = null_is(mirror);
  if (missing) {
    return emoji;
  }
  return mirror;
}
