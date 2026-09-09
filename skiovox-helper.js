// skiovox-helper.js - kiosk escape guide and automation steps
export const skiovoxGuide = `
🚀 SKIOVOX KIOSK ESCAPE (for managed ChromeOS devices with kiosk apps)

Prerequisites: 
- Your school must have at least one kiosk app installed.
- You have access to the login screen.

Step-by-step:
1. At the login screen, press Ctrl+Alt+K to open the kiosk app picker (if enabled).
2. Select any kiosk app (e.g., "Web Store" or "Chrome").
3. Once the kiosk app launches, press Ctrl+Alt+Shift+R to restart the kiosk session.
4. During the restart, quickly press Ctrl+Alt+K again to open the app picker before the session locks.
5. This time, instead of a kiosk app, choose "Chrome" from the list (if available).
6. Chrome will open in a normal browser window, bypassing the forced extensions.
7. You can now install any extension from the web store or use the REDUX bookmarklet.

If Chrome isn't listed, you can use the "Web Store" kiosk app to install a regular Chrome browser extension that gives you a shell.

Alternative method (if kiosk picker is disabled):
- Enable developer mode on the Chromebook (Esc+Refresh+Power) and boot from USB.
- But that's more invasive.

For REDUX{btx}, simply run the bookmarklet inside the kiosk Chrome window and it will corrupt the managed extensions.

Note: This exploit is not guaranteed on all versions; it depends on the admin's configuration.
`;

export function getSkiovoxGuide() {
    return skiovoxGuide;
}
