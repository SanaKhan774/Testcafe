import { fixture, Selector, test } from "testcafe";

fixture("Drag and Drop Function")
   
    .beforeEach(async t => {
        await t.maximizeWindow();
        await t.navigateTo("https://demoqa.com/droppable");
    });

    test("Drag and drop", async t => {


        const draggable = Selector("#draggable");
        const droppable = Selector ('#simpleDropContainer p')

        await t.dragToElement(draggable, droppable);
        await t.expect(droppable.textContent).eql("Dropped!");
    

        
        
    });


