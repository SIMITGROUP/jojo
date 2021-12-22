import { default as _isEmail } from "validator/lib/isEmail"

export const isEmail = (targetEmail: string): boolean => {
    return _isEmail(targetEmail)
}