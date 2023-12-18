import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.chernovik-1.caption'),
          title: i18n.t('forms.application.sitemap.chernovik-1.title'),
          children: [{
            link: 'i-i-s-chernovik-1-список-l',
            caption: i18n.t('forms.application.sitemap.chernovik-1.i-i-s-chernovik-1-список-l.caption'),
            title: i18n.t('forms.application.sitemap.chernovik-1.i-i-s-chernovik-1-список-l.title'),
            icon: 'address card',
            children: null
          }, {
            link: 'i-i-s-chernovik-1-должность-l',
            caption: i18n.t('forms.application.sitemap.chernovik-1.i-i-s-chernovik-1-должность-l.caption'),
            title: i18n.t('forms.application.sitemap.chernovik-1.i-i-s-chernovik-1-должность-l.title'),
            icon: 'folder open',
            children: null
          }, {
            link: 'i-i-s-chernovik-1-сотрудники-l',
            caption: i18n.t('forms.application.sitemap.chernovik-1.i-i-s-chernovik-1-сотрудники-l.caption'),
            title: i18n.t('forms.application.sitemap.chernovik-1.i-i-s-chernovik-1-сотрудники-l.title'),
            icon: 'suitcase',
            children: null
          }]
        }
      ]
    };
  }),
})