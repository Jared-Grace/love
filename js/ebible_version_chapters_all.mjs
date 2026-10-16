import { ebible_version_chapters_cache } from "./ebible_version_chapters_cache.mjs";
export async function ebible_version_chapters_all(version) {
  "Every chapter of one version, for the bundle a device keeps to read without internet.";
  "It is read from the same chapters the chapter-by-chapter upload publishes, so the bundle and the chapters can never be two printings under one name. It used to walk the archive's pages itself, and when the Berean Standard Bible moved to its publisher's newer printing this road was left behind: a device that saved the Berean read Psalm 62 verse 9 as 'the exalted but a lie' while every chapter read online said 'the exalted are but a lie', and an offline copy is asked first, so the old words won.";
  let chapters = await ebible_version_chapters_cache(version);
  return chapters;
}
