import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-chernovik-1-должность-l');
  this.route('i-i-s-chernovik-1-должность-e',
  { path: 'i-i-s-chernovik-1-должность-e/:id' });
  this.route('i-i-s-chernovik-1-должность-e.new',
  { path: 'i-i-s-chernovik-1-должность-e/new' });
  this.route('i-i-s-chernovik-1-сотрудники-l');
  this.route('i-i-s-chernovik-1-сотрудники-e',
  { path: 'i-i-s-chernovik-1-сотрудники-e/:id' });
  this.route('i-i-s-chernovik-1-сотрудники-e.new',
  { path: 'i-i-s-chernovik-1-сотрудники-e/new' });
  this.route('i-i-s-chernovik-1-список-l');
  this.route('i-i-s-chernovik-1-список-e',
  { path: 'i-i-s-chernovik-1-список-e/:id' });
  this.route('i-i-s-chernovik-1-список-e.new',
  { path: 'i-i-s-chernovik-1-список-e/new' });
});

export default Router;
