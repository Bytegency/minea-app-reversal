import { DEBUG } from "./config";

export const debugLog = async (...args) => {
    if (DEBUG)
        console.log(args)
}

export const postReq = async (url, headers, body, options) => {
    const res = await fetch(url, {
        headers,
        method: options.method,
        body
    });

    return res;
}

export const read = async e => decodeURIComponent(e[0] === '"' ? e.slice(1, -1) : e);
export const readCookie = async name => document.cookie.split("; ").map(c => c.split('=')).find(([k]) => decodeURIComponent(k) === name)?.slice(1).join('=');