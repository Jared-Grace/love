import { property_get } from "./property_get.mjs";
import { literals_unnamed_generic_found } from "./literals_unnamed_generic_found.mjs";
import { literal_getters } from "./literal_getters.mjs";
import { list_add } from "./list_add.mjs";
import { literal_duplicate_means } from "./literal_duplicate_means.mjs";
import { object_property_names } from "./object_property_names.mjs";
import { greater_than } from "./greater_than.mjs";
import { subtract } from "./subtract.mjs";
export function literals_unnamed_generic(codes) {
  "Every value a handed-in body of source writes out in two or more of its files that no getter there names, commonest first, with a word each for what the files are doing with it.";
  "This is the other half of the duplicate finder, and the half nothing was asking. That one starts from the getters and looks for their value written somewhere else, so a value can only be found once somebody has already named it. A value written by hand in seven files and named nowhere is invisible to it - there is no getter to start from - and that is precisely the value most worth naming, because nobody has yet decided what it means. Both halves were needed to see the whole of a repeated value: one found the spellings that escaped a name, this one finds the names that were never given.";
  "Three kinds of written value are dropped rather than offered. An import path is a spelling of a file name, not a constant, and every file in a repo of small functions holds a dozen of them, so leaving them in buries the report under itself. A function name written as a string is a reference to that function, so routing it through a getter would name a name. And a value used only as the key of a field is the shape of saved data, which this code does not get to rename.";
  let getters = literal_getters(codes);
  let r = literals_unnamed_generic_found(getters, codes);
  let found = property_get(r, "found");
  let files_by_literal = property_get(r, "files_by_literal");
  for (let literal of object_property_names(files_by_literal)) {
    let files = files_by_literal[literal];
    if (greater_than(files.length, 1)) {
      let means = literal_duplicate_means(codes, files, literal);
      list_add(found, {
        literal,
        files,
        means,
      });
    }
  }
  function lambda(a, b) {
    let difference = subtract(b.files.length, a.files.length);
    return difference;
  }
  found.sort(lambda);
  return found;
}
