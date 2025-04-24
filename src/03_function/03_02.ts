import {CityType, GovernmentBuildingsType} from "../02_object/02_02";

export const addMoneyToBudget = (building: GovernmentBuildingsType, budget: number) => {
building.budget += budget;
}

export const repairHouse = (city: any) => {
    city.houses[0].repaired = true;
}

export const toFireStaff = (building: CityType, stuffCountToFire: number) => {
    building.governmentBuildings[0].staffCount -= stuffCountToFire;
}

export const toHireStaff = (building: CityType, stuffCountToFire: number) => {
    building.governmentBuildings[0].staffCount += stuffCountToFire;
}

export const createMessage = (city: CityType): string => {
    return `Hello ${city.title} citizens.`;
}