const mongoose = require("mongoose");

const personSchema = new mongoose.Schema(
    {
        gender: String,
        address: String,
        destination:String,
        lodgingRequirements: Object,
        safeWord:String,
        age:Number,
        allHotelPrices:Object,
        allCabPrices:Object,
        bestHotelPrice:Number,
        bestCabPrice:Number,
        status:String,
        needsCab:Boolean,
        needsHotel:Boolean
    }
)


const Person = mongoose.model("Person", personSchema);

module.exports = Person;