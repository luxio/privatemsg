/**
 * Sends a private message
 * @param {String} subject The subject of the message.
 * @param {String} body The body of the message.
 * @param {Array} recipients An array of user names.
 * @param {Number} thread_id
 * @param options
 */
function privatemsg_create(subject, body, recipients, thread_id, options) {
  try {
    var data = {
      subject: subject,
      body: body,
      recipients: recipients
    };
    if (thread_id) { data.thread_id = thread_id; }
    options.method = 'POST';
    options.path = 'privatemsg.json';
    options.service = 'privatemsg';
    options.resource = 'create';
    options.data = JSON.stringify(data);
    Drupal.services.call(options);
  }
  catch (error) { console.log('privatemsg_create - ' + error); }
}
