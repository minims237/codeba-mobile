import {observable, makeAutoObservable, action} from 'mobx';
import {
  createVersementService,
  VersementsByUserService,
  VersementsService,
} from '../services/versement.services';
import {RootStore} from './root.stores';

export class VersementStore {
  rootStore: RootStore;
  @observable versements: any = [];
  @observable verBuser: any = [];

  constructor(rootStore: RootStore) {
    makeAutoObservable(this);
    this.rootStore = rootStore;
    this.versements = [];
    this.verBuser = [];
  }

  @action setVersement(versement: any) {
    this.versements = versement;
  }

  @action setVersementByUser(versement: any) {
    this.verBuser = versement;
  }

  @action async getVersements() {
    if (this.versements) return this.versements;
    const resultat = await VersementsService.versements()
    console.log(resultat);
    this.setVersement(resultat);
  }

  @action async getVersementByUser(id: any) {
    const resultat = await VersementsByUserService.versementsByUser(id);
    console.log(resultat);
    const ri=resultat.reverse()
    this.setVersementByUser(ri);
  }

  @action async newVersement(montant: any, numero: any, intitule: any,userID:any) {
    const resultat = await createVersementService.newVersement(
      montant,
      numero,
      intitule,
      userID
    );
    console.log("un new versement:",resultat);
    this.setVersement(resultat);
    return resultat;
  }
}
