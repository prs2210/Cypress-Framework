class ShopPage
{
    getProductTitle()
    {
        return cy.get('h4.card-title')
    }
    getAddButton()
    {
        return cy.get('button.btn.btn-info')
    }
    getCheckoutbt()
    {
        return cy.get(':nth-child(3) .nav-link')
    }
    getProductatCart()
    {
        return cy.get('h4.media-heading a')
    }
    getCheckoutSub()
    {
        return cy.get('button.btn-success')
    }
    getCountryBox()
    {
        return cy.get('#country')
    }
    getCountrySuggetions()
    {
        return cy.get('div[class="suggestions"] li')
    }
    getcheckbox()
    {
        return cy.get("label[for='checkbox2']")
    }
    getPurcase()
    {
        return cy.get('input.btn-success')
    }
    getSuccessMessage()
    {
        return cy.get('div.alert-dismissible')
    }
    getProdPrice()
    {
        return cy.get('tr td:nth-child(4) strong')
    }
    getTotalPrice()
    {
        return cy.get('h3 strong')
    }

}

export default ShopPage;