import { arguments_assert } from "./arguments_assert.mjs";
import { gloss_chapters_finished_unpublished } from "./gloss_chapters_finished_unpublished.mjs";
import { property_get } from "./property_get.mjs";
import { list_map_async } from "./list_map_async.mjs";
export async function gloss_chapters_unpublished_upload_generic(
  fn,
  passages_read,
  namespace_read,
  upload,
) {
  "Publish every chapter of one gloss store that is explained all the way through and has not been carried up yet, and hand back what went and what is left.";
  "It finds its own set rather than being handed one, because the set is already worked out by the gate that complains about it and a list typed at a call site would be right on the day it was typed. That also makes it safe to run twice: the second run finds nothing to do and says so.";
  "Nothing part-written goes. A chapter still being worked on belongs to whoever is working on it, and publishing it would put half a chapter in front of a reader on somebody else's behalf.";
  "What is left over is asked of the bucket again at the end rather than worked out from what was sent, so the answer is what a reader can actually reach and not what this believed it had done.";
  arguments_assert(arguments, 4);
  let before = await gloss_chapters_finished_unpublished(
    fn,
    passages_read,
    namespace_read,
  );
  let waiting = property_get(before, "offenders");
  ("The chapters go one at a time rather than all at once, because the answer wanted here is what actually arrived, and a run of uploads sent together fails as one whole rather than telling which of them got there.");
  await list_map_async(waiting, upload);
  let after = await gloss_chapters_finished_unpublished(
    fn,
    passages_read,
    namespace_read,
  );
  let r = {
    uploaded: waiting,
    remaining: property_get(after, "offenders"),
  };
  return r;
}
