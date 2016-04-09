/**
 * This is just an example file to demonstrate the workflow.
 *
 * @author Chris Han <support@aureola.codes>
 * @copyright 2016, Aureola
 */
'use strict';

export default class Example {

  constructor() {
    this._param1 = 'foo';
    this._param2 = 'bar';
  }

  get param1() {
    return this._param1;
  }

  get param2() {
    return this._param2;
  }

}
