import { folder_root_move_files_each } from "./folder_root_move_files_each.mjs";
import { text_quote_double } from "./text_quote_double.mjs";
import { text_includes } from "./text_includes.mjs";
import { text_combine } from "./text_combine.mjs";
import { not } from "./not.mjs";
export async function folder_root_move_bare_named(before) {
  "Every file that hands a moved folder's name over as a piece of writing, with no folder mark after it - the way code names a folder it is about to build a path out of. Answers them and changes nothing.";
  "Reported rather than rewritten, because which of the two a name is takes a reading, and a reading is the one thing a sweep cannot do. A wrong guess here writes a path that nobody ever notices is wrong.";
  "Asked of the name in quotation marks rather than of the name loose in the writing. Loose, an ordinary word answers everywhere: `letters` came back from two hundred and twenty seven files, which is not a report anybody reads - and the one shape actually worth a reading, a folder named as a piece of writing on its way into a path, was in there somewhere among them.";
  "A file that already spells the folder as the start of a path is left off, because that spelling has been dealt with and saying so again only buries the ones that have not.";
  "This is the only net under the half of a rename that cannot be done by machine, so its length is the whole of whether anybody reads it. Which files it looks at is decided in one place shared with the rewriting half: moving `linux` used to answer with twenty-odd built bundles holding that word inside a browser's description of itself, and the one file worth reading was somewhere among them.";
  let quoted = text_quote_double(before);
  let as_path = text_combine(before, "/");
  let named = [];
  async function handle(tracked_path, f_path, text) {
    let spelled = text_includes(text, quoted);
    if (not(spelled)) {
      return;
    }
    let dealt = text_includes(text, as_path);
    if (dealt) {
      return;
    }
    named.push(tracked_path);
  }
  await folder_root_move_files_each(handle);
  return named;
}
