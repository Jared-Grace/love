import { arguments_assert } from "./arguments_assert.mjs";
import { giveaway_psalms_chapters_uploaded_path } from "./giveaway_psalms_chapters_uploaded_path.mjs";
import { file_read_json } from "./file_read_json.mjs";
import { list_is_assert } from "./list_is_assert.mjs";
export async function giveaway_psalms_chapters_uploaded() {
  arguments_assert(arguments, 0);
  ("The psalm chapters whose archive.org box has already been given away, read off the kept list.");
  ("★ EVERY NAME IN A BOX THAT HAS GONE OUT IS AN ADDRESS NOBODY CAN EVER CHANGE, AND THIS LIST IS THE ONLY THING ON THIS DISK THAT KNOWS WHICH BOXES THOSE ARE. The host serves a file under the name it was uploaded with, forever, and names every derivative it makes after that name too. The writer of the record works out which singing of a psalm is take nought afresh on every run, from where a file stands in a walk of the downloads folder, so one new recording landing ahead of an old one renames every take after it. Before the first upload that costs nothing. After it, that rewriting silently points a public address at different singing. This list is what tells the writer where it must not tread.");
  ("★ A MISSING FILE IS NOT AN EMPTY LIST, AND THE WHOLE VALUE OF THIS FUNCTION IS THAT IT REFUSES TO PRETEND OTHERWISE. An empty list is a statement: nothing has gone out, every name is still free, and somebody wrote that down. A missing file is ignorance, and a freeze that read ignorance as freedom would be at its most permissive on exactly the machine that knows least. So the read is left to throw rather than wrapped in a catch that hands back nothing - the file is committed, so the only ways to be without it are a checkout that went wrong or a hand that deleted it, and both of those should stop a rewriting rather than wave it through.");
  ("The answer is insisted on being a list. A file edited by hand into an object, or into a single word, would otherwise be asked whether it includes a chapter and would answer no to every one of them - which is the fail-open shape again wearing different clothes.");
  let path = giveaway_psalms_chapters_uploaded_path();
  let chapters = await file_read_json(path);
  list_is_assert(chapters);
  return chapters;
}
