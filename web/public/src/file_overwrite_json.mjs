import { file_overwrite } from "./file_overwrite.mjs";
import { json_to } from "./json_to.mjs";
export async function file_overwrite_json(file_path,object) {
    let json = json_to(object);
await file_overwrite(file_path,json);

}