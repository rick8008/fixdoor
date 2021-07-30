(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "/IiM":
/*!***********************************************************************!*\
  !*** ./src/app/components/produtogaleria/produtogaleria.component.ts ***!
  \***********************************************************************/
/*! exports provided: ProdutogaleriaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProdutogaleriaComponent", function() { return ProdutogaleriaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class ProdutogaleriaComponent {
    constructor() { }
    ngOnInit() {
        console.log(this.imgs);
    }
}
ProdutogaleriaComponent.ɵfac = function ProdutogaleriaComponent_Factory(t) { return new (t || ProdutogaleriaComponent)(); };
ProdutogaleriaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProdutogaleriaComponent, selectors: [["app-produtogaleria"]], inputs: { imgs: "imgs" }, decls: 18, vars: 4, consts: [[1, "row", "w-100", "m-0", "p-0", "mb-4"], [1, "col", "m-0", "p-0"], [1, "row", "w-100", "m-0", "p-0"], [1, "col"], [3, "src"], [1, "row", "w-100", "m-0", "p-0", "mt-3"], [1, "col-1", "mt-4"]], template: function ProdutogaleriaComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "<");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.imgs[0].img, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.imgs[0].img, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.imgs[1].img, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.imgs[2].img, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    } }, styles: ["img[_ngcontent-%COMP%] {\n  max-width: 100%;\n  width: 100%;\n  background: #c1c1c1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxwcm9kdXRvZ2FsZXJpYS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7QUFDSiIsImZpbGUiOiJwcm9kdXRvZ2FsZXJpYS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImltZ3tcclxuICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZDogI2MxYzFjMTtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProdutogaleriaComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-produtogaleria',
                templateUrl: './produtogaleria.component.html',
                styleUrls: ['./produtogaleria.component.scss']
            }]
    }], function () { return []; }, { imgs: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\ricar\Desktop\fixdoor\src\main.ts */"zUnb");


/***/ }),

/***/ "1LmZ":
/*!**********************************************!*\
  !*** ./src/app/pages/home/home.component.ts ***!
  \**********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_components_banner_banner_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/components/banner/banner.component */ "XRsc");
/* harmony import */ var _components_pecas_pecas_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/pecas/pecas.component */ "Hzs/");
/* harmony import */ var _components_clientes_clientes_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/clientes/clientes.component */ "XW4M");
/* harmony import */ var _components_contato_contato_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/contato/contato.component */ "SiRM");
/* harmony import */ var _components_newsletter_newsletter_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/newsletter/newsletter.component */ "Mbvd");








class HomeComponent {
    constructor() { }
    ngOnInit() {
        src_app_components_banner_banner_component__WEBPACK_IMPORTED_MODULE_1__["BannerComponent"].url_img = 'assets/img/banner_site_1.png';
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 5, vars: 0, template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-banner");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-pecas");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-clientes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-contato");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-newsletter");
    } }, directives: [src_app_components_banner_banner_component__WEBPACK_IMPORTED_MODULE_1__["BannerComponent"], _components_pecas_pecas_component__WEBPACK_IMPORTED_MODULE_2__["PecasComponent"], _components_clientes_clientes_component__WEBPACK_IMPORTED_MODULE_3__["ClientesComponent"], _components_contato_contato_component__WEBPACK_IMPORTED_MODULE_4__["ContatoComponent"], _components_newsletter_newsletter_component__WEBPACK_IMPORTED_MODULE_5__["NewsletterComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob21lLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "2MiI":
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class HeaderComponent {
    constructor() { }
    ngOnInit() {
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 38, vars: 0, consts: [[1, "navbar", "navbar-expand-lg", "navbar-light", "bg-light", "fixed-top"], [1, "container-lg"], [1, "row"], [1, "col-3"], ["src", "assets/img/logoregular.png"], [1, "col-3", "text-right"], [1, "navbar", "navbar-expand-lg", "navbar-light", "bg-light", "navb-2", "fixed-top"], [1, "row", "w-100"], [1, "col", "text-center"], ["href", "/"], ["href", "/empresa"], ["href", "/produtos"], ["href", "/blog"], ["href", "#contato"], [1, "espaco-top"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "(41) 3534-5750");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "vendas@fixdoor.com.br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "cat\u00E1logo online");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "nav", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "HOME");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "EMPRESA");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "PRODUTOS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "BLOG");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "CONTATO");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "div", 14);
    } }, styles: ["nav[_ngcontent-%COMP%] {\n  background-image: linear-gradient(to right, #e94e24, #f07e26);\n  color: #fff;\n  height: 5rem;\n}\nnav[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-width: 100%;\n}\n.navb-2[_ngcontent-%COMP%] {\n  background-image: none !important;\n  background-color: #e7e7e7 !important;\n  color: #1a2025;\n  margin-top: 5rem;\n  height: 3rem;\n}\n.navb-2[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #1a2025;\n}\n.espaco-top[_ngcontent-%COMP%] {\n  margin-top: 8rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxoZWFkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSSw2REFBQTtFQUlBLFdBQUE7RUFDQSxZQUFBO0FBRko7QUFGSTtFQUNJLGVBQUE7QUFJUjtBQUVBO0VBQ0ksaUNBQUE7RUFDQSxvQ0FBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QUFDSjtBQUFJO0VBQ0ksY0FBQTtBQUVSO0FBQ0E7RUFDSSxnQkFBQTtBQUVKIiwiZmlsZSI6ImhlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIm5hdiB7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LWdyYWRpZW50KGxpbmVhcixsZWZ0IHRvcCxyaWdodCB0b3AsZnJvbSgjZTk0ZTI0KSx0bygjZjA3ZTI2KSk7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsI2U5NGUyNCwjZjA3ZTI2KTtcclxuICAgIGltZ3tcclxuICAgICAgICBtYXgtd2lkdGg6IDEwMCUgO1xyXG4gICAgfVxyXG4gICAgY29sb3I6I2ZmZjtcclxuICAgIGhlaWdodDogNXJlbTtcclxuICAgIFxyXG59XHJcbi5uYXZiLTJ7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTdlN2U3ICFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvcjojMWEyMDI1O1xyXG4gICAgbWFyZ2luLXRvcDogNXJlbTtcclxuICAgIGhlaWdodDogM3JlbTtcclxuICAgIGF7XHJcbiAgICAgICAgY29sb3I6IzFhMjAyNTtcclxuICAgIH1cclxufVxyXG4uZXNwYWNvLXRvcHtcclxuICAgIG1hcmdpbi10b3A6IDhyZW07XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-header',
                templateUrl: './header.component.html',
                styleUrls: ['./header.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "3c5x":
/*!***************************************************************!*\
  !*** ./src/app/components/noticiabox/noticiabox.component.ts ***!
  \***************************************************************/
/*! exports provided: NoticiaboxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoticiaboxComponent", function() { return NoticiaboxComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class NoticiaboxComponent {
    constructor() { }
    ngOnInit() {
        console.log('asd', this.titulo, this.imagen, this.gravata);
    }
}
NoticiaboxComponent.ɵfac = function NoticiaboxComponent_Factory(t) { return new (t || NoticiaboxComponent)(); };
NoticiaboxComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NoticiaboxComponent, selectors: [["app-noticiabox"]], inputs: { titulo: "titulo", id: "id", imagen: "imagen", gravata: "gravata" }, decls: 17, vars: 7, consts: [[1, "row", "w-100", "m-0", "ml-1", "mr-1"], [1, "col", "w-100", "m-0", "p-0"], [1, "row", "w-100", "m-0", "p-0"], [1, "col", "p-0", "m-0"], [3, "href"], [1, "img"], [1, "col", "p-0", "m-0", "titulo-blok"], [1, "row", "justify-content-center", "w-100", "m-0", "p-0"], [1, "col-10", "p-0", "m-0"], [1, "text-left"], [1, "text"], [1, "gravata", "pt-2", "text-left"]], template: function NoticiaboxComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h1", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("href", "post/", ctx.id, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMapInterpolate1"](" background-image: url(\"", ctx.imagen, "\");");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("href", "post/", ctx.id, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.titulo);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.gravata);
    } }, styles: [".img[_ngcontent-%COMP%] {\n  max-width: 100%;\n  height: 20rem;\n  background-position: center;\n  \n  background-repeat: no-repeat;\n  \n  background-size: cover;\n  \n}\n\n.titulo-blok[_ngcontent-%COMP%] {\n  margin-left: 1rem !important;\n  margin-right: 1rem !important;\n  background: #fff;\n  padding-top: 2rem !important;\n  margin-top: -2rem !important;\n  border-top-left-radius: 25px;\n  border-bottom-left-radius: 25px;\n  border-bottom-right-radius: 25px;\n  margin-bottom: 1rem !important;\n  padding-bottom: 2rem !important;\n}\n\n.gravata[_ngcontent-%COMP%] {\n  line-height: 1.2rem;\n  font-weight: 600;\n  color: #1a2025;\n}\n\n.text[_ngcontent-%COMP%] {\n  font-weight: 900 !important;\n  font-size: 2.3rem;\n  line-height: 2.6rem;\n  color: #F07E26;\n}\n\na[_ngcontent-%COMP%]:hover {\n  text-decoration: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxub3RpY2lhYm94LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBQTtFQUNBLGFBQUE7RUFDQSwyQkFBQTtFQUE2QixxQkFBQTtFQUM3Qiw0QkFBQTtFQUE4Qiw0QkFBQTtFQUM5QixzQkFBQTtFQUF3Qiw4REFBQTtBQUk1Qjs7QUFEQTtFQUNJLDRCQUFBO0VBQ0EsNkJBQUE7RUFDQSxnQkFBQTtFQUNBLDRCQUFBO0VBQ0EsNEJBQUE7RUFDQSw0QkFBQTtFQUNBLCtCQUFBO0VBQ0EsZ0NBQUE7RUFDQSw4QkFBQTtFQUNBLCtCQUFBO0FBSUo7O0FBRkE7RUFDSSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQUtKOztBQUZBO0VBQ0ksMkJBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtBQUtKOztBQUZBO0VBQVkscUJBQUE7QUFNWiIsImZpbGUiOiJub3RpY2lhYm94LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmltZ3tcclxuICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMjByZW07XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7IC8qIENlbnRlciB0aGUgaW1hZ2UgKi9cclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7IC8qIERvIG5vdCByZXBlYXQgdGhlIGltYWdlICovXHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyOyAvKiBSZXNpemUgdGhlIGJhY2tncm91bmQgaW1hZ2UgdG8gY292ZXIgdGhlIGVudGlyZSBjb250YWluZXIgKi9cclxufVxyXG5cclxuLnRpdHVsby1ibG9re1xyXG4gICAgbWFyZ2luLWxlZnQ6IDFyZW0gIWltcG9ydGFudDtcclxuICAgIG1hcmdpbi1yaWdodDogMXJlbSAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIHBhZGRpbmctdG9wOiAycmVtICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW4tdG9wOiAtMnJlbSAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMjVweDtcclxuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDI1cHg7XHJcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMjVweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDFyZW0gIWltcG9ydGFudDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAycmVtICFpbXBvcnRhbnQ7XHJcbn1cclxuLmdyYXZhdGF7XHJcbiAgICBsaW5lLWhlaWdodDogMS4ycmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGNvbG9yOiMxYTIwMjU7XHJcbn1cclxuXHJcbi50ZXh0e1xyXG4gICAgZm9udC13ZWlnaHQ6IDkwMCAhaW1wb3J0YW50O1xyXG4gICAgZm9udC1zaXplOiAyLjNyZW07XHJcbiAgICBsaW5lLWhlaWdodDogMi42cmVtO1xyXG4gICAgY29sb3I6I0YwN0UyNjtcclxufVxyXG5cclxuYTpob3ZlciB7ICAgdGV4dC1kZWNvcmF0aW9uOiBub25lOyB9Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NoticiaboxComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-noticiabox',
                templateUrl: './noticiabox.component.html',
                styleUrls: ['./noticiabox.component.scss']
            }]
    }], function () { return []; }, { titulo: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], id: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], imagen: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], gravata: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "5taI":
/*!******************************************************!*\
  !*** ./src/app/pages/produtos/produtos.component.ts ***!
  \******************************************************/
/*! exports provided: ProdutosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProdutosComponent", function() { return ProdutosComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_components_banner_banner_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/components/banner/banner.component */ "XRsc");
/* harmony import */ var _components_produtovitrine_produtovitrine_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/produtovitrine/produtovitrine.component */ "kH6M");





