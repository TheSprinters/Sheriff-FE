---
layout: none
title: Logout
permalink: /logout
search_exclude: true
---
<html>
<head><title>Logging out...</title></head>
<body>
<p>Logging out...</p>
<script type="module">
    import { pythonURI, fetchOptions } from '{{site.baseurl}}/assets/js/api/config.js';
    try {
        await fetch(pythonURI + '/api/sheriff/authenticate', {
            ...fetchOptions,
            method: 'DELETE'
        });
    } catch (e) {
        console.error('Logout error:', e);
    }
    window.location.href = "{{site.baseurl}}/";
</script>
</body>
</html>
