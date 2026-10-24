import { greater_than } from "./greater_than.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { lyric_video_document_name_read } from "./lyric_video_document_name_read.mjs";
import { lyric_video_document_pictures } from "./lyric_video_document_pictures.mjs";
import { lyric_video_pictures_folder } from "./lyric_video_pictures_folder.mjs";
import { folder_read_recursive_paths_async } from "./folder_read_recursive_paths_async.mjs";
import { path_base } from "./path_base.mjs";
export async function lyric_video_document_song_pictures_same_painter(name) {
  "$plain name";
  "Every picture in one lyric video document whose painter also has a picture in a song's folder, each with the song pictures it might be - so a painting a song already edited by hand is found before the render, not after the human spots it.";
  "★ IT MATCHES BY PAINTER, NOT BY THE WHOLE NAME, because the same painting carries different pd_ names in different documents (pd_juanes_supper here, pd_juanes_last_supper in Agape; pd_caravaggio_thomas against pd_caravaggio_incredulity_thomas). An exact-name lookup was blind to every one of those, and was missed four times. A painter match over-reports - two Rembrandts are not one painting - and a person reads the short list; under-reporting is the failure that shipped.";
  "WHICH DRAFT A SONG SHIPPED IS NOT DECIDED HERE. A song folder holds many grades of one picture; every file is listed, and the shipped one is a fact about that song's video.";
  arguments_assert(arguments, 1);
  let document = await lyric_video_document_name_read(name);
  let pictures = lyric_video_document_pictures(document);
  let root = lyric_video_pictures_folder();
  let paths = await folder_read_recursive_paths_async(root);
  let files = [];
  for (let p of paths) {
    let in_song = p.includes("/song_");
    let painting = path_base(p).startsWith("pd_");
    if (in_song && painting) {
      files.push(p);
    }
  }
  let r = [];
  for (let picture of pictures) {
    let painter = picture.name.replace(/^pd_/, "").split("_")[0];
    function lambda(p) {
      let r2 = path_base(p).startsWith("pd_" + painter + "_");
      return r2;
    }
    let matches = files.filter(lambda);
    if (greater_than(matches.length, 0)) {
      r.push({
        name: picture.name,
        matches,
      });
    }
  }
  return r;
}
