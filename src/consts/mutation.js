import gql from "graphql-tag";
export const NEWASSOCIATION = gql`
  mutation newAssociation(
    $nom: String!
    $paysSiege: String!
    $villeResidence: String!
    $numero: String!
  ) {
    newAssociation(
      nom: $nom
      paysSiege: $paysSiege
      villeResidence: $villeResidence
      numero: $numero
    ) {
      nom
    }
  }
`;
export const NEWUSER = gql`
    mutation newUser(
        $nom: String!
        $matricule: String!
        $mdp: String!
        $role:String!
        $sexe:String!
        $quartier:String!
        $numero:String!
        $paysResidence:String!
        $villeResidence:String!
        $associationID:String!
    ) {
        newUser(
        nom: $nom
        matricule: $matricule
        mdp: $mdp
        role:$role
        sexe:$sexe
        quartier:$quartier
        numero:$numero
        paysResidence:$paysResidence
        villeResidence:$villeResidence
        associationID:$associationID
        ) {
        nom
        }
    }

    `;

export const UPDATEUSER = gql`
  mutation updateUser(
       $nom: String!
        $matricule: String!
        $mdp: String!
        $role:String!
        $sexe:String!
        $quartier:String!
        $numero:String!
        $paysResidence:String!
        $villeResidence:String!
  ) {
    updateUser(nom: $nom
        matricule: $matricule
        mdp: $mdp
        role:$role
        sexe:$sexe
        quartier:$quartier
        numero:$numero
        paysSiege:$paysSiege
        villeResidence:$villeResidence) {
      nom
    }
  }
`;

export const NEWSUGGESTION = gql`
  mutation newSuggestion(
    $objet: String!
    $description: String!
    $userID: String!
  ) {
    newSuggestion(objet: $objet, description: $description, userID: $userID) {
      objet
    }
  }
`;

export const NEWCOMMUNIQUE = gql`
  mutation newCommunique(
    $titre: String!
    $description: String!
    $fichier: [Upload!]
    $userID: String!
  ) {
    newCommunique(
      titre: $titre
      description: $description
      fichier: $fichier
      userID: $userID
    ) {
      titre
    }
  }
`;

export const NEWVERSEMENT = gql`
  mutation newVersement(
    $montant: String!
    $numero: String!
    $intitule: String!
    $userID: String!
  ) {
    newVersement(
      montant: $montant
      numero: $numero
      intitule: $intitule
      userID: $userID
    ) {
      montant
    }
  }
`;
