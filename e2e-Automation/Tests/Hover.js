import { fixture, Selector, test } from "testcafe";

fixture("Hover Function")
   
    .beforeEach(async t => {
        await t.maximizeWindow();
        await t.navigateTo("https://demoqa.com/tool-tips");
    });

    test("Perform a Hover function", async t => {


        const toolTipButton = Selector("#toolTipButton");
        const toolTipText = Selector(".tooltip-inner");

        await t
        .hover(toolTipButton)
        .takeScreenshot()


        
        
    });


