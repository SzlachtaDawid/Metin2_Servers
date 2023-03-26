import axiosBasic, { AxiosError } from 'axios'
import { Key } from '../Enums/key';

interface Error {
  error: {message: string}
}

interface RegisterData {
    email: string;
    password: string;
  }

async function registerApiService(loginData : RegisterData) {
    try {
        await axiosBasic.post(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${Key.API_KEY}`, {
            email: loginData.email,
            password: loginData.password,
            returnSecureToken: true
        }); 
        return ({
            status: 'succes',
        })
      } catch (err) {
        const error = err as AxiosError<Error>;
        const errorMessage = error.response?.data.error.message
        switch (errorMessage) {
          case "EMAIL_EXISTS":
            return ({
                status: 'fail',
                error: 'Konto o podanym mailu już istnieje.'
            })
          case "OPERATION_NOT_ALLOWED":
            return ({
                status: 'fail',
                error: 'Rejestracja za pomocą hasła jest aktualnie wyłączona. Przepraszamy.'
            })
          case "TOO_MANY_ATTEMPTS_TRY_LATER":
            return ({
                status: 'fail',
                error: 'Zbyt wiele prób rejestracji, spróbuj ponownie później.'
            })
          default:
            return ({
                status: 'fail',
                error: String(errorMessage)
            })
        }
      }
}

export default registerApiService