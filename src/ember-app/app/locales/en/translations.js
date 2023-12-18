import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISChernovik_1ДолжностьLForm from './forms/i-i-s-chernovik-1-должность-l';
import IISChernovik_1СотрудникиLForm from './forms/i-i-s-chernovik-1-сотрудники-l';
import IISChernovik_1СписокLForm from './forms/i-i-s-chernovik-1-список-l';
import IISChernovik_1ДолжностьEForm from './forms/i-i-s-chernovik-1-должность-e';
import IISChernovik_1СотрудникиEForm from './forms/i-i-s-chernovik-1-сотрудники-e';
import IISChernovik_1СписокEForm from './forms/i-i-s-chernovik-1-список-e';
import IISChernovik_1ДолжностьModel from './models/i-i-s-chernovik-1-должность';
import IISChernovik_1СотрудникиModel from './models/i-i-s-chernovik-1-сотрудники';
import IISChernovik_1СписокModel from './models/i-i-s-chernovik-1-список';
import IISChernovik_1СписокккModel from './models/i-i-s-chernovik-1-списоккк';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-chernovik-1-должность': IISChernovik_1ДолжностьModel,
    'i-i-s-chernovik-1-сотрудники': IISChernovik_1СотрудникиModel,
    'i-i-s-chernovik-1-список': IISChernovik_1СписокModel,
    'i-i-s-chernovik-1-списоккк': IISChernovik_1СписокккModel
  },

  'application-name': 'Chernovik_1',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Chernovik_1',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Chernovik_1',
          title: 'Chernovik_1'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        'chernovik-1': {
          caption: 'Chernovik_1',
          title: 'Chernovik_1',
          'i-i-s-chernovik-1-список-l': {
            caption: 'Список',
            title: ''
          },
          'i-i-s-chernovik-1-должность-l': {
            caption: 'Должность',
            title: ''
          },
          'i-i-s-chernovik-1-сотрудники-l': {
            caption: 'Сотрудники',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-chernovik-1-должность-l': IISChernovik_1ДолжностьLForm,
    'i-i-s-chernovik-1-сотрудники-l': IISChernovik_1СотрудникиLForm,
    'i-i-s-chernovik-1-список-l': IISChernovik_1СписокLForm,
    'i-i-s-chernovik-1-должность-e': IISChernovik_1ДолжностьEForm,
    'i-i-s-chernovik-1-сотрудники-e': IISChernovik_1СотрудникиEForm,
    'i-i-s-chernovik-1-список-e': IISChernovik_1СписокEForm
  },

});

export default translations;
