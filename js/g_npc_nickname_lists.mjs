import { bible_names_women } from "./bible_names_women.mjs";
import { bible_names_men } from "./bible_names_men.mjs";
import { list_filter } from "./list_filter.mjs";
import { text_letters_is } from "./text_letters_is.mjs";
import { list_difference } from "./list_difference.mjs";
export function g_npc_nickname_lists() {
  "The two lists a person of the pool may be named from, cleaned so that no two people can end up sharing a name and no name can break the place it is stored under.";
  "LETTERS ONLY, because the name is an ADDRESS and not just a label. A person's file is named after them, and the path builder allows letters and digits and nothing else - so ADONI-ZEDEK and KEREN-HAPPUCH are perfectly good names that throw the moment anything is filed under them. Fifty-four are written with a dash in them. Dropping them here costs fifty-four names out of nearly two thousand and takes the whole class of failure away.";
  "THE LISTS OVERLAP AND HAVE TO BE PULLED APART. Twenty names, NOAH and JUDAH and PERSIS and SHELOMITH among them, are written down as both a man's name and a woman's, so naming one person from each list is not enough to keep the two names apart - measured over the pool as it stands, two pairs of people came out sharing a word. The shared ones are taken off the men rather than off the women, because the women's list is the short one and it is what decides how large the pool may grow; shortening it would cost people the game could otherwise hold.";
  "Given as a pair, the women first, so that the cleaning and every reader of the pair keep one order between them rather than each remembering their own.";
  "A NAME BELONGS TO EXACTLY ONE LIST AFTER THIS, which is what lets a reader ask which gender a name is by asking which list holds it. Left overlapping, a shared name would answer both ways and the check that a person's name agrees with their dealt gender could not have been written.";
  let women_written = bible_names_women();
  let women = list_filter(women_written, text_letters_is);
  let men_written = bible_names_men();
  let men_letters = list_filter(men_written, text_letters_is);
  let men = list_difference(men_letters, women);
  let lists = [women, men];
  return lists;
}
