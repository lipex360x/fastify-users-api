import dayjs from 'dayjs'

export const calculateUserAge = (birthDate: Date) => {
  const parseDate = dayjs(birthDate)

  const now = dayjs(new Date())

  return now.diff(parseDate, 'year')
}
