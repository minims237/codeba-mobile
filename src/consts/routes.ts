import { MainNavigation } from "../navigations/MainNavigation.navigations";
import Home from "../screens/auths/Home.screen";
import { AuthNavigation } from '../navigations/AuthNavigation.navigations';
import Notification from '../screens/main/Notification.screen';
import Main from '../screens/main/Main.screen';
import Suggestion from '../screens/main/Suggestion.screen';
import Paiement from '../screens/main/paiment.screen';
import SuggesFormulaire from "../screens/main/SuggesFormulaire.screen";
import Historique from "../screens/main/Historique.screen";
import Versement from "../screens/main/Versement.screen";
import SignUp from "../screens/auths/SignUp.screen";

export interface IRoute{
    name:string;
    component:any;
}

export interface IRouteItem{
    home:IRoute,
    mainNavigation:IRoute,
    authNavigation:IRoute,
    notification:IRoute,
    main:IRoute,
    suggestion:IRoute,
    paiement:IRoute,
    formulaire:IRoute,
    historique:IRoute,
    versement:IRoute,
    signup:IRoute,
}
export const Routes:IRouteItem={
    home:{
        name:"home",
        component:Home,
    },
    signup:{
        name:"signup",
        component:SignUp,
    },
    mainNavigation:{
        name:"mainNavigation",
        component:MainNavigation,
    },
    authNavigation:{
        name:"authNavigation",
        component:AuthNavigation
    },
    notification:{
        name:"notification",
        component:Notification,
    },
    main:{
        name:"main",
        component:Main
    },
    suggestion:{
        name:"suggestion",
        component:Suggestion
    },
    paiement:{
        name:"paiement",
        component:Paiement
    },
    formulaire:{
        name:"Suggestion",
        component:SuggesFormulaire
    },
    historique:{
        name:"historique",
        component:Historique
    },
    versement:{
        name:"versement",
        component:Versement
    }
}