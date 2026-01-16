import { videos_join_if_exists_not } from "../../../love/public/src/videos_join_if_exists_not.mjs";
import { bible_audio_folder_book_video } from "../../../love/public/src/bible_audio_folder_book_video.mjs";
export async function bible_audio_folder_book_video_join(
  bible_folder,
  chapter_code,
  paths_videos,
) {
  let path_video = bible_audio_folder_book_video(bible_folder, chapter_code);
  await videos_join_if_exists_not(path_video, paths_videos);
  return path_video;
}
