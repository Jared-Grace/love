import { arguments_assert } from "./arguments_assert.mjs";
import { lyric_video_documents_pictures } from "./lyric_video_documents_pictures.mjs";
import { lyric_video_picture_style_refused_words } from "./lyric_video_picture_style_refused_words.mjs";
import { lyric_video_picture_scene_words_said } from "./lyric_video_picture_scene_words_said.mjs";
import { greater_than } from "./greater_than.mjs";
export async function lyric_video_picture_scene_style_conflicts() {
  "Every authored scene that asks for a thing the shared look of these pictures refuses, together with the words the two of them disagree over.";
  "★ THE PROMPT SENT TO THE DRAWER IS ONE STRING HOLDING BOTH HALVES, so a disagreement here is not a tidiness matter but a self-contradicting instruction. The scene leads and the look follows, joined by a comma; a scene asking for a stone road hands over the sentence an old stone road, no roads. Nothing refuses that sentence. It is paid for at the full price, drawn, and comes back as whichever half the house happened to weigh heavier, and the only way to learn which is to open the picture afterwards.";
  "MATCHING A WORD TOO EAGERLY IS THE RIGHT WAY TO BE WRONG HERE. A rock face is not a person's face and reads perfectly to somebody; but the sentence handed over says rock face and, four clauses later, no faces, and no reader has been found who can be trusted to weigh those against each other. Rewording the scene to a cliff of bare rock costs one minute, makes the sentence say one thing, and cannot be worse. So a word standing on both sides is named whatever the sense of it, and the repair is always to say it another way rather than to argue.";
  "IT READS THE DOCUMENTS RATHER THAN A LIST OF THEM, so a psalm authored this morning is covered without anybody adding it anywhere. Neither the reading nor the word matching is done here - both are shared with the other check that asks a question of every scene, because those are what the two have in common and the judgment is what they must not.";
  arguments_assert(arguments, 0);
  let read = await lyric_video_documents_pictures();
  let refused = lyric_video_picture_style_refused_words();
  let conflicts = [];
  for (let held of read.pictures) {
    let picture = held.picture;
    let said = lyric_video_picture_scene_words_said(picture.scene, refused);
    let clashing = greater_than(said.length, 0);
    if (clashing) {
      let one = {
        path: held.path,
        picture: picture.path,
        said,
      };
      conflicts.push(one);
    }
  }
  let r = {
    documents: read.documents,
    scenes_read: read.pictures.length,
    conflicts,
  };
  return r;
}
