import React from 'react';
import { validateBundleField, validateNameField } from '../containers/FormAddBundle';

describe('Regex Name testing', () => {
  it('Should return success', () => {
    expect(validateNameField("appli cation")).toEqual(true);
  });
  it('Should return success', () => {
    expect(validateNameField("q_-3")).toEqual(true);
  });
  it('Size less than 4', () => {
    expect(validateNameField("app")).toEqual(false);
  });
  it('With special caracter', () => {
    expect(validateNameField("ad@b")).toEqual(false);
  });
  it('With only one letter', () => {
    expect(validateNameField("a  ")).toEqual(false);
  });
  it('With only one number', () => {
    expect(validateNameField("3  ")).toEqual(false);
  });
});

describe('Regex Bundle testing', () => {
  it('Should success', () => {
    expect(validateBundleField("com.example.appli_cation")).toEqual(true);
  });
  it('with no dot', () => {
    expect(validateBundleField("application")).toEqual(false);
  });
  it('with nothing after a dot', () => {
    expect(validateBundleField("application.")).toEqual(false);
  });
  it('with a dot after a dot', () => {
    expect(validateBundleField("application..")).toEqual(false);
  });
  it('with special character', () => {
    expect(validateBundleField("applicat@ion..")).toEqual(false);
  });
  it('with number after a dot', () => {
    expect(validateBundleField("application.3example")).toEqual(false);
  });
});

