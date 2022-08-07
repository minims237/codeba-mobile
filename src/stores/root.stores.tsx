import { AssociationStore } from "./association.stores";
import { CommuniqueStore } from "./communique.stores";
import { CreateUserStore } from "./CreateUser.stores";
import { suggestionsStore } from "./suggestion.stores";
import { UserStore } from "./user.stores";
import { VersementStore } from "./versement.stores";

export class RootStore {
    userStore:UserStore;
    suggestionStore:suggestionsStore;
    versementStore:VersementStore;
    createUserStore:CreateUserStore;
    communiqueStore:CommuniqueStore;
    associationStore:AssociationStore;
    constructor() {
        this.userStore=new UserStore(this)
        this.suggestionStore=new suggestionsStore(this)
        this.versementStore=new VersementStore(this)
        this.createUserStore=new CreateUserStore(this)
        this.communiqueStore=new CommuniqueStore(this)
        this.associationStore=new AssociationStore(this)
  }
}
export const appRootStore = new RootStore();