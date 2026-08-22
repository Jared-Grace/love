import { arguments_assert } from "./arguments_assert.mjs";
import { ebible_folder_english } from "./ebible_folder_english.mjs";
import { app_music_verses_build } from "./app_music_verses_build.mjs";
import { app_shared_bible_built_get } from "./app_shared_bible_built_get.mjs";
import { app_music } from "./app_music.mjs";
export async function app_music_verses_get() {
  "The words behind every passage the songs name, in one piece: the copy built ahead of time when there is one, and the working out itself when there is not.";
  "ONE REQUEST INSTEAD OF SIXTY. Where the copy lives, fetching it, remembering it for the life of the page, and falling back to the working out are all next door and shared, because every app that names a fixed set of passages wants exactly this. What is here is only which app is asking and which bible.";
  "The English one, because that is the bible these songs were written against and the explanations quote.";
  "THE BIBLE NAMED HERE IS ONLY WHERE THE COPY IS FILED, NOT WHAT IS IN IT. Most of what is in it is that bible, and a few passages are quoted from another - the file is one mixture rather than one translation. Filing it under the usual one is still right, because what the name has to do is tell two mixtures apart, and changing the usual bible changes every passage that did not ask for something else.";
  arguments_assert(arguments, 0);
  let version = app_music_bible_default_version();
  let bible_folder = property_get(version, "bible_folder");
  let value = await app_shared_bible_built_get(
    app_music,
    bible_folder,
    app_music_verses_build,
  );
  return value;
}
