import { equal } from "./equal.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { lyric_video_documents_pictures } from "./lyric_video_documents_pictures.mjs";
import { file_overwrite } from "./file_overwrite.mjs";
export async function lyric_video_picture_scenes_sheet_write() {
  arguments_assert(arguments, 0);
  ("Writes down every already-cut crop on one line of its own, its name first and then every scene sentence ever written beside it, so that choosing a painting for a passage with none is a search over plain text rather than a run of commands.");
  ("★ IT IS WRITTEN OUT BECAUSE THE SEARCH IS ASKED HUNDREDS OF TIMES AND THE WALK ANSWERS THE SAME THING EVERY TIME. One file read off the disk answers a word in no time at all, where asking the walk once per word spends a whole command on each, and the chapters still wanting pictures want a dozen words each.");
  ("★ EVERY SENTENCE EVER WRITTEN FOR A CROP GOES ON ITS LINE, because the same painting is chosen for many passages and each writer reached for different words; keeping only one of them hides the crop from everybody else's vocabulary.");
  ("IT IS NOT COMMITTED AND IT IS NOT THE RECORD. The documents are the record; this is a reading of them, so it is rewritten whenever it looks old rather than mended.");
  ("★ A SCENE SENTENCE MAY FAIL TO DESCRIBE ITS OWN CROP, measured at eight of twenty-two, because a cut made for one passage can throw away the very thing the sentence was about. So a line here names a candidate to look at and never a picture to write down unseen.");
  let path = "gitignore/lyric_video_picture_scenes.txt";
  let walked = await lyric_video_documents_pictures();
  let catalogue = {};
  let order = [];
  for (let one of walked.pictures) {
    let name = one.picture.name;
    let scene = one.picture.scene;
    let held = catalogue[name];
    if (equal(held, undefined)) {
      catalogue[name] = [scene];
      order.push(name);
      continue;
    }
    held.push(scene);
  }
  let lines = [];
  for (let name of order) {
    let scenes = catalogue[name];
    let joined = scenes.join(" | ");
    lines.push(name + "\t" + joined);
  }
  let text = lines.join("\n");
  await file_overwrite(path, text);
  let r = {
    path,
    crops: order.length,
    pictures: walked.pictures.length,
    documents: walked.documents,
  };
  return r;
}
