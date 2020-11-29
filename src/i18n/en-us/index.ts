export default {
  pageNotFound: {
    title: 'Oops. Nothing here...',
    backButton: 'Go Home',
  },
  layout: {
    header: 'Tools',
    list: {
      mainPage: {
        title: 'Main page',
        subtitle: ''
      },
      storage: {
        title: 'Storage',
        subtitle: 'Edit and manage saved data'
      },
      prime: {
        title: 'Prime generator',
        subtitle: 'Decomposition into prime factors'
      },
      conversion: {
        title: 'Number system convertor',
        subtitle: 'Swapping numbers in different number systems'
      },
      roman: {
        title: 'Roman numeral convertor',
        subtitle: 'Converting numbers from Roman to Arabic and vice versa'
      }
    }
  },
  mainPage: {
    quote: {
      content: 'Given for one instant an intelligence which could comprehend all the forces by which nature is animated and the respective situation of the beings who compose it—an intelligence sufficiently vast to submit these data to analysis—it would embrace in the same formula the movements of the greatest bodies of the universe and those of the lightest atom; for it, nothing would be uncertain and the future, as the past, would be present to its eyes. The human mind offers, in the perfection which it has been able to give to astronomy, a feeble idea of this intelligence. Its discoveries in mechanics and geometry, added to that of universal gravity, have enabled it to comprehend in the same analytical expressions the past and future states of the system of the world.',
      author: 'Pierre Simon de Laplace'
    }
  },
  storagePage: {
    title: 'Storage',
    isEmpty: 'Storage is empty.'
  },
  primePage: {
    title: 'Decomposition into prime factors',
    inputLabel: 'Enter a number',
    actionButton: 'Divide'
  },
  convertorPage: {
    title: 'Number system convertor',
    radioLabel: 'Conversion type',
    inputLabel: 'Enter a number in system {system}',
    actionButton: 'Convert'
  },
  romanPage: {
    title: 'Converting the notation of numbers',
    firstOption: 'Arabic -> Roman',
    secondOption: 'Roman -> Arabic',
    inputLabel: 'Enter number',
    actionButton: 'Convert'
  },
  actionButtons: {
    save: 'Save',
    copy: 'Copy'
  },
  floatingStorage: {
    dialog: {
      select: 'Select value',
      cancel: 'Cancel'
    },
    select: 'Select'
  },
  messages: {
    error: {
      invalidInputValue: 'Invalid value "{value}"!',
      saveFailded: 'Failed to save!',
      copyFailed: 'Failed to copy!',
      saveFailedNull: 'Result is null',
      copyFailedNull: 'Result is null'
    },
    success: {
      saved: 'Saved successfully!',
      savedDetails: 'Redirect me to the storage',
      copied: 'Copied successfully!'
    }
  }
};
