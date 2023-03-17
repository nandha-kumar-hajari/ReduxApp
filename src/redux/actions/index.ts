import {PHONE, USERNAME, EMAIL_ID, ADDRESS, DESIGNATION} from './types';

export const saveName = (value: string) => ({
  type: USERNAME,
  payload: value,
});

export const savePhone = (value: string) => ({
  type: PHONE,
  payload: value,
});

export const saveEmail = (value: string) => ({
  type: EMAIL_ID,
  payload: value,
});

export const saveAddress = (value: string) => ({
  type: ADDRESS,
  payload: value,
});

export const saveDesignation = (value: string) => ({
  type: DESIGNATION,
  payload: value,
});
