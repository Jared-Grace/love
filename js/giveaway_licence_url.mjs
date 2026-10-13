import { arguments_assert } from "./arguments_assert.mjs";
import { text_frozen } from "./text_frozen.mjs";
export function giveaway_licence_url() {
  arguments_assert(arguments, 0);
  ("The licence every archive.org box of given-away content carries - the address the host stores and shows, which is how a licence is said there rather than in words.");
  ("★ IT IS CC0 BECAUSE THE ASKING WAS FOR AS PUBLIC DOMAIN AS POSSIBLE, AND CC0 IS WHAT AS POSSIBLE MEANS FOR SOMETHING NEWLY MADE. Nobody can put a new work into the public domain by saying so - in many countries the right exists whether it is wanted or not - so the strongest thing an author can do is give every one of those rights up in advance, to the extent the law in each place allows, and that is exactly what CC0 is written to do. Anybody may then sing it, sell it, cut it up or claim it, with no condition and nobody to ask.");
  ("★ THE PUBLIC DOMAIN MARK IS THE WRONG ONE, THOUGH ITS NAME IS THE CLOSER MATCH. That mark is a label for a work whose rights have already expired, and its own authors say not to put it on your own work: it would be making a claim about the law rather than a decision about this singing, and the claim would be false while any right in it still exists. The box does hold things that genuinely are out of copyright - old paintings, a translation given away by its publisher - and nothing here needs to assert that, because giving up a right nobody holds costs nothing and misstating one is a lie.");
  ("★ A LICENCE ONLY EVER GIVES AWAY WHAT THE GIVER HOLDS, WHICH IS WHY ONE LICENCE FITS A BOX OF MIXED THINGS. A box holds singing made here, pictures long out of copyright, and a translation its publisher already freed. Marking the box CC0 waives the rights held here and says nothing at all about the rest, so it cannot overclaim - the alternative, a licence per file, is not something the host offers: one box is one licence.");
  ("Share-alike and attribution were both considered and both rejected, for one reason: each is a condition, and a condition is a thing somebody has to obey, check, or be in breach of. The aim is that content leave here and be used, including by people who will never know where it came from.");
  ("The version is written out rather than left to whatever the host calls current. A licence is a promise about a particular text, and a promise that silently became a different promise is not one.");
  let url = text_frozen("https://creativecommons.org/publicdomain/zero/1.0/");
  return url;
}
