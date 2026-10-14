import { arguments_assert } from "./arguments_assert.mjs";
import { ai_git_noted } from "./ai_git_noted.mjs";
import { lyric_video_documents_read } from "./lyric_video_documents_read.mjs";
import { list_any } from "./list_any.mjs";
import { text_is } from "./text_is.mjs";
import { function_call_commit } from "./function_call_commit.mjs";
import { lyric_video_document_lines_objects_write } from "./lyric_video_document_lines_objects_write.mjs";
export async function lyric_video_documents_lines_objects_repair() {
  arguments_assert(arguments, 0);
  ("Puts every lyric video document still holding its lines as bare pieces of text into the one shape the readers expect, and says afterwards how many are left.");
  ("★ IT FINDS ITS OWN SET AND ASKS AGAIN AFTERWARDS, so nobody has to carry a list of the four psalms concerned and nobody can be told a migration finished that did not. The four were found by one document stopping a copy, not by anybody keeping count, and the next one written by hand will be found the same way.");
  await ai_git_noted();
  let names = [];
  for (let one of await lyric_video_documents_read()) {
    if (list_any(one.document.lines, text_is)) {
      await function_call_commit(lyric_video_document_lines_objects_write, [
        one.path,
      ]);
      names.push(one.name);
    }
  }
  let left = [];
  for (let one of await lyric_video_documents_read()) {
    if (list_any(one.document.lines, text_is)) {
      left.push(one.name);
    }
  }
  let r = {
    written: names.length,
    names,
    left,
  };
  return r;
}
