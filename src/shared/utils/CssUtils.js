/*
 Utilities to be used working with CSS Modules
 */

 import _ from 'lodash';

 export default {
     /**
      * Applies hashed CSS Module styles
      * to the provided template
      * using the Lodash template engine
      *
      * @param {String} template
      * @param {Object} hashedStyles
      * @returns {String}
      */
     hashTemplate: (template, hashedStyles) => {
         return _.template(template)(hashedStyles);
     }
 };