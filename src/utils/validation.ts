// Validation utility functions

export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

export const validatePhone = (phone: string): boolean => {
  const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/
  return phoneRegex.test(phone.replace(/\s/g, ''))
}

export const validateRequired = (value: string): boolean => {
  return value.trim().length > 0
}

export const validateMinLength = (
  value: string,
  minLength: number
): boolean => {
  return value.length >= minLength
}

export const validateMaxLength = (
  value: string,
  maxLength: number
): boolean => {
  return value.length <= maxLength
}

export const validatePetAge = (age: string): boolean => {
  const ageRegex = /^\d+(\s*(years?|yrs?|months?|mos?|weeks?|wks?|days?|d))?$/i
  return ageRegex.test(age)
}

export const validateDate = (date: string): boolean => {
  const dateRegex = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[012])\/(19|20)\d\d$/
  return dateRegex.test(date)
}

export interface ValidationResult {
  isValid: boolean
  errors: string[]
}

export const validateForm = (
  data: Record<string, unknown>,
  rules: Record<string, (string | { type: string; value?: number })[]>
): ValidationResult => {
  const errors: string[] = []

  Object.entries(rules).forEach(([field, fieldRules]) => {
    const value = data[field]

    fieldRules.forEach((rule) => {
      if (rule === 'required' && !validateRequired(value as string)) {
        errors.push(`${field} is required`)
      }

      if (
        typeof rule === 'object' &&
        rule.type === 'email' &&
        !validateEmail(value as string)
      ) {
        errors.push(`${field} must be a valid email`)
      }

      if (
        typeof rule === 'object' &&
        rule.type === 'phone' &&
        !validatePhone(value as string)
      ) {
        errors.push(`${field} must be a valid phone number`)
      }

      if (
        typeof rule === 'object' &&
        rule.type === 'minLength' &&
        rule.value &&
        !validateMinLength(value as string, rule.value)
      ) {
        errors.push(`${field} must be at least ${rule.value} characters`)
      }

      if (
        typeof rule === 'object' &&
        rule.type === 'maxLength' &&
        rule.value &&
        !validateMaxLength(value as string, rule.value)
      ) {
        errors.push(`${field} must be no more than ${rule.value} characters`)
      }
    })
  })

  return {
    isValid: errors.length === 0,
    errors,
  }
}
