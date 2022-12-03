

// Nombre
let nombre = /^[0-9]*$/;
// ou
let nombreAlso = /^\d*$/;

// Float 
let float = /^([1-9]*[.])00$/;

// Numéro téléphone avec juste 10 chiffres
let mobile = /^\d{10}$/;

// Alphabet avec lettres minuscule
let lettre_min = /^[a-z]*$/;

// Alphabet avec lettres majuscule
let lettre_maj = /^[A-Z]*$/;

// Alphabet avec lettres minuscule et majuscule
let lettre_min_maj = /^[a-zA-Z]*$/;

// Alphanumériques
let alphanumériques = /^[\da-zA-Z]*$/;

// Nom d'utilisateur alphanumérique de 4 à 8 caractéres avec '_'
let username = /^([a-zA-Z\d_]){4,8}$/;

// Nom complet
let fullname = /^[a-zA-z]{2,20}[ ][a-zA-z]{3,20}$/i;

// Nom complet avec middlename
let _fullname = /^[a-zA-z]{3,}[ ][a-zA-z]{3,}[ ][a-zA-z]{3,}$/i;

// Nom complet avec middlename optionnel
let middlename = /^[a-zA-z]{3,}[ ][a-zA-z]{3,}([ ][a-zA-z]{3,})?$/i;

// Email 
let email = /^\w+([\.-]?\w+)@\w+([-]?\w+)\.([a-z]{2,3})(\.[a-z]{2,3})?$/;

// Email standard
let email_standard = /^\w+([\.-]?\w+)@\w+([-]?\w+)\.([a-z]{2,12})(\.[a-z]{2,12}){0,1}?$/;

//Mot de passe contenant au moins 8 caractéres avec 1 chiffre, 1 majuscule et 1 minuscule
let password = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;

// Web URL
let url = /^(http[s]?:\/\/)?(www\.)?[a-zA-Z0-9]+([-]?\w+)\.([a-z]{2,12})(\.[a-z]{2,12})?$/;
