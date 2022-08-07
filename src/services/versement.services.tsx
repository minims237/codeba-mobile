import {client} from '../helpers/apollo';
import {NEWVERSEMENT} from '../consts/mutation';
import {VERSEMENTS, VERSEMENTSBYUSER} from '../consts/queries';
export class VersementsByUserService {
  static versementsByUser = async (id: any) => {
    try {
      const result = await client.query({
        query: VERSEMENTSBYUSER,
        variables: {id},
      });
      console.log(result);
      return result.data.versementsByUser;
    } catch (e) {
      console.log(e);
    }
  };
}

export class VersementsService {
  static versements = async () => {
    try {
      const result = await client.query({
        query: VERSEMENTS,
      });
      console.log(result);
      return result.data.versements;
    } catch (e) {
      console.log(e);
    }
  };
}

export class createVersementService {
  static newVersement = async (montant: any, numero: any, intitule: any,userID:any) => {
    try {
      const result = await client.mutate({
        mutation: NEWVERSEMENT,
        variables: {montant, numero, intitule,userID},
      });
      return result.data.newVersement;
    } catch (e) {
      console.log(e);
      return [];
    }
  };
 
}
