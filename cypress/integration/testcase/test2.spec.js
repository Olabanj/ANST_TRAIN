///<reference types = "Cypress"/>

describe("variable test",function(){

    beforeEach (function(){
        cy.visit('/')

 })
 it ("valid login",function(){
       
    cy.xpath("//input[@placeholder='Username']").type("standard_user")
   cy.xpath("//input[@placeholder='Password']").type("secret_sauce")
   cy.xpath("//input[@id='login-button']").click()
 })
    

 it ("lnvalid login",function(){
       
     cy.xpath("//input[@placeholder='Username']").type("gssgss")
    cy.xpath("//input[@placeholder='Password']").type("secret_sauce")
    cy.xpath("//input[@id='login-button']").click()
     cy.xpath("//div[@class='error-message-container error']").should("have.text","Epic sadface: Username and password do not match any user in this service")
})

it ("locked out the user",function(){

cy.xpath("//input[@placeholder='Username']").type("locked_out_user")
cy.xpath("//input[@placeholder='Password']").type("secret_sauce")
cy.xpath("//input[@id='login-button']").click()
cy.xpath("//h3[@data-test='error']").should("have.text","Epic sadface: Sorry, this user has been locked out.")
})
})


