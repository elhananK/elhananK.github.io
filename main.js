(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<elh-navigation></elh-navigation>\n\n\n<div class=\"scroller\"></div>\n\n\n<!-- style=\"background-color: rgba(255, 0, 0, 0.438)\" -->\n<section class=\"page-section\" #sectionsOne\n  [ngStyle]=\"{zIndex: 3}\">\n  <div>\n\n    <elh-photo-description\n      maxWidth=\"250px\"\n      subTitle=\"Improve Your Photo Taking Skills\"\n      subDescription=\"Expirement with your photos and find out which of them\n      are WOW. Discover what's popular and Receive awesome\n      insights. As you level up in the game, you'll find yourself\n      improving your photo-taking skills, too.\">\n    </elh-photo-description>\n\n  </div>\n  <div class=\"img-section\">\n    <div class=\"img\" style=\"background-image: url('assets/first.jpg')\"></div>\n  </div>\n</section>\n\n\n<!-- style=\"background-color: rgba(255, 255, 0, 0.466)\" -->\n<section class=\"page-section animation-scroll-down\" #sectionsTwo\n  [ngStyle]=\"{zIndex: 2}\">\n  <div class=\"img-section align-right\" >\n    <div class=\"gallery\">\n      <div class=\"cell\">\n        <div *ngFor=\"let item of images\" class=\"cube-img\" #imageRef\n          [ngStyle]=\"{'background-image': 'url(' + item.img + ')'}\">\n          <img *ngIf=\"item.logo\" [src]=\"item.logo\" alt=\"image-logo\">\n        </div>\n      </div>\n    </div>\n  </div>\n  <div>\n\n      <elh-photo-description\n        maxWidth=\"386px\"\n        subTitle=\"GuruShots Makes Your Photos More Meaningful\"\n        subDescription=\"Get massive exposure for your photos and\n         meaningful recognation from a global community of people like you.\n        Best of the best, players can go from virtual to real world recognation\n        by being featured in magazines and\n        newspapers - and even international photo exhibitions!\">\n      </elh-photo-description>\n\n    </div>\n</section>\n\n\n<!-- style=\"background-color: green\" -->\n<section class=\"page-section animation-scroll-down\" #sectionsThree\n  [ngStyle]=\"{zIndex: 1}\">\n\n  <div>\n    <elh-photo-description\n      maxWidth=\"320px\"\n      subTitle=\"Get your photos exhibited in galleries around the world\"\n      subDescription=\"From New York and London to Cape Town,\n      Singapore and beyond. Around 5000 GuruShots players\n      are recognized each month, with tens of thousands already\n      exhibited. Now, you have the opportunity to get recognized,\n      and connect with like-minded friends.\">\n    </elh-photo-description>\n  </div>\n\n  <div class=\"img-section\">\n    <div class=\"img full-heigth\" #imageAnim\n      style=\"background-image: url('../assets/third.jpg');\">\n    </div>\n  </div>\n\n</section>\n\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host .page-section {\n  width: 100%;\n  height: 100vh;\n  top: 0;\n  position: fixed;\n  display: flex;\n  background-color: white;\n  transition: -webkit-transform .6s ease;\n  transition: transform .6s ease;\n  transition: transform .6s ease, -webkit-transform .6s ease;\n  -webkit-transform: translateY(0%);\n          transform: translateY(0%); }\n  :host .page-section div {\n    display: flex;\n    justify-content: center;\n    flex-direction: column;\n    flex: 1;\n    height: 100%; }\n  :host .page-section .img-section {\n    flex-flow: wrap;\n    align-items: center;\n    overflow: hidden; }\n  :host .page-section .img-section.align-right {\n      justify-content: left; }\n  :host .page-section .img-section .gallery {\n      max-width: 515px;\n      display: table; }\n  :host .page-section .img-section .gallery .cell {\n        display: table-cell;\n        vertical-align: middle; }\n  :host .page-section .img-section .img {\n      -webkit-transform: translateY(22px);\n              transform: translateY(22px);\n      height: 80%;\n      width: 100%;\n      background-size: cover;\n      background-position: center; }\n  :host .page-section .img-section .img.full-heigth {\n        height: 100%;\n        transition: -webkit-transform 3s .3s ease;\n        transition: transform 3s .3s ease;\n        transition: transform 3s .3s ease, -webkit-transform 3s .3s ease;\n        -webkit-transform: scale(1.1);\n                transform: scale(1.1);\n        background-position: -160px; }\n  :host .page-section .img-section .img.image-animation {\n        -webkit-transform: scale(1);\n                transform: scale(1); }\n  :host .page-section .img-section .cube-img {\n      overflow: hidden;\n      width: 150px;\n      height: 150px;\n      margin: 5px;\n      display: inline-block;\n      background-size: cover;\n      background-position: center;\n      -webkit-transform: scale(0);\n              transform: scale(0);\n      transition: -webkit-transform .5s ease;\n      transition: transform .5s ease;\n      transition: transform .5s ease, -webkit-transform .5s ease;\n      position: relative; }\n  :host .page-section .img-section .cube-img img {\n        -webkit-transform: scale(0);\n                transform: scale(0);\n        transition: -webkit-transform .5s ease;\n        transition: transform .5s ease;\n        transition: transform .5s ease, -webkit-transform .5s ease; }\n  :host .page-section .img-section .cube-img.animate-img {\n        -webkit-transform: scale(1);\n                transform: scale(1); }\n  :host .page-section .img-section .cube-img.animate-img:nth-child(1) {\n          transition-delay: 0.1s; }\n  :host .page-section .img-section .cube-img.animate-img:nth-child(1) img {\n            -webkit-transform: scale(1);\n                    transform: scale(1);\n            transition-delay: 2.1s; }\n  :host .page-section .img-section .cube-img.animate-img:nth-child(2) {\n          transition-delay: 0.2s; }\n  :host .page-section .img-section .cube-img.animate-img:nth-child(2) img {\n            -webkit-transform: scale(1);\n                    transform: scale(1);\n            transition-delay: 2.2s; }\n  :host .page-section .img-section .cube-img.animate-img:nth-child(3) {\n          transition-delay: 0.3s; }\n  :host .page-section .img-section .cube-img.animate-img:nth-child(3) img {\n            -webkit-transform: scale(1);\n                    transform: scale(1);\n            transition-delay: 2.3s; }\n  :host .page-section .img-section .cube-img.animate-img:nth-child(4) {\n          transition-delay: 0.4s; }\n  :host .page-section .img-section .cube-img.animate-img:nth-child(4) img {\n            -webkit-transform: scale(1);\n                    transform: scale(1);\n            transition-delay: 2.4s; }\n  :host .page-section .img-section .cube-img.animate-img:nth-child(5) {\n          transition-delay: 0.5s; }\n  :host .page-section .img-section .cube-img.animate-img:nth-child(5) img {\n            -webkit-transform: scale(1);\n                    transform: scale(1);\n            transition-delay: 2.5s; }\n  :host .page-section .img-section .cube-img.animate-img:nth-child(6) {\n          transition-delay: 0.6s; }\n  :host .page-section .img-section .cube-img.animate-img:nth-child(6) img {\n            -webkit-transform: scale(1);\n                    transform: scale(1);\n            transition-delay: 2.6s; }\n  :host .page-section .img-section .cube-img.animate-img:nth-child(7) {\n          transition-delay: 0.7s; }\n  :host .page-section .img-section .cube-img.animate-img:nth-child(7) img {\n            -webkit-transform: scale(1);\n                    transform: scale(1);\n            transition-delay: 2.7s; }\n  :host .page-section .img-section .cube-img.animate-img:nth-child(8) {\n          transition-delay: 0.8s; }\n  :host .page-section .img-section .cube-img.animate-img:nth-child(8) img {\n            -webkit-transform: scale(1);\n                    transform: scale(1);\n            transition-delay: 2.8s; }\n  :host .page-section .img-section .cube-img.animate-img:nth-child(9) {\n          transition-delay: 0.9s; }\n  :host .page-section .img-section .cube-img.animate-img:nth-child(9) img {\n            -webkit-transform: scale(1);\n                    transform: scale(1);\n            transition-delay: 2.9s; }\n  :host .page-section .img-section .cube-img img {\n        width: 70%;\n        position: absolute;\n        top: 0;\n        bottom: 0;\n        left: 0;\n        right: 0;\n        margin: auto; }\n  :host .page-section.animation-scroll-up {\n    -webkit-transform: translateY(-100%);\n            transform: translateY(-100%); }\n  :host .page-section.animation-scroll-down {\n    -webkit-transform: translateY(100%);\n            transform: translateY(100%); }\n  :host .scroller {\n  box-shadow: 0 0 0 10px #27d6bf inset;\n  height: calc(100vh * 3); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9FbGhhbmFuL0Rlc2t0b3AvR3VydVNob3RzV29ya2luZy9zY3JvbGxBbmltYXRpb24tbWFzdGVyL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBSUksV0FBVztFQUNYLGFBQWE7RUFDYixNQUFNO0VBQ04sZUFBZTtFQUVmLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsc0NBQThCO0VBQTlCLDhCQUE4QjtFQUE5QiwwREFBOEI7RUFDOUIsaUNBQXlCO1VBQXpCLHlCQUF5QixFQUFBO0VBWjdCO0lBZ0JNLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsc0JBQXNCO0lBQ3RCLE9BQU87SUFDUCxZQUFZLEVBQUE7RUFwQmxCO0lBd0JNLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsZ0JBQWdCLEVBQUE7RUExQnRCO01BNkJRLHFCQUFxQixFQUFBO0VBN0I3QjtNQWlDUSxnQkFBZ0I7TUFDaEIsY0FBYyxFQUFBO0VBbEN0QjtRQXFDVSxtQkFBbUI7UUFDbkIsc0JBQXNCLEVBQUE7RUF0Q2hDO01BMkNRLG1DQUEyQjtjQUEzQiwyQkFBMkI7TUFDM0IsV0FBVztNQUNYLFdBQVc7TUFDWCxzQkFBc0I7TUFDdEIsMkJBQTJCLEVBQUE7RUEvQ25DO1FBa0RVLFlBQVk7UUFDWix5Q0FBaUM7UUFBakMsaUNBQWlDO1FBQWpDLGdFQUFpQztRQUNqQyw2QkFBcUI7Z0JBQXJCLHFCQUFxQjtRQUNyQiwyQkFBMkIsRUFBQTtFQXJEckM7UUF5RFUsMkJBQW1CO2dCQUFuQixtQkFBbUIsRUFBQTtFQXpEN0I7TUE4RFEsZ0JBQWdCO01BQ2hCLFlBQVk7TUFDWixhQUFhO01BQ2IsV0FBVztNQUNYLHFCQUFxQjtNQUNyQixzQkFBc0I7TUFDdEIsMkJBQTJCO01BQzNCLDJCQUFtQjtjQUFuQixtQkFBbUI7TUFDbkIsc0NBQThCO01BQTlCLDhCQUE4QjtNQUE5QiwwREFBOEI7TUFDOUIsa0JBQWtCLEVBQUE7RUF2RTFCO1FBMEVVLDJCQUFtQjtnQkFBbkIsbUJBQW1CO1FBQ25CLHNDQUE4QjtRQUE5Qiw4QkFBOEI7UUFBOUIsMERBQThCLEVBQUE7RUEzRXhDO1FBK0VVLDJCQUFtQjtnQkFBbkIsbUJBQW1CLEVBQUE7RUEvRTdCO1VBbUZjLHNCQUEyQixFQUFBO0VBbkZ6QztZQXNGZ0IsMkJBQW1CO29CQUFuQixtQkFBbUI7WUFDbkIsc0JBQWtDLEVBQUE7RUF2RmxEO1VBbUZjLHNCQUEyQixFQUFBO0VBbkZ6QztZQXNGZ0IsMkJBQW1CO29CQUFuQixtQkFBbUI7WUFDbkIsc0JBQWtDLEVBQUE7RUF2RmxEO1VBbUZjLHNCQUEyQixFQUFBO0VBbkZ6QztZQXNGZ0IsMkJBQW1CO29CQUFuQixtQkFBbUI7WUFDbkIsc0JBQWtDLEVBQUE7RUF2RmxEO1VBbUZjLHNCQUEyQixFQUFBO0VBbkZ6QztZQXNGZ0IsMkJBQW1CO29CQUFuQixtQkFBbUI7WUFDbkIsc0JBQWtDLEVBQUE7RUF2RmxEO1VBbUZjLHNCQUEyQixFQUFBO0VBbkZ6QztZQXNGZ0IsMkJBQW1CO29CQUFuQixtQkFBbUI7WUFDbkIsc0JBQWtDLEVBQUE7RUF2RmxEO1VBbUZjLHNCQUEyQixFQUFBO0VBbkZ6QztZQXNGZ0IsMkJBQW1CO29CQUFuQixtQkFBbUI7WUFDbkIsc0JBQWtDLEVBQUE7RUF2RmxEO1VBbUZjLHNCQUEyQixFQUFBO0VBbkZ6QztZQXNGZ0IsMkJBQW1CO29CQUFuQixtQkFBbUI7WUFDbkIsc0JBQWtDLEVBQUE7RUF2RmxEO1VBbUZjLHNCQUEyQixFQUFBO0VBbkZ6QztZQXNGZ0IsMkJBQW1CO29CQUFuQixtQkFBbUI7WUFDbkIsc0JBQWtDLEVBQUE7RUF2RmxEO1VBbUZjLHNCQUEyQixFQUFBO0VBbkZ6QztZQXNGZ0IsMkJBQW1CO29CQUFuQixtQkFBbUI7WUFDbkIsc0JBQWtDLEVBQUE7RUF2RmxEO1FBOEZVLFVBQVU7UUFDVixrQkFBa0I7UUFDbEIsTUFBTTtRQUNOLFNBQVM7UUFDVCxPQUFPO1FBQ1AsUUFBUTtRQUNSLFlBQVksRUFBQTtFQXBHdEI7SUEwR00sb0NBQTRCO1lBQTVCLDRCQUE0QixFQUFBO0VBMUdsQztJQThHTSxtQ0FBMkI7WUFBM0IsMkJBQTJCLEVBQUE7RUE5R2pDO0VBcUhJLG9DQUE4QztFQUM5Qyx1QkFBdUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcblxuXG4gIC5wYWdlLXNlY3Rpb24ge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgdG9wOiAwO1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAvLyBib3gtc2hhZG93OiAwIDAgMCAxMHB4IHJlZCBpbnNldDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAuNnMgZWFzZTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCUpO1xuXG5cbiAgICBkaXYge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIGZsZXg6IDE7XG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgfVxuXG4gICAgLmltZy1zZWN0aW9uIHtcbiAgICAgIGZsZXgtZmxvdzogd3JhcDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xuXG4gICAgICAmLmFsaWduLXJpZ2h0IHtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBsZWZ0O1xuICAgICAgfVxuXG4gICAgICAuZ2FsbGVyeSB7XG4gICAgICAgIG1heC13aWR0aDogNTE1cHg7XG4gICAgICAgIGRpc3BsYXk6IHRhYmxlO1xuXG4gICAgICAgIC5jZWxsIHtcbiAgICAgICAgICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xuICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLmltZyB7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgyMnB4KTtcbiAgICAgICAgaGVpZ2h0OiA4MCU7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG5cbiAgICAgICAgJi5mdWxsLWhlaWd0aCB7XG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAzcyAuM3MgZWFzZTtcbiAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG4gICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTE2MHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgJi5pbWFnZS1hbmltYXRpb24ge1xuICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLmN1YmUtaW1nIHtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgd2lkdGg6IDE1MHB4O1xuICAgICAgICBoZWlnaHQ6IDE1MHB4O1xuICAgICAgICBtYXJnaW46IDVweDtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XG4gICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAuNXMgZWFzZTtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICAgICAgIGltZyB7XG4gICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcbiAgICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjVzIGVhc2U7XG4gICAgICAgIH1cblxuICAgICAgICAmLmFuaW1hdGUtaW1nIHtcbiAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuXG4gICAgICAgICAgQGZvciAkaSBmcm9tIDEgdGhyb3VnaCA5IHtcbiAgICAgICAgICAgICY6bnRoLWNoaWxkKCN7JGl9KSB7XG4gICAgICAgICAgICAgIHRyYW5zaXRpb24tZGVsYXk6ICRpICogMC4xcztcblxuICAgICAgICAgICAgICBpbWcge1xuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbi1kZWxheTogMnMgKyAoJGkgKiAwLjFzKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGltZyB7XG4gICAgICAgICAgd2lkdGg6IDcwJTtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgICYuYW5pbWF0aW9uLXNjcm9sbC11cCB7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwMCUpO1xuICAgIH1cblxuICAgICYuYW5pbWF0aW9uLXNjcm9sbC1kb3duIHtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMDAlKTtcbiAgICB9XG5cbiAgfVxuXG5cbiAgLnNjcm9sbGVyIHtcbiAgICBib3gtc2hhZG93OiAwIDAgMCAxMHB4IHJnYigzOSwgMjE0LCAxOTEpIGluc2V0O1xuICAgIGhlaWdodDogY2FsYygxMDB2aCAqIDMpO1xuICB9XG5cblxufVxuIl19 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent(renderer) {
        this.renderer = renderer;
        this.animationScrollUp = 'animation-scroll-up';
        this.animationScrollDown = 'animation-scroll-down';
        this.imagesAnimationScale = 'animate-img';
        this.imagesAnimationOnLastSection = 'image-animation';
        this.lastIndex = 0;
        this.images = [
            { img: 'assets/first.jpg', logo: 'assets/1.png' },
            { img: 'assets/team-1.jpg', logo: '' },
            { img: 'assets/team-2.jpg', logo: '' },
            { img: 'assets/team-3.jpg', logo: '' },
            { img: 'assets/team-4.jpg', logo: '' },
            { img: 'assets/testimonial-1.jpg', logo: 'assets/1.png' },
            { img: 'assets/testimonial-2.jpg', logo: 'assets/1.png' },
            { img: 'assets/testimonial-3.jpg', logo: '' },
            { img: 'assets/testimonial-4.jpg', logo: '' },
        ];
    }
    AppComponent.prototype.whenScroll = function () {
        this.updatePage();
    };
    AppComponent.prototype.whenResized = function () {
        this.updatePage();
    };
    AppComponent.prototype.ngAfterContentInit = function () {
        this.updatePage();
    };
    AppComponent.prototype.addImagesOnTable = function (add) {
        var _this = this;
        if (this.imagesRef) {
            var arr = this.imagesRef.toArray();
            arr.forEach(function (element) {
                if (add) {
                    _this.renderer.addClass(element.nativeElement, _this.imagesAnimationScale);
                }
                else {
                    _this.renderer.removeClass(element.nativeElement, _this.imagesAnimationScale);
                }
            });
        }
    };
    AppComponent.prototype.addImagesOnLastSection = function (add) {
        if (this.imageAnim) {
            if (add) {
                this.renderer.addClass(this.imageAnim.nativeElement, this.imagesAnimationOnLastSection);
            }
            else {
                this.renderer.removeClass(this.imageAnim.nativeElement, this.imagesAnimationOnLastSection);
            }
        }
    };
    AppComponent.prototype.updatePage = function () {
        if (this.sectionOne) {
            var pageY = window.scrollY;
            var innerHeight_1 = window.innerHeight;
            this.isPageScrollingDown = pageY >= this.lastIndex;
            if (this.isPageScrollingDown) {
                if (pageY > 80 && pageY < innerHeight_1) {
                    this.renderer.addClass(this.sectionOne.nativeElement, this.animationScrollUp);
                    this.renderer.removeClass(this.sectionTwo.nativeElement, this.animationScrollDown);
                    this.addImagesOnTable(true);
                }
                else if (pageY > innerHeight_1 + 80) {
                    this.renderer.addClass(this.sectionOne.nativeElement, this.animationScrollUp);
                    this.renderer.addClass(this.sectionTwo.nativeElement, this.animationScrollUp);
                    this.addImagesOnTable(false);
                    this.renderer.removeClass(this.sectionThree.nativeElement, this.animationScrollDown);
                    this.addImagesOnLastSection(true);
                }
            }
            else {
                if (pageY < innerHeight_1 - 80) {
                    this.renderer.removeClass(this.sectionOne.nativeElement, this.animationScrollUp);
                    this.renderer.addClass(this.sectionTwo.nativeElement, this.animationScrollDown);
                    this.addImagesOnTable(false);
                }
                else if (pageY < (innerHeight_1 * 2 + 80) && pageY > innerHeight_1 + 80) {
                    this.renderer.addClass(this.sectionThree.nativeElement, this.animationScrollDown);
                    this.addImagesOnLastSection(false);
                    this.renderer.removeClass(this.sectionTwo.nativeElement, this.animationScrollUp);
                    this.renderer.removeClass(this.sectionTwo.nativeElement, this.animationScrollDown);
                    this.addImagesOnTable(true);
                }
            }
            this.lastIndex = pageY;
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('sectionsOne'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], AppComponent.prototype, "sectionOne", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('sectionsTwo'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], AppComponent.prototype, "sectionTwo", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('sectionsThree'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], AppComponent.prototype, "sectionThree", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('imageAnim'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], AppComponent.prototype, "imageAnim", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChildren"])('imageRef'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["QueryList"])
    ], AppComponent.prototype, "imagesRef", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:scroll'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", []),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], AppComponent.prototype, "whenScroll", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:resize'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", []),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], AppComponent.prototype, "whenResized", null);
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'elh-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./navigation/navigation.component */ "./src/app/navigation/navigation.component.ts");
/* harmony import */ var _photo_description_photo_description_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./photo-description/photo-description.component */ "./src/app/photo-description/photo-description.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");







