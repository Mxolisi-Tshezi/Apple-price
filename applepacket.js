function AppleFunction() {
    let theAppleNumber = 0;
    let theperPacket = 0;
    let thePrice = 0;
    let theprofitPercent = 0;

    let setPrice = price => thePrice = price > 0 ? price : 0
    let setAppleNumber = apples => theAppleNumber = apples > 0 ? apples : 0
    let setperPacket = apples => theperPacket = apples > 0 ? apples : 0
    let setprofitPercent = percentage => theprofitPercent = percentage > 0 ? percentage : 0
    let getPrice = () => thePrice
    let getAppleNumber = () => theAppleNumber
    let getperPacket = () => theperPacket
    let getprofitPercent = () => theprofitPercent

    let calculatePacketNumber = () => {
        let packetsNumber = 0
        let n = getAppleNumber()
        while (n >= getperPacket()) {
            packetsNumber++
            n -= getperPacket()
        }
        return packetsNumber
    }
    let calculateApplePrice  = () => getPrice() / getAppleNumber()
  let  calculatePacketPrice= () => calculateApplePrice() * calculatePacketNumber()

    let calculatePriceRecomendation = () => {
        let profitAmount = getPrice() + (getPrice() * getprofitPercent() / 100)
        let pricePerApple = profitAmount / getAppleNumber()
        let pricePerPacket = pricePerApple * calculatePacketNumber()
        return pricePerPacket
    }
    return {
        setPrice,
        setAppleNumber,
        setperPacket,
        setprofitPercent,
        getPrice,
        getAppleNumber,
        getperPacket,
        getprofitPercent,
        calculatePacketNumber,
        calculateApplePrice,
        calculatePacketPrice,
        calculatePriceRecomendation
    }
}