"use strict";
var __imns = function(){ return window; }
describe("isLoaded Test Suite", function(){
    beforeEach(function(done){
        var requireArr = [
        ];
        for(var i=0, imax=requireArr.length; i<imax; i+=1){
            var a = document.createElement('script');
            a.src = requireArr[i];
            a.type = 'text/javascript';
            document.body.appendChild(a); 
        }


        setTimeout(function(){ done(); }, 1000);
    });

        var adr = __imns();
        var obj = {}, arr = [];
        var elem = document.createElement('style');
        document.head.appendChild(elem);

    it("isStyleSheet is a function", function(){ expect(typeof adr.isStyleSheet === 'function').toBe(true); });
    it("isStyleSheet: {object} = false", function(){ expect(adr.isStyleSheet(obj)).toBe(false); });
    it("isStyleSheet: {CSSStyleSheet} = true", function(){ expect(adr.isStyleSheet(elem.sheet)).toBe(true); });
});
