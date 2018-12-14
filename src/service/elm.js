import { Fetch } from '../utils';
import { API } from '../constants';

export default class Elm {
    static cityGuess(params) {
        return Fetch.get(API.CITYGUESS,params);
    }
    static hotCity(params) {
        return Fetch.get(API.HOTCITY,params);
    }
    static groupCity(params) {
        return Fetch.get(API.GROUPCITY,params);
    }
}