'use strict';

const baseUrl = 'https://jsonplaceholder.typicode.com/';

const request = {
    get: (url) => {
        return fetch(`${baseUrl}${url}`)
            .then((resp) => {
                return resp.json();
            }).then((resp) => {
                return resp
            }).catch((err) => {
                console.log('err :: ', err);
                return err;
            });
    },
    post: (url, data) => {
        return fetch(`${baseUrl}${url}`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then((resp) => {
            return resp.json();
        }).then((resp) => {
            return resp
        }).catch((err) => {
            console.log('err :: ', err);
            return err;
        });
    },
    put: (url, data) => {
        return fetch(`${baseUrl}${url}`, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then((resp) => {
            return resp.json();
        }).then((resp) => {
            return resp
        }).catch((err) => {
            console.log('err :: ', err);
            return err;
        });
    },
    delete: (url) => {
        return fetch(`${baseUrl}${url}`, {
            method: 'delete'
        }).then((resp) => {
            return resp.json();
        }).then((resp) => {
            return resp
        }).catch((err) => {
            console.log('err :: ', err);
            return err;
        });
    }
}

export { request };