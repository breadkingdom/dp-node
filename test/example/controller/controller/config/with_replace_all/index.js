module.exports = {
  _: '/:val1',
  get: (controller) => {
    return '/globally_replaced_to_root_all/' + controller.params('val1', true)
  }
}
