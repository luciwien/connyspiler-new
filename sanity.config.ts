import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./lib/sanity/schemas";
import {
  projectId,
  dataset,
  previewSecretId
} from "./lib/sanity/config";
import settings from "./lib/sanity/schemas/settings";
import impressum from "./lib/sanity/schemas/impressum";
import about from "./lib/sanity/schemas/about";
import infocorner from "./lib/sanity/schemas/infocorner";
import queerfootballheroes from './lib/sanity/schemas/queerfootballheroes'
import landingpage from './lib/sanity/schemas/landingpage'
import {
  pageStructure,
  singletonPlugin
} from "./lib/sanity/plugins/settings";
import { unsplashImageAsset } from "sanity-plugin-asset-source-unsplash";
import { table } from "@sanity/table";
import { codeInput } from "@sanity/code-input";

export const PREVIEWABLE_DOCUMENT_TYPES: string[] = ["post"];
console.log(projectId);

export default defineConfig({
  name: "default",
  title: "Conny Spiler",
  basePath: "/studio",
  projectId: projectId,
  dataset: dataset,

  plugins: [
    deskTool({
      structure: pageStructure([landingpage,about, infocorner, queerfootballheroes, impressum,settings])
      // `defaultDocumentNode` is responsible for adding a “Preview” tab to the document pane
      // defaultDocumentNode: previewDocumentNode({ apiVersion, previewSecretId }),
    }),
    singletonPlugin(["landingpage", "about","Infocorner", "queerfootballheroes", "impressum","settings"]),
    visionTool(),
    unsplashImageAsset(),
    table(),
    codeInput(),
  ],

  schema: {
    types: schemaTypes
  }
});