var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_4__["NavigationComponent"],
                _photo_description_photo_description_component__WEBPACK_IMPORTED_MODULE_5__["PhotoDescriptionComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"],
            ],
            providers: [],
            bootstrap: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]
            ]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/navigation/navigation.component.html":
/*!******************************************************!*\
  !*** ./src/app/navigation/navigation.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav>\n\n  <div>\n\n    <div class=\"logo\">\n      <img src=\"assets/logo.png\" alt=\"logo\" />\n    </div>\n\n    <div class=\"nav-bar\">\n      <button class=\"sign-up\">Sign up</button>\n      <button>Login</button>\n      <span></span>\n      <a>Discover</a>\n      <a>Acticles</a>\n      <a>Exhibitions</a>\n      <a>Partners</a>\n    </div>\n\n  </div>\n\n</nav>\n"

/***/ }),

/***/ "./src/app/navigation/navigation.component.scss":
/*!******************************************************!*\
  !*** ./src/app/navigation/navigation.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  position: fixed;\n  width: 100%;\n  z-index: 40; }\n  :host nav {\n    background-color: #1f1e1f; }\n  :host nav > div {\n      max-width: 1366px;\n      margin: 0 auto;\n      padding: 0 70px;\n      display: flex; }\n  :host nav .nav-bar {\n      flex: 1;\n      direction: rtl;\n      align-items: center;\n      display: flex; }\n  :host nav a, :host nav button {\n      color: white;\n      outline: none;\n      padding: 4px 12px;\n      margin: 4px;\n      font-size: 11px; }\n  :host nav span {\n      margin: 20px; }\n  :host nav button {\n      background-color: transparent;\n      border: none; }\n  :host nav .sign-up {\n      border: solid 1px;\n      border-radius: 4px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9FbGhhbmFuL0Rlc2t0b3AvR3VydVNob3RzV29ya2luZy9zY3JvbGxBbmltYXRpb24tbWFzdGVyL3NyYy9hcHAvbmF2aWdhdGlvbi9uYXZpZ2F0aW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBZTtFQUNmLFdBQVc7RUFDWCxXQUFXLEVBQUE7RUFIYjtJQUtJLHlCQUF5QixFQUFBO0VBTDdCO01BUU0saUJBQWlCO01BQ2pCLGNBQWM7TUFDZCxlQUFlO01BQ2YsYUFBYSxFQUFBO0VBWG5CO01BZU0sT0FBTztNQUNQLGNBQWM7TUFDZCxtQkFBbUI7TUFDbkIsYUFDRixFQUFBO0VBbkJKO01Bc0JNLFlBQVk7TUFDWixhQUFhO01BQ2IsaUJBQWlCO01BQ2pCLFdBQVc7TUFDWCxlQUFlLEVBQUE7RUExQnJCO01BOEJNLFlBQVksRUFBQTtFQTlCbEI7TUFrQ00sNkJBQTZCO01BQzdCLFlBQVksRUFBQTtFQW5DbEI7TUF1Q00saUJBQWlCO01BQ2pCLGtCQUFrQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvbmF2aWdhdGlvbi9uYXZpZ2F0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHdpZHRoOiAxMDAlO1xuICB6LWluZGV4OiA0MDtcbiAgbmF2IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWYxZTFmO1xuXG4gICAgJj5kaXYge1xuICAgICAgbWF4LXdpZHRoOiAxMzY2cHg7XG4gICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgIHBhZGRpbmc6IDAgNzBweDtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgfVxuXG4gICAgLm5hdi1iYXIge1xuICAgICAgZmxleDogMTtcbiAgICAgIGRpcmVjdGlvbjogcnRsO1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGRpc3BsYXk6IGZsZXhcbiAgICB9XG5cbiAgICBhLCBidXR0b24ge1xuICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgIHBhZGRpbmc6IDRweCAxMnB4O1xuICAgICAgbWFyZ2luOiA0cHg7XG4gICAgICBmb250LXNpemU6IDExcHg7XG4gICAgfVxuXG4gICAgc3BhbiB7XG4gICAgICBtYXJnaW46IDIwcHg7XG4gICAgfVxuXG4gICAgYnV0dG9uIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgYm9yZGVyOiBub25lO1xuICAgIH1cblxuICAgIC5zaWduLXVwIHtcbiAgICAgIGJvcmRlcjogc29saWQgMXB4O1xuICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIH1cbiAgfVxufVxuIl19 */"

