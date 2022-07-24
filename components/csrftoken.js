import React from 'react';
import getCookie from './cookies';

// Secure random token that prevents CSRF (Cross-site request forgery) attacks
// Only necessary for browsers, not apps
// https://www.stackhawk.com/blog/django-csrf-protection-guide/

const csrftoken = getCookie('csrftoken');

const CSRFTOKEN_HTML = () => {
    return (
        <input name="csrfmiddlewaretoken" value={csrftoken} type="hidden" />
    );
};

const CSRFTOKEN_STR = () => {
    return csrftoken;
}

export { CSRFTOKEN_HTML, CSRFTOKEN_STR };