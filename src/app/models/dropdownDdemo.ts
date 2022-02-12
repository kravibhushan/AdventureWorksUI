interface City {
    name: string,
    code: string
}

export class DropdownDemo {

    public cities: City[] = [];

    selectedCityCode: string = "";

    constructor() {
        this.cities = [
            { name: 'New York', code: 'NY' },
            { name: 'Rome', code: 'RM' },
            { name: 'London', code: 'LDN' },
            { name: 'Istanbul', code: 'IST' },
            { name: 'Paris', code: 'PRS' }
        ];
    }

}
