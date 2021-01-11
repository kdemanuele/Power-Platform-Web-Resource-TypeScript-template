import { expect } from "chai";
import { describe, it } from "mocha";
import * as Clounce from "../src/index";

describe('This is a sample', () => {
    it('Sample', () => {
        expect(() => { new Clounce.MyLibrary.Template.SampleClass() }).to.not.throw();
    })
})