import { arguments_assert } from "./arguments_assert.mjs";
import { commons_thumb_url_async } from "./commons_thumb_url_async.mjs";
import { not } from "./not.mjs";
import { commons_user_agent } from "./commons_user_agent.mjs";
import { path_dirname } from "./path_dirname.mjs";
import { folder_exists_ensure } from "./folder_exists_ensure.mjs";
import { file_overwrite_buffer } from "./file_overwrite_buffer.mjs";
export async function commons_picture_download(title, width, path) {
  "$plain title";
  "$plain width";
  "$plain path";
  "Fetches a scaled copy of one named Wikimedia Commons picture and puts it on disk at a named path, answering the path, or null when Commons will not hand it over.";
  "★ IT ASKS FOR A SCALED COPY RATHER THAN THE FILE ITSELF, AND THAT IS NOT A SAVING OF DISK. Commons holds scans of paintings tens of thousands of pixels across; fetching one of those to make a picture a thousand pixels wide is minutes of somebody else's bandwidth for a result no better, and Commons starts refusing after about twenty quick fetches. A width asked for up front is one fetch of the size actually wanted.";
  "★ IT NAMES ITSELF, BECAUSE THE PICTURE HOST REFUSES A REQUEST THAT DOES NOT. An unnamed ask comes back four hundred and three with a sentence asking for a user agent, while the search interface answers the same unnamed ask happily - so this cannot be shared with the ordinary fetch here, which sets no name at all.";
  "★ IT MAKES THE FOLDER FIRST, because the whole point of these is that a psalm's pictures land in a folder named after the psalm, and that folder does not exist until the psalm's first picture arrives. A caller that had to remember is a caller that forgets on exactly the first picture of every psalm.";
  "It answers null rather than throwing on a title Commons does not hold or will not serve, because a walk over many scenes tries several candidate paintings per scene and a miss is an ordinary outcome rather than a fault.";
  arguments_assert(arguments, 3);
  let url = await commons_thumb_url_async(title, width);
  if (not(url)) {
    return null;
  }
  let headers = {
    "User-Agent": commons_user_agent(),
  };
  let response = await fetch(url, {
    headers,
  });
  if (not(response.ok)) {
    return null;
  }
  let got = await response.arrayBuffer();
  let bytes = Buffer.from(got);
  let folder = await path_dirname(path);
  await folder_exists_ensure(folder);
  await file_overwrite_buffer(path, bytes);
  return path;
}
