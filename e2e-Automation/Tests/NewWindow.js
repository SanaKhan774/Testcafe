import { fixture, test } from "testcafe";
import WindowClass from "../POM/WindowClass";

fixture("Verify the URL through assertion ")
    .page("https://demoqa.com/browser-windows")
    .beforeEach(async t => {
        await t.maximizeWindow();
    });

test("Click on the New Window button", async t => {
    await t
        .click(WindowClass.NewWindowButton)
        .wait(2000)
        .switchToWindow(1) 
        .navigateTo("https://www.google.com")
       // .expect(await t.eval(() => window.location.href)).eql("https://www.google.com/");
});



