import { not_equal } from "./not_equal.mjs";
import { not } from "./not.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { file_read } from "./file_read.mjs";
import { ebible_languages } from "./ebible_languages.mjs";
export async function iso_639_1_offered_matches() {
  "Every two-letter ISO 639-1 code beside the languages offered here that it could mean - read from the ISO 639-3 tables kept in data/iso_639_3 - so a link naming a language by two letters can be opened in that language when exactly one offered language answers to it, and never guessed at when several do.";
  "A two-letter code often names a family of languages - zh is all of Chinese - while what is offered here is one language of it: Mandarin, read from a Mandarin bible. So a code matches an offered language either directly or through the family it names, and the family's members come from the standard's own table rather than from anyone's judgement.";
  "Each offered language is counted by the three letters its bible's folder starts with, which is the ISO 639-3 code eBible names every bible by - so this reads the same before and after the codes the apps store are changed.";
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
    if (not(family in members)) {
      members[family] = [];
    }
    members[family].push(member);
  }
  let offered = {};
  for (let language of ebible_languages()) {
    let prefix = language.bible_folder.slice(0, 3).toLowerCase();
    offered[prefix] = language.language_code;
  }
  let r = [];
  for (let line of codes_text.split("\n").slice(1)) {
    let [id, , , part] = line.split("\t");
    if (not(part)) {
      continue;
    }
    let candidates = [id, ...(members[id] || [])];
    let matches = [];
    for (let candidate of candidates) {
      if (candidate in offered) {
        matches.push({
          iso_639_3: candidate,
          stored: offered[candidate],
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
