import { bible_usfm_versions } from "./bible_usfm_versions.mjs";
import { property_get } from "./property_get.mjs";
import { object_property_names } from "./object_property_names.mjs";
import { error_json } from "./error_json.mjs";
export function bible_usfm_version_get(version) {
  "$plain version";
  "What is known about one bible, asked for by the short word it goes under.";
  "A WORD NOTHING ANSWERS TO IS REFUSED, AND THE REFUSAL SAYS WHICH WORDS DO. Handing back nothing would let the mistake travel: the caller would read a name off nothing, get nothing, and print a video attributed to no translation at all. Naming the choices in the complaint is the difference between being told no and being told what to say instead.";
  let versions = bible_usfm_versions();
  let found = property_get(versions, version);
  if (found) {
    return found;
  }
  let known = object_property_names(versions);
  error_json({
    hint: "no bible on this disk goes under that word",
    version,
    known,
  });
}
