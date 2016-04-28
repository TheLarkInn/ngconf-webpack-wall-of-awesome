webpackJsonp([1],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var browser_1 = __webpack_require__(127);
	var browser_2 = __webpack_require__(310);
	var app_1 = __webpack_require__(309);
	browser_1.bootstrap(app_1.App, browser_2.PROVIDERS.concat(browser_2.ENV_PROVIDERS, browser_2.DIRECTIVES, browser_2.PIPES, app_1.APP_PROVIDERS)).catch(console.error);


/***/ },

/***/ 125:
/***/ function(module, exports) {

	"use strict";
	var AppState = (function () {
	    function AppState() {
	        this._state = {};
	    }
	    Object.defineProperty(AppState.prototype, "state", {
	        // already return a clone of the current state
	        get: function () {
	            return this._state = this._clone(this._state);
	        },
	        // never allow mutation
	        set: function (value) {
	            throw new Error('do not mutate the `.state` directly');
	        },
	        enumerable: true,
	        configurable: true
	    });
	    AppState.prototype.get = function (prop) {
	        // use our state getter for the clone
	        var state = this.state;
	        return state[prop] || state;
	    };
	    AppState.prototype.set = function (prop, value) {
	        return this._state[prop] = value;
	    };
	    AppState.prototype._clone = function (object) {
	        return JSON.parse(JSON.stringify(object));
	    };
	    return AppState;
	}());
	exports.AppState = AppState;


/***/ },

/***/ 308:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var core_1 = __webpack_require__(5);
	var app_state_service_ts_1 = __webpack_require__(125);
	var App = (function () {
	    function App(appState) {
	        this.appState = appState;
	        this.onLoadWelcomeMessage = "Hello ngConf! I'm logging on ngOnInit()";
	        this.name = 'Angular2 Webpack Lite';
	    }
	    App.prototype.ngOnInit = function () {
	        console.log(this.onLoadWelcomeMessage, "App state is " + this.appState.state);
	    };
	    App = __decorate([
	        core_1.Component({
	            selector: 'app',
	            pipes: [],
	            providers: [],
	            directives: [],
	            styles: [],
	            template: "<div>Hello World</div>"
	        }), 
	        __metadata('design:paramtypes', [app_state_service_ts_1.AppState])
	    ], App);
	    return App;
	}());
	exports.App = App;


/***/ },

/***/ 309:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(308));
	__export(__webpack_require__(125));
	var app_state_service_ts_2 = __webpack_require__(125);
	/*
	 This is where you would add your custom application providers.
	*/
	exports.APP_PROVIDERS = [
	    app_state_service_ts_2.AppState
	];


/***/ },

/***/ 310:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var core_1 = __webpack_require__(5);
	var router_1 = __webpack_require__(199);
	var common_1 = __webpack_require__(126);
	var http_1 = __webpack_require__(198);
	var browser_1 = __webpack_require__(127);
	var common_2 = __webpack_require__(76);
	/*
	  Add custom env providers here.
	*/
	exports.ENVIRONMENT_PROVIDERS = browser_1.ELEMENT_PROBE_PROVIDERS.slice();
	/*
	  Add custom _angular2_ providers here.
	*/
	exports.NG_APPLICATION_PROVIDERS = common_1.FORM_PROVIDERS.concat(http_1.HTTP_PROVIDERS, http_1.JSONP_PROVIDERS, router_1.ROUTER_PROVIDERS, [
	    core_1.provide(common_2.LocationStrategy, { useClass: common_2.HashLocationStrategy })
	]);
	/*
	  Add your custom pipes here.
	*/
	exports.APPLICATION_PIPES = [];
	/*
	  Add your custom directives here to be use anywhere.
	*/
	exports.APPLICATION_DIRECTIVES = router_1.ROUTER_DIRECTIVES.slice();
	/*
	  These are the 3 exported constants we will add to our bootstrap in our main file.
	*/
	exports.ENV_PROVIDERS = exports.ENVIRONMENT_PROVIDERS.slice();
	exports.PROVIDERS = exports.NG_APPLICATION_PROVIDERS.slice();
	exports.PIPES = [
	    core_1.provide(core_1.PLATFORM_PIPES, { multi: true, useValue: exports.APPLICATION_PIPES })
	];
	exports.DIRECTIVES = [
	    core_1.provide(core_1.PLATFORM_DIRECTIVES, { multi: true, useValue: exports.APPLICATION_DIRECTIVES })
	];


/***/ }

});