import { symlink, unlink } from "fs/promises";
import { catch_null_async } from "./catch_null_async.mjs";
export async function link_destination_set(one_path, destination) {
  "Points a link at a new destination, making it if it is not there yet, and answers where it now points.";
  "The old one is taken away first rather than written over, because a link is made beside a name rather than into one - asking for a link where something already stands is refused, and the refusal reads as though the destination were at fault.";
  "Taking away a name that holds nothing is not an error here. It is the same ending as taking away one that did, and both leave the name free for what comes next, which is the only thing the step after this needs to be true.";
  "It does not ask whether the destination exists. A link is allowed to point at something not there yet, and refusing to make one would rule out pointing a link at a folder that is about to arrive.";
  async function lambda_remove() {
    let removed = await unlink(one_path);
    return removed;
  }
  await catch_null_async(lambda_remove);
  await symlink(destination, one_path);
  return destination;
}
