---
---

// ^^ Do not remove the above front matter, it is required for Jekyll processing

export const baseurl = "{{ site.baseurl }}";

export var pythonURI;
if (location.hostname === "localhost" || location.hostname === "127.0.0.1") {
    pythonURI = "http://localhost:8325";
} else {
    pythonURI = "https://sheriff.opencodingsociety.com";
}

export const fetchOptions = {
    method: 'GET',
    mode: 'cors',
    cache: 'default',
    credentials: 'include',
    headers: {
        'Content-Type': 'application/json',
        'X-Origin': 'client'
    },
};
