import { Ability } from "@casl/ability";

export const abilityConfig = [
    {
        action: "read",
        subject: "review"
    },
    {
        action: "write",
        subject: "tag"
    }
];

const clientConfig = [
    {
        action: "read",
        subject: "review"
    },
    {
        action: "read",
        subject: "tag"
    }
];

export const permissionItem = (role) => {
  if (role === "admin"){
      return abilityConfig;
  }
    if (role === "client"){
        return clientConfig;
    }
}
const element = permissionItem();
export const permissions = new Ability(element);
