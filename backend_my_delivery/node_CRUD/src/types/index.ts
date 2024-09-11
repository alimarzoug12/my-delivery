export type UserType = {

    id: number,

    firstname: string,

    lastname: string,

    email: string,

    password: string

}
// src/types.ts
export interface ShopRequestBody {
    email: string;
    title: string;
    quantity: number;
}
