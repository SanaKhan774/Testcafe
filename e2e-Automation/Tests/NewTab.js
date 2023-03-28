import { fixture, test } from "testcafe";
import WindowClass from "../POM/WindowClass";

/*fixture("Verify the URL through assertion ")
   
    .beforeEach(async t => {
        await t.maximizeWindow();
        await t.navigateTo("https://demoqa.com/browser-windows");
    });

test("Click on the New Tab button", async t => {
    await t
        .click(WindowClass.NewTabButton)
        .wait(10000)
        console.log("URL is: " + await t.eval(() => window.location.href))
       // .debug()
        //.expect(await t.eval(() => window.location.href)).eql("https://demoqa.com/sample");
});
*/

fixture("Verify URL of new tab")
    .page("https://demoqa.com/browser-windows");

test("Click on the New Tab button and verify URL", async t => {
    // Click on the New Tab button
    await t.click("#tabButton");

    // Switch to the newly opened tab
    const newTab = await t.getNativeWindowHandle();
    await t.switchToWindow(newTab);

    // Verify the URL of the new tab using assertion
    await t.expect(await t.eval(() => window.location.href)).eql("https://demoqa.com/sample");
});

/*test("Click on the New Tab button", async t => {
    // Save the current window handle so we can switch back later
    const currentWindow = await t.getCurrentWindow();

    await t
        .click(WindowClass.NewTabButton)
        .wait(2000);

    // Get the handles of all open windows
    const windows = await t.getWindows();

    // Find the new window handle by comparing the array of all handles
    // to the array of handles before clicking the button
    const newWindow = windows.find(handle => !currentWindow.includes(handle));

    // Switch to the new window
    await t.switchToWindow(newWindow);

    // Assert the URL in the new window
    await t.expect(await t.eval(() => window.location.href)).eql("https://demoqa.com/sample");

    // Switch back to the original window
    await t.switchToWindow(currentWindow);
});*/