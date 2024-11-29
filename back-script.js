import {verifyToken} from "./verify-token.js"
import {getName} from "./get-name.js"
import { logout } from "./logout.js"

const url = "./src/pages/login.html"

verifyToken(url)

getName()

logout()