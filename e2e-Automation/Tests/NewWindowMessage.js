import { fixture, test } from "testcafe";
import WindowClass from "../POM/WindowClass";

fixture("Verify the URL through assertion ")
  .page("https://demoqa.com/browser-windows")
  .beforeEach(async (t) => {
    await t.maximizeWindow();
  });

test("New Window", async (t) => {
  const currentWindow = await t.getCurrentWindow();
  await t.click(WindowClass.NewWindowMessageButton).wait(2000);
  const newWindow = await currentWindow.getNextWindow();
  await t.switchToWindow(newWindow);
  const text = await t.eval(() => document.body.innerText);
  console.log(text);
  //await t.expect(text).contains("Example page");
});
