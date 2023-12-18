import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  дата: DS.attr('date', { defaultValue() { return new Date(); } }),
  списоккк: DS.hasMany('i-i-s-chernovik-1-списоккк', { inverse: 'список', async: false })
});

export let ValidationRules = {
  дата: {
    descriptionKey: 'models.i-i-s-chernovik-1-список.validations.дата.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  списоккк: {
    descriptionKey: 'models.i-i-s-chernovik-1-список.validations.списоккк.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('СписокE', 'i-i-s-chernovik-1-список', {
    дата: attr('Дата', { index: 0 }),
    списоккк: hasMany('i-i-s-chernovik-1-списоккк', 'Списоккк', {
      сотрудники: belongsTo('i-i-s-chernovik-1-сотрудники', 'Сотрудники', {
        имя: attr('Имя', { index: 1, hidden: true })
      }, { index: 0, displayMemberPath: 'имя' })
    })
  });

  modelClass.defineProjection('СписокL', 'i-i-s-chernovik-1-список', {
    дата: attr('Дата', { index: 0 })
  });
};
