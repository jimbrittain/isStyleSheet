# Javascript isStyleSheet function
isStyleSheet attempts to determine if a supplied is a CSS Style Sheet.
## Usage
```
    var c = document.createElement('style'),
        o = {};
    document.head.appendChild(c);
    var s = c.sheet;
    isStyleSheet(o) === false;
    isStyleSheet(s) === true;
```

## Methods

1. `s instanceof window.CSSStyleSheet`
2. `s.sheet instanceof window.styleSheet`;

## Issues

* Over-reliance on instanceof without comparison, maybe try adding a comparative version
* Needs proper testing log, e.g. browser checks
* NS version uses IMNS, not currently using ES6 namespacing