class ProdutosComponent {
    constructor() { }
    ngOnInit() {
        src_app_components_banner_banner_component__WEBPACK_IMPORTED_MODULE_1__["BannerComponent"].url_img = 'assets/img/banner_site_1.png';
    }
}
ProdutosComponent.ɵfac = function ProdutosComponent_Factory(t) { return new (t || ProdutosComponent)(); };
ProdutosComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProdutosComponent, selectors: [["app-produtos"]], decls: 2, vars: 0, template: function ProdutosComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-banner");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-produtovitrine");
    } }, directives: [src_app_components_banner_banner_component__WEBPACK_IMPORTED_MODULE_1__["BannerComponent"], _components_produtovitrine_produtovitrine_component__WEBPACK_IMPORTED_MODULE_2__["ProdutovitrineComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9kdXRvcy5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProdutosComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-produtos',
                templateUrl: './produtos.component.html',
                styleUrls: ['./produtos.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "5tuB":
/*!**********************************************!*\
  !*** ./src/app/pages/blog/blog.component.ts ***!
  \**********************************************/
/*! exports provided: BlogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogComponent", function() { return BlogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _components_blogheader_blogheader_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/blogheader/blogheader.component */ "zcsJ");



class BlogComponent {
    constructor() { }
    ngOnInit() {
    }
}
BlogComponent.ɵfac = function BlogComponent_Factory(t) { return new (t || BlogComponent)(); };
BlogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BlogComponent, selectors: [["app-blog"]], decls: 1, vars: 0, template: function BlogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-blogheader");
    } }, directives: [_components_blogheader_blogheader_component__WEBPACK_IMPORTED_MODULE_1__["BlogheaderComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJibG9nLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BlogComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-blog',
                templateUrl: './blog.component.html',
                styleUrls: ['./blog.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "B/PA":
/*!*********************************************************************!*\
  !*** ./src/app/components/produtofiltro/produtofiltro.component.ts ***!
  \*********************************************************************/
/*! exports provided: ProdutofiltroComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProdutofiltroComponent", function() { return ProdutofiltroComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class ProdutofiltroComponent {
    constructor() { }
    ngOnInit() {
    }
}
ProdutofiltroComponent.ɵfac = function ProdutofiltroComponent_Factory(t) { return new (t || ProdutofiltroComponent)(); };
ProdutofiltroComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProdutofiltroComponent, selectors: [["app-produtofiltro"]], decls: 2, vars: 0, template: function ProdutofiltroComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "produtofiltro works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9kdXRvZmlsdHJvLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProdutofiltroComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-produtofiltro',
                templateUrl: './produtofiltro.component.html',
                styleUrls: ['./produtofiltro.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "Hzs/":
/*!*****************************************************!*\
  !*** ./src/app/components/pecas/pecas.component.ts ***!
  \*****************************************************/
/*! exports provided: PecasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PecasComponent", function() { return PecasComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class PecasComponent {
    constructor() { }
    ngOnInit() {
    }
}
PecasComponent.ɵfac = function PecasComponent_Factory(t) { return new (t || PecasComponent)(); };
PecasComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PecasComponent, selectors: [["app-pecas"]], decls: 39, vars: 0, consts: [[1, "bg"], [1, "container-lg", "cont-cont"], [1, "row", "w-100", "m-0"], [1, "col-3", "cont"], [1, "over"], [1, "border-bg"], [1, "text-center"], ["src", "assets/img/fb_gray.png"]], template: function PecasComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "pe\u00E7as para");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Portas Seccionais");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "pe\u00E7as para");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Portas Seccionais");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "pe\u00E7as para");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Portas Seccionais");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "pe\u00E7as para");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Portas Seccionais");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".bg[_ngcontent-%COMP%] {\n  background: #e7e7e7;\n}\n\n.cont[_ngcontent-%COMP%] {\n  min-height: 20rem;\n}\n\n.cont-cont[_ngcontent-%COMP%] {\n  padding-top: 0rem;\n  padding-bottom: 0rem;\n}\n\nimg[_ngcontent-%COMP%] {\n  max-width: 100%;\n}\n\n.over[_ngcontent-%COMP%] {\n  margin-top: -4rem;\n  left: 0;\n  top: 0;\n  position: absolute;\n  padding-left: 5px;\n  padding-right: 5px;\n  width: 100%;\n}\n\n.border-bg[_ngcontent-%COMP%] {\n  border-top-left-radius: 24px;\n  border-bottom-left-radius: 24px;\n  border-bottom-right-radius: 24px;\n  padding-left: 15px;\n  padding-right: 15px;\n  background: #fff;\n  padding-top: 25px;\n  height: 20rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxwZWNhcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG1CQUFBO0FBQ0o7O0FBQ0E7RUFFSSxpQkFBQTtBQUNKOztBQUNBO0VBQ0ksaUJBQUE7RUFDQSxvQkFBQTtBQUVKOztBQUNBO0VBQ0ksZUFBQTtBQUVKOztBQUFBO0VBR0ksaUJBQUE7RUFDQSxPQUFBO0VBQ0EsTUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUFDSjs7QUFFQTtFQUNJLDRCQUFBO0VBQ0EsK0JBQUE7RUFDQSxnQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtBQUNKIiwiZmlsZSI6InBlY2FzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJne1xyXG4gICAgYmFja2dyb3VuZDogI2U3ZTdlNztcclxufVxyXG4uY29udHtcclxuICAgIFxyXG4gICAgbWluLWhlaWdodDogMjByZW07XHJcbn1cclxuLmNvbnQtY29udHtcclxuICAgIHBhZGRpbmctdG9wOiAwcmVtO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDByZW07XHJcblxyXG59XHJcbmltZ3tcclxuICAgIG1heC13aWR0aDogMTAwJTtcclxufVxyXG4ub3ZlcntcclxuICAgXHJcbiAgIFxyXG4gICAgbWFyZ2luLXRvcDogLTRyZW07XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcGFkZGluZy1sZWZ0OiA1cHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiA1cHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIFxyXG59XHJcbi5ib3JkZXItYmd7XHJcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAyNHB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMjRweDtcclxuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAyNHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogMTVweDtcclxuICAgIGJhY2tncm91bmQ6I2ZmZjtcclxuICAgIHBhZGRpbmctdG9wOiAyNXB4O1xyXG4gICAgaGVpZ2h0OiAyMHJlbTtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PecasComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-pecas',
                templateUrl: './pecas.component.html',
                styleUrls: ['./pecas.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "IWrF":
/*!*****************************************************************!*\
  !*** ./src/app/components/empresa-txt/empresa-txt.component.ts ***!
  \*****************************************************************/
/*! exports provided: EmpresaTxtComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmpresaTxtComponent", function() { return EmpresaTxtComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class EmpresaTxtComponent {
    constructor() { }
    ngOnInit() {
    }
}
EmpresaTxtComponent.ɵfac = function EmpresaTxtComponent_Factory(t) { return new (t || EmpresaTxtComponent)(); };
EmpresaTxtComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EmpresaTxtComponent, selectors: [["app-empresa-txt"]], decls: 12, vars: 0, consts: [[1, "bg"], [1, "container-lg"], [1, "row", "w-100", "m-0"], [1, "col", "text-center"], [1, "row", "w-100", "m-0", "mt-4"], [1, "col", "text-center", "ml-2", "mr-2"]], template: function EmpresaTxtComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "A EMPRESA");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".bg[_ngcontent-%COMP%] {\n  background-image: linear-gradient(to right, #e94e24, #f07e26);\n  padding-top: 5rem;\n  padding-bottom: 5rem;\n}\n\nh1[_ngcontent-%COMP%] {\n  color: #fff;\n}\n\np[_ngcontent-%COMP%] {\n  color: #fff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxlbXByZXNhLXR4dC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLDZEQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtBQUNKOztBQUNBO0VBQ0ksV0FBQTtBQUVKOztBQUFBO0VBQ0ksV0FBQTtBQUdKIiwiZmlsZSI6ImVtcHJlc2EtdHh0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJne1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1ncmFkaWVudChsaW5lYXIsbGVmdCB0b3AscmlnaHQgdG9wLGZyb20oI2U5NGUyNCksdG8oI2YwN2UyNikpO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCNlOTRlMjQsI2YwN2UyNik7XHJcbiAgICBwYWRkaW5nLXRvcDogNXJlbTtcclxuICAgIHBhZGRpbmctYm90dG9tOiA1cmVtO1xyXG59XHJcbmgxe1xyXG4gICAgY29sb3I6I2ZmZjtcclxufVxyXG5we1xyXG4gICAgY29sb3I6I2ZmZjsgXHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EmpresaTxtComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-empresa-txt',
                templateUrl: './empresa-txt.component.html',
                styleUrls: ['./empresa-txt.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "LmEr":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 42, vars: 0, consts: [[1, "bg-1"], [1, "container-lg", "cont"], [1, "row"], [1, "col-3"], ["src", "assets/img/logocinza.png"], [1, "col-2", "text-center"], ["src", "assets/img/fb_gray.png", 1, "ico"], [1, "col-4", "text-center", "d-inherit"], [1, "email"], [1, "col-3", "text-center", "d-inherit"], [1, "bg-2"], [1, "row", "w-100"], [1, "col", "text-center"], [1, "col", "text-center", "footer-info"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "vendas@fixdoor.com.br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "(41) 3534-5750");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "HOME");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "EMPRESA");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "PRODUTOS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "BLOG");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "CONTATO");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Copyright \u00AE FixDoor 2020");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Desenvolvido por");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Amanda Lopes, Lucas Barcellos e Ricardo Affonso");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["img[_ngcontent-%COMP%] {\n  max-width: 100%;\n}\n\n.bg-1[_ngcontent-%COMP%] {\n  background: #1a2025;\n}\n\n.bg-2[_ngcontent-%COMP%] {\n  background: #101417;\n}\n\n.ico[_ngcontent-%COMP%] {\n  width: 35px;\n  height: 35px;\n  margin-top: 20px;\n}\n\n.cont[_ngcontent-%COMP%] {\n  padding-top: 35px;\n  padding-bottom: 35px;\n}\n\np[_ngcontent-%COMP%] {\n  color: #888a8c;\n}\n\n.email[_ngcontent-%COMP%] {\n  margin-top: 23px;\n}\n\n.d-inherit[_ngcontent-%COMP%] {\n  display: inherit !important;\n}\n\n.footer-info[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n\n.footer-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-bottom: 0rem !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxmb290ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFBO0FBQ0o7O0FBQ0E7RUFDSSxtQkFBQTtBQUVKOztBQUFBO0VBQ0ksbUJBQUE7QUFHSjs7QUFDQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUFFSjs7QUFBQTtFQUNJLGlCQUFBO0VBQ0Esb0JBQUE7QUFHSjs7QUFBQTtFQUNJLGNBQUE7QUFHSjs7QUFEQTtFQUNJLGdCQUFBO0FBSUo7O0FBRkE7RUFDSSwyQkFBQTtBQUtKOztBQUhBO0VBQ0ksZ0JBQUE7QUFNSjs7QUFMSTtFQUNRLDhCQUFBO0FBT1oiLCJmaWxlIjoiZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW1ne1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlIDtcclxufVxyXG4uYmctMXtcclxuICAgIGJhY2tncm91bmQ6ICMxYTIwMjU7XHJcbn1cclxuLmJnLTJ7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMTAxNDE3O1xyXG59XHJcblxyXG5cclxuLmljb3tcclxuICAgIHdpZHRoOiAzNXB4O1xyXG4gICAgaGVpZ2h0OiAzNXB4O1xyXG4gICAgbWFyZ2luLXRvcDogMjBweCA7XHJcbn1cclxuLmNvbnR7XHJcbiAgICBwYWRkaW5nLXRvcDogMzVweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAzNXB4O1xyXG59XHJcblxyXG5we1xyXG4gICAgY29sb3I6Izg4OGE4YztcclxufVxyXG4uZW1haWx7XHJcbiAgICBtYXJnaW4tdG9wOiAyM3B4IDtcclxufVxyXG4uZC1pbmhlcml0e1xyXG4gICAgZGlzcGxheTogaW5oZXJpdCAhaW1wb3J0YW50O1xyXG59XHJcbi5mb290ZXItaW5mb3tcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICBwe1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwcmVtICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-footer',
                templateUrl: './footer.component.html',
                styleUrls: ['./footer.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "MUn8":
/*!********************************************************!*\
  !*** ./src/app/pages/produtopg/produtopg.component.ts ***!
  \********************************************************/
/*! exports provided: ProdutopgComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProdutopgComponent", function() { return ProdutopgComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_produtogaleria_produtogaleria_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/produtogaleria/produtogaleria.component */ "/IiM");
/* harmony import */ var _components_produtoinfo_produtoinfo_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/produtoinfo/produtoinfo.component */ "jHuz");
/* harmony import */ var _components_produtorelacionado_produtorelacionado_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/produtorelacionado/produtorelacionado.component */ "aBpx");
/* harmony import */ var _components_contato_contato_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/contato/contato.component */ "SiRM");







