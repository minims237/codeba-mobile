import { action, makeAutoObservable, observable } from "mobx";
import { UserByMatriculeService, UsersService } from "../services/user.service";
import { RootStore } from "./root.stores";

export class UserStore {
    rootStore: RootStore;
    @observable users: any = []
    @observable userBym: any = []
    constructor(rootStore: RootStore) {
      makeAutoObservable(this)
      this.rootStore = rootStore;
      this.users=[]
      this.userBym=[]
    }
    @action setUsers(users:any){
        this.users = users
    }
    @action setUserByMatricule(userBym:any){
        this.userBym = userBym
    }
    @action async getUserByMatricule(matricule:any,mdp:any){
      
        const resultat = await UserByMatriculeService.userByMatricule(matricule,mdp)
        console.log("votre utilisateur",resultat)
        this.setUserByMatricule(resultat)
        return resultat
    }
    @action async getUsers(){
       
        const resultat = await UsersService.users()
        console.log("les users",resultat)
        this.setUsers(resultat)
        return resultat
    }

  }