// import propertiesRouter from '@routes/properties'
// import rolesRouter from '@routes/roles'
// import roomsRouter from '@routes/rooms'
// import roomTypesRouter from '@routes/roomTypes'
// import imagesRouter from '@routes/images'
// import roomImagesRouter from '@routes/roomImages'
// import signUpRouter from '@routes/signUp'
import airportRouter from '@routes/airports'



export default (app) => {
  app.use('/airports', airportRouter)
  // app.use('/properties', propertiesRouter)
  // app.use('/roles', rolesRouter)
  // app.use('/rooms', roomsRouter)
  // app.use('/roomTypes', roomTypesRouter)
  // app.use('/images', imagesRouter)
  // app.use('/roomImages', roomImagesRouter)
  // app.use('/signUp', signUpRouter)
}