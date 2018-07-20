Writing Styles
==============

Some notes on coding conventions for my own clarity.

Comments and spacing for style.scss:
------------------------------------

```
/* --| 1ST HEADING |----------------------------------------------------------------------------- */
/*
    Comment block (2 blank lines follow)
*/


$vars ...
@import ... // 4 blank lines follow




/* ---------------------------------------------------------------------------------------------- */
/* --| 2ND HEADING |----------------------------------------------------------------------------- */


// More declarations followed by 4 blank lines




/* --| Sub Heading |----------------------------------------------------------------------------- */


// More declarations followed by 4 blank lines




/* ---------------------------------------------------------------------------------------------- */

```

Comments and spacing for _pattern.scss:
---------------------------------------

```
/* --| PATTERN TITLE |--------------------------------------------------------------------------- */
/*
    Comment block (2 blank lines follow)
*/


$pattern-namespace: x- !default;
$theme-namespace: t- !default;

$pattern--base-color: #eee !default;

$pattern-spacing-unit: 2rem !default;

$other-vars ... !default; // 4 blank lines follow



.#{$pattern-namespace}pattern {
    &#{&} {
        ...
    }
    
        .#{$pattern-namespace}pattern__child {
            ...
        }
    
}


```