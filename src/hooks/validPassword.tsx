export default function passwordValidator() {
    const passwordValidation = (password: string): string =>  {
        if (!password) {
          return "Hasło jest wymagane. ";
        } else if (!new RegExp(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/).test(password)) {
          return "Hasło musi zawierać minimum 8 znaków, oraz co najmniej jedną literę i jedną cyfrę. ";
        }
        return "";
    }
    return passwordValidation;
}