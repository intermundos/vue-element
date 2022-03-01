import format from 'date-fns/format'
import add    from 'date-fns/addDays'

export const formatDate = ( date ) => {
  return format(new Date(date), 'dd/MM/yyyy')
}

export const addDays = ( date, amount ) => {
  return add(new Date(date), amount)
}