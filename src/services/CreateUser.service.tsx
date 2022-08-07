import { NEWUSER } from "../consts/mutation"
import { client } from "../helpers/apollo"

export class CreateUserService{
    static newUser=async ( 
        nom: any,
        matricule: any,
        mdp: any,
        role: any,
        sexe: any,
        quartier: any,
        numero: any,
        paysResidence: any,
        villeResidence: any,
        associationID: any)=>{
        try {
            const result=await client.mutate({
                mutation:NEWUSER,
                variables:{nom, matricule, mdp, role , sexe,  quartier,numero,paysResidence,villeResidence,associationID}
            })
            return result.data.newUser
        } catch (e) {
            console.log(e)
        }
    }
    }