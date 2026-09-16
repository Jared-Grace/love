import { property_equals } from "./property_equals.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { lyric_video_documents_read } from "./lyric_video_documents_read.mjs";
import { property_get } from "./property_get.mjs";
export async function lyric_video_document_name_read(name) {
  "$plain name";
  "The whole of one lyric video document, asked for by the name it is filed under rather than by where the file sits, and nothing at all when no document answers to that name.";
  "A NAME THAT MATCHES NOTHING IS AN ANSWER AND NOT A FAILURE. It is the same promise the song reader makes, and for the same reason: the name arrives from a screen, and a screen asking about a document that is not there has something to say about it.";
  "IT IS THE FOLDER READER AND NOT ITS OWN READ, so a document reached by name and the same document counted in a tally are the same document. The folder read is the one place that knows what a document is.";
  arguments_assert(arguments, 1);
  let read = await lyric_video_documents_read();
  for (let one of read) {
    let same = property_equals(one, "name", name);
    if (same) {
      let document = property_get(one, "document");
      return document;
    }
  }
  return null;
}
