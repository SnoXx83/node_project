import { Query, Resolver } from "type-graphql";
import { Country } from "../entities/Country";

@Resolver()
export class CountryResolver{
    @Query(()=>[Country])
    async allCountries(){
            const result= await Country.find();
            return result;
    }
}
