The Private Message module for DrupalGap.

## Installation and Setup

1. Install the privatemsg_services sandbox module: https://www.drupal.org/sandbox/deminy/2413647
2. Go to `admin/structure/services/list/drupalgap/resources`
3. Enable the `Resources` for the private message services
4. Flush all of Drupal's caches.

## Send a new private message
```
privatemsg_create('Message subject', 'Message body', ["a_drupal_user_name"], null, {
  success: function(result) {
    console.log('Message sent: ' + result.pmtid);
  }
});
```

## Send a private message to an existing thread 123
```
privatemsg_create('Message subject', 'Message body', ["a_drupal_user_name"], 123, {
  success: function(result) {
    console.log('Message sent: ' + result.pmtid);
  }
});
```
