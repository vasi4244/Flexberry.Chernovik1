import { Serializer as СписокSerializer } from
  '../mixins/regenerated/serializers/i-i-s-chernovik-1-список';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(СписокSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
