import { Selector } from "testcafe"

class FormClass{

    constructor(){

        this.FirstName = Selector('#firstName')
        this.LastName = Selector('#lastName')
        this.Email = Selector('#userEmail')
        this.Gender = Selector('#genterWrapper > div.col-md-9.col-sm-12 > div:nth-child(2) > label')
        this.MobileNo = Selector('#userNumber')
        //this.DOB = Selector('#dateOfBirth > div.react-datepicker__tab-loop > div.react-datepicker-popper > div > div > div.react-datepicker__month-container > div.react-datepicker__month > div:nth-child(3) > div.react-datepicker__day.react-datepicker__day--015')
        this.Subject = Selector('.subjects-auto-complete__value-container')
        this.Hobbies = Selector('#hobbiesWrapper > div.col-md-9.col-sm-12 > div:nth-child(2) > label')
        this.CurrentAddress = Selector('#currentAddress')
        this.DateOfBirth = Selector('#dateOfBirthInput')
        this.Month = Selector('div.body-height:nth-child(2) div.container.playgound-body div.row div.col-12.mt-4.col-md-6:nth-child(2) div.practice-form-wrapper:nth-child(2) div.mt-2.row:nth-child(5) div.col-md-9.col-sm-12 div.react-datepicker__tab-loop div.react-datepicker-popper div.react-datepicker div.react-datepicker__month-container:nth-child(4) div.react-datepicker__header div.react-datepicker__header__dropdown.react-datepicker__header__dropdown--select div.react-datepicker__month-dropdown-container.react-datepicker__month-dropdown-container--select > select.react-datepicker__month-select')
        this.MonthOption = this.Month.find('option')
        this.Year = Selector('div.body-height:nth-child(2) div.container.playgound-body div.row div.col-12.mt-4.col-md-6:nth-child(2) div.practice-form-wrapper:nth-child(2) div.mt-2.row:nth-child(5) div.col-md-9.col-sm-12 div.react-datepicker__tab-loop div.react-datepicker-popper div.react-datepicker div.react-datepicker__month-container:nth-child(4) div.react-datepicker__header div.react-datepicker__header__dropdown.react-datepicker__header__dropdown--select div.react-datepicker__year-dropdown-container.react-datepicker__year-dropdown-container--select > select.react-datepicker__year-select')
        this.YearOption = this.Year.find('option')
        this.Date = Selector('#dateOfBirth > div.react-datepicker__tab-loop > div.react-datepicker-popper > div > div > div.react-datepicker__month-container > div.react-datepicker__month > div:nth-child(1) > div.react-datepicker__day.react-datepicker__day--003')
        this.SubmitButton = Selector('#submit')
    }
}

export default new FormClass();