class ProdutopgComponent {
    constructor(route) {
        this.route = route;
        this.produtoimg = [
            { img: 'assets/img/fb_gray.png' },
            { img: 'assets/img/fb_gray.png' },
            { img: 'assets/img/fb_gray.png' }
        ];
        this.produtoinfo = {
            nome: 'Nome do produto bem grande',
            categoria: 'Categoria',
            sobre: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat',
            info: [
                { lable: 'Height (mm)', valor: '28' },
                { lable: 'Profile shape', valor: 'U-Profile' },
                { lable: 'Panel thickness (mm)', valor: '40' },
                { lable: 'Surface finish', valor: 'Anodized' },
                { lable: 'Length (mm)', valor: '6000' },
            ]
        };
    }
    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            this.id = params['id'];
            console.log(this.id);
        });
    }
}
ProdutopgComponent.ɵfac = function ProdutopgComponent_Factory(t) { return new (t || ProdutopgComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"])); };
ProdutopgComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProdutopgComponent, selectors: [["app-produtopg"]], decls: 12, vars: 2, consts: [[1, "bg", "espaco"], [1, "container-lg"], [1, "row", "w-100"], [1, "col-5"], [3, "imgs"], [1, "col-7"], [3, "infos"], [1, "pb-3"]], template: function ProdutopgComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-produtogaleria", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-produtoinfo", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "app-produtorelacionado");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "app-contato");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("imgs", ctx.produtoimg);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("infos", ctx.produtoinfo);
    } }, directives: [_components_produtogaleria_produtogaleria_component__WEBPACK_IMPORTED_MODULE_2__["ProdutogaleriaComponent"], _components_produtoinfo_produtoinfo_component__WEBPACK_IMPORTED_MODULE_3__["ProdutoinfoComponent"], _components_produtorelacionado_produtorelacionado_component__WEBPACK_IMPORTED_MODULE_4__["ProdutorelacionadoComponent"], _components_contato_contato_component__WEBPACK_IMPORTED_MODULE_5__["ContatoComponent"]], styles: [".bg[_ngcontent-%COMP%] {\n  background-color: #e7e7e7 !important;\n}\n\n.espaco[_ngcontent-%COMP%] {\n  padding-top: 3rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxwcm9kdXRvcGcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxvQ0FBQTtBQUNKOztBQUVBO0VBQ0ksaUJBQUE7QUFDSiIsImZpbGUiOiJwcm9kdXRvcGcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmd7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTdlN2U3ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5lc3BhY297XHJcbiAgICBwYWRkaW5nLXRvcDogM3JlbTtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProdutopgComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-produtopg',
                templateUrl: './produtopg.component.html',
                styleUrls: ['./produtopg.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "Mbvd":
/*!***************************************************************!*\
  !*** ./src/app/components/newsletter/newsletter.component.ts ***!
  \***************************************************************/
/*! exports provided: NewsletterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsletterComponent", function() { return NewsletterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class NewsletterComponent {
    constructor() { }
    ngOnInit() {
    }
}
NewsletterComponent.ɵfac = function NewsletterComponent_Factory(t) { return new (t || NewsletterComponent)(); };
NewsletterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NewsletterComponent, selectors: [["app-newsletter"]], decls: 15, vars: 0, consts: [[1, "bg"], [1, "bg-2"], [1, "container-lg"], [1, "row", "w-100", "m-0"], [1, "col", "text-center"], [1, "row", "justify-content-center", "w-100", "m-0"], [1, "col-8", "text-center"], ["type", "text", "placeholder", "CADASTRE SEU EMAIL AQUI"], [1, "col-6", "text-center"]], template: function NewsletterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "NEWSLETTER FIXDOOR");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Fique por dentro de nossas novidades");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".bg[_ngcontent-%COMP%] {\n  background: #e7e7e7;\n  padding-top: 3rem;\n  padding-bottom: 3rem;\n}\n\n.bg-2[_ngcontent-%COMP%] {\n  background: #fff;\n  padding-bottom: 3rem;\n}\n\n.bg-2[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  color: #F07E26;\n  margin-top: -1.5rem;\n}\n\nbutton[_ngcontent-%COMP%] {\n  background: #F07E26;\n  border: none;\n  margin-top: 2rem;\n  width: 100%;\n  border-top-left-radius: 14px;\n  border-bottom-left-radius: 14px;\n  border-bottom-right-radius: 14px;\n  color: #fff;\n  padding: 2px;\n}\n\n[_ngcontent-%COMP%]::placeholder {\n  \n  color: #1a2025;\n  opacity: 1;\n  text-align: center;\n}\n\ninput[_ngcontent-%COMP%] {\n  margin-top: 3rem;\n  margin-bottom: 2rem;\n  background: #fff0;\n  border: none;\n  width: 100%;\n  border-bottom: solid;\n  color: #1a2025;\n  border-width: 2px;\n  border-color: #1a2025;\n  margin-bottom: 1rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxuZXdzbGV0dGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksbUJBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0FBQ0o7O0FBQ0E7RUFDSSxnQkFBQTtFQUtBLG9CQUFBO0FBRko7O0FBRkk7RUFDSSxjQUFBO0VBQ0EsbUJBQUE7QUFJUjs7QUFFQTtFQUNJLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLDRCQUFBO0VBQ0EsK0JBQUE7RUFDQSxnQ0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBQ0o7O0FBQ0E7RUFBZ0IseUNBQUE7RUFDWixjQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0FBR0o7O0FBQ0U7RUFDRSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLG9CQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtBQUVKIiwiZmlsZSI6Im5ld3NsZXR0ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmd7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZTdlN2U3O1xyXG4gICAgcGFkZGluZy10b3A6IDNyZW07XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogM3JlbTtcclxufVxyXG4uYmctMntcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICBoMXtcclxuICAgICAgICBjb2xvcjojRjA3RTI2O1xyXG4gICAgICAgIG1hcmdpbi10b3A6IC0xLjVyZW07XHJcbiAgICB9XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogM3JlbTtcclxufVxyXG5cclxuXHJcbmJ1dHRvbntcclxuICAgIGJhY2tncm91bmQ6ICNGMDdFMjY7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBtYXJnaW4tdG9wOiAycmVtO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxNHB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTRweDtcclxuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxNHB4O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBwYWRkaW5nOiAycHg7XHJcbn1cclxuOjpwbGFjZWhvbGRlciB7IC8qIENocm9tZSwgRmlyZWZveCwgT3BlcmEsIFNhZmFyaSAxMC4xKyAqL1xyXG4gICAgY29sb3I6ICMxYTIwMjU7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuICBcclxuXHJcbiAgaW5wdXR7XHJcbiAgICBtYXJnaW4tdG9wOiAzcmVtO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcclxuICAgIGJhY2tncm91bmQ6ICNmZmYwO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3JkZXItYm90dG9tOiBzb2xpZDtcclxuICAgIGNvbG9yOiAjMWEyMDI1O1xyXG4gICAgYm9yZGVyLXdpZHRoOiAycHg7XHJcbiAgICBib3JkZXItY29sb3I6ICMxYTIwMjU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NewsletterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-newsletter',
                templateUrl: './newsletter.component.html',
                styleUrls: ['./newsletter.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "SiRM":
/*!*********************************************************!*\
  !*** ./src/app/components/contato/contato.component.ts ***!
  \*********************************************************/
/*! exports provided: ContatoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContatoComponent", function() { return ContatoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class ContatoComponent {
    constructor() {
        this.nome = '';
        this.email = '';
        this.empresa = '';
        this.mensagem = '';
    }
    ngOnInit() {
    }
}
ContatoComponent.ɵfac = function ContatoComponent_Factory(t) { return new (t || ContatoComponent)(); };
ContatoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContatoComponent, selectors: [["app-contato"]], decls: 24, vars: 0, consts: [["id", "contato", 1, "bg"], [1, "container-lg"], [1, "row", "w-100", "m-0"], [1, "col", "text-center"], [1, "col-1"], [1, "col-5"], [1, "bordered", "text-center"], ["src", "assets/img/fb_gray.png"], [1, "form"], ["type", "text", "placeholder", "NOME", 1, "name", "w-100"], ["type", "text", "placeholder", "EMAIL", 1, "email", "w-100"], ["type", "text", "placeholder", "EMPRESA", 1, "empresa", "w-100"], ["type", "text", "placeholder", "MENSAGEM", 1, "mensagem", "w-100"], [1, "ml-2", "mr-2"]], template: function ContatoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "FALE CONOSCO");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "chamada para fale conosco");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "enviar mensagem");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".bg[_ngcontent-%COMP%] {\n  background-image: linear-gradient(to right, #e94e24, #f07e26);\n  padding-top: 5rem;\n  padding-bottom: 5rem;\n}\n\nh1[_ngcontent-%COMP%] {\n  color: #fff;\n}\n\nimg[_ngcontent-%COMP%] {\n  max-width: 100%;\n}\n\n.bordered[_ngcontent-%COMP%] {\n  background: #fff;\n  margin-top: 2rem;\n  margin-left: 2rem;\n  margin-right: 2rem;\n  padding-right: 10px;\n  padding-left: 10px;\n  padding-top: 4rem;\n  padding-bottom: 3rem;\n  border-top-left-radius: 25px;\n  border-bottom-right-radius: 25px;\n  border-bottom-left-radius: 25px;\n}\n\n.bordered[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-top: 6rem;\n}\n\n.form[_ngcontent-%COMP%] {\n  margin-top: 2rem;\n  margin-left: 2rem;\n  margin-right: 2rem;\n}\n\ninput[_ngcontent-%COMP%] {\n  background: #fff0;\n  border: none;\n  border-bottom: solid;\n  color: #fff;\n  border-width: 2px;\n  border-color: #fff;\n  margin-bottom: 1rem;\n}\n\nbutton[_ngcontent-%COMP%] {\n  background: #fff;\n  border: none;\n  width: 100%;\n  border-top-left-radius: 14px;\n  border-bottom-left-radius: 14px;\n  border-bottom-right-radius: 14px;\n  color: #F07E26;\n  padding: 2px;\n}\n\n[_ngcontent-%COMP%]::placeholder {\n  \n  color: #fff;\n  opacity: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxjb250YXRvLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksNkRBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0FBQ0o7O0FBQ0E7RUFDSSxXQUFBO0FBRUo7O0FBQUE7RUFDSSxlQUFBO0FBR0o7O0FBREE7RUFDSSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0EsNEJBQUE7RUFDQSxnQ0FBQTtFQUNBLCtCQUFBO0FBSUo7O0FBSEk7RUFDSSxnQkFBQTtBQUtSOztBQUZBO0VBQ0ksZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBS0o7O0FBSEE7RUFFSSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUFLSjs7QUFIQTtFQUNJLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSw0QkFBQTtFQUNBLCtCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtBQU1KOztBQUpBO0VBQWdCLHlDQUFBO0VBQ1osV0FBQTtFQUNBLFVBQUE7QUFRSiIsImZpbGUiOiJjb250YXRvLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJne1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1ncmFkaWVudChsaW5lYXIsbGVmdCB0b3AscmlnaHQgdG9wLGZyb20oI2U5NGUyNCksdG8oI2YwN2UyNikpO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCNlOTRlMjQsI2YwN2UyNik7XHJcbiAgICBwYWRkaW5nLXRvcDogNXJlbTtcclxuICAgIHBhZGRpbmctYm90dG9tOiA1cmVtO1xyXG59XHJcbmgxe1xyXG4gICAgY29sb3I6I2ZmZjtcclxufVxyXG5pbWd7XHJcbiAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbn1cclxuLmJvcmRlcmVke1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIG1hcmdpbi10b3A6IDJyZW07XHJcbiAgICBtYXJnaW4tbGVmdDogMnJlbTtcclxuICAgIG1hcmdpbi1yaWdodDogMnJlbTtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgICBwYWRkaW5nLXRvcDogNHJlbTtcclxuICAgIHBhZGRpbmctYm90dG9tOiAzcmVtO1xyXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMjVweDtcclxuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAyNXB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMjVweDtcclxuICAgIHB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogNnJlbTtcclxuICAgIH1cclxufVxyXG4uZm9ybXtcclxuICAgIG1hcmdpbi10b3A6IDJyZW07XHJcbiAgICBtYXJnaW4tbGVmdDogMnJlbTtcclxuICAgIG1hcmdpbi1yaWdodDogMnJlbTtcclxufVxyXG5pbnB1dHtcclxuICAgIFxyXG4gICAgYmFja2dyb3VuZDogI2ZmZjA7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBib3JkZXItYm90dG9tOiBzb2xpZDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgYm9yZGVyLXdpZHRoOiAycHg7XHJcbiAgICBib3JkZXItY29sb3I6ICNmZmY7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG59XHJcbmJ1dHRvbntcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDE0cHg7XHJcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxNHB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDE0cHg7XHJcbiAgICBjb2xvcjogI0YwN0UyNjtcclxuICAgIHBhZGRpbmc6IDJweDtcclxufVxyXG46OnBsYWNlaG9sZGVyIHsgLyogQ2hyb21lLCBGaXJlZm94LCBPcGVyYSwgU2FmYXJpIDEwLjErICovXHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgfVxyXG4gICJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContatoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-contato',
                templateUrl: './contato.component.html',
                styleUrls: ['./contato.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/header/header.component */ "2MiI");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/footer/footer.component */ "LmEr");





