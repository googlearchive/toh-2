define(['dart_sdk', 'packages/angular_tour_of_heroes/src/mock_heroes', 'packages/angular_tour_of_heroes/src/hero'], function(dart_sdk, mock_heroes, hero) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__mock_heroes = mock_heroes.src__mock_heroes;
  const src__hero = hero.src__hero;
  const _root = Object.create(null);
  const app_component = Object.create(_root);
  let ListOfHero = () => (ListOfHero = dart.constFn(core.List$(src__hero.Hero)))();
  app_component.AppComponent = class AppComponent extends core.Object {
    get title() {
      return this[title];
    }
    set title(value) {
      super.title = value;
    }
    get heroes() {
      return this[heroes];
    }
    set heroes(value) {
      this[heroes] = value;
    }
    get selectedHero() {
      return this[selectedHero];
    }
    set selectedHero(value) {
      this[selectedHero] = value;
    }
    onSelect(hero) {
      return this.selectedHero = hero;
    }
  };
  (app_component.AppComponent.new = function() {
    this[title] = 'Tour of Heroes';
    this[heroes] = src__mock_heroes.mockHeroes;
    this[selectedHero] = null;
  }).prototype = app_component.AppComponent.prototype;
  dart.addTypeTests(app_component.AppComponent);
  const title = Symbol("AppComponent.title");
  const heroes = Symbol("AppComponent.heroes");
  const selectedHero = Symbol("AppComponent.selectedHero");
  dart.setMethodSignature(app_component.AppComponent, () => ({
    __proto__: dart.getMethods(app_component.AppComponent.__proto__),
    onSelect: dart.fnType(dart.void, [src__hero.Hero])
  }));
  dart.setFieldSignature(app_component.AppComponent, () => ({
    __proto__: dart.getFields(app_component.AppComponent.__proto__),
    title: dart.finalFieldType(core.String),
    heroes: dart.fieldType(ListOfHero()),
    selectedHero: dart.fieldType(src__hero.Hero)
  }));
  dart.trackLibraries("packages/angular_tour_of_heroes/app_component.ddc", {
    "package:angular_tour_of_heroes/app_component.dart": app_component
  }, '{"version":3,"sourceRoot":"","sources":["app_component.dart"],"names":[],"mappings":";;;;;;;;;;;IAaQ;;;;;;IACK;;;;;;IACN;;;;;;aAES,IAAS;YAAK,kBAAY,GAAG,IAAI;;;;IAJzC,WAAK,GAAG;IACH,YAAM,GAAG,2BAAU;IACzB,kBAAY;EAGnB","file":"app_component.ddc.js"}');
  // Exports:
  return {
    app_component: app_component
  };
});

//# sourceMappingURL=app_component.ddc.js.map
