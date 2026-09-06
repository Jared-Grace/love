import { fal_draw_body } from "./fal_draw_body.mjs";
export async function fal_draw(model, prompt, width, height) {
  "ask fal to draw a picture, and answer the address the finished picture can be fetched from";
  "it waits for the drawing itself rather than answering a place to look, which is the one way it differs in shape from the Black Forest Labs twin beside it. That is fal's own doing and not a choice made here: their plain address holds the ask open until the picture is drawn, so there is no polling to write and no timing out half way to guard against.";
  "the model is named by the caller rather than chosen here, for the same reason as the twin: the names belong to fal and they change, and a caller that has to say which one it wants is a caller that knows what it is spending.";
  "it asks for a PNG every time, and no caller may ask for anything else. What comes back otherwise is a JPEG, and JPEG is the wrong end of the trade for everything drawn here - flat areas of one colour meeting hard black lines is the exact case it smears, so the lead lines come back haloed and the black ground comes back faintly mottled rather than black. The mottling is load-bearing and not merely ugly: a picture meant to sit invisibly on a black frame stops being invisible, and the edge of the shape can no longer be found by looking for where the black stops.";
  "THE CONTENT CHECK IS ASKED FOR AT ITS MOST PERMISSIVE, the same as the twin, and for the same reason: it is a number in fal's own published range, so the loose end of it is as much a setting they support as the strict end. Until it was passed, they answered back that they had used two - their default, one step off the strictest there is - and nobody here had chosen that.";
  "IT IS SENT AS TEXT AND NOT AS A NUMBER, because that is how fal echoes it back and how their own schema names it. This is the one place the two roads spell the same idea differently.";
  "THE REFUSAL COMES BEFORE THE DRAWING HERE, which is the one real difference between the two companies and it is worth money. fal reads the wording, turns it down with a plain complaint, and draws nothing; Black Forest Labs takes the ask, charges for it, and reports Content Moderated while being polled. Same model, same published price, and a refused picture costs nothing on one road and full price on the other.";
  "Only the ask is built here. Spelling the address, sending it and digging the picture out of the answer are the same on all three roads into fal and are done in one place.";
  let body = {
    prompt,
    image_size: {
      width,
      height,
    },
    safety_tolerance: "5",
    output_format: "png",
  };
  let sample = await fal_draw_body(model, body);
  return sample;
}