class AppComponent {
    constructor() {
        this.title = 'fixdoor';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 3, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-footer");
    } }, directives: [_components_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], null, null); })();


/***/ }),

/***/ "XRsc":
/*!*******************************************************!*\
  !*** ./src/app/components/banner/banner.component.ts ***!
  \*******************************************************/
/*! exports provided: BannerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BannerComponent", function() { return BannerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class BannerComponent {
    constructor() { }
    ngOnInit() {
    }
    get staticUrlArray() {
        return BannerComponent.url_img;
    }
}
BannerComponent.url_img = '';
BannerComponent.ɵfac = function BannerComponent_Factory(t) { return new (t || BannerComponent)(); };
BannerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BannerComponent, selectors: [["app-banner"]], decls: 2, vars: 1, consts: [[1, "w-100"], [3, "src"]], template: function BannerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.staticUrlArray, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    } }, styles: ["img[_ngcontent-%COMP%] {\n  max-width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxiYW5uZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFBO0FBQ0oiLCJmaWxlIjoiYmFubmVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW1ne1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BannerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-banner',
                templateUrl: './banner.component.html',
                styleUrls: ['./banner.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "XW4M":
/*!***********************************************************!*\
  !*** ./src/app/components/clientes/clientes.component.ts ***!
  \***********************************************************/
/*! exports provided: ClientesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientesComponent", function() { return ClientesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");



class ClientesComponent {
    constructor() { }
    ngOnInit() {
        this.slide(2);
    }
    slide(num) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            $('.slide-cliente').addClass('active');
            var inicio = num - 1;
            var pool = $('.slide-cliente');
            var limite = pool.length;
            var connter = 1;
            while (connter < 6) {
                if (inicio > limite) {
                    inicio = 1;
                }
                var src = $('.img-' + inicio).attr('src');
                $('.img-show-' + connter).attr("src", src);
                console.log(inicio);
                inicio++;
                connter++;
            }
            yield this.sleep(2000);
            this.slide(inicio);
        });
    }
    sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
}
ClientesComponent.ɵfac = function ClientesComponent_Factory(t) { return new (t || ClientesComponent)(); };
ClientesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ClientesComponent, selectors: [["app-clientes"]], decls: 25, vars: 0, consts: [[1, "bg"], [1, "container-lg"], [1, "row", "w-100"], [1, "col", "text-center", "col-h1"], ["src", "assets/img/Prancheta_1 (1).png", 1, "img-1", "d-none"], ["src", "assets/img/Prancheta_2.png", 1, "img-2", "d-none"], ["src", "assets/img/Prancheta_3.png", 1, "img-3", "d-none"], ["src", "assets/img/Prancheta_4.png", 1, "img-4", "d-none"], ["src", "assets/img/Prancheta_5.png", 1, "img-5", "d-none"], ["src", "assets/img/Prancheta_6.png", 1, "img-6", "d-none"], ["src", "assets/img/Prancheta_7.png", 1, "img-7", "d-none"], [1, "col"], ["src", "", 1, "img-show-5", "slide-cliente", "d-none"], ["src", "", 1, "img-show-4", "slide-cliente", "d-none"], ["src", "", 1, "img-show-3", "slide-cliente", "d-none"], ["src", "", 1, "img-show-2", "slide-cliente", "d-none"], ["src", "", 1, "img-show-1", "slide-cliente", "d-none"], [1, "bg2"]], template: function ClientesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Clientes");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "div", 17);
    } }, styles: ["img[_ngcontent-%COMP%] {\n  max-width: 100%;\n}\n\n.active[_ngcontent-%COMP%] {\n  display: flex !important;\n}\n\n.col-h1[_ngcontent-%COMP%] {\n  margin-top: -1.5rem;\n}\n\n.bg2[_ngcontent-%COMP%] {\n  background: #e7e7e7;\n  height: 3rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxjbGllbnRlcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQUE7QUFDSjs7QUFDQTtFQUNJLHdCQUFBO0FBRUo7O0FBQUE7RUFDSSxtQkFBQTtBQUdKOztBQURBO0VBQ0ksbUJBQUE7RUFDQSxZQUFBO0FBSUoiLCJmaWxlIjoiY2xpZW50ZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbWd7XHJcbiAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbn1cclxuLmFjdGl2ZXtcclxuICAgIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcclxufVxyXG4uY29sLWgxe1xyXG4gICAgbWFyZ2luLXRvcDogLTEuNXJlbTtcclxufVxyXG4uYmcye1xyXG4gICAgYmFja2dyb3VuZDogI2U3ZTdlNztcclxuICAgIGhlaWdodDogM3JlbTtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ClientesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-clientes',
                templateUrl: './clientes.component.html',
                styleUrls: ['./clientes.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/dropdown */ "dZIy");
