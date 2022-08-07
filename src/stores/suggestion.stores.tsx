import {observable, makeAutoObservable, action} from 'mobx';
import {
  createSuggestionService,
  SuggestionsByUser,
  SuggestionsService,
} from '../services/suggestion.service';

import {RootStore} from './root.stores';

export class suggestionsStore {
  rootStore: RootStore;
  @observable suggestions: any = [];
  @observable suggestionsbyusers: any = [];
  constructor(rootStore: RootStore) {
    makeAutoObservable(this);
    this.rootStore = rootStore;
    this.suggestions = [];
    this.suggestionsbyusers = [];
  }
  @action setUsers(suggestion: any) {
    this.suggestions = suggestion;
  }
  @action setSuggestionsByUser(suggestion: any) {
    this.suggestionsbyusers = suggestion;
  }
  @action async getsuggestions() {
    if (this.suggestions) return this.suggestions;
    const resultat = await SuggestionsService.suggestions();
    console.log(resultat);
    this.setUsers(resultat);
  }
  @action async getsuggestionsByUser(id: any) {
    const resultat = await SuggestionsByUser.suggestionsByUser(id);
    const ri=resultat.reverse()
    console.log("tes suggestion",resultat);
    this.setSuggestionsByUser(ri);
  }
  @action async createSuggestion(objet: any, description: any, userID: any) {
    const resultat = await createSuggestionService.newSuggestion(
      objet,
      description,
      userID,
    );
    console.log('votre suggestion', resultat);
    this.setUsers(resultat);
    return resultat;
  }
}
