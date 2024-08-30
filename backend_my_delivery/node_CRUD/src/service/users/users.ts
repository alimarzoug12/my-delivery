import pool from "../../database";
import { UserType } from "../../types/index";

export async function selectUsers() {
    try {
        const result = await pool.query(`SELECT * FROM public.users`);
        return result;
    } catch (error) {
        console.log(error);
    }
}

export async function insertUser(objectUser: UserType) {
    try {
        return await pool.query(`
            INSERT INTO public.users (firstname, lastname, email, pssword)
            VALUES (
                '${objectUser.firstname}',
                '${objectUser.lastname}',
                '${objectUser.email}',
                '${objectUser.password}'
            )
        `);
    } catch (error) {
        console.log(error);
    }
}

export async function deleteUserService(objectUser: UserType) {
    try {
        return await pool.query(
            `DELETE  FROM public.users WHERE email='${objectUser.email}' yarnyar`
        );
    } catch (error) {
        console.log(error);
    }
}

export async function selectUser(email: string, password: string) {
    console.log("🚀 ~ selectUser ~ password:", password)
    console.log("🚀 ~ selectUser ~ email:", email)
    try {
        const result = await pool.query(
            `SELECT firstname as firstname, lastname as lastname  FROM public.users WHERE email='${email}' and pssword='${password}'`
        );
        console.log("🚀 ~ selectUser ~  result.rows[0]:",  result.rows[0])
       return result.rows[0];
  
    } catch (error) {
        console.log(error);
    }
}

export async function checkEmailExistence(email: string): Promise<boolean> {
    try {
        const result = await pool.query(
            `SELECT * FROM public.users WHERE email='${email}'`
        );

        return result.rows.length > 0 ? true : false;
    } catch (error) {
        console.log(error);
        return false;
    }
}


export async function modifyUser(firstname: string, lastname: string, email: string) {
    try {
        let sql = `
        UPDATE public.users
       SET firstname = '${firstname}' , lastname = '${lastname}'
       WHERE email='${email}' `

        return await pool.query(sql);
    } catch (error) {
        console.log(error);
    }
}