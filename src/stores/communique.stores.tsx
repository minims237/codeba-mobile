import {observable, makeAutoObservable, action} from 'mobx';
import { CommuniquesByUserService, CommuniquesService, createCommuniqueService } from '../services/communique.services';
import {RootStore} from './root.stores';
export class CommuniqueStore {
  rootStore: RootStore;
  @observable communiques: any = [];
  @observable ComBuser: any = [];

  constructor(rootStore: RootStore) {
    makeAutoObservable(this);
    this.rootStore = rootStore;
    this.communiques = [];
    this.ComBuser = [];
  }

  @action setCommunique(Communiques: any) {
    this.communiques = Communiques;
  }

  @action setCommuniqueByUser(Communique: any) {
    this.ComBuser = Communique;
  }

  @action async getcommuniques() {

    const resultat = await CommuniquesService.communiques()
    console.log("communiques",resultat);
    this.setCommunique(resultat);
    return resultat
  }

  @action async getCommuniqueByUser(id: any) {
    const resultat = await CommuniquesByUserService.communiquesByUser(id);
    console.log(resultat);
    this.setCommuniqueByUser(resultat);
  }

  @action async newCommunique(titre: any,description: any, fichier: any,userID:any) {
    const resultat = await createCommuniqueService.newCommunique(
      titre,
      description,
      fichier,
      userID
    )
    console.log("un new Communique:",resultat);
    this.setCommunique(resultat);
    return resultat;
  }
  
}
