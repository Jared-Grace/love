import { equal } from "./equal.mjs";
import { strongs_greek_definition } from "./strongs_greek_definition.mjs";
import { bible_bdb_names_meanings_cache } from "./bible_bdb_names_meanings_cache.mjs";
export async function bible_greek_name_meanings(strong_number) {
  "What a New Testament name means, from two public-domain sources joined by number: Strong's own definition of the Greek word (1890), which for a Greek or Latin name often says the meaning itself (Pilate: close-pressed, i.e. firm), and, for a name Strong's derives from Hebrew, Brown, Driver and Briggs on each Hebrew number it points to (Elizabeth: God is an oath). Hands back { strongs_def, derivation, hebrew: [{ strong, name, meanings }] }, or null for a number Strong's does not have.";
  "THE HEBREW NUMBERS ARE READ OUT OF THE DERIVATION TEXT, which writes them H01247 with leading zeros; BDB keys them without, so the pattern leaves the zeros out of what it keeps.";
  let entry = await strongs_greek_definition(strong_number);
  if (equal(entry, null)) {
    return null;
  }
  let names = await bible_bdb_names_meanings_cache();
  let derivation = entry.derivation || "";
  let hebrew = [];
  for (let m of derivation.matchAll(/H0*(\d+)/g)) {
    let strong = m[1];
    let b = names[strong];
    if (equal(b, undefined)) {
      continue;
    }
    hebrew.push({
      strong,
      name: b.name,
      meanings: b.meanings,
    });
  }
  let r = {
    strongs_def: entry.strongs_def.trim(),
    derivation,
    hebrew,
  };
  return r;
}
