import { equal } from "./equal.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { text_split_comma_dot_trim } from "./text_split_comma_dot_trim.mjs";
import { lyric_video_documents_pictures } from "./lyric_video_documents_pictures.mjs";
export async function lyric_video_picture_scenes_search(words_comma) {
  arguments_assert(arguments, 1);
  ("$plain words_comma");
  ("Every already-cut crop whose authored scene prose holds all of the given words, keyed by the crop's own name, so that a picture for a passage with none yet is found among the paintings already chosen and already looked over.");
  ("★ IT SEARCHES THE PROSE AND NEVER THE FILES, because a crop is a cut of a painting and nothing inside a png says what is in it. The scene sentence written beside it came from somebody who had read the passage and looked at the cut, so it is the only account of that picture there is.");
  ("★ A CROP IS ANSWERED ONCE THOUGH MANY SONGS NAME IT, with every sentence written about it searched and the first of them shown. The same painting is chosen for many passages and each one writes its own scene, so searching only one of them would hide the crop from the words another writer used for it.");
  ("THE WORDS ARE ALL REQUIRED, as in every other search here, because a scene is a paragraph long and any single word of one matches almost everything.");
  ("★ A SCENE SENTENCE MAY FAIL TO DESCRIBE ITS OWN CROP, measured at eight of twenty-two, because the cut made for one passage can throw away the very thing the sentence was about. So a hit here is a candidate to look at and never a picture to write down unseen.");
  let words = text_split_comma_dot_trim(words_comma);
  let walked = await lyric_video_documents_pictures();
  let catalogue = {};
  let order = [];
  for (let one of walked.pictures) {
    let name = one.picture.name;
    let scene = one.picture.scene;
    let held = catalogue[name];
    if (equal(held, undefined)) {
      catalogue[name] = {
        scene_first: scene,
        scenes: [scene],
        songs: 1,
      };
      order.push(name);
      continue;
    }
    held.scenes.push(scene);
    held.songs = held.songs + 1;
  }
  let matched = [];
  for (let name of order) {
    let held = catalogue[name];
    let searchable = held.scenes.join(" ").toLowerCase();
    let all = true;
    for (let word of words) {
      let v = word.toLowerCase();
      let there = searchable.includes(v);
      if (equal(there, false)) {
        all = false;
      }
    }
    if (all) {
      matched.push(name);
    }
  }
  let count_shown = 30;
  let shown = {};
  for (let name of matched.slice(0, count_shown)) {
    let held = catalogue[name];
    shown[name] = {
      songs: held.songs,
      scene: held.scene_first,
    };
  }
  let r = {
    crops: order.length,
    found: matched.length,
    shown,
  };
  return r;
}
