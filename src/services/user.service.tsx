import {client} from '../helpers/apollo';
import { USERBYMATRICULE, USERS } from '../consts/queries';

export class UserByMatriculeService {
  static userByMatricule = async (matricule: any,mdp:any) => {
    try {
      const result = await client.query({
        query: USERBYMATRICULE,
        variables: {matricule,mdp},
      });
      console.log(result);
      return result.data.userByMatricule;
    } catch (e) {
      console.log(e);
    }
}
}

export class UsersService {
  static users=async()=>{
      try {
          const result=await client.query({
              query:USERS,
          });
          console.log("resulta:",result);
          return result.data.users;
      } catch (e) {
          console.log(e)
      }
  }
   
  }