The Private Message module for DrupalGap.

## Installation and Setup

1. Install the privatemsg_services sandbox module: https://www.drupal.org/sandbox/deminy/2413647
2. Go to `admin/structure/services/list/drupalgap/resources`
3. Enable the `Resources` for the private message services
4. Flush all of Drupal's caches.

## Viewing private messages

This module has a few built in pages to view a user's private messages list, and to view a particular thread and add messages to it.

To view a user's list of private messages, just navigate to `user-messages/123`. This will display a list of threads for user 123, which can then be clicked on to view and message a particular thread 456 (e.g. `messages/view/456`).

## Send a new private message
```
privatemsg_create('Message subject', 'Message body', ["a_drupal_user_name"], null, {
  success: function(result) {
    console.log('Message sent: ' + result.pmtid);
  }
});
```

## Send a private message to an existing thread 456
```
privatemsg_create(null, 'Message body', ["a_drupal_user_name"], 456, {
  success: function(result) {
    if (result[0]) {
      console.log('Message sent!');
    }
  }
});
```

## Retrieve a private message
```
privatemsg_retrieve(456, {
  success: function(thread) {
    console.log(thread);
  }
});
```

## Retrieve a list of private messages for the current user
```
privatemsg_index({
  success: function(messages) {
    console.log(messages);
  }
});
```
