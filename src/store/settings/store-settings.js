import { reactive } from '@vue/reactivity';
import { Screen } from 'quasar';
import { i18n } from 'boot/i18n';
import { moment } from 'moment';

const state = reactive({
  sections: {
    account: {
      label: 'Account',
      icon: 'fas fa-user-circle',
      fields: {
        qudgetProSubscription: {
          type: 'field-item',
          label: 'Qudget Pro Subscription',
          value: 'Subscribed',
          click() {
            state.sections.account.fields.qudgetProSubscription.value = 'Not Subscribed'
          }
        },
        restoreProSubscription: {
          type: 'field-item',
          label: 'Restore Pro Subscription'
        },
        getQudgetDesktop: {
          type: 'field-item',
          label: 'Get Qudget Desktop',
          badge: 'FREE!'
        }
      }
    },
    appearance: {
      label: 'Appearance',
      icon: 'far fa-image',
      fields: {
        language: {
          type: 'field-select',
          language: 'Language:',
          value: {
            label: 'English',
            value: 'en-US'
          },
          options: [
            {
              label: 'English',
              value: 'en-US'
            },
            {
              label: 'Ukrainian',
              value: 'uk'
            }
          ],
          change(value) {
            console.log('change', value);
            i18n.global.locate = value.value;
          }
        },
        theme: {
          type: 'field-select',
          label: 'Theme:',
          value: {
            label: 'Indigo',
            value: '#3f51b5'
          },
          options: [
            {
              label: 'Blue',
              value: '#448aff'
            },
            {
              label: 'Yellow',
              value: '#ff0'
            },
            {
              label: 'Green',
              value: '#76ff03'
            },
            {
              label: 'Orange',
              value: '#ff6e40'
            },
            {
              label: 'DarkMode',
              value: '#1D1D1D'
            }
          ]
        },
        text_size: {
          type: 'field-select',
          label: 'Text Size:',
          value: {
            label: 'Medium (Default)',
            value: '16px'
          },
          options: [
            {
              label: 'Small',
              value: '14px'
            },
            {
              label: 'Large',
              value: '19px'
            },
            {
              label: 'Extra Large',
              value: '24px'
            }
          ]
        }
      }
    },
    dates: {
      label: 'Dates',
      icon: 'far fa-calendar-alt',
      fields: {
        dateFormat: {
          type: 'field-select',
          label: 'Date format:',
          value: {
            label: `${moment(new Date()).format("D/MMM/YYYY")}`,
            value: `${moment(new Date()).format("D/MMM/YYYY")}`
          }
        },
        autoInsertDate: {
          type: 'checkbox',
          label: 'Auto Insert Date',
        }
      }
    },
    currency: {
      label: 'Currency',
      icon: 'fas fa-coins',
      fields: {
        currencySymbol: {
          type: 'field-select',
          label: 'Currency symbol:',
          value: {
            label: '$ - Dollar',
            value: '$'
          },
          options: [
            {
              label: '$ - Dollar',
              value: '$'
            },
            {
              label: '\U+20B4',
              value: 'uah'
            }
          ],
          change(value) {
            console.log('Currency symbol changed to:', value.value);
          }
        }
      }
    },
    budgetOptions: {
      label: 'Budget Options',
      icon: 'fas fa-slider-h',
      fields: {
        addNewItemsTo: {
          type: 'field-radio',
          label: 'Add new items to:',
          value: 'bottomOffList',
          options: [
            {
              label: 'Bottom of list',
              value: 'bottomOfList'
            },
            {
              label: 'Top of list',
              value: 'topOfList'
            }
          ],
          change(value) {
            console.log('Add new items to changed to: ', value);
          }
        },
        spellChecker: {
          type: 'field-checkbox',
          label: 'Spell Checker',
          placeholder: 'Check for spelling errors when editing a field'
        },
        startedFrom: {
          type: 'field-radio',
          value: moment().format("DD/MM/YYYY"),
          options: new Map([
          [
            '1 week', `${moment().subtract(7, 'days')}`
          ],
          [
            '2 weeks', `${moment().subtract(14, 'days')}`
          ],
          [
            'month', `${moment().subtract(moment(moment().format("YYYY-MM"), "YYYY-MM").daysInMonth(), 'days')}`
          ]
          ])
        },
        increaseStarredDatesBy: {
          type: 'field-radio',
          label: 'Increase Starred dates by',
          description: 'When you create a new budget & add your Starred items, the dates will be increased by this much',
          value: 'oneMonth' ,
          options: [
            {
              label: '1 month',
              value: 'oneMonth'
            },
            {
              label: '2 weeks',
              value: 'twoWeeks'
            },
            {
              label: '1 week',
              value: 'oneWeek'
            }
          ],
          change(value) {
            console.log('"Increase Starred dates by" changed to:', value)
          }
        },
        showRunningBalance: {},
        showDateColumn: {},
        showAllBudgetBalance: {
          type: 'field-checkbox',
          label: 'Show All Budget balance',
          value: true,
          change(value) {
            console.log('"Show All Budget balance" set to:, value')
          }
        }
      }
    },
    security: {
      label: 'Security',
      icon: 'fas fa-lock',
      fields: {
        passCodeLock: {
          type: 'field-checkbox',
          label: 'PassCode lock',
          description: 'Secure Qudget with a PasCode',
          value: false,
          change(value) {
            console.log('"PassCode lock" set to: ', value);
          }
        },
        eamilAddressForPassCode: {
          type: 'field-input',
          label: 'Email address (for passCode reminder)',
          description: 'Enter an email address in case you forgot your passCode',
          placeholder: 'Enter email address',
          iconLeft: 'mail',
          value: null,
          change(value) {
            console.log('Email address (for passCode reminder)')
          }
        }
      }
    },
    help: {
      label: 'Help',
      icon: 'fa-thin fa-handshake-angle',
      fields: {
        tutorial: {
          type: 'field-item',
          label: 'Tutorial',
          click() {
            console.log('"Tutuorial" was clicked');
          }
        },
        askAQuestion: {
          type: 'field-item',
          label: 'Ask a Question',
          click() {
            store.help.state.showPaneAskAQuestion = true;
          }
        }
      }
    },
    socials: {
      label: 'Socials',
      icon: 'fa-light fa-users',
      fields: {
        tellAllFriends: {
          type: 'field-item',
          label: 'Tell a friend about Qudget'
        },
        writeComment: {
          type: 'field-item',
          label: 'Write a comment'
        },
        twitter: {
          type: 'field-item',
          label: '@Qudgetapp',
          iconLeft: 'fab fa-twitter',
          iconLeftColor: '$blue'
        },
        joinNewsLetter: {
          type: 'field-component',
          component: 'Settings/JoinNewsLetter.vue'
        }
      }
    }
  },
  sectionActive: null
});

const actions = {
  initSettings() {
    this.resetSectionActive();
    this.handleWindowResize();
  },
  resetSectionActive() {
    if (Screen.gt.sm && !state.sectionActive) {
      state.sectionActive = Object.keys(state.sections)[0];
    }
  },
  handleWindowResize() {

  }
}
