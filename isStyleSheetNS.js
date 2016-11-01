"use strict";
/* global window, IMDebugger, $, __imns */
var adr = __imns('util.validation');
// var adr = window; //for stand-alone delete above and uncomment this line
if(!('isStyleSheet' in adr)){
    /**
     * @function isStyleSheet
     * @param s {CSSStyleSheeet}
     * @return {Boolean}
     * @description attempts to ascertain if supplied is a CSS Style Sheet
     **/
    adr.isStyleSheet = function(s){
        if(s !== undefined){
            if('CSSStyleSheet' in window){
                return (s instanceof window.CSSStyleSheet) ? true : false;
            } else if('styleSheet' in window){
                return (s instanceof window.styleSheet) ? true : false; }}
        return false; };
}
