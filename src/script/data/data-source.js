class DataSource {
    static searchClub(keyword) {
        return new Promise((resolve, reject) => {
            const filteredClubs = allcase.filter(club => club.countryRegion.toUpperCase().includes(keyword.toUpperCase()));
            if (filteredClubs.length) {
                resolve(filteredClubs);
            } else {
                reject(`${keyword} is not found"`);
            }
        });
    }
}