/* harmony import */ var ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap/tooltip */ "Mfq2");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-bootstrap/modal */ "K3ix");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/header/header.component */ "2MiI");
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/home/home.component */ "1LmZ");
/* harmony import */ var _components_banner_banner_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/banner/banner.component */ "XRsc");
/* harmony import */ var _components_sobrenos_sobrenos_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/sobrenos/sobrenos.component */ "csqd");
/* harmony import */ var _components_clientes_clientes_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/clientes/clientes.component */ "XW4M");
/* harmony import */ var _components_contato_contato_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/contato/contato.component */ "SiRM");
/* harmony import */ var _components_newsletter_newsletter_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/newsletter/newsletter.component */ "Mbvd");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/footer/footer.component */ "LmEr");
/* harmony import */ var _components_pecas_pecas_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/pecas/pecas.component */ "Hzs/");
/* harmony import */ var _pages_empresa_empresa_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./pages/empresa/empresa.component */ "nLaK");
/* harmony import */ var _components_mvv_mvv_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/mvv/mvv.component */ "zXNE");
/* harmony import */ var _components_empresa_txt_empresa_txt_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/empresa-txt/empresa-txt.component */ "IWrF");
/* harmony import */ var _pages_blog_blog_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./pages/blog/blog.component */ "5tuB");
/* harmony import */ var _pages_produtos_produtos_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./pages/produtos/produtos.component */ "5taI");
/* harmony import */ var _components_blogheader_blogheader_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/blogheader/blogheader.component */ "zcsJ");
/* harmony import */ var _components_noticiabox_noticiabox_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/noticiabox/noticiabox.component */ "3c5x");
/* harmony import */ var _pages_post_post_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./pages/post/post.component */ "okR5");
/* harmony import */ var _components_produtofiltro_produtofiltro_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/produtofiltro/produtofiltro.component */ "B/PA");
/* harmony import */ var _components_produtovitrine_produtovitrine_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/produtovitrine/produtovitrine.component */ "kH6M");
/* harmony import */ var _components_produtovitrineobj_produtovitrineobj_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/produtovitrineobj/produtovitrineobj.component */ "c+m5");
/* harmony import */ var _pages_produtopg_produtopg_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./pages/produtopg/produtopg.component */ "MUn8");
/* harmony import */ var _components_produtogaleria_produtogaleria_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./components/produtogaleria/produtogaleria.component */ "/IiM");
/* harmony import */ var _components_produtoinfo_produtoinfo_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./components/produtoinfo/produtoinfo.component */ "jHuz");
/* harmony import */ var _components_produtorelacionado_produtorelacionado_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./components/produtorelacionado/produtorelacionado.component */ "aBpx");



































