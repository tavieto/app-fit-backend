const modelMapper = (doc, ret) => {
  ret.id = ret._id
  doc.id = ret._id
  delete ret._id,
  delete ret.__v

  return ret
}




// (dataSchema) => {
//   dataSchema.set('toJSON', {
//     transform: (doc,ret) => {
//         ret.id = ret._id
//         doc.id = ret._id
//         delete ret._id,
//         delete ret.__v

//         return ret
//     }
// })
// }

module.exports = { toJSON: modelMapper }

