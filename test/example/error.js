module.exports = (controller, error, statusCode) => {
  // from Job exception.
  if (!controller) {
    console.error('job exception');
    return;
  }

  if (statusCode === 404) {
    if (controller.params('redirect') === 'yes') {
      return controller.redirect('/');
    }

    return controller.finisher.notfound('404 NOTFOUND');
  }

  if (error && error.originalError &&
      error.originalError.name === 'CustomError' &&
      error.originalError.message) {
    return controller.finisher.error(error.originalError.message);
  }

  controller.finisher.error('[' + statusCode + '] An error has occurred.');
};
