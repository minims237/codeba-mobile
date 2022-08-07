import { observable, action } from "mobx";
import { CreateUserService } from "../services/CreateUser.service";
import { RootStore } from "./root.stores";
export class CreateUserStore {
    rootStore: RootStore;
    @observable users: any = []
    constructor(rootStore: RootStore) {
      this.rootStore = rootStore;
      this.users=[];
    }
    @action setUsers(users:any){
        this.users = users
    }
    @action async createUser(nom: any, matricule: any, mdp: any, role: any , sexe: any,  quartier: any,numero: any,paysResidence: any,villeResidence: any,associationID: any){
        const result = await CreateUserService.newUser(nom,matricule,mdp,role,sexe, quartier,numero,paysResidence,villeResidence,associationID)
        this.setUsers(result)
        console.log(result)
        return result
    }
}