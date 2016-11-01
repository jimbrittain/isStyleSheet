"use strict";
/* global window, IMDebugger, $, __imns */
/**
 * @function isStyleSheet
 * @param s {CSSStyleSheeet}
 * @return {Boolean}
 * @description attempts to ascertain if supplied is a CSS Style Sheet
 **/
var isStyleSheet = function(s){
    if(s !== undefined){
        if('CSSStyleSheet' in window){
            return (s instanceof window.CSSStyleSheet) ? true : false;
        } else if('styleSheet' in window){
            return (s instanceof window.styleSheet) ? true : false; }}
    return false; };
