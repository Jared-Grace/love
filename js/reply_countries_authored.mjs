export function reply_countries_authored() {
  "The countries a message plainly names that no source in this repo could supply, written down here on somebody's judgement rather than quoted from anywhere.";
  "★ THIS IS THE SHORT LIST ON PURPOSE, BECAUSE IT IS THE ONLY ONE THAT IS AN OPINION. The other two lists can be checked against Wikidata word by word; this one cannot be checked against anything, so the honest thing is to keep it small enough to be read in full and to keep it away from the lists that can be checked. Thirty words is an argument somebody can actually have.";
  "Why a registry cannot supply these. `china` and `korea` are absent from every ISO-coded source because the bare word is ambiguous between two states and an identity registry must refuse an ambiguous name; a person writing a message is under no such duty and writes `China`. `england`, `scotland`, `wales` and `northernireland` have no ISO 3166-1 code at all, so no query over that standard can return them however it is written, and they are among the most likely words in the post.";
  "`america` is here for the same reason: the source's name for the country is `United States`, which does not contain the word, and its aliases stop at `merica` and `murica`. The rest are ordinary short forms and older names - `uk`, `usa`, `uae`, `drc`, `burma`, `macao`, `turkiye` - that a source spells out in full and a person does not.";
  let authored = [
    "alandislands",
    "america",
    "bosnia",
    "burma",
    "caboverde",
    "china",
    "cocosislands",
    "cotedivoire",
    "drc",
    "drcongo",
    "easttimor",
    "england",
    "frenchsouthernterritories",
    "greatbritain",
    "heardisland",
    "korea",
    "macao",
    "northernireland",
    "pitcairn",
    "sainthelena",
    "scotland",
    "svalbard",
    "turkiye",
    "turksandcaicos",
    "uae",
    "uk",
    "unitedstatesofamerica",
    "usa",
    "usvirginislands",
    "wales",
    "zaire",
  ];
  return authored;
}
