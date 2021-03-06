module.exports = {
  _get: '/replaced-alias-path-with-suffix',
  get_: '/:id(\\d+)?',
  get: (controller) => {
    var id = controller.params('id', true)
    controller.finish(String(id || 'EMPTY'))
  },
  _post: '/replaced-alias-path-with-suffix',
  post_: '/:id(\\d+)?',
  post: (controller) => {
    var id = controller.params('id', true)
    controller.finish(String(id || 'EMPTY'))
  },
  _delete: '/replaced-alias-path-with-suffix',
  delete_: '/:id(\\d+)?',
  delete: (controller) => {
    var id = controller.params('id', true)
    controller.finish(String(id || 'EMPTY'))
  },
  _put: '/replaced-alias-path-with-suffix',
  put_: '/:id(\\d+)?',
  put: (controller) => {
    var id = controller.params('id', true)
    controller.finish(String(id || 'EMPTY'))
  }
}
