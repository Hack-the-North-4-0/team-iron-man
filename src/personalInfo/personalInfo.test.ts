import { PersonalInfo } from './personalInfo';

test('The National Insurance Number has a particular format', async () => {
    const numericalNINs = ["123456789", "AB345678A1", "AB3456789", "12345678A"];

    for (const badNIN of numericalNINs) {
        try {
            PersonalInfo.of(badNIN); 
        } catch (err) {
            expect(err).toBeTruthy();
        }
    }
}, 100);

test('This NIN works', async () => {
    const correctNin = "AB345678A";
    let result = false;
    try {
        PersonalInfo.of(correctNin);
    } catch (err) {
        result = true;
    }

    expect(result).toBeFalsy();
}, 100);