import { arguments_assert } from "./arguments_assert.mjs";
import { path_stale_is } from "./path_stale_is.mjs";
import { media_join } from "./media_join.mjs";
export async function media_join_if_stale(path_output, paths_media) {
  "$plain path_output";
  "$plain paths_media";
  "Joins the pieces into one file, unless the file already there is younger than every piece it was made from.";
  "★ THIS USED TO ASK ONLY WHETHER THE FILE WAS THERE, AND SO KEPT A JOIN MADE FROM SOUND THAT HAD SINCE BEEN RECORDED AGAIN. Nothing about the kept file says so - it plays, and it is the right length for the recording it was made from - so the fault is only findable by watching it against the words. Asking the dates keeps the whole of the saving the old test was there for, because a run over a book still joins nothing twice, and loses the one case it was quietly wrong about.";
  arguments_assert(arguments, 2);
  let stale = await path_stale_is(path_output, paths_media);
  if (stale) {
    await media_join(paths_media, path_output);
  }
}
