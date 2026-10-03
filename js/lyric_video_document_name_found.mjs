import { arguments_assert } from "./arguments_assert.mjs";
import { lyric_video_documents_read } from "./lyric_video_documents_read.mjs";
import { equal } from "./equal.mjs";
export async function lyric_video_document_name_found(name) {
  arguments_assert(arguments, 1);
  ("$plain name");
  ("One lyric video timing document asked for by the name it is filed under, with the path it came from beside it, and nothing at all when no document answers to that name.");
  ("IT CARRIES THE PATH AND THAT IS THE WHOLE OF WHY IT IS NOT THE READER NEXT DOOR. Asking for a document by name and writing it back again are the same errand, and the reader that hands over only what is inside leaves the writer to spell an address out of a name - which is a second place that knows where these live, and it is the place that would go on writing to the old folder after a move.");
  ("A NAME THAT MATCHES NOTHING IS AN ANSWER AND NOT A FAILURE, because the name arrives from a person or a screen and whoever asked has something to say about a document that is not there.");
  let read = await lyric_video_documents_read();
  for (let one of read) {
    let same = equal(one.name, name);
    if (same) {
      return one;
    }
  }
  return null;
}
