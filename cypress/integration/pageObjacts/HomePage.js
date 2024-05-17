class HomePage
{
    getEditBox()
    {
        return cy.get(':nth-child(1) > .form-control')
    }

    twoWayDataBinding()
    {
        return cy.get(':nth-child(4) > .ng-pristine')
    }

    getGender()
    {
        return cy.get("select[class='form-control']")
    }

    getEntrepreneurRadioButton()
    {
        return cy.get('#inlineRadio3')
    }

    getShopTab()
    {
        return cy.get(':nth-child(2) > .nav-link')
    }

    getEmailBox()
    {
        return cy.get("[name='email']")
    }
    getPassWord()
    {
        return cy.get('#exampleInputPassword1')
    }
    getCheckMeOut()
    {
        return cy.get('#exampleCheck1')
    }
    getRadio1()
    {
        return cy.get('#inlineRadio1')
    }
    getCalender()
    {
        return cy.get("[name='bday']")
    }
    getSuccessButton()
    {
        return cy.get('.btn-success')
    }
    getSuccessAlert()
    {
        return cy.get('.alert')
    }
}

export default HomePage;