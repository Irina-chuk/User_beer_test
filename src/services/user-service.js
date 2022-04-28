class UserService {
    getResource = async(url) => {
        let res = await fetch(url);
        if (!res.ok) {
            throw new Error (`Could not fetch ${url}, status ${res.status}`)
        } 
        return await res.json();

    }

    getUser = async() => {
        const res = await this.getResource("https://random-data-api.com/api/users/random_user"); 
        return this._transformUser(res);   
    }

    getBeer = async() => {
        const res = await this.getResource("https://random-data-api.com/api/beer/random_beer");
        return this._transformBeer(res);
    }

    _transformUser = (user) => {
        return {
            id: user.id,
            photo: user.avatar,
            first_name: user.first_name,
            data_birth: user.date_of_birth,
            employment: user.employment.title
        }
        

    }

    _transformBeer = (beer) => {
        return {
            id: beer.id,
            brand: beer.brand,
            name: beer.name,
            ibu: beer.ibu,
            alcohol: beer.alcohol
        }
       
    }
    
}
export default UserService;