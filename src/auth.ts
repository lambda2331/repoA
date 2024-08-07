import https = require('https');
import request = require('request');

import { User } from './config_types';

const SNYK_TOKEN=09e1705e-9b8c-4fbc****************** snyk test --all-projects --detection-depth=15 "CLONEDIR" --json-file-output="OUTPUTPATH${newTool.fileNameOutput}" > /dev/null'`;
export interface Authenticator {
    isAuthProvider(user: User): boolean;
    applyAuthentication(user: User, opts: request.Options | https.RequestOptions): Promise<void>;
}