class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_4__["BsDropdownModule"].forRoot(),
            ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_5__["TooltipModule"].forRoot(),
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_6__["ModalModule"].forRoot(),
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _components_header_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"],
        _pages_home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"],
        _components_banner_banner_component__WEBPACK_IMPORTED_MODULE_9__["BannerComponent"],
        _components_sobrenos_sobrenos_component__WEBPACK_IMPORTED_MODULE_10__["SobrenosComponent"],
        _components_clientes_clientes_component__WEBPACK_IMPORTED_MODULE_11__["ClientesComponent"],
        _components_contato_contato_component__WEBPACK_IMPORTED_MODULE_12__["ContatoComponent"],
        _components_newsletter_newsletter_component__WEBPACK_IMPORTED_MODULE_13__["NewsletterComponent"],
        _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_14__["FooterComponent"],
        _components_pecas_pecas_component__WEBPACK_IMPORTED_MODULE_15__["PecasComponent"],
        _pages_empresa_empresa_component__WEBPACK_IMPORTED_MODULE_16__["EmpresaComponent"],
        _components_mvv_mvv_component__WEBPACK_IMPORTED_MODULE_17__["MvvComponent"],
        _components_empresa_txt_empresa_txt_component__WEBPACK_IMPORTED_MODULE_18__["EmpresaTxtComponent"],
        _pages_blog_blog_component__WEBPACK_IMPORTED_MODULE_19__["BlogComponent"],
        _pages_produtos_produtos_component__WEBPACK_IMPORTED_MODULE_20__["ProdutosComponent"],
        _components_blogheader_blogheader_component__WEBPACK_IMPORTED_MODULE_21__["BlogheaderComponent"],
        _components_noticiabox_noticiabox_component__WEBPACK_IMPORTED_MODULE_22__["NoticiaboxComponent"],
        _pages_post_post_component__WEBPACK_IMPORTED_MODULE_23__["PostComponent"],
        _components_produtofiltro_produtofiltro_component__WEBPACK_IMPORTED_MODULE_24__["ProdutofiltroComponent"],
        _components_produtovitrine_produtovitrine_component__WEBPACK_IMPORTED_MODULE_25__["ProdutovitrineComponent"],
        _components_produtovitrineobj_produtovitrineobj_component__WEBPACK_IMPORTED_MODULE_26__["ProdutovitrineobjComponent"],
        _pages_produtopg_produtopg_component__WEBPACK_IMPORTED_MODULE_27__["ProdutopgComponent"],
        _components_produtogaleria_produtogaleria_component__WEBPACK_IMPORTED_MODULE_28__["ProdutogaleriaComponent"],
        _components_produtoinfo_produtoinfo_component__WEBPACK_IMPORTED_MODULE_29__["ProdutoinfoComponent"],
        _components_produtorelacionado_produtorelacionado_component__WEBPACK_IMPORTED_MODULE_30__["ProdutorelacionadoComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_4__["BsDropdownModule"], ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_5__["TooltipModule"], ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_6__["ModalModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _components_header_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"],
                    _pages_home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"],
                    _components_banner_banner_component__WEBPACK_IMPORTED_MODULE_9__["BannerComponent"],
                    _components_sobrenos_sobrenos_component__WEBPACK_IMPORTED_MODULE_10__["SobrenosComponent"],
                    _components_clientes_clientes_component__WEBPACK_IMPORTED_MODULE_11__["ClientesComponent"],
                    _components_contato_contato_component__WEBPACK_IMPORTED_MODULE_12__["ContatoComponent"],
                    _components_newsletter_newsletter_component__WEBPACK_IMPORTED_MODULE_13__["NewsletterComponent"],
                    _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_14__["FooterComponent"],
                    _components_pecas_pecas_component__WEBPACK_IMPORTED_MODULE_15__["PecasComponent"],
                    _pages_empresa_empresa_component__WEBPACK_IMPORTED_MODULE_16__["EmpresaComponent"],
                    _components_mvv_mvv_component__WEBPACK_IMPORTED_MODULE_17__["MvvComponent"],
                    _components_empresa_txt_empresa_txt_component__WEBPACK_IMPORTED_MODULE_18__["EmpresaTxtComponent"],
                    _pages_blog_blog_component__WEBPACK_IMPORTED_MODULE_19__["BlogComponent"],
                    _pages_produtos_produtos_component__WEBPACK_IMPORTED_MODULE_20__["ProdutosComponent"],
                    _components_blogheader_blogheader_component__WEBPACK_IMPORTED_MODULE_21__["BlogheaderComponent"],
                    _components_noticiabox_noticiabox_component__WEBPACK_IMPORTED_MODULE_22__["NoticiaboxComponent"],
                    _pages_post_post_component__WEBPACK_IMPORTED_MODULE_23__["PostComponent"],
                    _components_produtofiltro_produtofiltro_component__WEBPACK_IMPORTED_MODULE_24__["ProdutofiltroComponent"],
                    _components_produtovitrine_produtovitrine_component__WEBPACK_IMPORTED_MODULE_25__["ProdutovitrineComponent"],
                    _components_produtovitrineobj_produtovitrineobj_component__WEBPACK_IMPORTED_MODULE_26__["ProdutovitrineobjComponent"],
                    _pages_produtopg_produtopg_component__WEBPACK_IMPORTED_MODULE_27__["ProdutopgComponent"],
                    _components_produtogaleria_produtogaleria_component__WEBPACK_IMPORTED_MODULE_28__["ProdutogaleriaComponent"],
                    _components_produtoinfo_produtoinfo_component__WEBPACK_IMPORTED_MODULE_29__["ProdutoinfoComponent"],
                    _components_produtorelacionado_produtorelacionado_component__WEBPACK_IMPORTED_MODULE_30__["ProdutorelacionadoComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_4__["BsDropdownModule"].forRoot(),
                    ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_5__["TooltipModule"].forRoot(),
                    ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_6__["ModalModule"].forRoot(),
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "aBpx":
/*!*******************************************************************************!*\
  !*** ./src/app/components/produtorelacionado/produtorelacionado.component.ts ***!
  \*******************************************************************************/
/*! exports provided: ProdutorelacionadoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProdutorelacionadoComponent", function() { return ProdutorelacionadoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _produtovitrineobj_produtovitrineobj_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../produtovitrineobj/produtovitrineobj.component */ "c+m5");



class ProdutorelacionadoComponent {
    constructor() {
        this.obj = {
            img: '',
            nome: 'Nome do produto bem gande',
            id: '1'
        };
    }
    ngOnInit() {
    }
}
ProdutorelacionadoComponent.ɵfac = function ProdutorelacionadoComponent_Factory(t) { return new (t || ProdutorelacionadoComponent)(); };
ProdutorelacionadoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProdutorelacionadoComponent, selectors: [["app-produtorelacionado"]], decls: 16, vars: 12, consts: [[1, "container-lg"], [1, "row", "w-100"], [1, "col", "text-center", "mb-3", "mt-3"], [1, "col"], [1, "col-3"], [3, "titulo", "imagen", "id"]], template: function ProdutorelacionadoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Produtos Relacionados");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "app-produtovitrineobj", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "app-produtovitrineobj", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "app-produtovitrineobj", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "app-produtovitrineobj", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("titulo", ctx.obj.nome)("imagen", ctx.obj.img)("id", ctx.obj.id);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("titulo", ctx.obj.nome)("imagen", ctx.obj.img)("id", ctx.obj.id);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("titulo", ctx.obj.nome)("imagen", ctx.obj.img)("id", ctx.obj.id);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("titulo", ctx.obj.nome)("imagen", ctx.obj.img)("id", ctx.obj.id);
    } }, directives: [_produtovitrineobj_produtovitrineobj_component__WEBPACK_IMPORTED_MODULE_1__["ProdutovitrineobjComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9kdXRvcmVsYWNpb25hZG8uY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProdutorelacionadoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-produtorelacionado',
                templateUrl: './produtorelacionado.component.html',
                styleUrls: ['./produtorelacionado.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "c+m5":
/*!*****************************************************************************!*\
  !*** ./src/app/components/produtovitrineobj/produtovitrineobj.component.ts ***!
  \*****************************************************************************/
/*! exports provided: ProdutovitrineobjComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProdutovitrineobjComponent", function() { return ProdutovitrineobjComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class ProdutovitrineobjComponent {
    constructor() { }
    ngOnInit() {
    }
}
ProdutovitrineobjComponent.ɵfac = function ProdutovitrineobjComponent_Factory(t) { return new (t || ProdutovitrineobjComponent)(); };
ProdutovitrineobjComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProdutovitrineobjComponent, selectors: [["app-produtovitrineobj"]], inputs: { titulo: "titulo", id: "id", imagen: "imagen" }, decls: 14, vars: 4, consts: [[1, "row", "w-100", "m-0", "ml-1", "mr-1"], [1, "col", "w-100", "m-0", "p-0"], [1, "row", "justify-content-center", "w-100", "m-0", "p-0"], [1, "text-center"], [1, "text-center", 3, "href"], [3, "src"], [3, "href"], [1, "row", "w-100", "m-0", "p-0"], [1, "col", "p-0", "m-0", "titulo-blok"], [1, "col-10", "p-0", "m-0"], [1, "text"]], template: function ProdutovitrineobjComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("href", "produto/", ctx.id, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.imagen, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("href", "produto/", ctx.id, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.titulo);
    } }, styles: ["img[_ngcontent-%COMP%] {\n  max-width: 100%;\n  width: 10rem;\n  background: #1a2025;\n  height: 10rem;\n}\n\n.text[_ngcontent-%COMP%] {\n  color: #1a2025;\n  font-weight: 600;\n}\n\na[_ngcontent-%COMP%]:hover {\n  text-decoration: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxwcm9kdXRvdml0cmluZW9iai5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0FBQ0o7O0FBQ0E7RUFDSSxjQUFBO0VBQ0EsZ0JBQUE7QUFFSjs7QUFBQTtFQUNJLHFCQUFBO0FBR0oiLCJmaWxlIjoicHJvZHV0b3ZpdHJpbmVvYmouY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbWcge1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgd2lkdGg6IDEwcmVtO1xyXG4gICAgYmFja2dyb3VuZDojMWEyMDI1IDtcclxuICAgIGhlaWdodDogMTByZW07XHJcbn1cclxuLnRleHR7XHJcbiAgICBjb2xvcjojMWEyMDI1IDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbn1cclxuYTpob3ZlcntcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProdutovitrineobjComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-produtovitrineobj',
                templateUrl: './produtovitrineobj.component.html',
                styleUrls: ['./produtovitrineobj.component.scss']
            }]
    }], function () { return []; }, { titulo: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], id: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], imagen: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "csqd":
/*!***********************************************************!*\
  !*** ./src/app/components/sobrenos/sobrenos.component.ts ***!
  \***********************************************************/
/*! exports provided: SobrenosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SobrenosComponent", function() { return SobrenosComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class SobrenosComponent {
    constructor() { }
    ngOnInit() {
    }
}
SobrenosComponent.ɵfac = function SobrenosComponent_Factory(t) { return new (t || SobrenosComponent)(); };
SobrenosComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SobrenosComponent, selectors: [["app-sobrenos"]], decls: 2, vars: 0, template: function SobrenosComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "sobrenos works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzb2JyZW5vcy5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SobrenosComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-sobrenos',
                templateUrl: './sobrenos.component.html',
                styleUrls: ['./sobrenos.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "jHuz":
/*!*****************************************************************!*\
  !*** ./src/app/components/produtoinfo/produtoinfo.component.ts ***!
  \*****************************************************************/
/*! exports provided: ProdutoinfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProdutoinfoComponent", function() { return ProdutoinfoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");



function ProdutoinfoComponent_tr_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.lable);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.valor);
} }
class ProdutoinfoComponent {
    constructor() { }
    ngOnInit() {
        console.log(this.infos);
    }
}
ProdutoinfoComponent.ɵfac = function ProdutoinfoComponent_Factory(t) { return new (t || ProdutoinfoComponent)(); };
ProdutoinfoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProdutoinfoComponent, selectors: [["app-produtoinfo"]], inputs: { infos: "infos" }, decls: 23, vars: 4, consts: [[1, "row", "w-100", "m-0", "p-0", "init"], [1, "col", "ml-1", "mr-1", "bg"], [1, "row", "w-100", "m-0", "p-0"], [1, "col", "m-0", "p-0"], [1, "row", "w-100", "m-0", "p-0", "mt-4"], [1, "table", "table-striped"], ["scope", "col"], [4, "ngFor", "ngForOf"]], template: function ProdutoinfoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "table", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "th", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Informa\u00E7\u00F5es do produto");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "th", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, ProdutoinfoComponent_tr_22_Template, 5, 2, "tr", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.infos.nome);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.infos.categoria);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.infos.sobre);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.infos.info);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]], styles: [".bg[_ngcontent-%COMP%] {\n  background: #fff;\n  padding-top: 2rem !important;\n  padding-bottom: 2rem !important;\n  padding-right: 1rem !important;\n  padding-left: 1rem !important;\n  border-top-left-radius: 25px;\n  border-bottom-left-radius: 25px;\n  border-bottom-right-radius: 25px;\n}\n\n.init[_ngcontent-%COMP%] {\n  margin-bottom: 3rem !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxwcm9kdXRvaW5mby5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0VBQ0EsNEJBQUE7RUFDQSwrQkFBQTtFQUNBLDhCQUFBO0VBQ0EsNkJBQUE7RUFDQSw0QkFBQTtFQUNBLCtCQUFBO0VBQ0EsZ0NBQUE7QUFDSjs7QUFDQTtFQUNJLDhCQUFBO0FBRUoiLCJmaWxlIjoicHJvZHV0b2luZm8uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmd7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgcGFkZGluZy10b3A6IDJyZW0gIWltcG9ydGFudDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAycmVtICFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxcmVtICFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDFyZW0gIWltcG9ydGFudDtcclxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDI1cHg7XHJcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAyNXB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDI1cHg7XHJcbn1cclxuLmluaXR7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzcmVtICFpbXBvcnRhbnQ7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProdutoinfoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-produtoinfo',
                templateUrl: './produtoinfo.component.html',
                styleUrls: ['./produtoinfo.component.scss']
            }]
    }], function () { return []; }, { infos: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "kH6M":
/*!***********************************************************************!*\
  !*** ./src/app/components/produtovitrine/produtovitrine.component.ts ***!
  \***********************************************************************/
/*! exports provided: ProdutovitrineComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProdutovitrineComponent", function() { return ProdutovitrineComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _produtovitrineobj_produtovitrineobj_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../produtovitrineobj/produtovitrineobj.component */ "c+m5");




function ProdutovitrineComponent_div_6_div_3_p_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const subcategorias_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("subcategorias subcategorias-", subcategorias_r5.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", subcategorias_r5.titulo, " ");
} }
function ProdutovitrineComponent_div_6_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProdutovitrineComponent_div_6_div_3_p_1_Template, 2, 4, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", item_r1.subcategorias);
} }
function ProdutovitrineComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProdutovitrineComponent_div_6_Template_p_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const item_r1 = ctx.$implicit; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.ativar(item_r1.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ProdutovitrineComponent_div_6_div_3_Template, 2, 1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("categorias categoria-", item_r1.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r1.titulo, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.ativo == item_r1.id);
} }
class ProdutovitrineComponent {
    constructor() {
        this.ativo = 0;
        this.categorias = [
            { titulo: 'Todos os Produtos',
                id: 0,
                subcategorias: []
            },
            { titulo: 'Portas Seccionais',
                id: 1,
                subcategorias: [
                    { titulo: 'Roldanas',
                        id: 11
                    },
                    { titulo: 'Molas',
                        id: 12
                    },
                    { titulo: 'Enroladores de Cabos e seus componentes',
                        id: 13
                    },
                    { titulo: 'Borrachas',
                        id: 14
                    }
                ]
            },
            { titulo: 'Portas Rápidas',
                id: 2,
                subcategorias: [
                    { titulo: 'Roldanas',
                        id: 21
                    },
                    { titulo: 'Molas',
                        id: 22
                    },
                    { titulo: 'Enroladores de Cabos e seus componentes',
                        id: 23
                    },
                    { titulo: 'Borrachas',
                        id: 24
                    }
                ]
            },
            { titulo: 'Portal de Selamento',
                id: 3,
                subcategorias: [
                    { titulo: 'Roldanas',
                        id: 31
                    },
                    { titulo: 'Molas',
                        id: 32
                    },
                    { titulo: 'Enroladores de Cabos e seus componentes',
                        id: 33
                    },
                    { titulo: 'Borrachas',
                        id: 34
                    }
                ]
            },
            { titulo: 'Soluções para Portas',
                id: 4,
                subcategorias: [
                    { titulo: 'Roldanas',
                        id: 41
                    },
                    { titulo: 'Molas',
                        id: 42
                    },
                    { titulo: 'Enroladores de Cabos e seus componentes',
                        id: 43
                    },
                    { titulo: 'Borrachas',
                        id: 44
                    }
                ]
            },
        ];
        this.obj = {
            img: '',
            nome: 'Nome do produto bem gande',
            id: '1'
        };
    }
    ngOnInit() {
        $('.categoria-0').addClass('active');
    }
    ativar(num) {
        this.ativo = num;
        $('.active').removeClass('active');
        $('.categoria-' + num).addClass('active');
    }
}
ProdutovitrineComponent.ɵfac = function ProdutovitrineComponent_Factory(t) { return new (t || ProdutovitrineComponent)(); };
ProdutovitrineComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProdutovitrineComponent, selectors: [["app-produtovitrine"]], decls: 47, vars: 38, consts: [[1, "bg", "pb-4"], [1, "container-lg", "mb-4"], [1, "row", "w-100", "m-0", "p-0"], [1, "col-3", "m-0", "p-0"], [4, "ngFor", "ngForOf"], [1, "col-9", "m-0", "p-0"], [1, "vitrine-box"], [1, "col"], [1, "col-6"], ["placeholder", "pesquise aqui...", 1, "pesqiosa"], [1, "col-6", "text-right"], [1, "row", "w-100", "m-0", "p-0", "mt-4", "pt-4"], [1, "col-4"], [3, "titulo", "imagen", "id"], [3, "click"], ["class", "subcategorias-box", 4, "ngIf"], [1, "subcategorias-box"], [3, "class", 4, "ngFor", "ngForOf"]], template: function ProdutovitrineComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Filtro de produtos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ProdutovitrineComponent_div_6_Template, 4, 5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "acesse cat\u00E1logo de categoria ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "app-produtovitrineobj", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "app-produtovitrineobj", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "app-produtovitrineobj", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "app-produtovitrineobj", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "app-produtovitrineobj", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "app-produtovitrineobj", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "app-produtovitrineobj", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "app-produtovitrineobj", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "app-produtovitrineobj", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "app-produtovitrineobj", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "app-produtovitrineobj", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "app-produtovitrineobj", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.categorias);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.categorias[ctx.ativo].titulo);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("titulo", ctx.obj.nome)("imagen", ctx.obj.img)("id", ctx.obj.id);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("titulo", ctx.obj.nome)("imagen", ctx.obj.img)("id", ctx.obj.id);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("titulo", ctx.obj.nome)("imagen", ctx.obj.img)("id", ctx.obj.id);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("titulo", ctx.obj.nome)("imagen", ctx.obj.img)("id", ctx.obj.id);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("titulo", ctx.obj.nome)("imagen", ctx.obj.img)("id", ctx.obj.id);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("titulo", ctx.obj.nome)("imagen", ctx.obj.img)("id", ctx.obj.id);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("titulo", ctx.obj.nome)("imagen", ctx.obj.img)("id", ctx.obj.id);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("titulo", ctx.obj.nome)("imagen", ctx.obj.img)("id", ctx.obj.id);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("titulo", ctx.obj.nome)("imagen", ctx.obj.img)("id", ctx.obj.id);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("titulo", ctx.obj.nome)("imagen", ctx.obj.img)("id", ctx.obj.id);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("titulo", ctx.obj.nome)("imagen", ctx.obj.img)("id", ctx.obj.id);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("titulo", ctx.obj.nome)("imagen", ctx.obj.img)("id", ctx.obj.id);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _produtovitrineobj_produtovitrineobj_component__WEBPACK_IMPORTED_MODULE_2__["ProdutovitrineobjComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]], styles: [".categorias[_ngcontent-%COMP%] {\n  font-weight: 500;\n  color: #F07E26;\n  margin-bottom: 5px !important;\n}\n\n.active[_ngcontent-%COMP%] {\n  font-weight: 900 !important;\n}\n\n.subcategorias[_ngcontent-%COMP%] {\n  color: #1a2025;\n  font-weight: 500;\n  margin-left: 10px !important;\n  margin-bottom: 5px !important;\n}\n\nh3[_ngcontent-%COMP%] {\n  color: #1a2025;\n}\n\n.subcategorias-box[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n}\n\n.bg[_ngcontent-%COMP%] {\n  background: #e7e7e7;\n}\n\n.vitrine-box[_ngcontent-%COMP%] {\n  background: #fff;\n  border-top-left-radius: 25px;\n  border-bottom-left-radius: 25px;\n  border-bottom-right-radius: 25px;\n  padding-top: 2rem;\n  padding-bottom: 2rem;\n  padding-left: 1rem;\n  padding-right: 1rem;\n  margin-top: -4rem;\n}\n\n.pesqiosa[_ngcontent-%COMP%] {\n  width: 100%;\n  background: #F07E26;\n  border: none;\n  margin-left: 1rem;\n  border-bottom: solid;\n  border-color: #fff;\n  padding-top: 5px;\n  padding-bottom: 5px;\n  margin-right: 1rem;\n  padding-left: 16px;\n  padding-right: 13px;\n  border-top-left-radius: 25px;\n  border-bottom-left-radius: 25px;\n  border-bottom-right-radius: 25px;\n}\n\n.pesqiosa[_ngcontent-%COMP%]::placeholder {\n  \n  color: #fff;\n  border-bottom: solid;\n  border-width: 1px;\n  opacity: 1;\n  \n}\n\n*[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n\nh1[_ngcontent-%COMP%] {\n  color: #F07E26;\n  font-weight: bolder;\n  font-size: 3rem;\n  margin-left: 1rem;\n  margin-bottom: 2rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxwcm9kdXRvdml0cmluZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLDZCQUFBO0FBQ0o7O0FBQ0E7RUFDSSwyQkFBQTtBQUVKOztBQUFBO0VBQ0ksY0FBQTtFQUNBLGdCQUFBO0VBQ0EsNEJBQUE7RUFDQSw2QkFBQTtBQUdKOztBQUFBO0VBQ0ksY0FBQTtBQUdKOztBQURBO0VBQ0ksbUJBQUE7QUFJSjs7QUFEQTtFQUNJLG1CQUFBO0FBSUo7O0FBRkE7RUFDSSxnQkFBQTtFQUNBLDRCQUFBO0VBQ0EsK0JBQUE7RUFDQSxnQ0FBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUFLSjs7QUFGQTtFQUNJLFdBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsNEJBQUE7RUFDQSwrQkFBQTtFQUNBLGdDQUFBO0FBS0o7O0FBRkE7RUFBeUIseUNBQUE7RUFDckIsV0FBQTtFQUNBLG9CQUFBO0VBQ0EsaUJBQUE7RUFDQSxVQUFBO0VBQVksWUFBQTtBQU9oQjs7QUFKRTtFQUNFLGFBQUE7QUFPSjs7QUFKQTtFQUNJLGNBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0FBT0oiLCJmaWxlIjoicHJvZHV0b3ZpdHJpbmUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2F0ZWdvcmlhc3tcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBjb2xvcjogI0YwN0UyNjtcclxuICAgIG1hcmdpbi1ib3R0b206IDVweCAhaW1wb3J0YW50O1xyXG59XHJcbi5hY3RpdmV7XHJcbiAgICBmb250LXdlaWdodDogOTAwICFpbXBvcnRhbnQ7XHJcbn1cclxuLnN1YmNhdGVnb3JpYXN7XHJcbiAgICBjb2xvcjogIzFhMjAyNTtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBtYXJnaW4tbGVmdDogMTBweCAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4ICFpbXBvcnRhbnQ7XHJcblxyXG59XHJcbmgze1xyXG4gICAgY29sb3I6ICMxYTIwMjU7ICBcclxufVxyXG4uc3ViY2F0ZWdvcmlhcy1ib3h7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcblxyXG4uYmd7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZTdlN2U3O1xyXG59XHJcbi52aXRyaW5lLWJveHtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAyNXB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMjVweDtcclxuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAyNXB4O1xyXG4gICAgcGFkZGluZy10b3A6IDJyZW07XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMnJlbTtcclxuICAgIHBhZGRpbmctbGVmdDogMXJlbTtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDFyZW07XHJcbiAgICBtYXJnaW4tdG9wOiAtNHJlbTtcclxufVxyXG5cclxuLnBlc3Fpb3Nhe1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRjA3RTI2O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDFyZW07XHJcbiAgICBib3JkZXItYm90dG9tOiBzb2xpZDtcclxuICAgIGJvcmRlci1jb2xvcjogI2ZmZjtcclxuICAgIHBhZGRpbmctdG9wOiA1cHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxNnB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogMTNweDtcclxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDI1cHg7XHJcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAyNXB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDI1cHg7XHJcbn1cclxuXHJcbi5wZXNxaW9zYTo6cGxhY2Vob2xkZXIgeyAvKiBDaHJvbWUsIEZpcmVmb3gsIE9wZXJhLCBTYWZhcmkgMTAuMSsgKi9cclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgYm9yZGVyLWJvdHRvbTpzb2xpZDtcclxuICAgIGJvcmRlci13aWR0aDogMXB4O1xyXG4gICAgb3BhY2l0eTogMTsgLyogRmlyZWZveCAqL1xyXG4gIH1cclxuXHJcbiAgKjpmb2N1cyB7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG59XHJcblxyXG5oMXtcclxuICAgIGNvbG9yOiAjRjA3RTI2O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxuICAgIGZvbnQtc2l6ZTogM3JlbTtcclxuICAgIG1hcmdpbi1sZWZ0OiAxcmVtO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcclxufVxyXG5cclxuXHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProdutovitrineComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-produtovitrine',
                templateUrl: './produtovitrine.component.html',
                styleUrls: ['./produtovitrine.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "nLaK":
/*!****************************************************!*\
  !*** ./src/app/pages/empresa/empresa.component.ts ***!
  \****************************************************/
/*! exports provided: EmpresaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmpresaComponent", function() { return EmpresaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_components_banner_banner_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/components/banner/banner.component */ "XRsc");
/* harmony import */ var _components_empresa_txt_empresa_txt_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/empresa-txt/empresa-txt.component */ "IWrF");
/* harmony import */ var _components_mvv_mvv_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/mvv/mvv.component */ "zXNE");
/* harmony import */ var _components_contato_contato_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/contato/contato.component */ "SiRM");







