import { NEWASSOCIATION } from '../consts/mutation';
import { ASSOCIATIONBYID, ASSOCIATIONS } from '../consts/queries';
import {client} from '../helpers/apollo'

export class AssociationsService {
  static Associations = async () => {
    try {
      const result = await client.query({
        query: ASSOCIATIONS,
      });
      console.log(result);
      return result.data.associations;
    } catch (e) {
      console.log(e);
    }
  };
}

export class AssociationByIdService {
  static associationByid = async (id:any) => {
    try {
      const result = await client.query({
        query: ASSOCIATIONBYID,
        variables:{id}
      });
      console.log(result);
      return result.data.associationById;
    } catch (e) {
      console.log(e);
    }
  };
}

export class createAssociationService {
  static newAssociation = async (nom: any,paysSiege: any, numero: any, villeResidence: any) => {
    try {
      const result = await client.mutate({
        mutation: NEWASSOCIATION,
        variables: {nom,paysSiege, numero, villeResidence},
      });
      return result.data.newAssociation;
    } catch (e) {
      console.log(e);
      return [];
    }
  };
 
}
