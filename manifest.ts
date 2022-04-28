import { DefineFunction, Manifest, Schema } from "deno-slack-sdk/mod.ts";

const CreateGithubIssue = DefineFunction({
  callback_id: "create_github_issue",
  title: "Create a new issue",
  source_file: "functions/create_gh_issue.ts",
  input_parameters: {
    properties: {
      title: {
        type: Schema.types.string,
        description: "Title of the issue",
      },
      body: {
        type: Schema.types.string,
        description: "Full description of the issue",
      },
    },
    required: ["title", "body"],
  },
  output_parameters: {
    properties: {
      issue_url: {
        type: Schema.types.string,
        description: "URL of the issue",
      },
    },
    required: ["issue_url"],
  },
});

export default Manifest({
  name: "Github Issuer",
  description: "Create issues in Github",
  icon: "assets/icon.png",
  functions: [CreateGithubIssue],
  outgoingDomains: ["api.github.com"],
  botScopes: ["commands", "chat:write", "chat:write.public"],
});
