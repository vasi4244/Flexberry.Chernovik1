import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  наим: DS.attr('string')
});

export let ValidationRules = {
  наим: {
    descriptionKey: 'models.i-i-s-chernovik-1-должность.validations.наим.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ДолжностьE', 'i-i-s-chernovik-1-должность', {
    наим: attr('Наим', { index: 0 })
  });

  modelClass.defineProjection('ДолжностьL', 'i-i-s-chernovik-1-должность', {
    наим: attr('Наим', { index: 0 })
  });
};
