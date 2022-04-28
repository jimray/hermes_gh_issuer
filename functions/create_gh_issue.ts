import type { FunctionHandler } from "deno-slack-sdk/types.ts";

// deno-lint-ignore no-explicit-any
const createGHIssue: FunctionHandler<any, any> = async ({ inputs, env }) => {
  // const oauth_token = "token " + env["GH_TOKEN"];
  // const oauth_token = "token " + ${env["GH_TOKEN"]};
  const oauth_token = `token ${env["GH_TOKEN"]}`;

  const response = await fetch(
    "https://api.github.com/repos/jimray/issues_demo/issues",
    {
      method: "POST",
      headers: {
        "Authorization": oauth_token,
        "Content-Type": "application/json",
        "Accept": "application/vnd.github.v3+json",
      },
      body: JSON.stringify({
        "title": inputs.title,
        "body": inputs.body,
      }),
    },
  );
  const jsonData = await response.json();
  const issue_url = jsonData.url;

  return await {
    outputs: { issue_url },
  };
};

export default createGHIssue;
