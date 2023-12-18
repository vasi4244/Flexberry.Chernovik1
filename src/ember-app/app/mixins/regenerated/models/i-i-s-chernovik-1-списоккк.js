import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  сотрудники: DS.belongsTo('i-i-s-chernovik-1-сотрудники', { inverse: null, async: false }),
  список: DS.belongsTo('i-i-s-chernovik-1-список', { inverse: 'списоккк', async: false })
});

export let ValidationRules = {
  сотрудники: {
    descriptionKey: 'models.i-i-s-chernovik-1-списоккк.validations.сотрудники.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  список: {
    descriptionKey: 'models.i-i-s-chernovik-1-списоккк.validations.список.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('СписокккE', 'i-i-s-chernovik-1-списоккк', {
    сотрудники: belongsTo('i-i-s-chernovik-1-сотрудники', 'Сотрудники', {
      имя: attr('Имя', { index: 1, hidden: true })
    }, { index: 0, displayMemberPath: 'имя' })
  });
};
