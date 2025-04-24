import {CityType} from "../02_object/02_02";
import {addMoneyToBudget, createMessage, repairHouse, toFireStaff, toHireStaff} from "./03_02";
let city: CityType;

beforeEach(() => {
    city = {
        title: 'New York',
        houses: [
            {buildedAt: 2012, repaired: false, address:
                    {number: 100, street:
                            {title: "White Street"}}},
            {buildedAt: 2008, repaired: false, address:
                    {number: 100, street:
                            {title: "Happy Street"}}},
            {buildedAt: 2020, repaired: false, address:
                    {number: 101, street:
                            {title: "Happy Street"}}}],
        governmentBuildings: [
            {type: "HOSPITAL", budget: 200000, staffCount:200,
                address:{number: 100, street: {title: "Central Street"}}},
            {type: "FIRE-STATION", budget: 500000, staffCount:1000,
                address:{number: 100, street: {title: "South Street"}}},],
        citizensNumber: 1000000
    }
})

test('Budget should be changed for HOSPITAL', () => {
    addMoneyToBudget(city.governmentBuildings[0], 100000)

    expect(city.governmentBuildings[0].budget).toBe(300000)
})

test('Budget should be changed for FIRE-STATION', () => {
    addMoneyToBudget(city.governmentBuildings[1], -100000)

    expect(city.governmentBuildings[1].budget).toBe(400000)
})

test('House should be repaired', () => {
    repairHouse(city)
    expect(city.houses[0].repaired).toBeTruthy()
})

test('staff should be increased', () => {
    toFireStaff(city, 20)
    expect(city.governmentBuildings[0].staffCount).toBe(180)
})

test('staff should be hire', () => {
    toHireStaff(city, 20);

    expect(city.governmentBuildings[0].staffCount).toBe(220);
})

test("Greeting message should be correct", () => {
    const message = createMessage(city);

    expect(message).toBe("Hello New York citizens.");
})

