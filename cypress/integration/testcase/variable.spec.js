///<reference types = 'Cypress'/>



describe("practise variable",function(){

    beforeEach(function(){
        cy.visit("http://automationteststore.com/")
    })
    
    it("naviigate to a specific product",function(){

        const makeUpLink = cy.xpath("//a[contains(@href,'product/category&path=')]").contains("Makeup")
         makeUpLink.click()
        // const skinCareLink = cy.xpath("//a[contains(@href,'product/category&path=')]").contains("Skincare")
        
        //  skinCareLink.click()

        //  verify the headerText
         cy.xpath("(//span[@class='maintext'])[1]").then(($headerText)=>{
            const headerText = $headerText.text()
            cy.log("found header" + headerText)
            expect(headerText).eql("Makeup")

    })

    const contactUs=cy.xpath("//a[contains(@href,'content/contact')]").contains("Contact Us").click()
    cy.xpath("(//label[normalize-space()='First name:'])[1]").then(($firstNameText)=>{
      
    const firstNameText = $firstNameText.text()
    cy.log("the test dey visble" + firstNameText)
    expect(firstNameText).eql("First name:")


    })


    })

    
    
})

