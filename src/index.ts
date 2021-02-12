

import { OktaAuth } from "@okta/okta-auth-js";

const config = undefined;

if (config) {
    const authClient = new OktaAuth(config);
    console.log(authClient);
}