class EmpresaComponent {
    constructor() { }
    ngOnInit() {
        src_app_components_banner_banner_component__WEBPACK_IMPORTED_MODULE_1__["BannerComponent"].url_img = 'assets/img/banner_site_2.png';
    }
}
EmpresaComponent.ɵfac = function EmpresaComponent_Factory(t) { return new (t || EmpresaComponent)(); };
EmpresaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EmpresaComponent, selectors: [["app-empresa"]], decls: 5, vars: 0, consts: [[1, "espaco"]], template: function EmpresaComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-banner");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-empresa-txt");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-mvv");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-contato");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 0);
    } }, directives: [src_app_components_banner_banner_component__WEBPACK_IMPORTED_MODULE_1__["BannerComponent"], _components_empresa_txt_empresa_txt_component__WEBPACK_IMPORTED_MODULE_2__["EmpresaTxtComponent"], _components_mvv_mvv_component__WEBPACK_IMPORTED_MODULE_3__["MvvComponent"], _components_contato_contato_component__WEBPACK_IMPORTED_MODULE_4__["ContatoComponent"]], styles: [".espaco[_ngcontent-%COMP%] {\n  background: #e7e7e7;\n  padding-top: 3rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxlbXByZXNhLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksbUJBQUE7RUFDQSxpQkFBQTtBQUNKIiwiZmlsZSI6ImVtcHJlc2EuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXNwYWNve1xyXG4gICAgYmFja2dyb3VuZDogI2U3ZTdlNztcclxuICAgIHBhZGRpbmctdG9wOjNyZW07XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EmpresaComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-empresa',
                templateUrl: './empresa.component.html',
                styleUrls: ['./empresa.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "okR5":
/*!**********************************************!*\
  !*** ./src/app/pages/post/post.component.ts ***!
  \**********************************************/
/*! exports provided: PostComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostComponent", function() { return PostComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class PostComponent {
    constructor(route) {
        this.route = route;
        this.data = '12/12/2020';
        this.por = 'Vladmir Putin';
        this.titulo = 'Título do post de blog';
        this.img = 'assets/img/banner_site_produto.png';
        this.text = "<p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p><p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of 'de Finibus Bonorum et Malorum' (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, 'Lorem ipsum dolor sit amet..', comes from a line in section 1.10.32.</p>";
    }
    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            this.id = params['id'];
            console.log(this.id);
        });
    }
}
PostComponent.ɵfac = function PostComponent_Factory(t) { return new (t || PostComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"])); };
PostComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PostComponent, selectors: [["app-post"]], decls: 21, vars: 5, consts: [[1, "bg"], [1, "container-lg"], [1, "row", "w-100"], [1, "col", "text-center", "col-h1"], [1, "bg-2"], [1, "row", "justify-content-center", "w-100"], [1, "col-10", "info"], [1, "titulo"], [1, "col"], [3, "src"], [1, "col-10"], [1, "post-blog-div", 3, "innerHTML"]], template: function PostComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "BLOG FIXDOOR");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h1", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.titulo);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("por: ", ctx.por, ", em ", ctx.data, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.img, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx.text, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
    } }, styles: [".bg[_ngcontent-%COMP%] {\n  background-image: linear-gradient(to right, #e94e24, #f07e26);\n  color: #fff !important;\n  padding-top: 2rem;\n  padding-bottom: 2rem;\n}\n\n.bg-2[_ngcontent-%COMP%] {\n  background-color: #e7e7e7 !important;\n}\n\nimg[_ngcontent-%COMP%] {\n  max-width: 100%;\n}\n\n.titulo[_ngcontent-%COMP%] {\n  font-size: 3rem;\n  font-weight: 700;\n  color: #F07E26;\n}\n\n.info[_ngcontent-%COMP%] {\n  padding-top: 2rem;\n  padding-bottom: 1rem;\n}\n\n.post-blog-div[_ngcontent-%COMP%] {\n  padding-top: 3rem;\n  padding-bottom: 3rem;\n}\n\n.post-blog-div[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-size: 1.3rem !important;\n  color: #1a2025;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxwb3N0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksNkRBQUE7RUFDQSxzQkFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7QUFDSjs7QUFFQTtFQUNJLG9DQUFBO0FBQ0o7O0FBQ0E7RUFDSSxlQUFBO0FBRUo7O0FBQUE7RUFFSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FBRUo7O0FBQUE7RUFDSSxpQkFBQTtFQUNBLG9CQUFBO0FBR0o7O0FBQUE7RUFDSSxpQkFBQTtFQUNBLG9CQUFBO0FBR0o7O0FBRkk7RUFDSSxnQkFBQTtFQUNBLDRCQUFBO0VBQ0EsY0FBQTtBQUlSIiwiZmlsZSI6InBvc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmd7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LWdyYWRpZW50KGxpbmVhcixsZWZ0IHRvcCxyaWdodCB0b3AsZnJvbSgjZTk0ZTI0KSx0bygjZjA3ZTI2KSk7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsI2U5NGUyNCwjZjA3ZTI2KTtcclxuICAgIGNvbG9yOiNmZmYgIWltcG9ydGFudDtcclxuICAgIHBhZGRpbmctdG9wOiAycmVtO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDJyZW07XHJcbn1cclxuXHJcbi5iZy0ye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U3ZTdlNyAhaW1wb3J0YW50O1xyXG59XHJcbmltZ3tcclxuICAgIG1heC13aWR0aDogMTAwJTtcclxufVxyXG4udGl0dWxve1xyXG4gICAgXHJcbiAgICBmb250LXNpemU6IDNyZW07XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgY29sb3I6ICNGMDdFMjY7XHJcbn1cclxuLmluZm97XHJcbiAgICBwYWRkaW5nLXRvcDogMnJlbTtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxcmVtO1xyXG59XHJcblxyXG4ucG9zdC1ibG9nLWRpdntcclxuICAgIHBhZGRpbmctdG9wOiAzcmVtO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDNyZW07XHJcbiAgICBwe1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjNyZW0gIWltcG9ydGFudDtcclxuICAgICAgICBjb2xvcjogIzFhMjAyNTtcclxuICAgIH1cclxuICAgIFxyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PostComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-post',
                templateUrl: './post.component.html',
                styleUrls: ['./post.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_pages_home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/pages/home/home.component */ "1LmZ");
/* harmony import */ var src_app_pages_empresa_empresa_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/pages/empresa/empresa.component */ "nLaK");
/* harmony import */ var src_app_pages_blog_blog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/pages/blog/blog.component */ "5tuB");
/* harmony import */ var src_app_pages_post_post_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/pages/post/post.component */ "okR5");
/* harmony import */ var src_app_pages_produtos_produtos_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/pages/produtos/produtos.component */ "5taI");
/* harmony import */ var src_app_pages_produtopg_produtopg_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/pages/produtopg/produtopg.component */ "MUn8");


