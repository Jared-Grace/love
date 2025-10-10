import { js_interpreter } from "../../../karate_code/public/src/js_interpreter.mjs";
export function sandbox_4() {
  let i = js_interpreter()('console.log("test")');
  i.run();
}
