import {client} from '../helpers/apollo';
import {NEWCOMMUNIQUE} from '../consts/mutation';
import {COMMUNIQUES, COMMUNIQUESBYUSER} from '../consts/queries';
export class CommuniquesByUserService {
  static communiquesByUser = async (id: any) => {
    try {
      const result = await client.query({
        query: COMMUNIQUESBYUSER,
        variables: {id},
      });
      console.log(result);
      return result.data.versementsByUser;
    } catch (e) {
      console.log(e);
    }
  };
}

export class CommuniquesService {
  static communiques = async () => {
    try {
      const result = await client.query({
        query: COMMUNIQUES,
      });
      console.log("les communiques",result);
      return result.data.communiques;
    } catch (e) {
      console.log(e);
    }
  };
}

export class createCommuniqueService {
  static newCommunique = async (titre: any,description: any, fichier: any,userID:any) => {
    try {
      const result = await client.mutate({
        mutation: NEWCOMMUNIQUE,
        variables: {titre, description, fichier,userID},
      });
      return result.data.newCommunique;
    } catch (e) {
      console.log(e);
      return [];
    }
  };
 
}
