import { arguments_assert } from "./arguments_assert.mjs";
import { lyric_video_documents_read } from "./lyric_video_documents_read.mjs";
import { lyric_video_document_pictures } from "./lyric_video_document_pictures.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { lyric_video_document_pictures_draw } from "./lyric_video_document_pictures_draw.mjs";
import { list_add } from "./list_add.mjs";
export async function lyric_video_documents_pictures_draw() {
  "Draws every picture every lyric video document asks for and does not yet have on disk, and answers, per document, which ones it drew.";
  "★ IT FINDS ITS OWN SET, SO IT TAKES NOTHING AND IS SAFE TO RUN AGAIN. The single-document draw already leaves a picture on disk alone; asking this twice draws nothing the second time and costs nothing, and a run that died partway is finished by running it again.";
  "A DOCUMENT ASKING FOR NO PICTURES IS PASSED OVER WITHOUT BEING NAMED, because most of the folder is takes and drafts nobody has pictured yet, and listing each of those would bury the ones that were drawn.";
  arguments_assert(arguments, 0);
  let read = await lyric_video_documents_read();
  let results = [];
  for (let one of read) {
    let pictures = lyric_video_document_pictures(one.document);
    if (list_empty_is(pictures)) {
      continue;
    }
    let result = await lyric_video_document_pictures_draw(one.path);
    list_add(results, result);
  }
  return results;
}
