import { baseurl, pythonURI, fetchOptions } from './config.js';

console.log("login.js loaded");

document.addEventListener('DOMContentLoaded', function () {
    console.log("Base URL:", baseurl);
    waitForElement('#loginArea', 20, 100).then(loginArea => {
        getSheriffSession()
            .then(data => {
                console.log("Sheriff session data:", data);
                window.user = data;
                if (data) {
                    // User is logged in via sheriff portal
                    loginArea.innerHTML = `
                        <div class="dropdown">
                            <button class="dropbtn page-link" style="border:none; background:none; cursor:pointer; color:inherit; font-size:inherit; font-family:inherit; padding:0;">${data.name}</button>
                            <div class="dropdown-content hidden">
                                <div style="padding: 8px 16px; color: #888; font-size: 0.95em;">
                                    ${data.rank} &mdash; ${data.station}
                                </div>
                                <hr style="margin: 4px 0;">
                                <a href="${baseurl}/sheriff/">DSA Portal</a>
                                <a href="#" id="sheriffLogoutLink">Logout</a>
                            </div>
                        </div>
                    `;

                    // Dropdown toggle
                    const dropdownButton = loginArea.querySelector('.dropbtn');
                    const dropdownContent = loginArea.querySelector('.dropdown-content');

                    if (dropdownButton && dropdownContent) {
                        dropdownButton.addEventListener('click', (event) => {
                            event.preventDefault();
                            dropdownContent.classList.toggle('hidden');
                        });

                        if (!window._loginDropdownListener) {
                            document.addEventListener('click', (event) => {
                                if (!dropdownButton.contains(event.target) && !dropdownContent.contains(event.target)) {
                                    dropdownContent.classList.add('hidden');
                                }
                            });
                            window._loginDropdownListener = true;
                        }
                    }

                    // Logout link handler
                    const logoutLink = document.getElementById('sheriffLogoutLink');
                    if (logoutLink) {
                        logoutLink.addEventListener('click', async (e) => {
                            e.preventDefault();
                            try {
                                await fetch(pythonURI + '/api/sheriff/authenticate', {
                                    ...fetchOptions,
                                    method: 'DELETE'
                                });
                            } catch (err) {
                                console.error('Sheriff logout error:', err);
                            }
                            window.location.href = baseurl + '/sheriff/';
                        });
                    }
                } else {
                    // Not logged in — link to sheriff portal
                    loginArea.innerHTML = `<a href="${baseurl}/sheriff/">Login</a>`;
                }
                loginArea.style.opacity = "1";
            })
            .catch(err => {
                console.error("Error fetching sheriff session:", err);
                if (loginArea) {
                    loginArea.innerHTML = `<a href="${baseurl}/sheriff/">Login</a>`;
                }
            });
    });
});

function waitForElement(selector, maxAttempts = 20, interval = 100) {
    return new Promise((resolve, reject) => {
        let attempts = 0;
        function check() {
            const el = document.querySelector(selector);
            if (el) {
                resolve(el);
            } else if (++attempts < maxAttempts) {
                setTimeout(check, interval);
            } else {
                reject(new Error('Element not found: ' + selector));
            }
        }
        check();
    });
}

function getSheriffSession() {
    const URL = pythonURI + '/api/sheriff/id';
    return fetch(URL, fetchOptions)
        .then(response => {
            if (!response.ok) {
                return null;
            }
            return response.json();
        })
        .catch(err => {
            console.error("Sheriff session fetch error:", err);
            return null;
        });
}
