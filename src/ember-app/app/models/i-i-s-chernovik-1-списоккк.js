import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as СписокккMixin
} from '../mixins/regenerated/models/i-i-s-chernovik-1-списоккк';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(СписокккMixin, Validations, {
});

defineProjections(Model);

export default Model;
