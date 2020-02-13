export class PersonalInfo {
    private readonly nationalInsuranceNumber: string;

    constructor(nin: string) {
        this.nationalInsuranceNumber = nin;
    }

    public static of(nin: string): PersonalInfo {
        const ninPattern = new RegExp('^[A-Z]{2}\\d{6}[ABCD]$');

        if (!ninPattern.test(nin)) {
            throw "Incorrect National Insurance Number Format";
        }
        return new PersonalInfo(nin);
    }
}