import { Selector } from "testcafe"

class WindowClass{

    constructor(){


        this.NewTabButton = Selector('#tabButton')
        this.NewWindowButton = Selector('#windowButton')
        this.NewWindowMessageButton = Selector('#messageWindowButton')
        
    }
}

export default new WindowClass();