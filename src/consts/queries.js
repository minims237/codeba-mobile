import gql from "graphql-tag";
export const USERS = gql`
query users{
    users{
        id
        nom
        sexe 
        quartier
        numero
        paysResidence
        villeResidence
        versements{
             montant
         }
        association{
            id
        }
    }
}
`;
export const  USERBYMATRICULE= gql`
    query userByMatricule($matricule:String!,$mdp:String!){
        userByMatricule(matricule:$matricule,mdp:$mdp){
            id
            nom
            matricule
            mdp
            sexe 
            quartier
            numero
            paysResidence
            villeResidence
        }
    }
`
export const  ASSOCIATIONBYID= gql`
    query associationById($id:String!){
        ssociationById(id:$id){
            id
            nom
        }
    }
`

export const  SUGGESTIONSBYUSER= gql`
    query suggestionsByUser($id:String!){
        suggestionsByUser(id:$id){
            objet
            description
            created_at
        }
    }
`
export const SUGGESTIONS = gql`
query suggestions{
    sugggestions{
    objet
    suggestion
    created_at
    }
}
`
export const  VERSEMENTSBYUSER= gql`
    query versementsByUser($id:String!){
        versementsByUser(id:$id){
            id
            montant
            numero
            intitule
            created_at
        }
    }
`

export const  VERSEMENTS= gql`
    query versements{
        versements{
            montant
            numero
            intitule
            created_at
        }
    }
`
export const  ASSOCIATIONS= gql`
    query associations{
        associations{
            id
            nom
            paysSiege
            villeResidence
            numero
            users{
                id
                nom
                sexe 
                quartier
                numero
                paysResidence
                villeResidence
                versements{
                    montant
                }
            }
        }
    }
`
export const  COMMUNIQUES= gql`
    query communiques{
        communiques {
            titre
            description
            fichier
            created_at
        }
    }
`

export const  COMMUNIQUESBYUSER= gql`
    query communiquesByUser($id:String!){
        communiquesByUser(id:$id) {
            titre
            description
            fichier
            created_at
        }
    }
`