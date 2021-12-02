export interface LoginDto{
    "authToken": string;
    "authToken_exp": number;
    "auth_user": {
        "_id": string;
        "email": string ;
        "password": string;
        "createdAt": string ;
        "updatedAt": string; 
        "__v": number;
    }
}