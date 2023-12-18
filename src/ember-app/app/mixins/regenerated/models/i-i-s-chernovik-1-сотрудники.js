import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  имя: DS.attr('string'),
  должность: DS.belongsTo('i-i-s-chernovik-1-должность', { inverse: null, async: false })
});

export let ValidationRules = {
  имя: {
    descriptionKey: 'models.i-i-s-chernovik-1-сотрудники.validations.имя.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  должность: {
    descriptionKey: 'models.i-i-s-chernovik-1-сотрудники.validations.должность.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('СотрудникиE', 'i-i-s-chernovik-1-сотрудники', {
    имя: attr('Имя', { index: 0 }),
    должность: belongsTo('i-i-s-chernovik-1-должность', 'Должность', {
      наим: attr('Наим', { index: 2, hidden: true })
    }, { index: 1, displayMemberPath: 'наим' })
  });

  modelClass.defineProjection('СотрудникиL', 'i-i-s-chernovik-1-сотрудники', {
    имя: attr('Имя', { index: 0 }),
    должность: belongsTo('i-i-s-chernovik-1-должность', 'Наим', {
      наим: attr('Наим', { index: 1 })
    }, { index: -1, hidden: true })
  });
};
