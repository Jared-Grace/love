import { arguments_assert } from "./arguments_assert.mjs";
import { youtube_oauth_redirect_port } from "./youtube_oauth_redirect_port.mjs";
import express from "express";
export async function youtube_oauth_answer_wait() {
  "Holds the door open on this machine until Google sends the browser back to it, and gives back whatever was sent - the whole answer, not only the good half.";
  "The answer comes back through a browser rather than to the command that asked, because the saying yes happens under the person's own account and Google will only hand the result to an address, never to a waiting program. So a door is opened for exactly as long as it takes to catch one visit, and shut again.";
  "It gives back everything that arrived rather than reaching straight for the code, because a person is allowed to say no. A refusal comes back as a reason instead of a code, and a reader that only knew how to find a code would sit here forever on a question that had already been answered.";
  arguments_assert(arguments, 0);
  let port = youtube_oauth_redirect_port();
  let app = express();
  let answered = null;
  function waiting(resolve) {
    answered = resolve;
  }
  let answer_promise = new Promise(waiting);
  function caught(request, response) {
    response.send("Thank you - this is done. You can close this tab.");
    answered(request.query);
  }
  app.get("/", caught);
  let listening = app.listen(port);
  let answer = await answer_promise;
  listening.close();
  return answer;
}
