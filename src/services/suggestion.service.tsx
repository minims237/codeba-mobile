import {client} from '../helpers/apollo';
import {NEWSUGGESTION} from '../consts/mutation';
import { SUGGESTIONS, SUGGESTIONSBYUSER } from '../consts/queries';

export class createSuggestionService {
  static newSuggestion = async (objet: any, description: any,userID: any) => {
    try {
      const result = await client.mutate({
        mutation: NEWSUGGESTION,
        variables: {objet, description,userID},
      });
      return result.data.newSuggestion;
    } catch (e) {
      console.log(e);
      return [];
    }
  };
  
}
export class SuggestionsByUser{
  static suggestionsByUser = async (id: any) => {
    try {
      const result = await client.query({
        query: SUGGESTIONSBYUSER,
        variables: {id},
      });
      console.log(result);
      return result.data.suggestionsByUser;
    } catch (e) {
      console.log(e);
    }
}
}
export class SuggestionsService {
  static suggestions=async()=>{
      try {
          const result=await client.query({
              query:SUGGESTIONS,
          });
          console.log("resulta:",result);
          return result.data.users;
      } catch (e) {
          console.log(e)
      }
  }
}