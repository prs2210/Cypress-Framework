/// <reference types="Cypress"  />
import HomePage from "../pageObjacts/HomePage"
import ShopPage from "../pageObjacts/ShopPage"

describe('Framework Test', function () {

    before(function () {
        //runs once before all tests in the block
        cy.fixture('example').then(function (data) {
            this.data = data
        })

    })

    it('Framework Test-1', function () {
        //Cypress.config('defaultCommandTimeout',8000)
        const homePage = new HomePage()
        const shopPage = new ShopPage()
        
        cy.visit(Cypress.env('url')+"angularpractice/")

        homePage.getEditBox().type(this.data.name)
        homePage.twoWayDataBinding().should('have.value', this.data.name)
        homePage.getEditBox().should('have.attr', 'minlength', '2')
        homePage.getEntrepreneurRadioButton().should('be.disabled')

        homePage.getEmailBox().type(this.data.email)
        homePage.getPassWord().type(this.data.password)
        homePage.getCheckMeOut().check()
        homePage.getGender().select(this.data.gender)
        homePage.getRadio1().check()
        homePage.getCalender().type(this.data.date)
        homePage.getSuccessButton().click()
        homePage.getSuccessAlert().contains(this.data.submitText)

        homePage.getShopTab().click()
        cy.url().should('include', 'shop')
        
        this.data.productName.forEach(function (element) {
            cy.selectProduct(element)
        })

        shopPage.getCheckoutbt().click()

        var sum=0
        shopPage.getProdPrice().each(($el,index,$list) =>
            {
                const prodPrice = $el.text()
                var result = prodPrice.split(" ")
                result = result[1].trim()
                cy.log(result)
                sum=Number(sum)+Number(result)  
            }).then(function()
            {
                cy.log(sum)
            })

        shopPage.getTotalPrice().then(function(element)
        {
            const finalValue = element.text()
            var totalSum = finalValue.split(" ")
            totalSum = totalSum[1].trim()
            expect(Number(totalSum)).to.equals(sum)
        })
        

        const array1 = []
        shopPage.getProductatCart().each((element) => {

            const text1 = element.text()
            array1.push(text1)
        }).then(()=>{
            expect(array1[1]).to.include(this.data.productName[1])
        })
        
        //Continue for checkout
        shopPage.getCheckoutSub().click()
        shopPage.getCountryBox().type(this.data.Country)
        
        shopPage.getCountrySuggetions().contains('India').click()
        shopPage.getcheckbox().click()
        shopPage.getPurcase().click()
        shopPage.getSuccessMessage(). should('include.text',this.data.SuccessText)
        /*shopPage.getSuccessMessage().invoke('text').then(($text1) =>{
        cy.log($text1.trim())
        })
        shopPage.getSuccessMessage().then(function(element)
        {
            const scmss = element.text()
            expect(scmss.includes(this.data.SuccessText)).to.be.true
        })*/

    })

})