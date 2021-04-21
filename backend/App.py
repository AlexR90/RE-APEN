from flask import Flask, request, jsonify 
from flask_pymongo import PyMongo, ObjectId
from flask_cors import CORS

app = Flask(__name__)
app.config['MONGO_URI']='mongodb+srv://Alex_90:Reapen-1@cluster0.jnelr.mongodb.net/Reapen_comentarios?retryWrites=true&w=majority'


mongo = PyMongo(app)
db = mongo.db.comentarios

CORS(app)

@app.route('/contacto', methods=['POST'])
def create_contacto():

    nombre = request.json['nombre']
    telefono = request.json['telefono']
    correo = request.json['correo']
    mensaje = request.json['mensaje']
    
    if nombre and telefono and correo and mensaje:
        db.insert(
            { 'nombre':nombre,
              'telefono':telefono,
              'correo':correo,
              'mensaje':mensaje} 
        )
    else:
        {"mensaje":"por favor completa el formulario"}    

    return{"mensaje":"insertado"}

@app.route('/contacto', methods=['GET'])
def listar_contacto():
    
    contactos = []
    for registro in db.find():
        contactos.append({
            '_id':str(ObjectId(registro['_id'])),
            'nombre':registro['nombre'],
            'telefon':registro['telefono'],
            'correo':registro['correo'],
            'mensaje':registro['mensaje']
        })

    return jsonify(contactos)


if __name__ == '__main__':
    app.run(debug=True)
