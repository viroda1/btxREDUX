// onc-generator.js
import config from './config.json' assert { type: 'json' };

export function generateONC(cfg) {
    // Build blocked domain list including extension update servers and report endpoints
    const extIds = Object.values(cfg.extensions).map(e => e.id);
    const updateDomains = extIds.map(id => `${id}.google.com`); // common for CRX updates
    const allBlocked = [...cfg.blockedDomains, ...updateDomains];

    const onc = {
        "NetworkConfigurations": [
            {
                "GUID": "redux-bypass",
                "Name": "REDUX Bypass",
                "Type": "VPN",
                "VPN": {
                    "Host": "127.0.0.1",
                    "Type": "L2TPIPsec",
                    "IPsec": {
                        "AuthenticationType": "PSK",
                        "PSK": "bypass"
                    }
                }
            }
        ],
        "Certificates": [],
        "Type": "UnencryptedConfiguration"
    };

    // We can't directly set DNS blocking in ONC, but we can set a proxy that fails
    // Or we can use the VPN to route to nowhere.
    // For stronger blocking, we add a custom extension to set up DNS-over-HTTPS with a bogus resolver.
    // But the simplest: the VPN forces all traffic through localhost, killing connectivity for extensions.
    // That's enough to break them.

    return JSON.stringify(onc, null, 2);
}

export function downloadONC(content, filename) {
    const blob = new Blob([content], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}
