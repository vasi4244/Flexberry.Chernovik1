import EditFormController from 'ember-flexberry/controllers/edit-form';

export default EditFormController.extend({
  parentRoute: 'i-i-s-chernovik-1-список-l',

  getCellComponent(attr, bindingPath, model) {
    let cellComponent = this._super(...arguments);
    if (attr.kind === 'belongsTo') {
      switch (`${model.modelName}+${bindingPath}`) {
        case 'i-i-s-chernovik-1-списоккк+сотрудники':
          cellComponent.componentProperties = {
            choose: 'showLookupDialog',
            remove: 'removeLookupValue',
            displayAttributeName: 'имя',
            required: true,
            relationName: 'сотрудники',
            projection: 'СотрудникиL',
            autocomplete: true,
          };
          break;

      }
    }

    return cellComponent;
  },
});
