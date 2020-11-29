export default {
  pageNotFound: {
    title: 'Nie znaleźiono strony...',
    backButton: 'Wróć',
  },
  layout: {
    header: 'Narzędzia',
    list: {
      mainPage: {
        title: 'Strona główna',
        subtitle: ''
      },
      storage: {
        title: 'Schowek',
        subtitle: 'Zarządzaj zapisanymi danymi'
      },
      prime: {
        title: 'Liczby pierwsze',
        subtitle: 'Rozkład na czynniki pierwsze'
      },
      conversion: {
        title: 'Kowersja liczb',
        subtitle: 'Zamiana zapisu liczb w różnych systemach liczbowych'
      },
      roman: {
        title: 'Konwersja zapisu',
        subtitle: 'Zamiana zapisu z rzymskiego na arabski oraz na odwrót'
      }
    }
  },
  mainPage: {
    quote: {
      content: 'Obdarzony na chwilę umysłem, który potrafiłby pojąć wszystkie siły, którymi ożywiona jest natura, i odpowiadających im sytuacji istot które ją tworzą – umysłem wystarczająco wielkim, by poddać te dane analizie – ująłby w jeden wzór wszystkie ruchy największych ciał wszechświata i najlżejszych atomów; dla niego nic w przyszłości nie byłoby niepewne, ponieważ przyszłość byłaby dla niego teraźniejszością.',
      author: 'Pierre Simon de Laplace'
    }
  },
  storagePage: {
    title: 'Schowek',
    isEmpty: 'Schowek jest pusty.'
  },
  primePage: {
    title: 'Rozkład liczby na czynniki pierwsze',
    inputLabel: 'Wpisz liczbę',
    actionButton: 'Podziel'
  },
  convertorPage: {
    title: 'Konwersja systemów liczbowych',
    radioLabel: 'Typ konwersji',
    inputLabel: 'Podaj liczbę w systemie {system}',
    actionButton: 'Konwertuj'
  },
  romanPage: {
    title: 'Konwersja sposobu zapisu liczb',
    firstOption: 'Arabski -> Rzymski',
    secondOption: 'Rzymski -> Arabski',
    inputLabel: 'Wpisz liczbę',
    actionButton: 'Konwertuj'
  },
  actionButtons: {
    save: 'Zapisz',
    copy: 'Kopiuj'
  },
  floatingStorage: {
    dialog: {
      select: 'Wybierz wartość',
      cancel: 'Anuluj'
    },
    select: 'Wybierz'
  },
  messages: {
    error: {
      invalidInputValue: 'Niepoprawna wartość "{value}"!',
      saveFailded: 'Nie udało się zapisać!',
      copyFailed: 'Nie udało się skopiować do schowka!',
      saveFailedNull: 'Nie możesz skopiować pustego resultatu',
      copyFailedNull: 'Nie możesz skopiować pustego resultatu'
    },
    success: {
      saved: 'Zapisano!',
      savedDetails: 'Kliknij, aby przejść do schowka',
      copied: 'Skopiowano do schowka!'
    }
  }
};
