import {
  defineNamespace,
  defineProjections,
  Model as СписокккMixin
} from '../mixins/regenerated/models/i-i-s-chernovik-1-списоккк';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(СписокккMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
