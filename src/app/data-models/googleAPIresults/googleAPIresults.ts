export class GoogleAPIresults {

    public city: String;

    constructor(private results: any[]) {
        this.city = this.getCity();
    }

    getCity(): String {
        console.log(this.results);
        // return the formatted_address for the object that matched the types "political", "sublocality", and "sublocality_level_1"
        this.results.forEach(result => {
            if (result.types[0] === 'locality' && result.types[1] === 'political') {
                return result.formatted_address;
            }
        });
        return null;
    }
}
