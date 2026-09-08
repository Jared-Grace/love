import { arguments_assert } from "./arguments_assert.mjs";
import { lyric_video_documents_read } from "./lyric_video_documents_read.mjs";
export async function lyric_video_documents_pictures() {
  "Every picture authored in every lyric video document, each one handed back beside the path of the document it was written in.";
  "★ IT IS THE WALK AND NOT THE TEST, WHICH IS WHY IT IS ITS OWN ANSWER. Two checks already ask the same question of every scene - one about words the shared look refuses, one about scenes drawing people with no second wording beside them - and a third will come. Merging the checks would kill one of them, because a picture can fail both and only the first would be reported. Merging the walk costs nothing and is what they actually share.";
  "MOST DOCUMENTS HOLD NO PICTURES AT ALL and that is not a fault. Timings are authored long before scenes are; a document with lines and no pictures is a video waiting for its grounds, so it contributes nothing here and is still counted.";
  "HOW MANY DOCUMENTS THERE WERE TRAVELS OUT BESIDE THE PICTURES, because a caller reporting how much it looked at cannot tell an empty folder from a folder of songs without scenes otherwise.";
  arguments_assert(arguments, 0);
  let read = await lyric_video_documents_read();
  let pictures = [];
  for (let held of read) {
    let authored = held.document.pictures;
    if (authored) {
      for (let picture of authored) {
        let one = {
          path: held.path,
          picture,
        };
        pictures.push(one);
      }
    }
  }
  let r = {
    documents: read.length,
    pictures,
  };
  return r;
}
