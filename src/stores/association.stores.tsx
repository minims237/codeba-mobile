import { observable, makeAutoObservable, action } from "mobx";
import {
  AssociationByIdService,
  AssociationsService,
  createAssociationService,
} from "../services/association.services";
import { RootStore } from "./root.stores";

export class AssociationStore {
  rootStore: RootStore;
  @observable associations: any = [];
  @observable oneAssociation: any = [];
  constructor(rootStore: RootStore) {
    makeAutoObservable(this);
    this.rootStore = rootStore;
    this.associations = [];
    this.oneAssociation=[];
  }

  @action setAssociation(association: any) {
    this.associations = association;
  }
  @action setAssociationById(association: any) {
    this.oneAssociation = association;
  }

  @action async getAssociations() {
   
    const resultat = await AssociationsService.Associations();
    console.log("les association:",resultat);
    this.setAssociation(resultat);
    return resultat
  }
 
  @action async getAssociationByid(id:any) {
    const resultat = await AssociationByIdService.associationByid(id)
    console.log("associaion par identifiant:",resultat);
    this.setAssociationById(resultat);
    return resultat
  }
  @action async newAssociation(
    nom: any,
    paysSiege: any,
    numero: any,
    villeResidence: any
  ) {
    const resultat = await createAssociationService.newAssociation(
      nom,
      paysSiege,
      numero,
      villeResidence
    );
    console.log("un new association:", resultat);
    this.setAssociation(resultat);
    return resultat;
  }
}
