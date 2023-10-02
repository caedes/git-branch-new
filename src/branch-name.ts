import camelCase from "camelcase";

import { ChangeTypeName } from "./change-types";

export default function branchName(
  changeTypeChoice: ChangeTypeName,
  jira: string,
  userName: string,
  description: string
): string {
  const branchDescriptionArray: string[] = [
    jira.toLowerCase(),
    userName,
    camelCase(description),
  ].filter((subString) => subString);

  const branchDescription: string = branchDescriptionArray
    .join("_")
    .replace(/\r?\n|\r/g, "");

  return `${changeTypeChoice}/${branchDescription}`;
}
