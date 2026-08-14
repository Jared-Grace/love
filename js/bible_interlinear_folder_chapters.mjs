import { bible_interlinear_verses } from "./bible_interlinear_verses.mjs";
import { bible_folder_key } from "./bible_folder_key.mjs";
import { property_get } from "./property_get.mjs";
export async function bible_interlinear_folder_chapters() {
  "The whole original-language bible read fresh, as the folder it is published under and the chapters themselves.";
  "The text is read fresh rather than from the kept copy, because both publishers that ask for it serve what they get as scripture, and a kept copy made under an older reading of the public-domain base would be published as the text itself.";
  "The folder comes back beside the chapters because it is not written down anywhere a publisher could reach on its own - it is carried by the reading, under a name the reading also chooses, and both publishers need it to say where a chapter goes.";
  let interlinear = await bible_interlinear_verses();
  let property_name = bible_folder_key();
  let bible_folder = property_get(interlinear, property_name);
  let chapters = property_get(interlinear, "chapters");
  let r = {
    bible_folder,
    chapters,
  };
  return r;
}
