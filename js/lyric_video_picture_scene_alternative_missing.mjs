import { arguments_assert } from "./arguments_assert.mjs";
import { lyric_video_documents_pictures } from "./lyric_video_documents_pictures.mjs";
import { lyric_video_picture_scene_people_words } from "./lyric_video_picture_scene_people_words.mjs";
import { greater_than } from "./greater_than.mjs";
import { list_unique } from "./list_unique.mjs";
export async function lyric_video_picture_scene_alternative_missing() {
  "Every authored scene that asks for a person and has no second wording beside it drawing nobody, together with the words that say a person was asked for.";
  "★ IT INSURES AGAINST A COMPLAINT THAT WOULD OTHERWISE COST THE WHOLE VIDEO AGAIN. Some of those who will watch these hold that the LORD should not be drawn, and a picture with a figure in it is a picture somebody may write in about. The answer to such a letter is a second video drawing nobody - and a scene reading harvesters in a field cannot be turned into one by changing a rule, because the sentence itself names them. It has to be written again, drawn again and rendered again, months later, by somebody reading the psalm cold. Written at the same time as the first, while the line is already in front of the author, it is a minute.";
  "THE SECOND WORDING IS scene_no_people ON THE PICTURE, and where it goes when drawn is not authored at all but derived from the first picture's own place.";
  "★ IT STARTS GREEN AND THAT IS THE POINT, NOT A WEAKNESS. All twenty-nine scenes written before people were allowed draw nobody, so every video published to this day is already its own alternative and owes nothing here. What this covers is the psalms nobody has written scenes for yet, which is where the whole debt would otherwise be built up unseen.";
  "IT NAMES THE WORDS IT MATCHED, because a scene stopped without being told which word stopped it sends the author looking through their own sentence for a person that may be a rock face.";
  arguments_assert(arguments, 0);
  let read = await lyric_video_documents_pictures();
  let words_people = lyric_video_picture_scene_people_words();
  let ending = new RegExp("s$");
  let letters = new RegExp("[a-z]+", "g");
  let stems = [];
  for (let word of words_people) {
    let v = word.replace(ending, "");
    stems.push(v);
  }
  let missing = [];
  for (let held of read.pictures) {
    let picture = held.picture;
    let alternative = picture.scene_no_people;
    if (alternative) {
      continue;
    }
    let words = picture.scene.toLowerCase().match(letters);
    let said = [];
    if (words) {
      for (let word of words) {
        let stem = word.replace(ending, "");
        let has = stems.includes(stem);
        if (has) {
          said.push(word);
        }
      }
    }
    let peopled = greater_than(said.length, 0);
    if (peopled) {
      let one = {
        path: held.path,
        picture: picture.path,
        said: list_unique(said),
      };
      missing.push(one);
    }
  }
  let r = {
    documents: read.documents,
    scenes_read: read.pictures.length,
    missing,
  };
  return r;
}
