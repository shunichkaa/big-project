import {StudentType} from "../02_object/02";

const sum =(a: number, b: number) => {
    return a + b;
}

export const addSkill = (student: StudentType, skill: string) => {
    student.technologies.push({
        id: new Date().getTime(),
        title: skill,
})
}
export function addSkill2 (student: StudentType, skill: string) {
    student.technologies.push({
        id: new Date().getTime(),
        title: skill,
    })
}

export function makeStudentActive(student: StudentType) {
    student.isActive = true;
}

export const doesStudentLiveIn = (student: StudentType, city: string) => {
    return student.address.city.title === city;
}