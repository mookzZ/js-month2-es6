const lang = prompt('Введите язык:')

const weekDaysRus = ['ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'ВС']
const weekDaysEng = ['SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA']

switch (lang) {
    case 'RUS':
        console.log(weekDaysRus)
        break
    case 'ENG':
        console.log(weekDaysEng)
        break
    default:
        console.log("This language doesn't exist, please type correct one.")
        break
}