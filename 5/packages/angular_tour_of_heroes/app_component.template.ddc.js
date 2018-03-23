define(['dart_sdk', 'packages/angular_tour_of_heroes/app_component.css.shim', 'packages/angular/src/core/linker/view_type', 'packages/angular/src/core/change_detection/constants', 'packages/angular/src/core/metadata/view', 'packages/angular/src/core/linker/app_view_utils', 'packages/angular/src/core/linker/app_view', 'packages/angular/src/common/directives/ng_for', 'packages/angular/src/common/directives/ng_if', 'packages/angular_tour_of_heroes/app_component', 'packages/angular_tour_of_heroes/src/hero', 'packages/angular_forms/src/directives/default_value_accessor', 'packages/angular_forms/src/directives/control_value_accessor', 'packages/angular_forms/src/directives/ng_model', 'packages/angular/src/core/di/opaque_token', 'packages/angular_forms/src/directives/control_container', 'packages/angular/src/di/reflector', 'packages/angular/angular.template', 'packages/angular_forms/angular_forms.template', 'packages/angular_tour_of_heroes/src/hero.template', 'packages/angular_tour_of_heroes/src/mock_heroes.template'], function(dart_sdk, app_component$46css, view_type, constants, view, app_view_utils, app_view, ng_for, ng_if, app_component, hero, default_value_accessor, control_value_accessor, ng_model, opaque_token, control_container, reflector, angular, angular_forms, hero$, mock_heroes) {
  'use strict';
  const core = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const html = dart_sdk.html;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const app_component$46css$46shim = app_component$46css.app_component$46css$46shim;
  const src__core__linker__view_type = view_type.src__core__linker__view_type;
  const src__core__change_detection__constants = constants.src__core__change_detection__constants;
  const src__core__metadata__view = view.src__core__metadata__view;
  const src__core__linker__app_view_utils = app_view_utils.src__core__linker__app_view_utils;
  const src__core__linker__app_view = app_view.src__core__linker__app_view;
  const src__core__linker__view_container = app_view.src__core__linker__view_container;
  const src__core__linker__template_ref = app_view.src__core__linker__template_ref;
  const src__core__linker__component_factory = app_view.src__core__linker__component_factory;
  const src__common__directives__ng_for = ng_for.src__common__directives__ng_for;
  const src__common__directives__ng_if = ng_if.src__common__directives__ng_if;
  const app_component$ = app_component.app_component;
  const src__hero = hero.src__hero;
  const src__directives__default_value_accessor = default_value_accessor.src__directives__default_value_accessor;
  const src__directives__control_value_accessor = control_value_accessor.src__directives__control_value_accessor;
  const src__directives__ng_model = ng_model.src__directives__ng_model;
  const src__core__di__opaque_token = opaque_token.src__core__di__opaque_token;
  const src__directives__ng_control = control_container.src__directives__ng_control;
  const src__di__reflector = reflector.src__di__reflector;
  const angular$46template = angular.angular$46template;
  const angular_forms$46template = angular_forms.angular_forms$46template;
  const src__hero$46template = hero$.src__hero$46template;
  const src__mock_heroes$46template = mock_heroes.src__mock_heroes$46template;
  const _root = Object.create(null);
  const app_component$46template = Object.create(_root);
  const $createElement = dartx.createElement;
  const $append = dartx.append;
  const $clone = dartx.clone;
  const $addEventListener = dartx.addEventListener;
  const $_get = dartx._get;
  const $text = dartx.text;
  let IdentityMapOfString$dynamic = () => (IdentityMapOfString$dynamic = dart.constFn(_js_helper.IdentityMap$(core.String, dart.dynamic)))();
  let AppViewOfAppComponent = () => (AppViewOfAppComponent = dart.constFn(src__core__linker__app_view.AppView$(app_component$.AppComponent)))();
  let AppViewAndintToAppViewOfAppComponent = () => (AppViewAndintToAppViewOfAppComponent = dart.constFn(dart.fnType(AppViewOfAppComponent(), [src__core__linker__app_view.AppView, core.int])))();
  let JSArrayOfControlValueAccessor = () => (JSArrayOfControlValueAccessor = dart.constFn(_interceptors.JSArray$(src__directives__control_value_accessor.ControlValueAccessor)))();
  let MultiTokenOfControlValueAccessor = () => (MultiTokenOfControlValueAccessor = dart.constFn(src__core__di__opaque_token.MultiToken$(src__directives__control_value_accessor.ControlValueAccessor)))();
  let ListOfControlValueAccessor = () => (ListOfControlValueAccessor = dart.constFn(core.List$(src__directives__control_value_accessor.ControlValueAccessor)))();
  let ComponentRefOfAppComponent = () => (ComponentRefOfAppComponent = dart.constFn(src__core__linker__component_factory.ComponentRef$(app_component$.AppComponent)))();
  let AppViewAndintToAppView = () => (AppViewAndintToAppView = dart.constFn(dart.fnType(src__core__linker__app_view.AppView, [src__core__linker__app_view.AppView, core.int])))();
  let ComponentFactoryOfAppComponent = () => (ComponentFactoryOfAppComponent = dart.constFn(src__core__linker__component_factory.ComponentFactory$(app_component$.AppComponent)))();
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  dart.defineLazy(app_component$46template, {
    /*app_component$46template.styles$AppComponent*/get styles$AppComponent() {
      return dart.constList([app_component$46css$46shim.styles], dart.dynamic);
    }
  });
  const _el_0 = Symbol('_el_0');
  const _text_1 = Symbol('_text_1');
  const _el_2 = Symbol('_el_2');
  const _el_4 = Symbol('_el_4');
  const _appEl_5 = Symbol('_appEl_5');
  const _NgFor_5_9 = Symbol('_NgFor_5_9');
  const _appEl_6 = Symbol('_appEl_6');
  const _NgIf_6_9 = Symbol('_NgIf_6_9');
  const _expr_0 = Symbol('_expr_0');
  let const$;
  app_component$46template.ViewAppComponent0 = class ViewAppComponent0 extends src__core__linker__app_view.AppView$(app_component$.AppComponent) {
    build() {
      let _rootEl = this.rootEl;
      let parentRenderNode = this.initViewRoot(_rootEl);
      let doc = html.document;
      this[_el_0] = src__core__linker__app_view.createAndAppend(doc, 'h1', parentRenderNode);
      this.addShimE(this[_el_0]);
      this[_text_1] = html.Text.new(this.ctx.title != null ? this.ctx.title : '');
      this[_el_0][$append](this[_text_1]);
      this[_el_2] = src__core__linker__app_view.createAndAppend(doc, 'h2', parentRenderNode);
      this.addShimE(this[_el_2]);
      let _text_3 = html.Text.new('My Heroes');
      this[_el_2][$append](_text_3);
      this[_el_4] = html.UListElement._check(src__core__linker__app_view.createAndAppend(doc, 'ul', parentRenderNode));
      this[_el_4].className = 'heroes';
      this.addShimC(this[_el_4]);
      let _anchor_5 = src__core__linker__app_view.ngAnchor[$clone](false);
      this[_el_4][$append](_anchor_5);
      this[_appEl_5] = new src__core__linker__view_container.ViewContainer.new(5, 4, this, _anchor_5);
      let _TemplateRef_5_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_5], app_component$46template.viewFactory_AppComponent1);
      this[_NgFor_5_9] = new src__common__directives__ng_for.NgFor.new(this[_appEl_5], _TemplateRef_5_8);
      let _anchor_6 = src__core__linker__app_view.ngAnchor[$clone](false);
      parentRenderNode[$append](_anchor_6);
      this[_appEl_6] = new src__core__linker__view_container.ViewContainer.new(6, null, this, _anchor_6);
      let _TemplateRef_6_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_6], app_component$46template.viewFactory_AppComponent2);
      this[_NgIf_6_9] = new src__common__directives__ng_if.NgIf.new(this[_appEl_6], _TemplateRef_6_8);
      this.init(const$ || (const$ = dart.constList([], dart.dynamic)), null);
      return null;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let currVal_0 = _ctx.heroes;
      if (!core.identical(this[_expr_0], currVal_0)) {
        this[_NgFor_5_9].ngForOf = currVal_0;
        this[_expr_0] = currVal_0;
      }
      this[_NgFor_5_9].ngDoCheck();
      this[_NgIf_6_9].ngIf = _ctx.selectedHero != null;
      this[_appEl_5].detectChangesInNestedViews();
      this[_appEl_6].detectChangesInNestedViews();
    }
    destroyInternal() {
      let t = this[_appEl_5];
      t == null ? null : t.destroyNestedViews();
      let t$ = this[_appEl_6];
      t$ == null ? null : t$.destroyNestedViews();
    }
  };
  (app_component$46template.ViewAppComponent0.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    this[_text_1] = null;
    this[_el_2] = null;
    this[_el_4] = null;
    this[_appEl_5] = null;
    this[_NgFor_5_9] = null;
    this[_appEl_6] = null;
    this[_NgIf_6_9] = null;
    this[_expr_0] = null;
    app_component$46template.ViewAppComponent0.__proto__.new.call(this, src__core__linker__view_type.ViewType.COMPONENT, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.rootEl = html.HtmlElement._check(html.document[$createElement]('my-app'));
    let t = app_component$46template.ViewAppComponent0._renderType;
    t == null ? app_component$46template.ViewAppComponent0._renderType = src__core__linker__app_view_utils.appViewUtils.createRenderType('', src__core__metadata__view.ViewEncapsulation.Emulated, app_component$46template.styles$AppComponent) : t;
    this.setupComponentType(app_component$46template.ViewAppComponent0._renderType);
  }).prototype = app_component$46template.ViewAppComponent0.prototype;
  dart.addTypeTests(app_component$46template.ViewAppComponent0);
  dart.setMethodSignature(app_component$46template.ViewAppComponent0, () => ({
    __proto__: dart.getMethods(app_component$46template.ViewAppComponent0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(app_component$.AppComponent), []),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(app_component$46template.ViewAppComponent0, () => ({
    __proto__: dart.getFields(app_component$46template.ViewAppComponent0.__proto__),
    [_el_0]: dart.fieldType(html.Element),
    [_text_1]: dart.fieldType(html.Text),
    [_el_2]: dart.fieldType(html.Element),
    [_el_4]: dart.fieldType(html.UListElement),
    [_appEl_5]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgFor_5_9]: dart.fieldType(src__common__directives__ng_for.NgFor),
    [_appEl_6]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgIf_6_9]: dart.fieldType(src__common__directives__ng_if.NgIf),
    [_expr_0]: dart.fieldType(dart.dynamic)
  }));
  dart.defineLazy(app_component$46template.ViewAppComponent0, {
    /*app_component$46template.ViewAppComponent0._renderType*/get _renderType() {
      return null;
    },
    set _renderType(_) {}
  });
  app_component$46template.viewFactory_AppComponent0 = function(parentView, parentIndex) {
    return new app_component$46template.ViewAppComponent0.new(parentView, parentIndex);
  };
  dart.fn(app_component$46template.viewFactory_AppComponent0, AppViewAndintToAppViewOfAppComponent());
  const _el_1 = Symbol('_el_1');
  const _text_2 = Symbol('_text_2');
  const _text_4 = Symbol('_text_4');
  const _expr_1 = Symbol('_expr_1');
  const _expr_2 = Symbol('_expr_2');
  const _handle_click_0_0 = Symbol('_handle_click_0_0');
  app_component$46template._ViewAppComponent1 = class _ViewAppComponent1 extends src__core__linker__app_view.AppView$(app_component$.AppComponent) {
    build() {
      let doc = html.document;
      this[_el_0] = doc[$createElement]('li');
      this.addShimE(this[_el_0]);
      this[_el_1] = src__core__linker__app_view.createSpanAndAppend(doc, this[_el_0]);
      this[_el_1].className = 'badge';
      this.addShimE(this[_el_1]);
      this[_text_2] = html.Text.new('');
      this[_el_1][$append](this[_text_2]);
      let _text_3 = html.Text.new(' ');
      this[_el_0][$append](_text_3);
      this[_text_4] = html.Text.new('');
      this[_el_0][$append](this[_text_4]);
      this[_el_0][$addEventListener]('click', this.eventHandler1(html.Event, html.Event, dart.bind(this, _handle_click_0_0)));
      this.init0(this[_el_0]);
      return null;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let local_hero = src__hero.Hero._check(this.locals[$_get]('$implicit'));
      let currVal_0 = local_hero == _ctx.selectedHero;
      if (!(this[_expr_0] === currVal_0)) {
        this.updateClass(html.HtmlElement._check(this[_el_0]), 'selected', currVal_0);
        this[_expr_0] = currVal_0;
      }
      let currVal_1 = src__core__linker__app_view_utils.interpolate0(local_hero.id);
      if (!core.identical(this[_expr_1], currVal_1)) {
        this[_text_2][$text] = core.String._check(currVal_1);
        this[_expr_1] = currVal_1;
      }
      let currVal_2 = src__core__linker__app_view_utils.interpolate0(local_hero.name);
      if (!core.identical(this[_expr_2], currVal_2)) {
        this[_text_4][$text] = core.String._check(currVal_2);
        this[_expr_2] = currVal_2;
      }
    }
    [_handle_click_0_0]($event) {
      let local_hero = src__hero.Hero._check(this.locals[$_get]('$implicit'));
      this.ctx.onSelect(local_hero);
    }
  };
  (app_component$46template._ViewAppComponent1.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    this[_el_1] = null;
    this[_text_2] = null;
    this[_text_4] = null;
    this[_expr_0] = null;
    this[_expr_1] = null;
    this[_expr_2] = null;
    app_component$46template._ViewAppComponent1.__proto__.new.call(this, src__core__linker__view_type.ViewType.EMBEDDED, new (IdentityMapOfString$dynamic()).from(['$implicit', null]), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = app_component$46template.ViewAppComponent0._renderType;
  }).prototype = app_component$46template._ViewAppComponent1.prototype;
  dart.addTypeTests(app_component$46template._ViewAppComponent1);
  dart.setMethodSignature(app_component$46template._ViewAppComponent1, () => ({
    __proto__: dart.getMethods(app_component$46template._ViewAppComponent1.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(app_component$.AppComponent), []),
    detectChangesInternal: dart.fnType(dart.void, []),
    [_handle_click_0_0]: dart.fnType(dart.void, [dart.dynamic])
  }));
  dart.setFieldSignature(app_component$46template._ViewAppComponent1, () => ({
    __proto__: dart.getFields(app_component$46template._ViewAppComponent1.__proto__),
    [_el_0]: dart.fieldType(html.Element),
    [_el_1]: dart.fieldType(html.Element),
    [_text_2]: dart.fieldType(html.Text),
    [_text_4]: dart.fieldType(html.Text),
    [_expr_0]: dart.fieldType(core.bool),
    [_expr_1]: dart.fieldType(dart.dynamic),
    [_expr_2]: dart.fieldType(dart.dynamic)
  }));
  app_component$46template.viewFactory_AppComponent1 = function(parentView, parentIndex) {
    return new app_component$46template._ViewAppComponent1.new(parentView, parentIndex);
  };
  dart.fn(app_component$46template.viewFactory_AppComponent1, AppViewAndintToAppViewOfAppComponent());
  const _el_5 = Symbol('_el_5');
  const _text_7 = Symbol('_text_7');
  const _el_8 = Symbol('_el_8');
  const _el_9 = Symbol('_el_9');
  const _el_11 = Symbol('_el_11');
  const _DefaultValueAccessor_11_5 = Symbol('_DefaultValueAccessor_11_5');
  const _NgValueAccessor_11_6 = Symbol('_NgValueAccessor_11_6');
  const _NgModel_11_7 = Symbol('_NgModel_11_7');
  const _handle_input_11_1 = Symbol('_handle_input_11_1');
  const _handle_ngModelChange_11_0 = Symbol('_handle_ngModelChange_11_0');
  let const$0;
  app_component$46template._ViewAppComponent2 = class _ViewAppComponent2 extends src__core__linker__app_view.AppView$(app_component$.AppComponent) {
    build() {
      let doc = html.document;
      this[_el_0] = html.DivElement._check(doc[$createElement]('div'));
      this.addShimC(this[_el_0]);
      this[_el_1] = src__core__linker__app_view.createAndAppend(doc, 'h2', this[_el_0]);
      this.addShimE(this[_el_1]);
      this[_text_2] = html.Text.new('');
      this[_el_1][$append](this[_text_2]);
      let _text_3 = html.Text.new(' details!');
      this[_el_1][$append](_text_3);
      this[_el_4] = src__core__linker__app_view.createDivAndAppend(doc, this[_el_0]);
      this.addShimC(this[_el_4]);
      this[_el_5] = src__core__linker__app_view.createAndAppend(doc, 'label', this[_el_4]);
      this.addShimE(this[_el_5]);
      let _text_6 = html.Text.new('id:');
      this[_el_5][$append](_text_6);
      this[_text_7] = html.Text.new('');
      this[_el_4][$append](this[_text_7]);
      this[_el_8] = src__core__linker__app_view.createDivAndAppend(doc, this[_el_0]);
      this.addShimC(this[_el_8]);
      this[_el_9] = src__core__linker__app_view.createAndAppend(doc, 'label', this[_el_8]);
      this.addShimE(this[_el_9]);
      let _text_10 = html.Text.new('name:');
      this[_el_9][$append](_text_10);
      this[_el_11] = html.InputElement._check(src__core__linker__app_view.createAndAppend(doc, 'input', this[_el_8]));
      this.createAttr(this[_el_11], 'placeholder', 'name');
      this.addShimC(this[_el_11]);
      this[_DefaultValueAccessor_11_5] = new src__directives__default_value_accessor.DefaultValueAccessor.new(this[_el_11]);
      this[_NgValueAccessor_11_6] = JSArrayOfControlValueAccessor().of([this[_DefaultValueAccessor_11_5]]);
      this[_NgModel_11_7] = new src__directives__ng_model.NgModel.new(null, this[_NgValueAccessor_11_6]);
      this[_el_11][$addEventListener]('input', this.eventHandler1(html.Event, html.Event, dart.bind(this, _handle_input_11_1)));
      this[_el_11][$addEventListener]('blur', this.eventHandler0(html.Event, dart.bind(this[_DefaultValueAccessor_11_5], 'touchHandler')));
      let subscription_0 = this[_NgModel_11_7].update.listen(this.eventHandler1(dart.dynamic, dart.dynamic, dart.bind(this, _handle_ngModelChange_11_0)));
      this.init([this[_el_0]], [subscription_0]);
      return null;
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (token === dart.wrapType(src__directives__default_value_accessor.DefaultValueAccessor) && 11 === nodeIndex) {
        return this[_DefaultValueAccessor_11_5];
      }
      if (token === (const$0 || (const$0 = dart.const(new (MultiTokenOfControlValueAccessor()).new('NgValueAccessor')))) && 11 === nodeIndex) {
        return this[_NgValueAccessor_11_6];
      }
      if ((token === dart.wrapType(src__directives__ng_model.NgModel) || token === dart.wrapType(src__directives__ng_control.NgControl)) && 11 === nodeIndex) {
        return this[_NgModel_11_7];
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let changed = false;
      let firstCheck = this.cdState === 0;
      changed = false;
      this[_NgModel_11_7].model = _ctx.selectedHero.name;
      this[_NgModel_11_7].ngAfterChanges();
      if (firstCheck) {
        this[_NgModel_11_7].ngOnInit();
      }
      let currVal_0 = src__core__linker__app_view_utils.interpolate0(_ctx.selectedHero.name);
      if (!core.identical(this[_expr_0], currVal_0)) {
        this[_text_2][$text] = core.String._check(currVal_0);
        this[_expr_0] = currVal_0;
      }
      let currVal_1 = src__core__linker__app_view_utils.interpolate0(_ctx.selectedHero.id);
      if (!core.identical(this[_expr_1], currVal_1)) {
        this[_text_7][$text] = core.String._check(currVal_1);
        this[_expr_1] = currVal_1;
      }
    }
    [_handle_ngModelChange_11_0]($event) {
      this.ctx.selectedHero.name = core.String._check($event);
    }
    [_handle_input_11_1]($event) {
      dart.dsend(this[_DefaultValueAccessor_11_5], 'onChange', dart.dload(dart.dload($event, 'target'), 'value'));
    }
  };
  (app_component$46template._ViewAppComponent2.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    this[_el_1] = null;
    this[_text_2] = null;
    this[_el_4] = null;
    this[_el_5] = null;
    this[_text_7] = null;
    this[_el_8] = null;
    this[_el_9] = null;
    this[_el_11] = null;
    this[_DefaultValueAccessor_11_5] = null;
    this[_NgValueAccessor_11_6] = null;
    this[_NgModel_11_7] = null;
    this[_expr_0] = null;
    this[_expr_1] = null;
    app_component$46template._ViewAppComponent2.__proto__.new.call(this, src__core__linker__view_type.ViewType.EMBEDDED, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = app_component$46template.ViewAppComponent0._renderType;
  }).prototype = app_component$46template._ViewAppComponent2.prototype;
  dart.addTypeTests(app_component$46template._ViewAppComponent2);
  dart.setMethodSignature(app_component$46template._ViewAppComponent2, () => ({
    __proto__: dart.getMethods(app_component$46template._ViewAppComponent2.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(app_component$.AppComponent), []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic]),
    detectChangesInternal: dart.fnType(dart.void, []),
    [_handle_ngModelChange_11_0]: dart.fnType(dart.void, [dart.dynamic]),
    [_handle_input_11_1]: dart.fnType(dart.void, [dart.dynamic])
  }));
  dart.setFieldSignature(app_component$46template._ViewAppComponent2, () => ({
    __proto__: dart.getFields(app_component$46template._ViewAppComponent2.__proto__),
    [_el_0]: dart.fieldType(html.DivElement),
    [_el_1]: dart.fieldType(html.Element),
    [_text_2]: dart.fieldType(html.Text),
    [_el_4]: dart.fieldType(html.DivElement),
    [_el_5]: dart.fieldType(html.Element),
    [_text_7]: dart.fieldType(html.Text),
    [_el_8]: dart.fieldType(html.DivElement),
    [_el_9]: dart.fieldType(html.Element),
    [_el_11]: dart.fieldType(html.InputElement),
    [_DefaultValueAccessor_11_5]: dart.fieldType(src__directives__default_value_accessor.DefaultValueAccessor),
    [_NgValueAccessor_11_6]: dart.fieldType(ListOfControlValueAccessor()),
    [_NgModel_11_7]: dart.fieldType(src__directives__ng_model.NgModel),
    [_expr_0]: dart.fieldType(dart.dynamic),
    [_expr_1]: dart.fieldType(dart.dynamic)
  }));
  app_component$46template.viewFactory_AppComponent2 = function(parentView, parentIndex) {
    return new app_component$46template._ViewAppComponent2.new(parentView, parentIndex);
  };
  dart.fn(app_component$46template.viewFactory_AppComponent2, AppViewAndintToAppViewOfAppComponent());
  dart.defineLazy(app_component$46template, {
    /*app_component$46template.styles$AppComponentHost*/get styles$AppComponentHost() {
      return dart.constList([], dart.dynamic);
    }
  });
  const _compView_0 = Symbol('_compView_0');
  const _AppComponent_0_5 = Symbol('_AppComponent_0_5');
  app_component$46template._ViewAppComponentHost0 = class _ViewAppComponentHost0 extends src__core__linker__app_view.AppView {
    build() {
      this[_compView_0] = new app_component$46template.ViewAppComponent0.new(this, 0);
      this.rootEl = this[_compView_0].rootEl;
      this[_AppComponent_0_5] = new app_component$.AppComponent.new();
      this[_compView_0].create(this[_AppComponent_0_5], this.projectableNodes);
      this.init0(this.rootEl);
      return new (ComponentRefOfAppComponent()).new(0, this, this.rootEl, this[_AppComponent_0_5]);
    }
    detectChangesInternal() {
      this[_compView_0].detectChanges();
    }
    destroyInternal() {
      let t = this[_compView_0];
      t == null ? null : t.destroy();
    }
  };
  (app_component$46template._ViewAppComponentHost0.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_AppComponent_0_5] = null;
    app_component$46template._ViewAppComponentHost0.__proto__.new.call(this, src__core__linker__view_type.ViewType.HOST, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
  }).prototype = app_component$46template._ViewAppComponentHost0.prototype;
  dart.addTypeTests(app_component$46template._ViewAppComponentHost0);
  dart.setMethodSignature(app_component$46template._ViewAppComponentHost0, () => ({
    __proto__: dart.getMethods(app_component$46template._ViewAppComponentHost0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef, []),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(app_component$46template._ViewAppComponentHost0, () => ({
    __proto__: dart.getFields(app_component$46template._ViewAppComponentHost0.__proto__),
    [_compView_0]: dart.fieldType(app_component$46template.ViewAppComponent0),
    [_AppComponent_0_5]: dart.fieldType(app_component$.AppComponent)
  }));
  app_component$46template.viewFactory_AppComponentHost0 = function(parentView, parentIndex) {
    return new app_component$46template._ViewAppComponentHost0.new(parentView, parentIndex);
  };
  dart.fn(app_component$46template.viewFactory_AppComponentHost0, AppViewAndintToAppView());
  dart.defineLazy(app_component$46template, {
    /*app_component$46template.AppComponentNgFactory*/get AppComponentNgFactory() {
      return dart.const(new (ComponentFactoryOfAppComponent()).new('my-app', app_component$46template.viewFactory_AppComponentHost0, app_component$46template._AppComponentMetadata));
    },
    /*app_component$46template._AppComponentMetadata*/get _AppComponentMetadata() {
      return dart.constList([], dart.dynamic);
    },
    /*app_component$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  app_component$46template.initReflector = function() {
    if (dart.test(app_component$46template._visited)) {
      return;
    }
    app_component$46template._visited = true;
    src__di__reflector.registerComponent(dart.wrapType(app_component$.AppComponent), app_component$46template.AppComponentNgFactory);
    angular$46template.initReflector();
    angular_forms$46template.initReflector();
    src__hero$46template.initReflector();
    src__mock_heroes$46template.initReflector();
  };
  dart.fn(app_component$46template.initReflector, VoidTovoid());
  dart.trackLibraries("packages/angular_tour_of_heroes/app_component.template.ddc", {
    "package:angular_tour_of_heroes/app_component.template.dart": app_component$46template
  }, '{"version":3,"sourceRoot":"","sources":["app_component.template.dart"],"names":[],"mappings":"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","file":"app_component.template.ddc.js"}');
  // Exports:
  return {
    app_component$46template: app_component$46template
  };
});

//# sourceMappingURL=app_component.template.ddc.js.map
