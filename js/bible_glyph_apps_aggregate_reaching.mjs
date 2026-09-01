import { arguments_assert } from "./arguments_assert.mjs";
import { apps_names_prefixed } from "./apps_names_prefixed.mjs";
import { fn_name } from "./fn_name.mjs";
import { function_names_reaching_any } from "./function_names_reaching_any.mjs";
export async function bible_glyph_apps_aggregate_reaching() {
  "The apps that can reach a function holding every picture chapter at once, by importing, however many files away - one record per offending pair.";
  arguments_assert(arguments, 0);
  ("THE THREE NAMED FUNCTIONS EACH HOLD THE WHOLE PICTURE BIBLE. One holds every chapter there is, one holds the written-out Rosetta bands for every one of them, and one holds the whole Tagalog. They are written that way on purpose, because everything on this side of the machine - the writers, the surveys, the gates that read across chapters - genuinely wants all of them at once and there is nothing to be gained by making a program that is about all of them ask for them one at a time.");
  ("A PAGE IS THE ONE PLACE THAT WANTS THEM AND MUST NOT HAVE THEM. A reader opens one chapter, so a page reaching any of these downloads the whole book to draw a page of it, and a reader who opens nothing at all still pays for it before the first paint. Measured on the twenty eighth of August, the three of them together were four hundred and fifty six thousand bytes of what the picture Bible page could reach, and moving all three behind a fetch took what a visitor first downloads from five hundred and forty one thousand bytes to eighty five thousand.");
  ("IT IS WRITTEN AS A GATE BECAUSE THE MISTAKE IS THE OBVIOUS THING TO WRITE. Every one of the three got in the same way: somebody wanted one chapter, the function that hands over all of them was the one with the plain name, and calling it worked perfectly. Nothing went red and nothing looked wrong; the page simply weighed six times what it needed to, and each of the three sat there unnoticed until somebody thought to weigh what the page could reach. Two of them had already been found and fixed when the third was discovered by measuring, which is the whole argument - a fault nobody can see is a fault that comes back.");
  ("What an offender should do instead is send for the one chapter it wants. There is a fetching neighbour for each of the three, named after it, and each takes a chapter code and hands back that chapter alone.");
  ("Imports and not calls, so an app is named whether or not the branch reaching the aggregate is one that ever runs. That is the right way round for a rule about weight: a bundler follows an import whether the branch runs or not, so a line nobody expects to reach is carried exactly like a line that always is.");
  let names = await apps_names_prefixed();
  let chapters = fn_name("bible_glyph_chapters");
  let rosetta = fn_name("bible_glyph_chapters_rosetta_lines");
  let tagalog = fn_name("bible_glyph_chapters_tagalog");
  let targets = [chapters, rosetta, tagalog];
  let offenders = await function_names_reaching_any(names, targets);
  let walked = names.length;
  let r = {
    walked,
    offenders,
  };
  return r;
}
