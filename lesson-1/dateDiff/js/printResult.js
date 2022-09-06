const result = document.getElementById('datecalc__result')

export const printError = (errorText) => {
  result.innerText = errorText
}

export const printResult = ({ years, months, days }) => {
  result.innerText = `Год: ${years} - Месяц: ${months} - День: ${days}`
} 
