///<reference path="Town.ts"/>
class PokemonLeague extends Town {
    public gymList: KnockoutObservableArray<KnockoutObservable<Gym>>;

    constructor(name: string, routes: number[], shop: ShopName, dungeonReq: string, gyms: string[]) {
        super(name, routes, shop, null, null, dungeonReq);
        this.gymList = ko.observableArray<KnockoutObservable<Gym>>();
        for (const gym of gyms) {
            this.gymList.push(ko.observable(gymList[gym]));
        }
    }

}

const indigoPlateauKanto = ['Elite Lorelei', 'Elite Bruno', 'Elite Agatha', 'Elite Lance', 'Champion Blue'];
TownList['Indigo Plateau Kanto'] = new PokemonLeague('Indigo Plateau Kanto', [23], ShopName.None, 'Victory Road', indigoPlateauKanto);

// const indigoPlateauJohto = ['Elite Will', 'Elite Koga', 'Elite Bruno2', 'Elite Karen', 'Champion Lance'];
// TownList['Indigo Plateau Johto'] = new PokemonLeague('Indigo Plateau Johto', [27], ShopName.None,  null, indigoPlateauJohto);
// (<PokemonLeague>TownList['Indigo Plateau Johto']).setupGymTowns();
//
// const pokemonLeagueHoenn = ['Elite Sidney', 'Elite Phoebe', 'Elite Glacia', 'Elite Drake', 'Champion Wallace'];
// TownList['Pokemon League Hoenn'] = new PokemonLeague('Pokemon League Hoenn', [128], ShopName.None, 'Victory Road Hoenn', pokemonLeagueHoenn);
// (<PokemonLeague>TownList['Pokemon League Hoenn']).setupGymTowns();
