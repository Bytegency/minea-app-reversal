// @BYTEGENCY CREATION

import { COOKIE_KEY } from "../utils/config";
import { postReq, readCookie } from "../utils/utils";

var now = new Date();
now.setMilliseconds(now.getMilliseconds() + 4000);
var newTime = now.toISOString();

let mutationCommand = {
    operationName: "UPDATE_USER",
    variables: {
        input: {
            id: "4839b94f-d437-40a4-b692-0e4cd1db8838",
            creditsRefillAt: newTime
        }
    },
    query: "mutation UPDATE_USER($input: UpdateUserInput!) {\n  updateUser(input: $input) {\n    id\n    creditsRefillAt\n    savedQueries {\n      name\n      query\n      type\n      __typename\n    } \n    __typename\n  }\n}"
};

await postReq("https://y5ec7qy3bzbkxm6udp4u3o3lee.appsync-api.eu-west-1.amazonaws.com/graphql",
    {
        "authorization": readCookie(COOKIE_KEY),
        "content-type": "application/json",
    },
    JSON.stringify(mutationCommand),
    {
        method: "POST"
    }
);