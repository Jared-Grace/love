import { object_property_names } from "./object_property_names.mjs";
import { equal } from "./equal.mjs";
import { less_than } from "./less_than.mjs";
import { not } from "./not.mjs";
import { ebible_language_codes } from "./ebible_language_codes.mjs";
import { import_install } from "./import_install.mjs";
export async function text_language_codes_guess(text) {
  "$plain text";
  "The bible language codes text is most likely written in, as a next-passage link spells them - [] when it is too short to tell or looks like no language we have a bible in. Runs on this machine: only the codes leave, never the text.";
  "★ A GUESS, NOT A CHOICE: what this answers is offered or checked, never kept as a person's languages.";
  "★ TOO SHORT IS UNSURE: under thirty letters the detector answers confident nonsense - `God bless you po` came back as a language of Vietnam - so short text answers [] and several posts should be joined first.";
  "★ A NEAR TIE IS BOTH, EXCEPT BESIDE TAGALOG: Cebuano read as Tagalog first with Hiligaynon close behind, and Tagalog is the one every Filipino learns to read in school, so a tie that holds Tagalog drops Cebuano, Hiligaynon and Ilocano.";
  "The detector names languages by three letters; the links name some by two, so those few are turned into the links' spelling and every other code is already the same.";
  let franc_to_link = {
    eng: "en",
    cmn: "zh",
    spa: "es",
    fra: "fr",
    por: "pt",
    urd: "ur",
    pan: "pa",
    pnb: "pa",
    pes: "fas",
    mar: "mr",
    tur: "tr",
    hau: "ha",
    zsm: "zlm",
    guj: "gu",
    kan: "kn",
    amh: "am",
    ory: "or",
    gaz: "om",
    ibo: "ig",
    nld: "nl",
    nya: "ny",
  };
  let link_codes = ebible_language_codes();
  function link_of(code) {
    let r = franc_to_link[code] || code;
    return r;
  }
  let only = [];
  for (let franc_code of object_property_names(franc_to_link)) {
    if (link_codes.includes(franc_to_link[franc_code])) {
      only.push(franc_code);
    }
  }
  for (let code of link_codes) {
    let b = Object.values(franc_to_link).includes(code);
    if (not(b)) {
      only.push(code);
    }
  }
  let franc = await import_install("franc-all");
  let scored = franc.francAll(text, {
    only,
    minLength: 30,
  });
  let codes = [];
  for (let [code, score] of scored) {
    if (equal(code, "und") || less_than(score, 0.98)) {
      continue;
    }
    let link = link_of(code);
    let b2 = codes.includes(link);
    if (not(b2)) {
      codes.push(link);
    }
  }
  if (codes.includes("tgl")) {
    let philippine = ["ceb", "hil", "ilo"];
    function lambda(c) {
      let b3 = philippine.includes(c);
      let n = not(b3);
      return n;
    }
    codes = codes.filter(lambda);
  }
  return codes;
}
