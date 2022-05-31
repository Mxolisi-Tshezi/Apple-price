describe("In The Apple Packet Price Planner", function () {
        it("should work for setting and getting price of Apple box", function () {
            let Pricevalues = AppleFunction()
            Pricevalues.setPrice(100)
            assert.equal(100, Pricevalues.getPrice())
            Pricevalues.setPrice(100)
            assert.equal(100, Pricevalues.getPrice())
            Pricevalues.setPrice(-100)
            assert.equal(0, Pricevalues.getPrice())
        })

    
        it("should work for apple quantity per packet", function () {
            let Pricevalues = AppleFunction()
            Pricevalues.setperPacket(100)
            assert.equal(100, Pricevalues.getperPacket())
            Pricevalues.setperPacket(100)
            assert.equal(100, Pricevalues.getperPacket())
            Pricevalues.setperPacket(-10)
            assert.equal(0, Pricevalues.getperPacket())
        })

        it("should be able to get and set apple number in box", function () {
            let Pricevalues = AppleFunction()
            Pricevalues.setAppleNumber(100)
            assert.equal(100, Pricevalues.getAppleNumber())
            Pricevalues.setAppleNumber(100)
            assert.equal(100, Pricevalues.getAppleNumber())
            Pricevalues.setAppleNumber(-100)
            assert.equal(0, Pricevalues.getAppleNumber())
        })

        it("should work for percentage of the profit ", function () {
            let Pricevalues = AppleFunction()
            Pricevalues.setprofitPercent(100)
            assert.equal(100, Pricevalues.getprofitPercent())
            Pricevalues.setprofitPercent(100)
            assert.equal(100, Pricevalues.getprofitPercent())
            Pricevalues.setprofitPercent(-100)
            assert.equal(0, Pricevalues.getprofitPercent())
        })
        it("should  calculate price per packet", function () {
            let Pricevalues = AppleFunction()
            Pricevalues.setPrice(150)
            Pricevalues.setAppleNumber(200)
            Pricevalues.setperPacket(10)
            assert.equal(15.00, Pricevalues.calculatePacketPrice())
        })

        it("should calculate the packets number ", function () {
            let Pricevalues = AppleFunction()
            Pricevalues.setAppleNumber(200)
            Pricevalues.setperPacket(10)
            assert.equal(20, Pricevalues.calculatePacketNumber())
        })

        
        it("should work for calculating recommendedation selling price per packet ", function () {
            let Pricevalues = AppleFunction()
            Pricevalues.setPrice(100)
            Pricevalues.setAppleNumber(100)
            Pricevalues.setperPacket(10)
            Pricevalues.setprofitPercent(50)
            assert.equal(15.00, Pricevalues.calculatePriceRecomendation())
        })

        it("should calculate cost per apple", function () {
            let Pricevalues = AppleFunction()
            Pricevalues.setPrice(150)
            Pricevalues.setAppleNumber(200)
            assert.equal(0.75, Pricevalues.calculateApplePrice())
        })



   
})