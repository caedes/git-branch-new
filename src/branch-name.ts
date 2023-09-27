import toSnakeCase from "to-snake-case";

export default function branchName(
  changeTypeChoice: string,
  jira: string,
  userName: string,
  description: string
): string {
  const branchDescriptionArray: string[] = [
    jira,
    userName,
    toSnakeCase(description),
  ].filter((subString) => subString);

  const branchDescription: string = branchDescriptionArray
    .join("_")
    .replace(/\r?\n|\r/g, "")
    .toLowerCase();

  return `${changeTypeChoice}/${branchDescription}`;
}
