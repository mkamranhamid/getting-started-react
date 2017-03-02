import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/dom/ajax';
import firebase from 'firebase';

const config = {
    
  };

firebase.initializeApp(config);

export class fbService {

    static getAllUsers() {
        var starCountRef = firebase.database().ref('posts/');
        return firebase.database().ref('/posts/').once('value').then(function(snapshot) {
            return snapshot.val();
        });
    }

    static get(url, headers = null) {
        return Observable.ajax({
            url,
            method: 'GET',
            async: true,
            crossDomain: true,
            responseType: 'json',
            createXHR: () => new XMLHttpRequest()
        });
    } // get

    static post(url, body, headers = { 'Content-Type': 'application/json' }) {
        return Observable.ajax({
            url,
            method: 'POST',
            body,
            headers,
            async: true,
            crossDomain: true,
            responseType: 'json',
            createXHR: () => new XMLHttpRequest()
        });
    } // post

}

