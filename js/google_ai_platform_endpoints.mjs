import {GoogleAuth} from "google-auth-library";
import { firebase_service_account } from "./firebase_service_account.mjs";
export async function google_ai_platform_endpoints(location) {
  "$plain location";
  "a Google Cloud region such as us-central1. It names where to look and nothing that runs.";
  "The model endpoints deployed in one region of this repo's Firebase project, asked through Vertex AI (renamed Agent Platform) with this repo's own Firebase service account - so asking it also answers whether that API is on and that account may reach it at all, at no charge.";
  let credentials = await firebase_service_account();
  let auth = new GoogleAuth({
    credentials,
    scopes: ["https://www.googleapis.com/auth/cloud-platform"],
  });
  let client = await auth.getClient();
  let project = credentials.project_id;
  let url =
    "https://" +
    location +
    "-aiplatform.googleapis.com/v1/projects/" +
    project +
    "/locations/" +
    location +
    "/endpoints";
  let response = await client.request({
    url,
  });
  let endpoints = response.data.endpoints;
  return endpoints;
}
