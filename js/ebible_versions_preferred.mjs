export function ebible_versions_preferred() {
  "Which translation a reader is given first in the few languages that offer a real choice between them - written down one language at a time, because the thing being chosen on is not written down anywhere on disk.";
  "Two hundred and nineteen of the two hundred and seventy two languages offer exactly one translation, so nothing here concerns them. Of the fifty three that offer several, most of the choice is between the same translation written in another script or another dialect, and how full each one is already settles those. What is left is this.";
  "The rule being applied is the human's: modern ahead of archaic, and close to the original ahead of retold in other words. Neither of those is anywhere in what eBible ships - not in the copyright page, not in the parameters file, not in the text - so neither can be measured, and a list of years scraped out of the titles decides only the half of them that happen to state a year. A judgment that cannot be derived is written down as a judgment, with what it rests on beside it.";
  "Every reason below is checkable against the titles printed in the catalogue or against what the translation says of itself. Where the reason would have been nothing more than a preference between two respectable modern translations, no entry was made and how full each one is decides, because inventing a reason to fill a row is worse than leaving the row out.";
  let preferred = {
    eng: "engbsb",
    spa: "spablm",
    fra: "frasbl",
    por: "porbrbsl",
    ita: "ita1927",
    ceb: "cebulb",
    twi: "twiasante",
    san: "sandev",
    ron: "ronbtf",
    deu: "deu1951",
    ukr: "ukrfb",
    srp: "srponspc",
  };
  ("eng - the Berean Standard Bible. Modern English, word for word rather than thought for thought, and in the public domain. It also settles a second thing nothing else could: the interlinear this repo already ships is the Berean, so the English a reader is shown and the original words underneath it are the same translators' work. The twenty five others holding all sixty six books are either from before 1900 - King James, Geneva, Darby, Douay-Rheims, Young, Webster, Tyndale, Wycliffe, the American Standard of 1901 - or say in their own titles that they retell rather than translate: Basic English, Translation for Translators, the Free Bible Version.");
  ("spa - Santa Biblia libre para el mundo. The five it beats name their own case: Español Sencillo is simplified, Nueva Biblia Viva is a living bible, Palabra de Dios para ti is written for a reader rather than from a text, and Reina Valera here is the 1909 printing.");
  ("fra - Sainte Bible libre pour le monde. Louis Segond dates itself 1910 and Darby is a literal of the same century; both are further from spoken French than this one.");
  ("por - Biblia Portuguesa Mundial, over Biblica's Nova Biblia Viva, which is the living-bible line and retells by design.");
  ("ita - Riveduta 1927 over Diodati 1885. Both are old and there is no modern Italian here to prefer, so the later of the two is taken.");
  ("ceb - Balaan nga Bibliya, the literal one, over Biblica's Ang Pulong sa Dios, which is thought for thought. This is the choice this repo already shipped.");
  ("twi - the Asante edition, which is the one this repo already shipped. This is a choice between two dialects rather than between old and new, and nothing in the rule decides it, so what was already chosen stands.");
  ("san - the Devanagari script. The other twenty one are the same New Testament written out in Assamese, Bengali, Burmese, Tamil, Urdu and sixteen more alphabets, so how full they are ties all twenty two and whichever was met first would win. Devanagari is the script Sanskrit is its own language in.");
  ("ron - Traducerea Fidela. The other complete Romanian prints its own title in Cyrillic letters, so it is the Moldovan edition and not the one a reader in Romania reads.");
  ("deu - Schlachter 1951, the only one of the four later than 1920. Luther 1912, the unrevised Elberfelder and the Textbibel are all older German still.");
  ("ukr - Bibliia svobody, which holds all sixty six books. The one it beats dates itself 1905 in its own title.");
  ("srp - Biblica's Novi srpski prevod in Cyrillic, the script Serbian is official in. The one it beats is the Danicic and Karadzic of 1865, which is further from spoken Serbian than any of the others here are from theirs.");
  return preferred;
}
