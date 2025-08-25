import { firebase_upload_string } from "./firebase_upload_string.mjs";
export async function firebase_deploy_function() {
  const myString = "Hello, Firebase Storage!";
  firebase_upload_string(myString, "uploads/hello.txt");
}
