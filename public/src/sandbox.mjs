import { text_to_speech } from "../../../love/public/src/text_to_speech.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function sandbox() {
  marker("1");
  await text_to_speech({
    text: "test",
    path_output: "C:/test.wav",
  });
}
