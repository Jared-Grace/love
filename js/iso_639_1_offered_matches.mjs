import { arguments_assert } from "./arguments_assert.mjs";
import { file_read } from "./file_read.mjs";
import { not_equal } from "./not_equal.mjs";
import { not } from "./not.mjs";
import { property_exists } from "./property_exists.mjs";
import { property_set } from "./property_set.mjs";
import { property_get } from "./property_get.mjs";
import { ebible_language_codes_iso_639_3_renamed } from "./ebible_language_codes_iso_639_3_renamed.mjs";
import { ebible_languages } from "./ebible_languages.mjs";
import { property_get_or } from "./property_get_or.mjs";
export async function iso_639_1_offered_matches() {
  "Every two-letter ISO 639-1 code beside the languages offered here that it could mean - read from the ISO 639-3 tables kept in data/iso_639_3 - so a link naming a language by two letters can be opened in that language when exactly one offered language answers to it, and never guessed at when several do.";
  "A two-letter code often names a family of languages - zh is all of Chinese - while what is offered here is one language of it: Mandarin, read from a Mandarin bible. So a code matches an offered language either directly or through the family it names, and the family's members come from the standard's own table rather than from anyone's judgement.";
  "Each offered language is counted by its stored code, put through the frozen table of codes renamed to ISO 639-3 - so this reads the same before and after the stored codes are changed, and an entry that is not a language (the original Hebrew and Greek) matches nothing, because the standard has no such code.";
  arguments_assert(arguments, 0);
  let codes_text = await file_read("data/iso_639_3/iso-639-3.tab");
  let families_text = await file_read(
    "data/iso_639_3/iso-639-3-macrolanguages.tab",
  );
  let members = {};
  for (let line of families_text.split("\n").slice(1)) {
    let [family, member, status] = line.trim().split("\t");
    if (not_equal(status, "A")) {
      continue;
    }
    let b = property_exists(members, family);
    if (not(b)) {
      property_set(members, family, []);
    }
    property_get(members, family).push(member);
  }
  let renamed = ebible_language_codes_iso_639_3_renamed();
  let offered = {};
  for (let language of ebible_languages()) {
    let stored = property_get(language, "language_code");
    let iso = property_get_or(renamed, stored, stored);
    property_set(offered, iso, stored);
  }
  let r = [];
  for (let line of codes_text.split("\n").slice(1)) {
    let [id, , , part] = line.split("\t");
    if (not(part)) {
      continue;
    }
    let family_members = property_get_or(members, id, []);
    let candidates = [id, ...family_members];
    let matches = [];
    for (let candidate of candidates) {
      if (property_exists(offered, candidate)) {
        matches.push({
          iso_639_3: candidate,
          stored: property_get(offered, candidate),
        });
      }
    }
    r.push({
      iso_639_1: part,
      iso_639_3: id,
      matches,
    });
  }
  return r;
}
