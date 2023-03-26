import axiosBasic, { AxiosError } from 'axios'
import { Key } from '../Enums/key';

interface Error {
  error: {message: string}
}

interface LoginData {
    email: string;
    password: string;
  }

async function loginApiService(loginData : LoginData) {
    try {
        const res = await axiosBasic.post(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${Key.API_KEY}`, {
          email: loginData.email,
          password: loginData.password,
          returnSecureToken: true,
        }); 
        return ({
            status: 'succes',
            data: {
                email: res.data.email,
                token: res.data.idToken,
                userId: res.data.localId,
        }
        })
      } catch (err) {
        const error = err as AxiosError<Error>;
        const errorMessage = error.response?.data.error.message
        switch (errorMessage) {
          case "EMAIL_NOT_FOUND":
            return ({
                status: 'fail',
                error: 'Podany email nie jest powiązany z żadnym kontem.'
            })
          case "INVALID_PASSWORD":
            return ({
                status: 'fail',
                error: 'Błędne hasło.'
            })
          case "USER_DISABLED":
            return ({
                status: 'fail',
                error: 'Konto zostały dezaktywowane przez administratora.'
            })
          default:
            return ({
                status: 'fail',
                error: String(errorMessage)
            })
        }
      }
}

export default loginApiService