//pages








const routes = [
    { path: '', component: src_app_pages_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] },
    { path: 'empresa', component: src_app_pages_empresa_empresa_component__WEBPACK_IMPORTED_MODULE_3__["EmpresaComponent"] },
    { path: 'blog', component: src_app_pages_blog_blog_component__WEBPACK_IMPORTED_MODULE_4__["BlogComponent"] },
    { path: 'blog/:id', component: src_app_pages_blog_blog_component__WEBPACK_IMPORTED_MODULE_4__["BlogComponent"] },
    { path: 'post/:id', component: src_app_pages_post_post_component__WEBPACK_IMPORTED_MODULE_5__["PostComponent"] },
    { path: 'produtos', component: src_app_pages_produtos_produtos_component__WEBPACK_IMPORTED_MODULE_6__["ProdutosComponent"] },
    { path: 'produto/:id', component: src_app_pages_produtopg_produtopg_component__WEBPACK_IMPORTED_MODULE_7__["ProdutopgComponent"] }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zXNE":
/*!*************************************************!*\
  !*** ./src/app/components/mvv/mvv.component.ts ***!
  \*************************************************/
/*! exports provided: MvvComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MvvComponent", function() { return MvvComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class MvvComponent {
    constructor() { }
    ngOnInit() {
    }
}
MvvComponent.ɵfac = function MvvComponent_Factory(t) { return new (t || MvvComponent)(); };
MvvComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MvvComponent, selectors: [["app-mvv"]], decls: 30, vars: 0, consts: [[1, "bg"], [1, "container-lg", "cont-cont"], [1, "row", "w-100", "m-0"], [1, "col-4", "cont"], [1, "over"], [1, "border-bg"], [1, "text-center"], [1, "mt-4"]], template: function MvvComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Miss\u00E3o");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Vis\u00E3o");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Valores");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".bg[_ngcontent-%COMP%] {\n  background: #e7e7e7;\n}\n\n.cont[_ngcontent-%COMP%] {\n  min-height: 20rem;\n}\n\n.cont-cont[_ngcontent-%COMP%] {\n  padding-top: 2rem;\n  padding-bottom: 0rem;\n}\n\nimg[_ngcontent-%COMP%] {\n  max-width: 100%;\n}\n\n.over[_ngcontent-%COMP%] {\n  margin-top: -4rem;\n  left: 0;\n  top: 0;\n  position: absolute;\n  padding-left: 1rem;\n  padding-right: 1rem;\n  width: 100%;\n}\n\n.border-bg[_ngcontent-%COMP%] {\n  border-top-left-radius: 24px;\n  border-bottom-left-radius: 24px;\n  border-bottom-right-radius: 24px;\n  padding-left: 2rem;\n  padding-right: 2rem;\n  background: #fff;\n  padding-top: 25px;\n  height: 20rem;\n}\n\nh1[_ngcontent-%COMP%] {\n  color: #F07E26;\n}\n\np[_ngcontent-%COMP%] {\n  font-weight: 600;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxtdnYuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxtQkFBQTtBQUNKOztBQUNBO0VBRUksaUJBQUE7QUFDSjs7QUFDQTtFQUNJLGlCQUFBO0VBQ0Esb0JBQUE7QUFFSjs7QUFDQTtFQUNJLGVBQUE7QUFFSjs7QUFBQTtFQUdJLGlCQUFBO0VBQ0EsT0FBQTtFQUNBLE1BQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0FBQ0o7O0FBRUE7RUFDSSw0QkFBQTtFQUNBLCtCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7QUFDSjs7QUFFQTtFQUNJLGNBQUE7QUFDSjs7QUFFQTtFQUNJLGdCQUFBO0FBQ0oiLCJmaWxlIjoibXZ2LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJne1xyXG4gICAgYmFja2dyb3VuZDogI2U3ZTdlNztcclxufVxyXG4uY29udHtcclxuICAgIFxyXG4gICAgbWluLWhlaWdodDogMjByZW07XHJcbn1cclxuLmNvbnQtY29udHtcclxuICAgIHBhZGRpbmctdG9wOiAycmVtO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDByZW07XHJcblxyXG59XHJcbmltZ3tcclxuICAgIG1heC13aWR0aDogMTAwJTtcclxufVxyXG4ub3ZlcntcclxuICAgXHJcbiAgIFxyXG4gICAgbWFyZ2luLXRvcDogLTRyZW07XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxcmVtO1xyXG4gICAgcGFkZGluZy1yaWdodDogMXJlbTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgXHJcbn1cclxuLmJvcmRlci1iZ3tcclxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDI0cHg7XHJcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAyNHB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDI0cHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDJyZW07XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAycmVtO1xyXG4gICAgYmFja2dyb3VuZDojZmZmO1xyXG4gICAgcGFkZGluZy10b3A6IDI1cHg7XHJcbiAgICBoZWlnaHQ6IDIwcmVtO1xyXG59XHJcblxyXG5oMXtcclxuICAgIGNvbG9yOiNGMDdFMjY7XHJcbn1cclxuXHJcbnB7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MvvComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-mvv',
                templateUrl: './mvv.component.html',
                styleUrls: ['./mvv.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "zcsJ":
/*!***************************************************************!*\
  !*** ./src/app/components/blogheader/blogheader.component.ts ***!
  \***************************************************************/
/*! exports provided: BlogheaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogheaderComponent", function() { return BlogheaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _noticiabox_noticiabox_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../noticiabox/noticiabox.component */ "3c5x");




class BlogheaderComponent {
    constructor(route) {
        this.route = route;
        this.obj1 = {
            titulo: "Título do post de blog",
            imagen: "assets/img/banner_site_produto.png",
            id: 'Titulo_do_post_de_blog',
            gravata: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna tpat"
        };
    }
    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            if (!isNaN(params['id']) && params['id'] != undefined) {
                this.id = +params['id']; // (+) converts string 'id' to a number
            }
            else {
                this.id = 1;
            }
            console.log(this.id);
            // In a real app: dispatch action to load the details here.
        });
    }
    ngOnDestroy() {
        this.sub.unsubscribe();
    }
}
BlogheaderComponent.ɵfac = function BlogheaderComponent_Factory(t) { return new (t || BlogheaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"])); };
BlogheaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BlogheaderComponent, selectors: [["app-blogheader"]], decls: 19, vars: 16, consts: [[1, "bg"], [1, "container-lg"], [1, "row", "w-100"], [1, "col", "text-center", "col-h1"], [1, "bg-2"], [1, "col-6", "text-center", "pt-4", "mt-4"], [3, "titulo", "imagen", "gravata", "id"]], template: function BlogheaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "BLOG FIXDOOR");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "app-noticiabox", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "app-noticiabox", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "app-noticiabox", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "app-noticiabox", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("titulo", ctx.obj1.titulo)("imagen", ctx.obj1.imagen)("gravata", ctx.obj1.gravata)("id", ctx.obj1.id);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("titulo", ctx.obj1.titulo)("imagen", ctx.obj1.imagen)("gravata", ctx.obj1.gravata)("id", ctx.obj1.id);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("titulo", ctx.obj1.titulo)("imagen", ctx.obj1.imagen)("gravata", ctx.obj1.gravata)("id", ctx.obj1.id);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("titulo", ctx.obj1.titulo)("imagen", ctx.obj1.imagen)("gravata", ctx.obj1.gravata)("id", ctx.obj1.id);
    } }, directives: [_noticiabox_noticiabox_component__WEBPACK_IMPORTED_MODULE_2__["NoticiaboxComponent"]], styles: [".bg[_ngcontent-%COMP%] {\n  background-image: linear-gradient(to right, #e94e24, #f07e26);\n  color: #fff;\n  padding-top: 2rem;\n  padding-bottom: 2rem;\n}\n\n.bg-2[_ngcontent-%COMP%] {\n  background-color: #e7e7e7 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxibG9naGVhZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksNkRBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtBQUNKOztBQUVBO0VBQ0ksb0NBQUE7QUFDSiIsImZpbGUiOiJibG9naGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJne1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1ncmFkaWVudChsaW5lYXIsbGVmdCB0b3AscmlnaHQgdG9wLGZyb20oI2U5NGUyNCksdG8oI2YwN2UyNikpO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCNlOTRlMjQsI2YwN2UyNik7XHJcbiAgICBjb2xvcjojZmZmO1xyXG4gICAgcGFkZGluZy10b3A6IDJyZW07XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMnJlbTtcclxufVxyXG5cclxuLmJnLTJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTdlN2U3ICFpbXBvcnRhbnQ7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BlogheaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-blogheader',
                templateUrl: './blogheader.component.html',
                styleUrls: ['./blogheader.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map