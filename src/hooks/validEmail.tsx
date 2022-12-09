export default function emailValidator() {
    const emailValidation = (email: string): string =>  {
        if (!email) {
          return "Email jest wymagany. ";
        } else if (!new RegExp(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/).test(email)) {
          return "Niepoprawny email. ";
        }
        return "";
    }
    return emailValidation;
}