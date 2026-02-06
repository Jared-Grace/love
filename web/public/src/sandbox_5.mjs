import { file_overwrite_json } from "../../../love/public/src/file_overwrite_json.mjs";
export async function sandbox_5() {
  await file_overwrite_json("a/b/c.json", {
    JESUS: "LORD",
  });
}
