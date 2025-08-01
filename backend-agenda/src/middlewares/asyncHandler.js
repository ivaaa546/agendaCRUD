// Captura errores de funciones async automáticamente
function asyncHandler(fn) {
    return function (req, res, next) {
      Promise.resolve(fn(req, res, next)).catch(next);
    };
  }
  
export default asyncHandler;
