import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

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
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'Chernovik_1',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Chernovik_1',
          title: 'Chernovik_1'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
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
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
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
