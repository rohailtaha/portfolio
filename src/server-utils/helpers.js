export function serverErrorResponse(res, message) {
  return res
    .status(500)
    .json({ error: { message: message ?? 'A server error occured' } });
}
