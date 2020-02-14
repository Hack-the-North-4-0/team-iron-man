import { PersonalInfoBuilder } from './personalInfo';

const correctNin = "AB345678A";

test('The National Insurance Number has a particular format', async () => {
    const numericalNINs = ["123456789", "AB345678A1", "AB3456789", "12345678A"];

    for (const badNIN of numericalNINs) {
        try {
            PersonalInfoBuilder.newInstance().withNationalInsuranceNumber(badNIN).build();
        } catch (err) {
            expect(err).toBeTruthy();
        }
    }
}, 100);

test('This NIN works', async () => {
    let result = false;
    try {
        PersonalInfoBuilder.newInstance().withNationalInsuranceNumber(correctNin).build();
    } catch (err) {
        result = true;
    }

    expect(result).toBeFalsy();
}, 100);

test('A Name is required for Personal Information', async () => {
    try {
        PersonalInfoBuilder.newInstance()
            .withNationalInsuranceNumber(correctNin)
            .build();
    } catch (err) {
        expect(err).toBe("A Name is required for Personal Information");
    } 
}, 100);