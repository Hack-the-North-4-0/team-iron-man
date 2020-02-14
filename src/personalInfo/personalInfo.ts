
export class PersonalInfo {
    private readonly nationalInsuranceNumber: string;

    constructor(that: PersonalInfoBuilder) {
        const ninPattern = new RegExp('^[A-Z]{2}\\d{6}[ABCD]$');

        if (!ninPattern.test(that.nationalInsuranceNumber)) {
            throw "Incorrect National Insurance Number Format";
        }

        this.nationalInsuranceNumber = that.nationalInsuranceNumber;
    }

}

export class PersonalInfoBuilder {
    nationalInsuranceNumber = "";
    
    // name
    // dob
    // address

    constructor() {
        // empty as there are no required parameters here.
    }

    public static newInstance(): PersonalInfoBuilder {
        return new PersonalInfoBuilder();
    }

    public withNationalInsuranceNumber(nin: string): PersonalInfoBuilder {
        this.nationalInsuranceNumber = nin;
        return this;
    }

    public build(): PersonalInfo {
        return new PersonalInfo(this);
    }
}