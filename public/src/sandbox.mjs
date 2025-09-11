import { ebible_version_verses } from "./ebible_version_verses.mjs";
export async function sandbox() {
  let contents = await ebible_version_verses("engbsb");
  return contents;
}
