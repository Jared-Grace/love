import { arguments_assert } from "./arguments_assert.mjs";
import { lyric_video_documents_read } from "./lyric_video_documents_read.mjs";
import { property_get } from "./property_get.mjs";
import { lyric_video_document_pictures } from "./lyric_video_document_pictures.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { not } from "./not.mjs";
export async function lyric_video_document_names() {
  "The lyric video documents that have pictures in them, named the way a screen offers one and the way a reader asks for one back.";
  "IT IS THE ONES WITH PICTURES AND NOT EVERY DOCUMENT, because the screen these names are offered on has nothing to show for a document that asks for none. A hundred and fifty names in a row, four fifths of which open on an empty page, is a list a reader learns to distrust rather than a list.";
  "THE NAMES ARE READ OFF THE FOLDER RATHER THAN LISTED ANYWHERE. A psalm arrives by somebody writing its document, so a list kept by hand would be a second place to remember at the one moment nobody is thinking about lists.";
  arguments_assert(arguments, 0);
  let read = await lyric_video_documents_read();
  let names = [];
  for (let one of read) {
    let document = property_get(one, "document");
    let pictures = lyric_video_document_pictures(document);
    let none = list_empty_is(pictures);
    let any = not(none);
    if (any) {
      let name = property_get(one, "name");
      names.push(name);
    }
  }
  return names;
}
