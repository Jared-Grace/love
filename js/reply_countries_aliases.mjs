export function reply_countries_aliases() {
  "What else people call a country, taken from Wikidata's English alternative labels for the same items the names came from.";
  "★ THE WORDS ARE THE SOURCE'S AND THE CHOOSING IS NOT, AND THAT SPLIT IS WHY THIS IS ITS OWN LIST. Every word here can be checked against Wikidata; which of them are here cannot, because the source offers eight hundred and the great majority are of no use to anybody writing in English. So this list makes one claim that can be verified and one that has to be argued with, and keeping it apart from the names is what stops the second claim borrowing the first one's standing.";
  "What was left out, and why. Names in other languages, because the messages are in English. Historic spellings like `affghaunistaun`, because a typo layer reaches those from the modern spelling anyway and a list is the expensive way to hold a misspelling. Anything under four letters, because at that length a country's short code and an ordinary English word are one edit apart and `can` would answer half the messages that never mentioned Canada.";
  "Left out for a sharper reason: words that are somebody's first name. `salvador` and `maurice` are both offered as aliases and both would turn a person introducing themselves into a country, which is the exact failure this whole change exists to remove.";
  let aliases = [
    "bahamas",
    "bermudas",
    "caymans",
    "ceylan",
    "congo",
    "czechia",
    "emirates",
    "falklands",
    "gambia",
    "guiana",
    "hindustan",
    "holland",
    "kampuchea",
    "macedonia",
    "malvinas",
    "merica",
    "micronesia",
    "moldavia",
    "murica",
    "naija",
    "nederland",
    "rhodesia",
    "roumania",
    "rumania",
    "saudi",
    "surinam",
    "swaziland",
    "vatican",
  ];
  return aliases;
}
