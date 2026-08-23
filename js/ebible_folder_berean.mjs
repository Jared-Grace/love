import { arguments_assert } from "./arguments_assert.mjs";
export function ebible_folder_berean() {
  "The download folder of the Berean Standard Bible - the one translation on this disk whose quotation marks balance, and so the only one a speaker parse can be run over.";
  "★ IT IS NAMED FOR THE TRANSLATION RATHER THAN CALLED A DEFAULT, BECAUSE IT WAS CHOSEN BY A MEASUREMENT AND NOT BY CONVENIENCE. Across Mark the Berean opens three hundred and five double quotations and closes three hundred and five; the World English Bible opens two hundred and seventy-eight and closes two hundred and sixty-seven, and Young's Literal writes every quotation with the plain apostrophe and so cannot be parsed at all. A word like DEFAULT would suggest the others merely were not tried.";
  "★ IT EXISTS SO NOTHING HAS TO SPELL THE FOLDER, WHICH MATTERS MOST WHERE THE CALLER TAKES NO ARGUMENTS. A gate is asked with nothing, so it has to know its own subject; before this the only way to say which bible it meant was to write the word into the gate, and a value written into two places is a value that will one day disagree with itself.";
  arguments_assert(arguments, 0);
  let folder = "engbsb";
  return folder;
}
