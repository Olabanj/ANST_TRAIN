///<reference types= "Cypress"/>
describe("login",function(){
    it("test",function(){
        cy.on("uncaught:exception",()=>{
         return false
        })
        cy.viewport("macbook-15")

        cy.visit("https://sandbox.m.shoptopup.com/")
        cy.xpath("//body//flt-glass-pane").click({force:true})


    })
})