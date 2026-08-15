import { readlink } from "fs/promises";
import { catch_null_async } from "./catch_null_async.mjs";
export async function link_destination(one_path) {
  "Where a link points, spelled exactly as the link itself writes it, and nothing at all when the name is not a link.";
  "It hands back what is written rather than where that leads. A link pointing at somewhere that has gone still says where it was looking, and that is the whole of what somebody repairing one needs to know.";
  "A name that is not a link answers the same as a name that is not there. Neither has a destination to give, and a reader asking this has nothing different to do about the two.";
  async function lambda_read() {
    let read = await readlink(one_path);
    return read;
  }
  let destination = await catch_null_async(lambda_read);
  return destination;
}