/***/ }),

/***/ "./src/app/navigation/navigation.component.ts":
/*!****************************************************!*\
  !*** ./src/app/navigation/navigation.component.ts ***!
  \****************************************************/
/*! exports provided: NavigationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationComponent", function() { return NavigationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NavigationComponent = /** @class */ (function () {
    function NavigationComponent() {
    }
    NavigationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'elh-navigation',
            template: __webpack_require__(/*! ./navigation.component.html */ "./src/app/navigation/navigation.component.html"),
            styles: [__webpack_require__(/*! ./navigation.component.scss */ "./src/app/navigation/navigation.component.scss")]
        })
    ], NavigationComponent);
    return NavigationComponent;
}());



/***/ }),

/***/ "./src/app/photo-description/photo-description.component.html":
/*!********************************************************************!*\
  !*** ./src/app/photo-description/photo-description.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"improve-section\">\n    <h3 [ngStyle]=\"{'max-width': maxWidth}\"> {{subTitle}} </h3>\n    <p> {{subDescription}} </p>\n    <article>\n      <a (click)=\"whenLinkClicked.emit()\">Join Now, it's free</a>\n    </article>\n  </div>\n"

/***/ }),

/***/ "./src/app/photo-description/photo-description.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/photo-description/photo-description.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  padding: 150px; }\n  :host h3 {\n    font-size: 40px; }\n  :host p {\n    font-size: 15px;\n    margin: 15px 0;\n    max-width: 390px; }\n  :host a {\n    padding: 12px 0;\n    padding-right: 25px;\n    cursor: pointer;\n    font-size: 16px;\n    padding: 12px 0;\n    font-weight: bold;\n    display: inline-block;\n    position: relative; }\n  :host a::before, :host a::after {\n      content: '';\n      position: absolute;\n      right: 0; }\n  :host a::after {\n      width: 4px;\n      height: 4px;\n      -webkit-transform: rotate(45deg);\n      transform: rotate(45deg);\n      right: -17px;\n      transform: rotate(45deg);\n      border-right: solid 2px black;\n      border-top: solid 2px black;\n      top: 19px; }\n  :host a::before {\n      width: 10px;\n      height: 2px;\n      right: -16px;\n      top: 21px;\n      background-color: black; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9FbGhhbmFuL0Rlc2t0b3AvR3VydVNob3RzV29ya2luZy9zY3JvbGxBbmltYXRpb24tbWFzdGVyL3NyYy9hcHAvcGhvdG8tZGVzY3JpcHRpb24vcGhvdG8tZGVzY3JpcHRpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFFRSxjQUFjLEVBQUE7RUFGaEI7SUFLSSxlQUFlLEVBQUE7RUFMbkI7SUFRSSxlQUFlO0lBQ2YsY0FBYztJQUNkLGdCQUFnQixFQUFBO0VBVnBCO0lBYUksZUFBZTtJQUNmLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsZUFBZTtJQUNmLGVBQWU7SUFDZixpQkFBaUI7SUFDakIscUJBQXFCO0lBQ3JCLGtCQUFrQixFQUFBO0VBcEJ0QjtNQXVCTSxXQUFXO01BQ1gsa0JBQWtCO01BQ2xCLFFBQVEsRUFBQTtFQXpCZDtNQTRCTSxVQUFVO01BQ1YsV0FBVztNQUNYLGdDQUFnQztNQUNoQyx3QkFBd0I7TUFDeEIsWUFBWTtNQUNaLHdCQUF3QjtNQUN4Qiw2QkFBNkI7TUFDN0IsMkJBQTJCO01BQzNCLFNBQVMsRUFBQTtFQXBDZjtNQXVDTSxXQUFXO01BQ1gsV0FBVztNQUNYLFlBQVk7TUFDWixTQUFTO01BQ1QsdUJBQXVCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9waG90by1kZXNjcmlwdGlvbi9waG90by1kZXNjcmlwdGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuOmhvc3Qge1xuXG4gIHBhZGRpbmc6IDE1MHB4O1xuXG4gIGgzIHtcbiAgICBmb250LXNpemU6IDQwcHg7XG4gIH1cbiAgcCB7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIG1hcmdpbjogMTVweCAwO1xuICAgIG1heC13aWR0aDogMzkwcHg7XG4gIH1cbiAgYSB7XG4gICAgcGFkZGluZzogMTJweCAwO1xuICAgIHBhZGRpbmctcmlnaHQ6IDI1cHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBwYWRkaW5nOiAxMnB4IDA7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAgICY6OmJlZm9yZSwgJjo6YWZ0ZXIge1xuICAgICAgY29udGVudDogJyc7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICByaWdodDogMDtcbiAgICB9XG4gICAgJjo6YWZ0ZXIge1xuICAgICAgd2lkdGg6IDRweDtcbiAgICAgIGhlaWdodDogNHB4O1xuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG4gICAgICByaWdodDogLTE3cHg7XG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG4gICAgICBib3JkZXItcmlnaHQ6IHNvbGlkIDJweCBibGFjaztcbiAgICAgIGJvcmRlci10b3A6IHNvbGlkIDJweCBibGFjaztcbiAgICAgIHRvcDogMTlweDtcbiAgICB9XG4gICAgJjo6YmVmb3JlIHtcbiAgICAgIHdpZHRoOiAxMHB4O1xuICAgICAgaGVpZ2h0OiAycHg7XG4gICAgICByaWdodDogLTE2cHg7XG4gICAgICB0b3A6IDIxcHg7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgICB9XG4gIH1cbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/photo-description/photo-description.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/photo-description/photo-description.component.ts ***!
  \******************************************************************/
/*! exports provided: PhotoDescriptionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhotoDescriptionComponent", function() { return PhotoDescriptionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PhotoDescriptionComponent = /** @class */ (function () {
    function PhotoDescriptionComponent() {
        this.whenLinkClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], PhotoDescriptionComponent.prototype, "subTitle", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], PhotoDescriptionComponent.prototype, "maxWidth", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], PhotoDescriptionComponent.prototype, "subDescription", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], PhotoDescriptionComponent.prototype, "whenLinkClicked", void 0);
    PhotoDescriptionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'elh-photo-description',
            template: __webpack_require__(/*! ./photo-description.component.html */ "./src/app/photo-description/photo-description.component.html"),
            styles: [__webpack_require__(/*! ./photo-description.component.scss */ "./src/app/photo-description/photo-description.component.scss")]
        })
    ], PhotoDescriptionComponent);
    return PhotoDescriptionComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
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
var environment = {
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

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/Elhanan/Desktop/GuruShotsWorking/scrollAnimation-master/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map