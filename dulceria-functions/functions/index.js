const functions = require('firebase-functions');

const admin = require('firebase-admin')
admin.initializeApp(functions.config().firebase)

const toUpperCase = (string) => string.toUpperCase()

exports.addMessage = functions.https.onRequest((request, response) => {
    const original = request.query.text
    const secretText = toUpperCase(text)

    admin
        .database()
        .ref('/messages')
        .push({original: original})
        .then(() =>
        response.json({
            message: 'great!!',
            original
        }))
        .catch(() => {
            response.json({
                message: 'not great :('
            })
        })
})

exports.makeUppercase = functions.database.ref('/messages/{pushId}/original')
    .onCreate((snapshot, context) => {
      // Grab the current value of what was written to the Realtime Database.
      const original = snapshot.val();
      console.log('Uppercasing', context.params.pushId, original);
      const uppercase = original.toUpperCase();
      // You must return a Promise when performing asynchronous tasks inside a Functions such as
      // writing to the Firebase Realtime Database.
      // Setting an "uppercase" sibling in the Realtime Database returns a Promise.
      return snapshot.ref.parent.child('uppercase').set(uppercase);
    });


exports.addProduct = functions.https.onRequest((request, response) => {
    const id = request.query.id
    const name = request.query.name
    const price = request.query.price
    const ammount = request.query.ammount

    admin.database()
    .ref('/productos')
    .push({id, name, price, ammount})
    .then(() =>
    response.json({
        message: 'Producto agregado',
        id,
        name,
        price,
        ammount
    }))
    .catch(() => {
        response.json({
            message: 'No se ha podido agregar el producto. Intente de nuevo'
        })
    })
})

exports.obtainProducts = functions.https.onRequest((request, response) => {
    db = admin.database()
    console.log('entro')
    ///var ref = db.ref("server/saving-data/fireblog/posts");
    var ref = db.ref('/productos')

    // Attach an asynchronous callback to read the data at our posts reference
    ref.on("value").then((snapshot) => {
        console.log(snapshot.val())
        response.json({
            response: snapshot.val()
        })
    }).catch(() => {
        console.log('No funciono')
        response.json({
            message: 'No se ha podido agregar el producto. Intente de nuevo'
        })
    })
    /*, function(snapshot) {
        console.log(snapshot.val())

    }, function (errorObject) {
        console.log("The read failed: " + errorObject.code)

    })
    */
})


function gotData(data) {
    var result = data.val()
    response.json({result})
}

function errData(err) {
    console.log('Error!')
    console.log(err)
}

