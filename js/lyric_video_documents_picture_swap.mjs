import { equal } from "./equal.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { lyric_video_documents_read } from "./lyric_video_documents_read.mjs";
import { lyric_video_document_pictures } from "./lyric_video_document_pictures.mjs";
import { file_overwrite_json } from "./file_overwrite_json.mjs";
export async function lyric_video_documents_picture_swap(
  name_before,
  name_after,
) {
  arguments_assert(arguments, 2);
  ("$plain name_before");
  ("$plain name_after");
  ("Carries a picture that has already replaced another one in a single document across to every other singing of the same passage, so the whole passage, every part of it and every take of each part all show the new picture and say the same thing about it.");
  ("★ THE NEW PICTURE IS READ BACK OUT OF THE DOCUMENT IT WAS ALREADY WRITTEN INTO, NEVER HANDED IN. What has to travel is a scene sentence, and a scene sentence is full of commas and full stops, which the command line splits on - so a caller could not pass one even if it wanted to. Writing it by hand once and copying it from there also makes the two spellings impossible to disagree.");
  ("★ THE LINE AND THE TIMES STAY WHERE THEY WERE. A part of a passage pins the same picture to a different line than the whole does, and each take times it differently, so only the three things that name the picture are overwritten and everything the singing decided is left alone.");
  ("A DOCUMENT THAT ALREADY SHOWS THE NEW PICTURE IS LEFT ALONE, which is what lets the command be run again after a peer committed half of it.");
  let read = await lyric_video_documents_read();
  let scene = null;
  let path_picture = null;
  for (let one of read) {
    for (let picture of lyric_video_document_pictures(one.document)) {
      if (equal(picture.name, name_after)) {
        scene = picture.scene;
        path_picture = picture.path;
      }
    }
  }
  if (equal(scene, null)) {
    let r_refused = {
      written: 0,
      names: [],
      found: false,
    };
    return r_refused;
  }
  let names = [];
  for (let one of read) {
    let swapped = false;
    for (let picture of lyric_video_document_pictures(one.document)) {
      if (equal(picture.name, name_before)) {
        picture.name = name_after;
        picture.scene = scene;
        picture.path = path_picture;
        swapped = true;
      }
    }
    if (swapped) {
      await file_overwrite_json(one.path, one.document);
      names.push(one.name);
    }
  }
  let r = {
    written: names.length,
    names,
    found: true,
  };
  return r;
}
