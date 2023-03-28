import { fixture,test } from "testcafe";
import FormClass from "../POM/FormClass";
const dataSet = require("../data/data.json")

fixture ("Form Submission")

.page('https://demoqa.com/automation-practice-form')


dataSet.forEach(data => {
    
    test('Submission of form', async t => {

    await t

    .wait(2000)
    .maximizeWindow()
    .typeText(FormClass.FirstName, data.FirstName)
    .typeText(FormClass.LastName,  data.LastName)
    .typeText(FormClass.Email, data.Email)
    .click(FormClass.Gender)
    .typeText(FormClass.MobileNo, data.Mobile)
   // .click(FormClass.DOB)
    .click(FormClass.DateOfBirth)
    .click(FormClass.Month)
    .click(FormClass.MonthOption.withText('March'))
    .pressKey("enter")
    .expect(FormClass.Month().innerText).contains('March')
    .click(FormClass.Year)
    .click(FormClass.YearOption.withText('1996'))
    .pressKey("enter")
    .expect(FormClass.Year().innerText).contains('1996')
    .click(FormClass.Date)
    .typeText(FormClass.Subject, data.Subjects)
    .pressKey("enter")
    .click(FormClass.Hobbies)
    .setFilesToUpload('#uploadPicture', ['C:\Users\sana.khan\Documents\TestcafeTraining\e2e-Automation\Files'])
    .typeText(FormClass.CurrentAddress, data.CurrentAddress)
    .takeElementScreenshot()
    .click(FormClass.SubmitButton)

})
});