///<reference types= "Cypress"/>
describe("launch the app",function(){

    beforeEach(function() {
        cy.visit('/')
    })


    it ("login succsfully",function(){
       
        cy.fixture('example').then(function(data){
            this.data=data ;

         cy.xpath(this.data.searchBoxOne).type(this.data.username)
        cy.xpath(this.data.searchBoxTwo).type(this.data.Password)
        cy.xpath(this.data.loginButton).click()
        cy.url().should("include","inventory.html")
        cy.xpath("//span[contains(text(),'Products')]").should("have.text","Products")
        })
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