// bookmarklet.js - self‑updating payload fetcher
export function getBookmarkletCode(payloadUrl) {
    // This is the minified bookmarklet code.
    // It fetches the payload and evals it.
    const code = `javascript:(function(){fetch('${payloadUrl}').then(r=>r.text()).then(eval).catch(e=>alert('REDUX: '+e))})()`;
    return code;
}
